function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/VPLocalSearchBox.V3TSUetG.js","assets/chunks/framework.C5rzuSi5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as b,o as c,c as f,r as d,n as L,a as q,t as E,b as k,w as p,e as g,T as ht,_ as I,u as Ts,i as ws,f as Es,g as pt,h as A,j as me,k as S,l as ce,m as h,p as u,q as V,s as R,v as ae,x as et,y as le,z as Le,A as mt,B as dn,C as As,D as Ps,E as ue,F as N,G as F,H as fn,I as Ne,J as y,K as he,L as hn,M as Me,N as $e,O as De,P as Cs,Q as pn,R as Ls,S as tt,U as Ns,V as mn,W as Ms,X as Ds,Y as Vs,Z as vn,$ as gn,a0 as Rs,a1 as Os,a2 as Bs,a3 as Fs}from"./framework.C5rzuSi5.js";const Hs=b({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(c(),f("span",{class:L(["VPBadge",e.type])},[d(e.$slots,"default",{},()=>[q(E(e.text),1)])],2))}}),Us={key:0,class:"VPBackdrop"},js=b({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(c(),k(ht,{name:"fade"},{default:p(()=>[e.show?(c(),f("div",Us)):g("",!0)]),_:1}))}}),zs=I(js,[["__scopeId","data-v-c79a1216"]]),w=Ts;function qs(t,e){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(t,e):(t(),(s=!0)&&setTimeout(()=>s=!1,e))}}function nt(t){return/^\//.test(t)?t:`/${t}`}function vt(t){const{pathname:e,search:n,hash:s,protocol:a}=new URL(t,"http://a.com");if(ws(t)||t.startsWith("#")||!a.startsWith("http")||!Es(e))return t;const{site:o}=w(),r=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${n}${s}`);return pt(r)}const gt=A(me?location.hash:"");me&&window.addEventListener("hashchange",()=>{gt.value=location.hash});function _e({removeCurrent:t=!0,correspondingLink:e=!1}={}){const{site:n,localeIndex:s,page:a,theme:o}=w(),r=S(()=>{var l,m;return{label:(l=n.value.locales[s.value])==null?void 0:l.label,link:((m=n.value.locales[s.value])==null?void 0:m.link)||(s.value==="root"?"/":`/${s.value}/`)}});return{localeLinks:S(()=>Object.entries(n.value.locales).flatMap(([l,m])=>t&&r.value.label===m.label?[]:{text:m.label,link:Gs(m.link||(l==="root"?"/":`/${l}/`),o.value.i18nRouting!==!1&&e,a.value.relativePath.slice(r.value.link.length-1),!n.value.cleanUrls)+gt.value})),currentLang:r}}function Gs(t,e,n,s){return e?t.replace(/\/$/,"")+nt(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):t}const Ws=t=>(V("data-v-f87ff6e4"),t=t(),R(),t),xs={class:"NotFound"},Ks={class:"code"},Xs={class:"title"},Ys=Ws(()=>h("div",{class:"divider"},null,-1)),Js={class:"quote"},Qs={class:"action"},Zs=["href","aria-label"],ea=b({__name:"NotFound",setup(t){const{site:e,theme:n}=w(),{localeLinks:s}=_e({removeCurrent:!1}),a=A("/");return ce(()=>{var r;const o=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");s.value.length&&(a.value=((r=s.value.find(({link:i})=>i.startsWith(o)))==null?void 0:r.link)||s.value[0].link)}),(o,r)=>{var i,l,m,_,v;return c(),f("div",xs,[h("p",Ks,E(((i=u(n).notFound)==null?void 0:i.code)??"404"),1),h("h1",Xs,E(((l=u(n).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),Ys,h("blockquote",Js,E(((m=u(n).notFound)==null?void 0:m.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),h("div",Qs,[h("a",{class:"link",href:u(pt)(a.value),"aria-label":((_=u(n).notFound)==null?void 0:_.linkLabel)??"go to home"},E(((v=u(n).notFound)==null?void 0:v.linkText)??"Take me home"),9,Zs)])])}}}),ta=I(ea,[["__scopeId","data-v-f87ff6e4"]]);function _n(t,e){if(Array.isArray(t))return Se(t);if(t==null)return[];e=nt(e);const n=Object.keys(t).sort((a,o)=>o.split("/").length-a.split("/").length).find(a=>e.startsWith(nt(a))),s=n?t[n]:[];return Array.isArray(s)?Se(s):Se(s.items,s.base)}function na(t){const e=[];let n=0;for(const s in t){const a=t[s];if(a.items){n=e.push(a);continue}e[n]||e.push({items:[]}),e[n].items.push(a)}return e}function sa(t){const e=[];function n(s){for(const a of s)a.text&&a.link&&e.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&n(a.items)}return n(t),e}function st(t,e){return Array.isArray(e)?e.some(n=>st(t,n)):ae(t,e.link)?!0:e.items?st(t,e.items):!1}function Se(t,e){return[...t].map(n=>{const s={...n},a=s.base||e;return a&&s.link&&(s.link=a+s.link),s.items&&(s.items=Se(s.items,a)),s})}function X(){const{frontmatter:t,page:e,theme:n}=w(),s=et("(min-width: 960px)"),a=A(!1),o=S(()=>{const D=n.value.sidebar,P=e.value.relativePath;return D?_n(D,P):[]}),r=A(o.value);le(o,(D,P)=>{JSON.stringify(D)!==JSON.stringify(P)&&(r.value=o.value)});const i=S(()=>t.value.sidebar!==!1&&r.value.length>0&&t.value.layout!=="home"),l=S(()=>m?t.value.aside==null?n.value.aside==="left":t.value.aside==="left":!1),m=S(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:n.value.aside!==!1),_=S(()=>i.value&&s.value),v=S(()=>i.value?na(r.value):[]);function $(){a.value=!0}function T(){a.value=!1}function M(){a.value?T():$()}return{isOpen:a,sidebar:r,sidebarGroups:v,hasSidebar:i,hasAside:m,leftAside:l,isSidebarEnabled:_,open:$,close:T,toggle:M}}function aa(t,e){let n;Le(()=>{n=t.value?document.activeElement:void 0}),ce(()=>{window.addEventListener("keyup",s)}),mt(()=>{window.removeEventListener("keyup",s)});function s(a){a.key==="Escape"&&t.value&&(e(),n==null||n.focus())}}function oa(t){const{page:e}=w(),n=A(!1),s=S(()=>t.value.collapsed!=null),a=S(()=>!!t.value.link),o=A(!1),r=()=>{o.value=ae(e.value.relativePath,t.value.link)};le([e,t,gt],r),ce(r);const i=S(()=>o.value?!0:t.value.items?st(e.value.relativePath,t.value.items):!1),l=S(()=>!!(t.value.items&&t.value.items.length));Le(()=>{n.value=!!(s.value&&t.value.collapsed)}),dn(()=>{(o.value||i.value)&&(n.value=!1)});function m(){s.value&&(n.value=!n.value)}return{collapsed:n,collapsible:s,isLink:a,isActiveLink:o,hasActiveLink:i,hasChildren:l,toggle:m}}function ra(){const{hasSidebar:t}=X(),e=et("(min-width: 960px)"),n=et("(min-width: 1280px)");return{isAsideEnabled:S(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const at=[];function bn(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function _t(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const s=Number(n.tagName[1]);return{element:n,title:ia(n),link:"#"+n.id,level:s}});return ca(e,t)}function ia(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor")||n.classList.contains("ignore-header"))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function ca(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[s,a]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;t=t.filter(r=>r.level>=s&&r.level<=a),at.length=0;for(const{element:r,link:i}of t)at.push({element:r,link:i});const o=[];e:for(let r=0;r<t.length;r++){const i=t[r];if(r===0)o.push(i);else{for(let l=r-1;l>=0;l--){const m=t[l];if(m.level<i.level){(m.children||(m.children=[])).push(i);continue e}}o.push(i)}}return o}function la(t,e){const{isAsideEnabled:n}=ra(),s=qs(o,100);let a=null;ce(()=>{requestAnimationFrame(o),window.addEventListener("scroll",s)}),As(()=>{r(location.hash)}),mt(()=>{window.removeEventListener("scroll",s)});function o(){if(!n.value)return;const i=window.scrollY,l=window.innerHeight,m=document.body.offsetHeight,_=Math.abs(i+l-m)<1,v=at.map(({element:T,link:M})=>({link:M,top:ua(T)})).filter(({top:T})=>!Number.isNaN(T)).sort((T,M)=>T.top-M.top);if(!v.length){r(null);return}if(i<1){r(null);return}if(_){r(v[v.length-1].link);return}let $=null;for(const{link:T,top:M}of v){if(M>i+Ps()+4)break;$=T}r($)}function r(i){a&&a.classList.remove("active"),i==null?a=null:a=t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`);const l=a;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function ua(t){let e=0;for(;t!==document.body;){if(t===null)return NaN;e+=t.offsetTop,t=t.offsetParent}return e}const da=["href","title"],fa=b({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:n}){const s=n.href.split("#")[1],a=document.getElementById(decodeURIComponent(s));a==null||a.focus({preventScroll:!0})}return(n,s)=>{const a=ue("VPDocOutlineItem",!0);return c(),f("ul",{class:L(["VPDocOutlineItem",n.root?"root":"nested"])},[(c(!0),f(N,null,F(n.headers,({children:o,link:r,title:i})=>(c(),f("li",null,[h("a",{class:"outline-link",href:r,onClick:e,title:i},E(i),9,da),o!=null&&o.length?(c(),k(a,{key:0,headers:o},null,8,["headers"])):g("",!0)]))),256))],2)}}}),yn=I(fa,[["__scopeId","data-v-b933a997"]]),ha=t=>(V("data-v-935f8a84"),t=t(),R(),t),pa={class:"content"},ma={class:"outline-title",role:"heading","aria-level":"2"},va={"aria-labelledby":"doc-outline-aria-label"},ga=ha(()=>h("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),_a=b({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:n}=w(),s=fn([]);Ne(()=>{s.value=_t(e.value.outline??n.value.outline)});const a=A(),o=A();return la(a,o),(r,i)=>(c(),f("div",{class:L(["VPDocAsideOutline",{"has-outline":s.value.length>0}]),ref_key:"container",ref:a,role:"navigation"},[h("div",pa,[h("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),h("div",ma,E(u(bn)(u(n))),1),h("nav",va,[ga,y(yn,{headers:s.value,root:!0},null,8,["headers"])])])],2))}}),ba=I(_a,[["__scopeId","data-v-935f8a84"]]),ya={class:"VPDocAsideCarbonAds"},Ia=b({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,s)=>(c(),f("div",ya,[y(u(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),ka=t=>(V("data-v-3f215769"),t=t(),R(),t),$a={class:"VPDocAside"},Sa=ka(()=>h("div",{class:"spacer"},null,-1)),Ta=b({__name:"VPDocAside",setup(t){const{theme:e}=w();return(n,s)=>(c(),f("div",$a,[d(n.$slots,"aside-top",{},void 0,!0),d(n.$slots,"aside-outline-before",{},void 0,!0),y(ba),d(n.$slots,"aside-outline-after",{},void 0,!0),Sa,d(n.$slots,"aside-ads-before",{},void 0,!0),u(e).carbonAds?(c(),k(Ia,{key:0,"carbon-ads":u(e).carbonAds},null,8,["carbon-ads"])):g("",!0),d(n.$slots,"aside-ads-after",{},void 0,!0),d(n.$slots,"aside-bottom",{},void 0,!0)]))}}),wa=I(Ta,[["__scopeId","data-v-3f215769"]]);function Ea(){const{theme:t,page:e}=w();return S(()=>{const{text:n="Edit this page",pattern:s=""}=t.value.editLink||{};let a;return typeof s=="function"?a=s(e.value):a=s.replace(/:path/g,e.value.filePath),{url:a,text:n}})}function Aa(){const{page:t,theme:e,frontmatter:n}=w();return S(()=>{var l,m,_,v,$,T,M,D;const s=_n(e.value.sidebar,t.value.relativePath),a=sa(s),o=a.findIndex(P=>ae(t.value.relativePath,P.link)),r=((l=e.value.docFooter)==null?void 0:l.prev)===!1&&!n.value.prev||n.value.prev===!1,i=((m=e.value.docFooter)==null?void 0:m.next)===!1&&!n.value.next||n.value.next===!1;return{prev:r?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((_=a[o-1])==null?void 0:_.docFooterText)??((v=a[o-1])==null?void 0:v.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??(($=a[o-1])==null?void 0:$.link)},next:i?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((T=a[o+1])==null?void 0:T.docFooterText)??((M=a[o+1])==null?void 0:M.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((D=a[o+1])==null?void 0:D.link)}}})}const G=b({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=S(()=>e.tag??(e.href?"a":"span")),s=S(()=>e.href&&hn.test(e.href));return(a,o)=>(c(),k(he(n.value),{class:L(["VPLink",{link:a.href,"vp-external-link-icon":s.value,"no-icon":a.noIcon}]),href:a.href?u(vt)(a.href):void 0,target:a.target??(s.value?"_blank":void 0),rel:a.rel??(s.value?"noreferrer":void 0)},{default:p(()=>[d(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Pa={class:"VPLastUpdated"},Ca=["datetime"],La=b({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,frontmatter:s,lang:a}=w(),o=S(()=>new Date(s.value.lastUpdated??n.value.lastUpdated)),r=S(()=>o.value.toISOString()),i=A("");return ce(()=>{Le(()=>{var l,m,_;i.value=new Intl.DateTimeFormat((m=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&m.forceLocale?a.value:void 0,((_=e.value.lastUpdated)==null?void 0:_.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(l,m)=>{var _;return c(),f("p",Pa,[q(E(((_=u(e).lastUpdated)==null?void 0:_.text)||u(e).lastUpdatedText||"Last updated")+": ",1),h("time",{datetime:r.value},E(i.value),9,Ca)])}}}),Na=I(La,[["__scopeId","data-v-7e05ebdb"]]),Ma=t=>(V("data-v-09de1c0f"),t=t(),R(),t),Da={key:0,class:"VPDocFooter"},Va={key:0,class:"edit-info"},Ra={key:0,class:"edit-link"},Oa=Ma(()=>h("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Ba={key:1,class:"last-updated"},Fa={key:1,class:"prev-next"},Ha={class:"pager"},Ua=["innerHTML"],ja=["innerHTML"],za={class:"pager"},qa=["innerHTML"],Ga=["innerHTML"],Wa=b({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:s}=w(),a=Ea(),o=Aa(),r=S(()=>e.value.editLink&&s.value.editLink!==!1),i=S(()=>n.value.lastUpdated&&s.value.lastUpdated!==!1),l=S(()=>r.value||i.value||o.value.prev||o.value.next);return(m,_)=>{var v,$,T,M;return l.value?(c(),f("footer",Da,[d(m.$slots,"doc-footer-before",{},void 0,!0),r.value||i.value?(c(),f("div",Va,[r.value?(c(),f("div",Ra,[y(G,{class:"edit-link-button",href:u(a).url,"no-icon":!0},{default:p(()=>[Oa,q(" "+E(u(a).text),1)]),_:1},8,["href"])])):g("",!0),i.value?(c(),f("div",Ba,[y(Na)])):g("",!0)])):g("",!0),(v=u(o).prev)!=null&&v.link||($=u(o).next)!=null&&$.link?(c(),f("nav",Fa,[h("div",Ha,[(T=u(o).prev)!=null&&T.link?(c(),k(G,{key:0,class:"pager-link prev",href:u(o).prev.link},{default:p(()=>{var D;return[h("span",{class:"desc",innerHTML:((D=u(e).docFooter)==null?void 0:D.prev)||"Previous page"},null,8,Ua),h("span",{class:"title",innerHTML:u(o).prev.text},null,8,ja)]}),_:1},8,["href"])):g("",!0)]),h("div",za,[(M=u(o).next)!=null&&M.link?(c(),k(G,{key:0,class:"pager-link next",href:u(o).next.link},{default:p(()=>{var D;return[h("span",{class:"desc",innerHTML:((D=u(e).docFooter)==null?void 0:D.next)||"Next page"},null,8,qa),h("span",{class:"title",innerHTML:u(o).next.text},null,8,Ga)]}),_:1},8,["href"])):g("",!0)])])):g("",!0)])):g("",!0)}}}),xa=I(Wa,[["__scopeId","data-v-09de1c0f"]]),Ka=t=>(V("data-v-39a288b8"),t=t(),R(),t),Xa={class:"container"},Ya=Ka(()=>h("div",{class:"aside-curtain"},null,-1)),Ja={class:"aside-container"},Qa={class:"aside-content"},Za={class:"content"},eo={class:"content-container"},to={class:"main"},no=b({__name:"VPDoc",setup(t){const{theme:e}=w(),n=Me(),{hasSidebar:s,hasAside:a,leftAside:o}=X(),r=S(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(i,l)=>{const m=ue("Content");return c(),f("div",{class:L(["VPDoc",{"has-sidebar":u(s),"has-aside":u(a)}])},[d(i.$slots,"doc-top",{},void 0,!0),h("div",Xa,[u(a)?(c(),f("div",{key:0,class:L(["aside",{"left-aside":u(o)}])},[Ya,h("div",Ja,[h("div",Qa,[y(wa,null,{"aside-top":p(()=>[d(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[d(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[d(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[d(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[d(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[d(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):g("",!0),h("div",Za,[h("div",eo,[d(i.$slots,"doc-before",{},void 0,!0),h("main",to,[y(m,{class:L(["vp-doc",[r.value,u(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),y(xa,null,{"doc-footer-before":p(()=>[d(i.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),d(i.$slots,"doc-after",{},void 0,!0)])])]),d(i.$slots,"doc-bottom",{},void 0,!0)],2)}}}),so=I(no,[["__scopeId","data-v-39a288b8"]]),ao=b({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const e=t,n=S(()=>e.href&&hn.test(e.href)),s=S(()=>e.tag||e.href?"a":"button");return(a,o)=>(c(),k(he(s.value),{class:L(["VPButton",[a.size,a.theme]]),href:a.href?u(vt)(a.href):void 0,target:e.target??(n.value?"_blank":void 0),rel:e.rel??(n.value?"noreferrer":void 0)},{default:p(()=>[q(E(a.text),1)]),_:1},8,["class","href","target","rel"]))}}),oo=I(ao,[["__scopeId","data-v-cad61b99"]]),ro=["src","alt"],io=b({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const s=ue("VPImage",!0);return e.image?(c(),f(N,{key:0},[typeof e.image=="string"||"src"in e.image?(c(),f("img",$e({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:u(pt)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,ro)):(c(),f(N,{key:1},[y(s,$e({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),y(s,$e({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):g("",!0)}}}),Te=I(io,[["__scopeId","data-v-8426fc1a"]]),co=t=>(V("data-v-303bb580"),t=t(),R(),t),lo={class:"container"},uo={class:"main"},fo={key:0,class:"name"},ho=["innerHTML"],po=["innerHTML"],mo=["innerHTML"],vo={key:0,class:"actions"},go={key:0,class:"image"},_o={class:"image-container"},bo=co(()=>h("div",{class:"image-bg"},null,-1)),yo=b({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=De("hero-image-slot-exists");return(n,s)=>(c(),f("div",{class:L(["VPHero",{"has-image":n.image||u(e)}])},[h("div",lo,[h("div",uo,[d(n.$slots,"home-hero-info-before",{},void 0,!0),d(n.$slots,"home-hero-info",{},()=>[n.name?(c(),f("h1",fo,[h("span",{innerHTML:n.name,class:"clip"},null,8,ho)])):g("",!0),n.text?(c(),f("p",{key:1,innerHTML:n.text,class:"text"},null,8,po)):g("",!0),n.tagline?(c(),f("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,mo)):g("",!0)],!0),d(n.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(c(),f("div",vo,[(c(!0),f(N,null,F(n.actions,a=>(c(),f("div",{key:a.link,class:"action"},[y(oo,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link,target:a.target,rel:a.rel},null,8,["theme","text","href","target","rel"])]))),128))])):g("",!0),d(n.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||u(e)?(c(),f("div",go,[h("div",_o,[bo,d(n.$slots,"home-hero-image",{},()=>[n.image?(c(),k(Te,{key:0,class:"image-src",image:n.image},null,8,["image"])):g("",!0)],!0)])])):g("",!0)])],2))}}),Io=I(yo,[["__scopeId","data-v-303bb580"]]),ko=b({__name:"VPHomeHero",setup(t){const{frontmatter:e}=w();return(n,s)=>u(e).hero?(c(),k(Io,{key:0,class:"VPHomeHero",name:u(e).hero.name,text:u(e).hero.text,tagline:u(e).hero.tagline,image:u(e).hero.image,actions:u(e).hero.actions},{"home-hero-info-before":p(()=>[d(n.$slots,"home-hero-info-before")]),"home-hero-info":p(()=>[d(n.$slots,"home-hero-info")]),"home-hero-info-after":p(()=>[d(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":p(()=>[d(n.$slots,"home-hero-actions-after")]),"home-hero-image":p(()=>[d(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):g("",!0)}}),$o=t=>(V("data-v-a3976bdc"),t=t(),R(),t),So={class:"box"},To={key:0,class:"icon"},wo=["innerHTML"],Eo=["innerHTML"],Ao=["innerHTML"],Po={key:4,class:"link-text"},Co={class:"link-text-value"},Lo=$o(()=>h("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),No=b({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(c(),k(G,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:p(()=>[h("article",So,[typeof e.icon=="object"&&e.icon.wrap?(c(),f("div",To,[y(Te,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(c(),k(Te,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(c(),f("div",{key:2,class:"icon",innerHTML:e.icon},null,8,wo)):g("",!0),h("h2",{class:"title",innerHTML:e.title},null,8,Eo),e.details?(c(),f("p",{key:3,class:"details",innerHTML:e.details},null,8,Ao)):g("",!0),e.linkText?(c(),f("div",Po,[h("p",Co,[q(E(e.linkText)+" ",1),Lo])])):g("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Mo=I(No,[["__scopeId","data-v-a3976bdc"]]),Do={key:0,class:"VPFeatures"},Vo={class:"container"},Ro={class:"items"},Oo=b({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=S(()=>{const s=e.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,a)=>s.features?(c(),f("div",Do,[h("div",Vo,[h("div",Ro,[(c(!0),f(N,null,F(s.features,o=>(c(),f("div",{key:o.title,class:L(["item",[n.value]])},[y(Mo,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):g("",!0)}}),Bo=I(Oo,[["__scopeId","data-v-a6181336"]]),Fo=b({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=w();return(n,s)=>u(e).features?(c(),k(Bo,{key:0,class:"VPHomeFeatures",features:u(e).features},null,8,["features"])):g("",!0)}}),Ho=b({__name:"VPHomeContent",setup(t){const{width:e}=Cs({includeScrollbar:!1});return(n,s)=>(c(),f("div",{class:"vp-doc container",style:pn(u(e)?{"--vp-offset":`calc(50% - ${u(e)/2}px)`}:{})},[d(n.$slots,"default",{},void 0,!0)],4))}}),Uo=I(Ho,[["__scopeId","data-v-82d4af08"]]),jo={class:"VPHome"},zo=b({__name:"VPHome",setup(t){const{frontmatter:e}=w();return(n,s)=>{const a=ue("Content");return c(),f("div",jo,[d(n.$slots,"home-hero-before",{},void 0,!0),y(ko,null,{"home-hero-info-before":p(()=>[d(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[d(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[d(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[d(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[d(n.$slots,"home-hero-image",{},void 0,!0)]),_:3}),d(n.$slots,"home-hero-after",{},void 0,!0),d(n.$slots,"home-features-before",{},void 0,!0),y(Fo),d(n.$slots,"home-features-after",{},void 0,!0),u(e).markdownStyles!==!1?(c(),k(Uo,{key:0},{default:p(()=>[y(a)]),_:1})):(c(),k(a,{key:1}))])}}}),qo=I(zo,[["__scopeId","data-v-686f80a6"]]),Go={},Wo={class:"VPPage"};function xo(t,e){const n=ue("Content");return c(),f("div",Wo,[d(t.$slots,"page-top"),y(n),d(t.$slots,"page-bottom")])}const Ko=I(Go,[["render",xo]]),Xo=b({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=w(),{hasSidebar:s}=X();return(a,o)=>(c(),f("div",{class:L(["VPContent",{"has-sidebar":u(s),"is-home":u(n).layout==="home"}]),id:"VPContent"},[u(e).isNotFound?d(a.$slots,"not-found",{key:0},()=>[y(ta)],!0):u(n).layout==="page"?(c(),k(Ko,{key:1},{"page-top":p(()=>[d(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[d(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(n).layout==="home"?(c(),k(qo,{key:2},{"home-hero-before":p(()=>[d(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[d(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[d(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[d(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[d(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[d(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[d(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[d(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[d(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(n).layout&&u(n).layout!=="doc"?(c(),k(he(u(n).layout),{key:3})):(c(),k(so,{key:4},{"doc-top":p(()=>[d(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[d(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":p(()=>[d(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[d(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[d(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":p(()=>[d(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":p(()=>[d(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[d(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[d(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[d(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":p(()=>[d(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Yo=I(Xo,[["__scopeId","data-v-1428d186"]]),Jo={class:"container"},Qo=["innerHTML"],Zo=["innerHTML"],er=b({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=w(),{hasSidebar:s}=X();return(a,o)=>u(e).footer&&u(n).footer!==!1?(c(),f("footer",{key:0,class:L(["VPFooter",{"has-sidebar":u(s)}])},[h("div",Jo,[u(e).footer.message?(c(),f("p",{key:0,class:"message",innerHTML:u(e).footer.message},null,8,Qo)):g("",!0),u(e).footer.copyright?(c(),f("p",{key:1,class:"copyright",innerHTML:u(e).footer.copyright},null,8,Zo)):g("",!0)])],2)):g("",!0)}}),tr=I(er,[["__scopeId","data-v-e315a0ad"]]);function In(){const{theme:t,frontmatter:e}=w(),n=fn([]),s=S(()=>n.value.length>0);return Ne(()=>{n.value=_t(e.value.outline??t.value.outline)}),{headers:n,hasLocalNav:s}}const nr=t=>(V("data-v-d2ecc192"),t=t(),R(),t),sr=nr(()=>h("span",{class:"vpi-chevron-right icon"},null,-1)),ar={class:"header"},or={class:"outline"},rr=b({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=w(),s=A(!1),a=A(0),o=A(),r=A();Ls(o,()=>{s.value=!1}),tt("Escape",()=>{s.value=!1}),Ne(()=>{s.value=!1});function i(){s.value=!s.value,a.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function l(_){_.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),Ns(()=>{s.value=!1}))}function m(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(_,v)=>(c(),f("div",{class:"VPLocalNavOutlineDropdown",style:pn({"--vp-vh":a.value+"px"}),ref_key:"main",ref:o},[_.headers.length>0?(c(),f("button",{key:0,onClick:i,class:L({open:s.value})},[q(E(u(bn)(u(n)))+" ",1),sr],2)):(c(),f("button",{key:1,onClick:m},E(u(n).returnToTopLabel||"Return to top"),1)),y(ht,{name:"flyout"},{default:p(()=>[s.value?(c(),f("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:l},[h("div",ar,[h("a",{class:"top-link",href:"#",onClick:m},E(u(n).returnToTopLabel||"Return to top"),1)]),h("div",or,[y(yn,{headers:_.headers},null,8,["headers"])])],512)):g("",!0)]),_:1})],4))}}),ir=I(rr,[["__scopeId","data-v-d2ecc192"]]),cr=t=>(V("data-v-a6f0e41e"),t=t(),R(),t),lr={class:"container"},ur=["aria-expanded"],dr=cr(()=>h("span",{class:"vpi-align-left menu-icon"},null,-1)),fr={class:"menu-text"},hr=b({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:n}=w(),{hasSidebar:s}=X(),{headers:a}=In(),{y:o}=mn(),r=A(0);ce(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Ne(()=>{a.value=_t(n.value.outline??e.value.outline)});const i=S(()=>a.value.length===0),l=S(()=>i.value&&!s.value),m=S(()=>({VPLocalNav:!0,"has-sidebar":s.value,empty:i.value,fixed:l.value}));return(_,v)=>u(n).layout!=="home"&&(!l.value||u(o)>=r.value)?(c(),f("div",{key:0,class:L(m.value)},[h("div",lr,[u(s)?(c(),f("button",{key:0,class:"menu","aria-expanded":_.open,"aria-controls":"VPSidebarNav",onClick:v[0]||(v[0]=$=>_.$emit("open-menu"))},[dr,h("span",fr,E(u(e).sidebarMenuLabel||"Menu"),1)],8,ur)):g("",!0),y(ir,{headers:u(a),navHeight:r.value},null,8,["headers","navHeight"])])],2)):g("",!0)}}),pr=I(hr,[["__scopeId","data-v-a6f0e41e"]]);function mr(){const t=A(!1);function e(){t.value=!0,window.addEventListener("resize",a)}function n(){t.value=!1,window.removeEventListener("resize",a)}function s(){t.value?n():e()}function a(){window.outerWidth>=768&&n()}const o=Me();return le(()=>o.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:s}}const vr={},gr={class:"VPSwitch",type:"button",role:"switch"},_r={class:"check"},br={key:0,class:"icon"};function yr(t,e){return c(),f("button",gr,[h("span",_r,[t.$slots.default?(c(),f("span",br,[d(t.$slots,"default",{},void 0,!0)])):g("",!0)])])}const Ir=I(vr,[["render",yr],["__scopeId","data-v-1d5665e3"]]),kn=t=>(V("data-v-d1f28634"),t=t(),R(),t),kr=kn(()=>h("span",{class:"vpi-sun sun"},null,-1)),$r=kn(()=>h("span",{class:"vpi-moon moon"},null,-1)),Sr=b({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:n}=w(),s=De("toggle-appearance",()=>{e.value=!e.value}),a=S(()=>e.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme");return(o,r)=>(c(),k(Ir,{title:a.value,class:"VPSwitchAppearance","aria-checked":u(e),onClick:u(s)},{default:p(()=>[kr,$r]),_:1},8,["title","aria-checked","onClick"]))}}),bt=I(Sr,[["__scopeId","data-v-d1f28634"]]),Tr={key:0,class:"VPNavBarAppearance"},wr=b({__name:"VPNavBarAppearance",setup(t){const{site:e}=w();return(n,s)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),f("div",Tr,[y(bt)])):g("",!0)}}),Er=I(wr,[["__scopeId","data-v-e6aabb21"]]),yt=A();let $n=!1,Ue=0;function Ar(t){const e=A(!1);if(me){!$n&&Pr(),Ue++;const n=le(yt,s=>{var a,o,r;s===t.el.value||(a=t.el.value)!=null&&a.contains(s)?(e.value=!0,(o=t.onFocus)==null||o.call(t)):(e.value=!1,(r=t.onBlur)==null||r.call(t))});mt(()=>{n(),Ue--,Ue||Cr()})}return Ms(e)}function Pr(){document.addEventListener("focusin",Sn),$n=!0,yt.value=document.activeElement}function Cr(){document.removeEventListener("focusin",Sn)}function Sn(){yt.value=document.activeElement}const Lr={class:"VPMenuLink"},Nr=b({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=w();return(n,s)=>(c(),f("div",Lr,[y(G,{class:L({active:u(ae)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:p(()=>[q(E(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Ve=I(Nr,[["__scopeId","data-v-43f1e123"]]),Mr={class:"VPMenuGroup"},Dr={key:0,class:"title"},Vr=b({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),f("div",Mr,[e.text?(c(),f("p",Dr,E(e.text),1)):g("",!0),(c(!0),f(N,null,F(e.items,s=>(c(),f(N,null,["link"in s?(c(),k(Ve,{key:0,item:s},null,8,["item"])):g("",!0)],64))),256))]))}}),Rr=I(Vr,[["__scopeId","data-v-69e747b5"]]),Or={class:"VPMenu"},Br={key:0,class:"items"},Fr=b({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(c(),f("div",Or,[e.items?(c(),f("div",Br,[(c(!0),f(N,null,F(e.items,s=>(c(),f(N,{key:s.text},["link"in s?(c(),k(Ve,{key:0,item:s},null,8,["item"])):(c(),k(Rr,{key:1,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):g("",!0),d(e.$slots,"default",{},void 0,!0)]))}}),Hr=I(Fr,[["__scopeId","data-v-e7ea1737"]]),Ur=t=>(V("data-v-b6c34ac9"),t=t(),R(),t),jr=["aria-expanded","aria-label"],zr={key:0,class:"text"},qr=["innerHTML"],Gr=Ur(()=>h("span",{class:"vpi-chevron-down text-icon"},null,-1)),Wr={key:1,class:"vpi-more-horizontal icon"},xr={class:"menu"},Kr=b({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=A(!1),n=A();Ar({el:n,onBlur:s});function s(){e.value=!1}return(a,o)=>(c(),f("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:o[1]||(o[1]=r=>e.value=!0),onMouseleave:o[2]||(o[2]=r=>e.value=!1)},[h("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":a.label,onClick:o[0]||(o[0]=r=>e.value=!e.value)},[a.button||a.icon?(c(),f("span",zr,[a.icon?(c(),f("span",{key:0,class:L([a.icon,"option-icon"])},null,2)):g("",!0),a.button?(c(),f("span",{key:1,innerHTML:a.button},null,8,qr)):g("",!0),Gr])):(c(),f("span",Wr))],8,jr),h("div",xr,[y(Hr,{items:a.items},{default:p(()=>[d(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),It=I(Kr,[["__scopeId","data-v-b6c34ac9"]]),Xr=["href","aria-label","innerHTML"],Yr=b({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,n=S(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}" />`);return(s,a)=>(c(),f("a",{class:"VPSocialLink no-icon",href:s.link,"aria-label":s.ariaLabel??(typeof s.icon=="string"?s.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,Xr))}}),Jr=I(Yr,[["__scopeId","data-v-eee4e7cb"]]),Qr={class:"VPSocialLinks"},Zr=b({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,n)=>(c(),f("div",Qr,[(c(!0),f(N,null,F(e.links,({link:s,icon:a,ariaLabel:o})=>(c(),k(Jr,{key:s,icon:a,link:s,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),kt=I(Zr,[["__scopeId","data-v-7bc22406"]]),ei={key:0,class:"group translations"},ti={class:"trans-title"},ni={key:1,class:"group"},si={class:"item appearance"},ai={class:"label"},oi={class:"appearance-action"},ri={key:2,class:"group"},ii={class:"item social-links"},ci=b({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=w(),{localeLinks:s,currentLang:a}=_e({correspondingLink:!0}),o=S(()=>s.value.length&&a.value.label||e.value.appearance||n.value.socialLinks);return(r,i)=>o.value?(c(),k(It,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:p(()=>[u(s).length&&u(a).label?(c(),f("div",ei,[h("p",ti,E(u(a).label),1),(c(!0),f(N,null,F(u(s),l=>(c(),k(Ve,{key:l.link,item:l},null,8,["item"]))),128))])):g("",!0),u(e).appearance&&u(e).appearance!=="force-dark"?(c(),f("div",ni,[h("div",si,[h("p",ai,E(u(n).darkModeSwitchLabel||"Appearance"),1),h("div",oi,[y(bt)])])])):g("",!0),u(n).socialLinks?(c(),f("div",ri,[h("div",ii,[y(kt,{class:"social-links-list",links:u(n).socialLinks},null,8,["links"])])])):g("",!0)]),_:1})):g("",!0)}}),li=I(ci,[["__scopeId","data-v-d0bd9dde"]]),ui=t=>(V("data-v-e5dd9c1c"),t=t(),R(),t),di=["aria-expanded"],fi=ui(()=>h("span",{class:"container"},[h("span",{class:"top"}),h("span",{class:"middle"}),h("span",{class:"bottom"})],-1)),hi=[fi],pi=b({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(c(),f("button",{type:"button",class:L(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=s=>e.$emit("click"))},hi,10,di))}}),mi=I(pi,[["__scopeId","data-v-e5dd9c1c"]]),vi=["innerHTML"],gi=b({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=w();return(n,s)=>(c(),k(G,{class:L({VPNavBarMenuLink:!0,active:u(ae)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:p(()=>[h("span",{innerHTML:n.item.text},null,8,vi)]),_:1},8,["class","href","target","rel"]))}}),_i=I(gi,[["__scopeId","data-v-42ef59de"]]),bi=b({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=w(),s=o=>"link"in o?ae(n.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(s),a=S(()=>s(e.item));return(o,r)=>(c(),k(It,{class:L({VPNavBarMenuGroup:!0,active:u(ae)(u(n).relativePath,o.item.activeMatch,!!o.item.activeMatch)||a.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),yi=t=>(V("data-v-7f418b0f"),t=t(),R(),t),Ii={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},ki=yi(()=>h("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),$i=b({__name:"VPNavBarMenu",setup(t){const{theme:e}=w();return(n,s)=>u(e).nav?(c(),f("nav",Ii,[ki,(c(!0),f(N,null,F(u(e).nav,a=>(c(),f(N,{key:a.text},["link"in a?(c(),k(_i,{key:0,item:a},null,8,["item"])):(c(),k(bi,{key:1,item:a},null,8,["item"]))],64))),128))])):g("",!0)}}),Si=I($i,[["__scopeId","data-v-7f418b0f"]]);function Ti(t){const{localeIndex:e,theme:n}=w();function s(a){var M,D,P;const o=a.split("."),r=(M=n.value.search)==null?void 0:M.options,i=r&&typeof r=="object",l=i&&((P=(D=r.locales)==null?void 0:D[e.value])==null?void 0:P.translations)||null,m=i&&r.translations||null;let _=l,v=m,$=t;const T=o.pop();for(const Ie of o){let Y=null;const fe=$==null?void 0:$[Ie];fe&&(Y=$=fe);const Fe=v==null?void 0:v[Ie];Fe&&(Y=v=Fe);const He=_==null?void 0:_[Ie];He&&(Y=_=He),fe||($=Y),Fe||(v=Y),He||(_=Y)}return(_==null?void 0:_[T])??(v==null?void 0:v[T])??($==null?void 0:$[T])??""}return s}const wi=["aria-label"],Ei={class:"DocSearch-Button-Container"},Ai=h("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),Pi={class:"DocSearch-Button-Placeholder"},Ci=h("span",{class:"DocSearch-Button-Keys"},[h("kbd",{class:"DocSearch-Button-Key"}),h("kbd",{class:"DocSearch-Button-Key"},"K")],-1),Rt=b({__name:"VPNavBarSearchButton",setup(t){const n=Ti({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(s,a)=>(c(),f("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":u(n)("button.buttonAriaLabel")},[h("span",Ei,[Ai,h("span",Pi,E(u(n)("button.buttonText")),1)]),Ci],8,wi))}}),Li={class:"VPNavBarSearch"},Ni={id:"local-search"},Mi={key:1,id:"docsearch"},Di=b({__name:"VPNavBarSearch",setup(t){const e=Ds(()=>Vs(()=>import("./VPLocalSearchBox.V3TSUetG.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:s}=w(),a=A(!1),o=A(!1);ce(()=>{});function r(){a.value||(a.value=!0,setTimeout(i,16))}function i(){const v=new Event("keydown");v.key="k",v.metaKey=!0,window.dispatchEvent(v),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||i()},16)}function l(v){const $=v.target,T=$.tagName;return $.isContentEditable||T==="INPUT"||T==="SELECT"||T==="TEXTAREA"}const m=A(!1);tt("k",v=>{(v.ctrlKey||v.metaKey)&&(v.preventDefault(),m.value=!0)}),tt("/",v=>{l(v)||(v.preventDefault(),m.value=!0)});const _="local";return(v,$)=>{var T;return c(),f("div",Li,[u(_)==="local"?(c(),f(N,{key:0},[m.value?(c(),k(u(e),{key:0,onClose:$[0]||($[0]=M=>m.value=!1)})):g("",!0),h("div",Ni,[y(Rt,{onClick:$[1]||($[1]=M=>m.value=!0)})])],64)):u(_)==="algolia"?(c(),f(N,{key:1},[a.value?(c(),k(u(n),{key:0,algolia:((T=u(s).search)==null?void 0:T.options)??u(s).algolia,onVnodeBeforeMount:$[2]||($[2]=M=>o.value=!0)},null,8,["algolia"])):g("",!0),o.value?g("",!0):(c(),f("div",Mi,[y(Rt,{onClick:r})]))],64)):g("",!0)])}}}),Vi=b({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=w();return(n,s)=>u(e).socialLinks?(c(),k(kt,{key:0,class:"VPNavBarSocialLinks",links:u(e).socialLinks},null,8,["links"])):g("",!0)}}),Ri=I(Vi,[["__scopeId","data-v-0394ad82"]]),Oi=["href","rel","target"],Bi={key:1},Fi={key:2},Hi=b({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=w(),{hasSidebar:s}=X(),{currentLang:a}=_e(),o=S(()=>{var l;return typeof n.value.logoLink=="string"?n.value.logoLink:(l=n.value.logoLink)==null?void 0:l.link}),r=S(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.rel}),i=S(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.target});return(l,m)=>(c(),f("div",{class:L(["VPNavBarTitle",{"has-sidebar":u(s)}])},[h("a",{class:"title",href:o.value??u(vt)(u(a).link),rel:r.value,target:i.value},[d(l.$slots,"nav-bar-title-before",{},void 0,!0),u(n).logo?(c(),k(Te,{key:0,class:"logo",image:u(n).logo},null,8,["image"])):g("",!0),u(n).siteTitle?(c(),f("span",Bi,E(u(n).siteTitle),1)):u(n).siteTitle===void 0?(c(),f("span",Fi,E(u(e).title),1)):g("",!0),d(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,Oi)],2))}}),Ui=I(Hi,[["__scopeId","data-v-ab179fa1"]]),ji={class:"items"},zi={class:"title"},qi=b({__name:"VPNavBarTranslations",setup(t){const{theme:e}=w(),{localeLinks:n,currentLang:s}=_e({correspondingLink:!0});return(a,o)=>u(n).length&&u(s).label?(c(),k(It,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:u(e).langMenuLabel||"Change language"},{default:p(()=>[h("div",ji,[h("p",zi,E(u(s).label),1),(c(!0),f(N,null,F(u(n),r=>(c(),k(Ve,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):g("",!0)}}),Gi=I(qi,[["__scopeId","data-v-88af2de4"]]),Wi=t=>(V("data-v-19c990f1"),t=t(),R(),t),xi={class:"wrapper"},Ki={class:"container"},Xi={class:"title"},Yi={class:"content"},Ji={class:"content-body"},Qi=Wi(()=>h("div",{class:"divider"},[h("div",{class:"divider-line"})],-1)),Zi=b({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const{y:e}=mn(),{hasSidebar:n}=X(),{hasLocalNav:s}=In(),{frontmatter:a}=w(),o=A({});return dn(()=>{o.value={"has-sidebar":n.value,"has-local-nav":s.value,top:a.value.layout==="home"&&e.value===0}}),(r,i)=>(c(),f("div",{class:L(["VPNavBar",o.value])},[h("div",xi,[h("div",Ki,[h("div",Xi,[y(Ui,null,{"nav-bar-title-before":p(()=>[d(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[d(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),h("div",Yi,[h("div",Ji,[d(r.$slots,"nav-bar-content-before",{},void 0,!0),y(Di,{class:"search"}),y(Si,{class:"menu"}),y(Gi,{class:"translations"}),y(Er,{class:"appearance"}),y(Ri,{class:"social-links"}),y(li,{class:"extra"}),d(r.$slots,"nav-bar-content-after",{},void 0,!0),y(mi,{class:"hamburger",active:r.isScreenOpen,onClick:i[0]||(i[0]=l=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),Qi],2))}}),ec=I(Zi,[["__scopeId","data-v-19c990f1"]]),tc={key:0,class:"VPNavScreenAppearance"},nc={class:"text"},sc=b({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=w();return(s,a)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),f("div",tc,[h("p",nc,E(u(n).darkModeSwitchLabel||"Appearance"),1),y(bt)])):g("",!0)}}),ac=I(sc,[["__scopeId","data-v-2d7af913"]]),oc=b({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=De("close-screen");return(n,s)=>(c(),k(G,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e)},{default:p(()=>[q(E(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),rc=I(oc,[["__scopeId","data-v-05f27b2a"]]),ic=b({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=De("close-screen");return(n,s)=>(c(),k(G,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e)},{default:p(()=>[q(E(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Tn=I(ic,[["__scopeId","data-v-19976ae1"]]),cc={class:"VPNavScreenMenuGroupSection"},lc={key:0,class:"title"},uc=b({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),f("div",cc,[e.text?(c(),f("p",lc,E(e.text),1)):g("",!0),(c(!0),f(N,null,F(e.items,s=>(c(),k(Tn,{key:s.text,item:s},null,8,["item"]))),128))]))}}),dc=I(uc,[["__scopeId","data-v-8133b170"]]),fc=t=>(V("data-v-ff6087d4"),t=t(),R(),t),hc=["aria-controls","aria-expanded"],pc=["innerHTML"],mc=fc(()=>h("span",{class:"vpi-plus button-icon"},null,-1)),vc=["id"],gc={key:1,class:"group"},_c=b({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=A(!1),s=S(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function a(){n.value=!n.value}return(o,r)=>(c(),f("div",{class:L(["VPNavScreenMenuGroup",{open:n.value}])},[h("button",{class:"button","aria-controls":s.value,"aria-expanded":n.value,onClick:a},[h("span",{class:"button-text",innerHTML:o.text},null,8,pc),mc],8,hc),h("div",{id:s.value,class:"items"},[(c(!0),f(N,null,F(o.items,i=>(c(),f(N,{key:i.text},["link"in i?(c(),f("div",{key:i.text,class:"item"},[y(Tn,{item:i},null,8,["item"])])):(c(),f("div",gc,[y(dc,{text:i.text,items:i.items},null,8,["text","items"])]))],64))),128))],8,vc)],2))}}),bc=I(_c,[["__scopeId","data-v-ff6087d4"]]),yc={key:0,class:"VPNavScreenMenu"},Ic=b({__name:"VPNavScreenMenu",setup(t){const{theme:e}=w();return(n,s)=>u(e).nav?(c(),f("nav",yc,[(c(!0),f(N,null,F(u(e).nav,a=>(c(),f(N,{key:a.text},["link"in a?(c(),k(rc,{key:0,item:a},null,8,["item"])):(c(),k(bc,{key:1,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):g("",!0)}}),kc=b({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=w();return(n,s)=>u(e).socialLinks?(c(),k(kt,{key:0,class:"VPNavScreenSocialLinks",links:u(e).socialLinks},null,8,["links"])):g("",!0)}}),wn=t=>(V("data-v-858fe1a4"),t=t(),R(),t),$c=wn(()=>h("span",{class:"vpi-languages icon lang"},null,-1)),Sc=wn(()=>h("span",{class:"vpi-chevron-down icon chevron"},null,-1)),Tc={class:"list"},wc=b({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=_e({correspondingLink:!0}),s=A(!1);function a(){s.value=!s.value}return(o,r)=>u(e).length&&u(n).label?(c(),f("div",{key:0,class:L(["VPNavScreenTranslations",{open:s.value}])},[h("button",{class:"title",onClick:a},[$c,q(" "+E(u(n).label)+" ",1),Sc]),h("ul",Tc,[(c(!0),f(N,null,F(u(e),i=>(c(),f("li",{key:i.link,class:"item"},[y(G,{class:"link",href:i.link},{default:p(()=>[q(E(i.text),1)]),_:2},1032,["href"])]))),128))])],2)):g("",!0)}}),Ec=I(wc,[["__scopeId","data-v-858fe1a4"]]),Ac={class:"container"},Pc=b({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=A(null),n=vn(me?document.body:null);return(s,a)=>(c(),k(ht,{name:"fade",onEnter:a[0]||(a[0]=o=>n.value=!0),onAfterLeave:a[1]||(a[1]=o=>n.value=!1)},{default:p(()=>[s.open?(c(),f("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[h("div",Ac,[d(s.$slots,"nav-screen-content-before",{},void 0,!0),y(Ic,{class:"menu"}),y(Ec,{class:"translations"}),y(ac,{class:"appearance"}),y(kc,{class:"social-links"}),d(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):g("",!0)]),_:3}))}}),Cc=I(Pc,[["__scopeId","data-v-cc5739dd"]]),Lc={key:0,class:"VPNav"},Nc=b({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:s}=mr(),{frontmatter:a}=w(),o=S(()=>a.value.navbar!==!1);return gn("close-screen",n),Le(()=>{me&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(r,i)=>o.value?(c(),f("header",Lc,[y(ec,{"is-screen-open":u(e),onToggleScreen:u(s)},{"nav-bar-title-before":p(()=>[d(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[d(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[d(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[d(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),y(Cc,{open:u(e)},{"nav-screen-content-before":p(()=>[d(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[d(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):g("",!0)}}),Mc=I(Nc,[["__scopeId","data-v-ae24b3ad"]]),En=t=>(V("data-v-93e7e794"),t=t(),R(),t),Dc=["role","tabindex"],Vc=En(()=>h("div",{class:"indicator"},null,-1)),Rc=En(()=>h("span",{class:"vpi-chevron-right caret-icon"},null,-1)),Oc=[Rc],Bc={key:1,class:"items"},Fc=b({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:s,isLink:a,isActiveLink:o,hasActiveLink:r,hasChildren:i,toggle:l}=oa(S(()=>e.item)),m=S(()=>i.value?"section":"div"),_=S(()=>a.value?"a":"div"),v=S(()=>i.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),$=S(()=>a.value?void 0:"button"),T=S(()=>[[`level-${e.depth}`],{collapsible:s.value},{collapsed:n.value},{"is-link":a.value},{"is-active":o.value},{"has-active":r.value}]);function M(P){"key"in P&&P.key!=="Enter"||!e.item.link&&l()}function D(){e.item.link&&l()}return(P,Ie)=>{const Y=ue("VPSidebarItem",!0);return c(),k(he(m.value),{class:L(["VPSidebarItem",T.value])},{default:p(()=>[P.item.text?(c(),f("div",$e({key:0,class:"item",role:$.value},Rs(P.item.items?{click:M,keydown:M}:{},!0),{tabindex:P.item.items&&0}),[Vc,P.item.link?(c(),k(G,{key:0,tag:_.value,class:"link",href:P.item.link,rel:P.item.rel,target:P.item.target},{default:p(()=>[(c(),k(he(v.value),{class:"text",innerHTML:P.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(c(),k(he(v.value),{key:1,class:"text",innerHTML:P.item.text},null,8,["innerHTML"])),P.item.collapsed!=null?(c(),f("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:D,onKeydown:Os(D,["enter"]),tabindex:"0"},Oc,32)):g("",!0)],16,Dc)):g("",!0),P.item.items&&P.item.items.length?(c(),f("div",Bc,[P.depth<5?(c(!0),f(N,{key:0},F(P.item.items,fe=>(c(),k(Y,{key:fe.text,item:fe,depth:P.depth+1},null,8,["item","depth"]))),128)):g("",!0)])):g("",!0)]),_:1},8,["class"])}}}),Hc=I(Fc,[["__scopeId","data-v-93e7e794"]]),An=t=>(V("data-v-575e6a36"),t=t(),R(),t),Uc=An(()=>h("div",{class:"curtain"},null,-1)),jc={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},zc=An(()=>h("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),qc=b({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:n}=X(),s=t,a=A(null),o=vn(me?document.body:null);return le([s,a],()=>{var r;s.open?(o.value=!0,(r=a.value)==null||r.focus()):o.value=!1},{immediate:!0,flush:"post"}),(r,i)=>u(n)?(c(),f("aside",{key:0,class:L(["VPSidebar",{open:r.open}]),ref_key:"navEl",ref:a,onClick:i[0]||(i[0]=Bs(()=>{},["stop"]))},[Uc,h("nav",jc,[zc,d(r.$slots,"sidebar-nav-before",{},void 0,!0),(c(!0),f(N,null,F(u(e),l=>(c(),f("div",{key:l.text,class:"group"},[y(Hc,{item:l,depth:0},null,8,["item"])]))),128)),d(r.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):g("",!0)}}),Gc=I(qc,[["__scopeId","data-v-575e6a36"]]),Wc=b({__name:"VPSkipLink",setup(t){const e=Me(),n=A();le(()=>e.path,()=>n.value.focus());function s({target:a}){const o=document.getElementById(decodeURIComponent(a.hash).slice(1));if(o){const r=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",r)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",r),o.focus(),window.scrollTo(0,0)}}return(a,o)=>(c(),f(N,null,[h("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),h("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s}," Skip to content ")],64))}}),xc=I(Wc,[["__scopeId","data-v-0f60ec36"]]),Kc=b({__name:"Layout",setup(t){const{isOpen:e,open:n,close:s}=X(),a=Me();le(()=>a.path,s),aa(e,s);const{frontmatter:o}=w(),r=Fs(),i=S(()=>!!r["home-hero-image"]);return gn("hero-image-slot-exists",i),(l,m)=>{const _=ue("Content");return u(o).layout!==!1?(c(),f("div",{key:0,class:L(["Layout",u(o).pageClass])},[d(l.$slots,"layout-top",{},void 0,!0),y(xc),y(zs,{class:"backdrop",show:u(e),onClick:u(s)},null,8,["show","onClick"]),y(Mc,null,{"nav-bar-title-before":p(()=>[d(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[d(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[d(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[d(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":p(()=>[d(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[d(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),y(pr,{open:u(e),onOpenMenu:u(n)},null,8,["open","onOpenMenu"]),y(Gc,{open:u(e)},{"sidebar-nav-before":p(()=>[d(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":p(()=>[d(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),y(Yo,null,{"page-top":p(()=>[d(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[d(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":p(()=>[d(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":p(()=>[d(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[d(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[d(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[d(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[d(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[d(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[d(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[d(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[d(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":p(()=>[d(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[d(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[d(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":p(()=>[d(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[d(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":p(()=>[d(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[d(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[d(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[d(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[d(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[d(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),y(tr),d(l.$slots,"layout-bottom",{},void 0,!0)],2)):(c(),k(_,{key:1}))}}}),Xc=I(Kc,[["__scopeId","data-v-5d98c3a5"]]),Pn={Layout:Xc,enhanceApp:({app:t})=>{t.component("Badge",Hs)}};var Ot={};/**
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
 */const Cn=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let a=t.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Yc=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const a=t[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const o=t[n++];e[s++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=t[n++],r=t[n++],i=t[n++],l=((a&7)<<18|(o&63)<<12|(r&63)<<6|i&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],r=t[n++];e[s++]=String.fromCharCode((a&15)<<12|(o&63)<<6|r&63)}}return e.join("")},Ln={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<t.length;a+=3){const o=t[a],r=a+1<t.length,i=r?t[a+1]:0,l=a+2<t.length,m=l?t[a+2]:0,_=o>>2,v=(o&3)<<4|i>>4;let $=(i&15)<<2|m>>6,T=m&63;l||(T=64,r||($=64)),s.push(n[_],n[v],n[$],n[T])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<t.length;){const o=n[t.charAt(a++)],i=a<t.length?n[t.charAt(a)]:0;++a;const m=a<t.length?n[t.charAt(a)]:64;++a;const v=a<t.length?n[t.charAt(a)]:64;if(++a,o==null||i==null||m==null||v==null)throw new Jc;const $=o<<2|i>>4;if(s.push($),m!==64){const T=i<<4&240|m>>2;if(s.push(T),v!==64){const M=m<<6&192|v;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Jc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qc=function(t){const e=Cn(t);return Ln.encodeByteArray(e,!0)},Nn=function(t){return Qc(t).replace(/\./g,"")},Zc=function(t){try{return Ln.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function el(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tl=()=>el().__FIREBASE_DEFAULTS__,nl=()=>{if(typeof process>"u"||typeof Ot>"u")return;const t=Ot.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zc(t[1]);return e&&JSON.parse(e)},al=()=>{try{return tl()||nl()||sl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ol=()=>{var t;return(t=al())===null||t===void 0?void 0:t.config};/**
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
 */class rl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function il(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $t(){try{return typeof indexedDB=="object"}catch{return!1}}function St(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Mn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const cl="FirebaseError";class de extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=cl,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,be.prototype.create)}}class be{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,o=this.errors[e],r=o?ll(o,s):"Error",i=`${this.serviceName}: ${r} (${a}).`;return new de(a,i,s)}}function ll(t,e){return t.replace(ul,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const ul=/\{\$([^}]+)}/g;function we(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const o=t[a],r=e[a];if(Bt(o)&&Bt(r)){if(!we(o,r))return!1}else if(o!==r)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Bt(t){return t!==null&&typeof t=="object"}/**
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
 */const dl=1e3,fl=2,hl=4*60*60*1e3,pl=.5;function Ft(t,e=dl,n=fl){const s=e*Math.pow(n,t),a=Math.round(pl*s*(Math.random()-.5)*2);return Math.min(hl,s+a)}/**
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
 */function Tt(t){return t&&t._delegate?t._delegate:t}class K{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const te="[DEFAULT]";/**
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
 */class ml{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gl(e))try{this.getOrInitializeService({instanceIdentifier:te})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:a});s.resolve(o)}catch{}}}}clearInstance(e=te){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=te){return this.instances.has(e)}getOptions(e=te){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(o);s===i&&r.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(a,o);const r=this.instances.get(a);return r&&e(r,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vl(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=te){return this.component?this.component.multipleInstances?e:te:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vl(t){return t===te?void 0:t}function gl(t){return t.instantiationMode==="EAGER"}/**
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
 */class _l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ml(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var C;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(C||(C={}));const bl={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},yl=C.INFO,Il={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},kl=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),a=Il[e];if(a)console[a](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wt{constructor(e){this.name=e,this._logLevel=yl,this._logHandler=kl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const $l=(t,e)=>e.some(n=>t instanceof n);let Ht,Ut;function Sl(){return Ht||(Ht=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tl(){return Ut||(Ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dn=new WeakMap,ot=new WeakMap,Vn=new WeakMap,je=new WeakMap,Et=new WeakMap;function wl(t){const e=new Promise((n,s)=>{const a=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{n(J(t.result)),a()},r=()=>{s(t.error),a()};t.addEventListener("success",o),t.addEventListener("error",r)});return e.then(n=>{n instanceof IDBCursor&&Dn.set(n,t)}).catch(()=>{}),Et.set(e,t),e}function El(t){if(ot.has(t))return;const e=new Promise((n,s)=>{const a=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{n(),a()},r=()=>{s(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)});ot.set(t,e)}let rt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ot.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return J(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Al(t){rt=t(rt)}function Pl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ze(this),e,...n);return Vn.set(s,e.sort?e.sort():[e]),J(s)}:Tl().includes(t)?function(...e){return t.apply(ze(this),e),J(Dn.get(this))}:function(...e){return J(t.apply(ze(this),e))}}function Cl(t){return typeof t=="function"?Pl(t):(t instanceof IDBTransaction&&El(t),$l(t,Sl())?new Proxy(t,rt):t)}function J(t){if(t instanceof IDBRequest)return wl(t);if(je.has(t))return je.get(t);const e=Cl(t);return e!==t&&(je.set(t,e),Et.set(e,t)),e}const ze=t=>Et.get(t);function Rn(t,e,{blocked:n,upgrade:s,blocking:a,terminated:o}={}){const r=indexedDB.open(t,e),i=J(r);return s&&r.addEventListener("upgradeneeded",l=>{s(J(r.result),l.oldVersion,l.newVersion,J(r.transaction))}),n&&r.addEventListener("blocked",()=>n()),i.then(l=>{o&&l.addEventListener("close",()=>o()),a&&l.addEventListener("versionchange",()=>a())}).catch(()=>{}),i}const Ll=["get","getKey","getAll","getAllKeys","count"],Nl=["put","add","delete","clear"],qe=new Map;function jt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qe.get(e))return qe.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=Nl.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||Ll.includes(n)))return;const o=async function(r,...i){const l=this.transaction(r,a?"readwrite":"readonly");let m=l.store;return s&&(m=m.index(i.shift())),(await Promise.all([m[n](...i),a&&l.done]))[0]};return qe.set(e,o),o}Al(t=>({...t,get:(e,n,s)=>jt(e,n)||t.get(e,n,s),has:(e,n)=>!!jt(e,n)||t.has(e,n)}));/**
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
 */class Ml{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Dl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const it="@firebase/app",zt="0.9.7";/**
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
 */const oe=new wt("@firebase/app"),Vl="@firebase/app-compat",Rl="@firebase/analytics-compat",Ol="@firebase/analytics",Bl="@firebase/app-check-compat",Fl="@firebase/app-check",Hl="@firebase/auth",Ul="@firebase/auth-compat",jl="@firebase/database",zl="@firebase/database-compat",ql="@firebase/functions",Gl="@firebase/functions-compat",Wl="@firebase/installations",xl="@firebase/installations-compat",Kl="@firebase/messaging",Xl="@firebase/messaging-compat",Yl="@firebase/performance",Jl="@firebase/performance-compat",Ql="@firebase/remote-config",Zl="@firebase/remote-config-compat",eu="@firebase/storage",tu="@firebase/storage-compat",nu="@firebase/firestore",su="@firebase/firestore-compat",au="firebase";/**
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
 */const ct="[DEFAULT]",ou={[it]:"fire-core",[Vl]:"fire-core-compat",[Ol]:"fire-analytics",[Rl]:"fire-analytics-compat",[Fl]:"fire-app-check",[Bl]:"fire-app-check-compat",[Hl]:"fire-auth",[Ul]:"fire-auth-compat",[jl]:"fire-rtdb",[zl]:"fire-rtdb-compat",[ql]:"fire-fn",[Gl]:"fire-fn-compat",[Wl]:"fire-iid",[xl]:"fire-iid-compat",[Kl]:"fire-fcm",[Xl]:"fire-fcm-compat",[Yl]:"fire-perf",[Jl]:"fire-perf-compat",[Ql]:"fire-rc",[Zl]:"fire-rc-compat",[eu]:"fire-gcs",[tu]:"fire-gcs-compat",[nu]:"fire-fst",[su]:"fire-fst-compat","fire-js":"fire-js",[au]:"fire-js-all"};/**
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
 */const Ee=new Map,lt=new Map;function ru(t,e){try{t.container.addComponent(e)}catch(n){oe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ee(t){const e=t.name;if(lt.has(e))return oe.debug(`There were multiple attempts to register component ${e}.`),!1;lt.set(e,t);for(const n of Ee.values())ru(n,t);return!0}function ye(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const iu={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Q=new be("app","Firebase",iu);/**
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
 */class cu{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new K("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Q.create("app-deleted",{appName:this._name})}}function On(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ct,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw Q.create("bad-app-name",{appName:String(a)});if(n||(n=ol()),!n)throw Q.create("no-options");const o=Ee.get(a);if(o){if(we(n,o.options)&&we(s,o.config))return o;throw Q.create("duplicate-app",{appName:a})}const r=new _l(a);for(const l of lt.values())r.addComponent(l);const i=new cu(n,s,r);return Ee.set(a,i),i}function Bn(t=ct){const e=Ee.get(t);if(!e&&t===ct)return On();if(!e)throw Q.create("no-app",{appName:t});return e}function W(t,e,n){var s;let a=(s=ou[t])!==null&&s!==void 0?s:t;n&&(a+=`-${n}`);const o=a.match(/\s|\//),r=e.match(/\s|\//);if(o||r){const i=[`Unable to register library "${a}" with version "${e}":`];o&&i.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&r&&i.push("and"),r&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),oe.warn(i.join(" "));return}ee(new K(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const lu="firebase-heartbeat-database",uu=1,ge="firebase-heartbeat-store";let Ge=null;function Fn(){return Ge||(Ge=Rn(lu,uu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ge)}}}).catch(t=>{throw Q.create("idb-open",{originalErrorMessage:t.message})})),Ge}async function du(t){try{return(await Fn()).transaction(ge).objectStore(ge).get(Hn(t))}catch(e){if(e instanceof de)oe.warn(e.message);else{const n=Q.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});oe.warn(n.message)}}}async function qt(t,e){try{const s=(await Fn()).transaction(ge,"readwrite");return await s.objectStore(ge).put(e,Hn(t)),s.done}catch(n){if(n instanceof de)oe.warn(n.message);else{const s=Q.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});oe.warn(s.message)}}}function Hn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fu=1024,hu=30*24*60*60*1e3;class pu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vu(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=hu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gt(),{heartbeatsToSend:n,unsentEntries:s}=mu(this._heartbeatsCache.heartbeats),a=Nn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Gt(){return new Date().toISOString().substring(0,10)}function mu(t,e=fu){const n=[];let s=t.slice();for(const a of t){const o=n.find(r=>r.agent===a.agent);if(o){if(o.dates.push(a.date),Wt(n)>e){o.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Wt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $t()?St().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await du(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return qt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return qt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Wt(t){return Nn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gu(t){ee(new K("platform-logger",e=>new Ml(e),"PRIVATE")),ee(new K("heartbeat",e=>new pu(e),"PRIVATE")),W(it,zt,t),W(it,zt,"esm2017"),W("fire-js","")}gu("");var _u="firebase",bu="9.19.1";/**
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
 */W(_u,bu,"app");const Un="@firebase/installations",At="0.6.4";/**
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
 */const jn=1e4,zn=`w:${At}`,qn="FIS_v2",yu="https://firebaseinstallations.googleapis.com/v1",Iu=60*60*1e3,ku="installations",$u="Installations";/**
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
 */const Su={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},re=new be(ku,$u,Su);function Gn(t){return t instanceof de&&t.code.includes("request-failed")}/**
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
 */function Wn({projectId:t}){return`${yu}/projects/${t}/installations`}function xn(t){return{token:t.token,requestStatus:2,expiresIn:wu(t.expiresIn),creationTime:Date.now()}}async function Kn(t,e){const s=(await e.json()).error;return re.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Xn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Tu(t,{refreshToken:e}){const n=Xn(t);return n.append("Authorization",Eu(e)),n}async function Yn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function wu(t){return Number(t.replace("s","000"))}function Eu(t){return`${qn} ${t}`}/**
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
 */async function Au({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Wn(t),a=Xn(t),o=e.getImmediate({optional:!0});if(o){const m=await o.getHeartbeatsHeader();m&&a.append("x-firebase-client",m)}const r={fid:n,authVersion:qn,appId:t.appId,sdkVersion:zn},i={method:"POST",headers:a,body:JSON.stringify(r)},l=await Yn(()=>fetch(s,i));if(l.ok){const m=await l.json();return{fid:m.fid||n,registrationStatus:2,refreshToken:m.refreshToken,authToken:xn(m.authToken)}}else throw await Kn("Create Installation",l)}/**
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
 */function Jn(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Pu(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Cu=/^[cdef][\w-]{21}$/,ut="";function Lu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Nu(t);return Cu.test(n)?n:ut}catch{return ut}}function Nu(t){return Pu(t).substr(0,22)}/**
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
 */function Re(t){return`${t.appName}!${t.appId}`}/**
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
 */const Qn=new Map;function Zn(t,e){const n=Re(t);es(n,e),Mu(n,e)}function es(t,e){const n=Qn.get(t);if(n)for(const s of n)s(e)}function Mu(t,e){const n=Du();n&&n.postMessage({key:t,fid:e}),Vu()}let ne=null;function Du(){return!ne&&"BroadcastChannel"in self&&(ne=new BroadcastChannel("[Firebase] FID Change"),ne.onmessage=t=>{es(t.data.key,t.data.fid)}),ne}function Vu(){Qn.size===0&&ne&&(ne.close(),ne=null)}/**
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
 */const Ru="firebase-installations-database",Ou=1,ie="firebase-installations-store";let We=null;function Pt(){return We||(We=Rn(Ru,Ou,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ie)}}})),We}async function Ae(t,e){const n=Re(t),a=(await Pt()).transaction(ie,"readwrite"),o=a.objectStore(ie),r=await o.get(n);return await o.put(e,n),await a.done,(!r||r.fid!==e.fid)&&Zn(t,e.fid),e}async function ts(t){const e=Re(t),s=(await Pt()).transaction(ie,"readwrite");await s.objectStore(ie).delete(e),await s.done}async function Oe(t,e){const n=Re(t),a=(await Pt()).transaction(ie,"readwrite"),o=a.objectStore(ie),r=await o.get(n),i=e(r);return i===void 0?await o.delete(n):await o.put(i,n),await a.done,i&&(!r||r.fid!==i.fid)&&Zn(t,i.fid),i}/**
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
 */async function Ct(t){let e;const n=await Oe(t.appConfig,s=>{const a=Bu(s),o=Fu(t,a);return e=o.registrationPromise,o.installationEntry});return n.fid===ut?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Bu(t){const e=t||{fid:Lu(),registrationStatus:0};return ns(e)}function Fu(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(re.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Hu(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Uu(t)}:{installationEntry:e}}async function Hu(t,e){try{const n=await Au(t,e);return Ae(t.appConfig,n)}catch(n){throw Gn(n)&&n.customData.serverCode===409?await ts(t.appConfig):await Ae(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Uu(t){let e=await xt(t.appConfig);for(;e.registrationStatus===1;)await Jn(100),e=await xt(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ct(t);return s||n}return e}function xt(t){return Oe(t,e=>{if(!e)throw re.create("installation-not-found");return ns(e)})}function ns(t){return ju(t)?{fid:t.fid,registrationStatus:0}:t}function ju(t){return t.registrationStatus===1&&t.registrationTime+jn<Date.now()}/**
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
 */async function zu({appConfig:t,heartbeatServiceProvider:e},n){const s=qu(t,n),a=Tu(t,n),o=e.getImmediate({optional:!0});if(o){const m=await o.getHeartbeatsHeader();m&&a.append("x-firebase-client",m)}const r={installation:{sdkVersion:zn,appId:t.appId}},i={method:"POST",headers:a,body:JSON.stringify(r)},l=await Yn(()=>fetch(s,i));if(l.ok){const m=await l.json();return xn(m)}else throw await Kn("Generate Auth Token",l)}function qu(t,{fid:e}){return`${Wn(t)}/${e}/authTokens:generate`}/**
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
 */async function Lt(t,e=!1){let n;const s=await Oe(t.appConfig,o=>{if(!ss(o))throw re.create("not-registered");const r=o.authToken;if(!e&&xu(r))return o;if(r.requestStatus===1)return n=Gu(t,e),o;{if(!navigator.onLine)throw re.create("app-offline");const i=Xu(o);return n=Wu(t,i),i}});return n?await n:s.authToken}async function Gu(t,e){let n=await Kt(t.appConfig);for(;n.authToken.requestStatus===1;)await Jn(100),n=await Kt(t.appConfig);const s=n.authToken;return s.requestStatus===0?Lt(t,e):s}function Kt(t){return Oe(t,e=>{if(!ss(e))throw re.create("not-registered");const n=e.authToken;return Yu(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Wu(t,e){try{const n=await zu(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ae(t.appConfig,s),n}catch(n){if(Gn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ts(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ae(t.appConfig,s)}throw n}}function ss(t){return t!==void 0&&t.registrationStatus===2}function xu(t){return t.requestStatus===2&&!Ku(t)}function Ku(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Iu}function Xu(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Yu(t){return t.requestStatus===1&&t.requestTime+jn<Date.now()}/**
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
 */async function Ju(t){const e=t,{installationEntry:n,registrationPromise:s}=await Ct(e);return s?s.catch(console.error):Lt(e).catch(console.error),n.fid}/**
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
 */async function Qu(t,e=!1){const n=t;return await Zu(n),(await Lt(n,e)).token}async function Zu(t){const{registrationPromise:e}=await Ct(t);e&&await e}/**
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
 */function ed(t){if(!t||!t.options)throw xe("App Configuration");if(!t.name)throw xe("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xe(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xe(t){return re.create("missing-app-config-values",{valueName:t})}/**
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
 */const as="installations",td="installations-internal",nd=t=>{const e=t.getProvider("app").getImmediate(),n=ed(e),s=ye(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},sd=t=>{const e=t.getProvider("app").getImmediate(),n=ye(e,as).getImmediate();return{getId:()=>Ju(n),getToken:a=>Qu(n,a)}};function ad(){ee(new K(as,nd,"PUBLIC")),ee(new K(td,sd,"PRIVATE"))}ad();W(Un,At);W(Un,At,"esm2017");/**
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
 */const Pe="analytics",od="firebase_id",rd="origin",id=60*1e3,cd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nt="https://www.googletagmanager.com/gtag/js";/**
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
 */const H=new wt("@firebase/analytics");/**
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
 */const ld={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},j=new be("analytics","Analytics",ld);/**
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
 */function ud(t){if(!t.startsWith(Nt)){const e=j.create("invalid-gtag-resource",{gtagURL:t});return H.warn(e.message),""}return t}function os(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function dd(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function fd(t,e){const n=dd("firebase-js-sdk-policy",{createScriptURL:ud}),s=document.createElement("script"),a=`${Nt}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function hd(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function pd(t,e,n,s,a,o){const r=s[a];try{if(r)await e[r];else{const l=(await os(n)).find(m=>m.measurementId===a);l&&await e[l.appId]}}catch(i){H.error(i)}t("config",a,o)}async function md(t,e,n,s,a){try{let o=[];if(a&&a.send_to){let r=a.send_to;Array.isArray(r)||(r=[r]);const i=await os(n);for(const l of r){const m=i.find(v=>v.measurementId===l),_=m&&e[m.appId];if(_)o.push(_);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",s,a||{})}catch(o){H.error(o)}}function vd(t,e,n,s){async function a(o,r,i){try{o==="event"?await md(t,e,n,r,i):o==="config"?await pd(t,e,n,s,r,i):o==="consent"?t("consent","update",i):t("set",r)}catch(l){H.error(l)}}return a}function gd(t,e,n,s,a){let o=function(...r){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(o=window[a]),window[a]=vd(o,t,e,n),{gtagCore:o,wrappedGtag:window[a]}}function _d(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nt)&&n.src.includes(t))return n;return null}/**
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
 */const bd=30,yd=1e3;class Id{constructor(e={},n=yd){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const rs=new Id;function kd(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $d(t){var e;const{appId:n,apiKey:s}=t,a={method:"GET",headers:kd(s)},o=cd.replace("{app-id}",n),r=await fetch(o,a);if(r.status!==200&&r.status!==304){let i="";try{const l=await r.json();!((e=l.error)===null||e===void 0)&&e.message&&(i=l.error.message)}catch{}throw j.create("config-fetch-failed",{httpStatus:r.status,responseMessage:i})}return r.json()}async function Sd(t,e=rs,n){const{appId:s,apiKey:a,measurementId:o}=t.options;if(!s)throw j.create("no-app-id");if(!a){if(o)return{measurementId:o,appId:s};throw j.create("no-api-key")}const r=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new Ed;return setTimeout(async()=>{i.abort()},n!==void 0?n:id),is({appId:s,apiKey:a,measurementId:o},r,i,e)}async function is(t,{throttleEndTimeMillis:e,backoffCount:n},s,a=rs){var o;const{appId:r,measurementId:i}=t;try{await Td(s,e)}catch(l){if(i)return H.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:r,measurementId:i};throw l}try{const l=await $d(t);return a.deleteThrottleMetadata(r),l}catch(l){const m=l;if(!wd(m)){if(a.deleteThrottleMetadata(r),i)return H.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:r,measurementId:i};throw l}const _=Number((o=m==null?void 0:m.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ft(n,a.intervalMillis,bd):Ft(n,a.intervalMillis),v={throttleEndTimeMillis:Date.now()+_,backoffCount:n+1};return a.setThrottleMetadata(r,v),H.debug(`Calling attemptFetch again in ${_} millis`),is(t,v,s,a)}}function Td(t,e){return new Promise((n,s)=>{const a=Math.max(e-Date.now(),0),o=setTimeout(n,a);t.addEventListener(()=>{clearTimeout(o),s(j.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function wd(t){if(!(t instanceof de)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ed{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ad(t,e,n,s,a){if(a&&a.global){t("event",n,s);return}else{const o=await e,r=Object.assign(Object.assign({},s),{send_to:o});t("event",n,r)}}/**
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
 */async function Pd(){if($t())try{await St()}catch(t){return H.warn(j.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return H.warn(j.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Cd(t,e,n,s,a,o,r){var i;const l=Sd(t);l.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&H.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>H.error(T)),e.push(l);const m=Pd().then(T=>{if(T)return s.getId()}),[_,v]=await Promise.all([l,m]);_d(o)||fd(o,_.measurementId),a("js",new Date);const $=(i=r==null?void 0:r.config)!==null&&i!==void 0?i:{};return $[rd]="firebase",$.update=!0,v!=null&&($[od]=v),a("config",_.measurementId,$),_.measurementId}/**
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
 */class Ld{constructor(e){this.app=e}_delete(){return delete ve[this.app.options.appId],Promise.resolve()}}let ve={},Xt=[];const Yt={};let Ke="dataLayer",Nd="gtag",Jt,cs,Qt=!1;function Md(){const t=[];if(il()&&t.push("This is a browser extension environment."),Mn()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,a)=>`(${a+1}) ${s}`).join(" "),n=j.create("invalid-analytics-context",{errorInfo:e});H.warn(n.message)}}function Dd(t,e,n){Md();const s=t.options.appId;if(!s)throw j.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)H.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw j.create("no-api-key");if(ve[s]!=null)throw j.create("already-exists",{id:s});if(!Qt){hd(Ke);const{wrappedGtag:o,gtagCore:r}=gd(ve,Xt,Yt,Ke,Nd);cs=o,Jt=r,Qt=!0}return ve[s]=Cd(t,Xt,Yt,e,Jt,Ke,n),new Ld(t)}function Vd(t=Bn()){t=Tt(t);const e=ye(t,Pe);return e.isInitialized()?e.getImmediate():Rd(t)}function Rd(t,e={}){const n=ye(t,Pe);if(n.isInitialized()){const a=n.getImmediate();if(we(e,n.getOptions()))return a;throw j.create("already-initialized")}return n.initialize({options:e})}function Od(t,e,n,s){t=Tt(t),Ad(cs,ve[t.app.options.appId],e,n,s).catch(a=>H.error(a))}const Zt="@firebase/analytics",en="0.9.5";function Bd(){ee(new K(Pe,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return Dd(s,a,n)},"PUBLIC")),ee(new K("analytics-internal",t,"PRIVATE")),W(Zt,en),W(Zt,en,"esm2017");function t(e){try{const n=e.getProvider(Pe).getImmediate();return{logEvent:(s,a,o)=>Od(n,s,a,o)}}catch(n){throw j.create("interop-component-reg-failed",{reason:n})}}}Bd();const tn="@firebase/performance",dt="0.6.4";/**
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
 */const ls=dt,Fd="FB-PERF-TRACE-START",Hd="FB-PERF-TRACE-STOP",ft="FB-PERF-TRACE-MEASURE",us="_wt_",ds="_fp",fs="_fcp",hs="_fid",ps="@firebase/performance/config",ms="@firebase/performance/configexpire",Ud="performance",vs="Performance";/**
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
 */const jd={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},B=new be(Ud,vs,jd);/**
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
 */const x=new wt(vs);x.logLevel=C.INFO;/**
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
 */let Xe,gs;class O{constructor(e){if(this.window=e,!e)throw B.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,n,s){!this.performance||!this.performance.measure||this.performance.measure(e,n,s)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!Mn()?(x.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):$t()?!0:(x.info("IndexedDB is not supported by current browswer"),!1)}setupObserver(e,n){if(!this.PerformanceObserver)return;new this.PerformanceObserver(a=>{for(const o of a.getEntries())n(o)}).observe({entryTypes:[e]})}static getInstance(){return Xe===void 0&&(Xe=new O(gs)),Xe}}function zd(t){gs=t}/**
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
 */let _s;function qd(t){const e=t.getId();return e.then(n=>{_s=n}),e}function Mt(){return _s}function Gd(t){const e=t.getToken();return e.then(n=>{}),e}/**
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
 */function nn(t,e){const n=t.length-e.length;if(n<0||n>1)throw B.create("invalid String merger input");const s=[];for(let a=0;a<t.length;a++)s.push(t.charAt(a)),e.length>a&&s.push(e.charAt(a));return s.join("")}/**
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
 */let Ye;class U{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=nn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=nn("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return Ye===void 0&&(Ye=new U),Ye}}/**
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
 */var pe;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"})(pe||(pe={}));const Wd=["firebase_","google_","ga_"],xd=new RegExp("^[a-zA-Z]\\w*$"),Kd=40,Xd=100;function Yd(){const t=O.getInstance().navigator;return t!=null&&t.serviceWorker?t.serviceWorker.controller?2:3:1}function bs(){switch(O.getInstance().document.visibilityState){case"visible":return pe.VISIBLE;case"hidden":return pe.HIDDEN;default:return pe.UNKNOWN}}function Jd(){const e=O.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function Qd(t){return t.length===0||t.length>Kd?!1:!Wd.some(n=>t.startsWith(n))&&!!t.match(xd)}function Zd(t){return t.length!==0&&t.length<=Xd}/**
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
 */function ys(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.appId;if(!n)throw B.create("no app id");return n}function ef(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.projectId;if(!n)throw B.create("no project id");return n}function tf(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.apiKey;if(!n)throw B.create("no api key");return n}/**
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
 */const nf="0.0.1",z={loggingEnabled:!0},sf="FIREBASE_INSTALLATIONS_AUTH";function af(t,e){const n=of();return n?(sn(n),Promise.resolve()):lf(t,e).then(sn).then(s=>rf(s),()=>{})}function of(){const t=O.getInstance().localStorage;if(!t)return;const e=t.getItem(ms);if(!e||!uf(e))return;const n=t.getItem(ps);if(n)try{return JSON.parse(n)}catch{return}}function rf(t){const e=O.getInstance().localStorage;!t||!e||(e.setItem(ps,JSON.stringify(t)),e.setItem(ms,String(Date.now()+U.getInstance().configTimeToLive*60*60*1e3)))}const cf="Could not fetch config, will use default configs";function lf(t,e){return Gd(t.installations).then(n=>{const s=ef(t.app),a=tf(t.app),o=`https://firebaseremoteconfig.googleapis.com/v1/projects/${s}/namespaces/fireperf:fetch?key=${a}`,r=new Request(o,{method:"POST",headers:{Authorization:`${sf} ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:ys(t.app),app_version:ls,sdk_version:nf})});return fetch(r).then(i=>{if(i.ok)return i.json();throw B.create("RC response not ok")})}).catch(()=>{x.info(cf)})}function sn(t){if(!t)return t;const e=U.getInstance(),n=t.entries||{};return n.fpr_enabled!==void 0?e.loggingEnabled=String(n.fpr_enabled)==="true":e.loggingEnabled=z.loggingEnabled,n.fpr_log_source?e.logSource=Number(n.fpr_log_source):z.logSource&&(e.logSource=z.logSource),n.fpr_log_endpoint_url?e.logEndPointUrl=n.fpr_log_endpoint_url:z.logEndPointUrl&&(e.logEndPointUrl=z.logEndPointUrl),n.fpr_log_transport_key?e.transportKey=n.fpr_log_transport_key:z.transportKey&&(e.transportKey=z.transportKey),n.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):z.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=z.networkRequestsSamplingRate),n.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):z.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=z.tracesSamplingRate),e.logTraceAfterSampling=an(e.tracesSamplingRate),e.logNetworkAfterSampling=an(e.networkRequestsSamplingRate),t}function uf(t){return Number(t)>Date.now()}function an(t){return Math.random()<=t}/**
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
 */let Dt=1,Je;function Is(t){return Dt=2,Je=Je||ff(t),Je}function df(){return Dt===3}function ff(t){return hf().then(()=>qd(t.installations)).then(e=>af(t,e)).then(()=>on(),()=>on())}function hf(){const t=O.getInstance().document;return new Promise(e=>{if(t&&t.readyState!=="complete"){const n=()=>{t.readyState==="complete"&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}function on(){Dt=3}/**
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
 */const Vt=10*1e3,pf=5.5*1e3,ks=3,mf=1e3;let Ce=ks,Z=[],rn=!1;function vf(){rn||(Be(pf),rn=!0)}function Be(t){setTimeout(()=>{if(Ce!==0){if(!Z.length)return Be(Vt);gf()}},t)}function gf(){const t=Z.splice(0,mf),e=t.map(s=>({source_extension_json_proto3:s.message,event_time_ms:String(s.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:U.getInstance().logSource,log_event:e};_f(n,t).catch(()=>{Z=[...t,...Z],Ce--,x.info(`Tries left: ${Ce}.`),Be(Vt)})}function _f(t,e){return bf(t).then(n=>(n.ok||x.info("Call to Firebase backend failed."),n.json())).then(n=>{const s=Number(n.nextRequestWaitMillis);let a=Vt;isNaN(s)||(a=Math.max(s,a));const o=n.logResponseDetails;Array.isArray(o)&&o.length>0&&o[0].responseAction==="RETRY_REQUEST_LATER"&&(Z=[...e,...Z],x.info("Retry transport request later.")),Ce=ks,Be(a)})}function bf(t){const e=U.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}function yf(t){if(!t.eventTime||!t.message)throw B.create("invalid cc log");Z=[...Z,t]}function If(t){return(...e)=>{const n=t(...e);yf({message:n,eventTime:Date.now()})}}/**
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
 */let Qe;function $s(t,e){Qe||(Qe=If($f)),Qe(t,e)}function ke(t){const e=U.getInstance();!e.instrumentationEnabled&&t.isAuto||!e.dataCollectionEnabled&&!t.isAuto||O.getInstance().requiredApisAvailable()&&(t.isAuto&&bs()!==pe.VISIBLE||(df()?Ze(t):Is(t.performanceController).then(()=>Ze(t),()=>Ze(t))))}function Ze(t){if(!Mt())return;const e=U.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||setTimeout(()=>$s(t,1),0)}function kf(t){const e=U.getInstance();if(!e.instrumentationEnabled)return;const n=t.url,s=e.logEndPointUrl.split("?")[0],a=e.flTransportEndpointUrl.split("?")[0];n===s||n===a||!e.loggingEnabled||!e.logNetworkAfterSampling||setTimeout(()=>$s(t,0),0)}function $f(t,e){return e===0?Sf(t):Tf(t)}function Sf(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:Ss(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}function Tf(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};Object.keys(t.counters).length!==0&&(e.counters=t.counters);const n=t.getAttributes();Object.keys(n).length!==0&&(e.custom_attributes=n);const s={application_info:Ss(t.performanceController.app),trace_metric:e};return JSON.stringify(s)}function Ss(t){return{google_app_id:ys(t),app_instance_id:Mt(),web_app_info:{sdk_version:ls,page_url:O.getInstance().getUrl(),service_worker_status:Yd(),visibility_state:bs(),effective_connection_type:Jd()},application_process_state:0}}/**
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
 */const wf=100,Ef="_",Af=[ds,fs,hs];function Pf(t,e){return t.length===0||t.length>wf?!1:e&&e.startsWith(us)&&Af.indexOf(t)>-1||!t.startsWith(Ef)}function Cf(t){const e=Math.floor(t);return e<t&&x.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
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
 */class se{constructor(e,n,s=!1,a){this.performanceController=e,this.name=n,this.isAuto=s,this.state=1,this.customAttributes={},this.counters={},this.api=O.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${Fd}-${this.randomId}-${this.name}`,this.traceStopMark=`${Hd}-${this.randomId}-${this.name}`,this.traceMeasure=a||`${ft}-${this.randomId}-${this.name}`,a&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw B.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw B.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),ke(this)}record(e,n,s){if(e<=0)throw B.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw B.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(n*1e3),this.startTimeUs=Math.floor(e*1e3),s&&s.attributes&&(this.customAttributes=Object.assign({},s.attributes)),s&&s.metrics)for(const a of Object.keys(s.metrics))isNaN(Number(s.metrics[a]))||(this.counters[a]=Math.floor(Number(s.metrics[a])));ke(this)}incrementMetric(e,n=1){this.counters[e]===void 0?this.putMetric(e,n):this.putMetric(e,this.counters[e]+n)}putMetric(e,n){if(Pf(e,this.name))this.counters[e]=Cf(n??0);else throw B.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,n){const s=Qd(e),a=Zd(n);if(s&&a){this.customAttributes[e]=n;return}if(!s)throw B.create("invalid attribute name",{attributeName:e});if(!a)throw B.create("invalid attribute value",{attributeValue:n})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),n=e&&e[0];n&&(this.durationUs=Math.floor(n.duration*1e3),this.startTimeUs=Math.floor((n.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,n,s,a){const o=O.getInstance().getUrl();if(!o)return;const r=new se(e,us+o,!0),i=Math.floor(O.getInstance().getTimeOrigin()*1e3);r.setStartTime(i),n&&n[0]&&(r.setDuration(Math.floor(n[0].duration*1e3)),r.putMetric("domInteractive",Math.floor(n[0].domInteractive*1e3)),r.putMetric("domContentLoadedEventEnd",Math.floor(n[0].domContentLoadedEventEnd*1e3)),r.putMetric("loadEventEnd",Math.floor(n[0].loadEventEnd*1e3)));const l="first-paint",m="first-contentful-paint";if(s){const _=s.find($=>$.name===l);_&&_.startTime&&r.putMetric(ds,Math.floor(_.startTime*1e3));const v=s.find($=>$.name===m);v&&v.startTime&&r.putMetric(fs,Math.floor(v.startTime*1e3)),a&&r.putMetric(hs,Math.floor(a*1e3))}ke(r)}static createUserTimingTrace(e,n){const s=new se(e,n,!1,n);ke(s)}}/**
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
 */function cn(t,e){const n=e;if(!n||n.responseStart===void 0)return;const s=O.getInstance().getTimeOrigin(),a=Math.floor((n.startTime+s)*1e3),o=n.responseStart?Math.floor((n.responseStart-n.startTime)*1e3):void 0,r=Math.floor((n.responseEnd-n.startTime)*1e3),i=n.name&&n.name.split("?")[0],l={performanceController:t,url:i,responsePayloadBytes:n.transferSize,startTimeUs:a,timeToResponseInitiatedUs:o,timeToResponseCompletedUs:r};kf(l)}/**
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
 */const Lf=5e3;function ln(t){Mt()&&(setTimeout(()=>Mf(t),0),setTimeout(()=>Nf(t),0),setTimeout(()=>Df(t),0))}function Nf(t){const e=O.getInstance(),n=e.getEntriesByType("resource");for(const s of n)cn(t,s);e.setupObserver("resource",s=>cn(t,s))}function Mf(t){const e=O.getInstance(),n=e.getEntriesByType("navigation"),s=e.getEntriesByType("paint");if(e.onFirstInputDelay){let a=setTimeout(()=>{se.createOobTrace(t,n,s),a=void 0},Lf);e.onFirstInputDelay(o=>{a&&(clearTimeout(a),se.createOobTrace(t,n,s,o))})}else se.createOobTrace(t,n,s)}function Df(t){const e=O.getInstance(),n=e.getEntriesByType("measure");for(const s of n)un(t,s);e.setupObserver("measure",s=>un(t,s))}function un(t,e){const n=e.name;n.substring(0,ft.length)!==ft&&se.createUserTimingTrace(t,n)}/**
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
 */class Vf{constructor(e,n){this.app=e,this.installations=n,this.initialized=!1}_init(e){this.initialized||((e==null?void 0:e.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),(e==null?void 0:e.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),O.getInstance().requiredApisAvailable()?St().then(n=>{n&&(vf(),Is(this).then(()=>ln(this),()=>ln(this)),this.initialized=!0)}).catch(n=>{x.info(`Environment doesn't support IndexedDB: ${n}`)}):x.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){U.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return U.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){U.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return U.getInstance().dataCollectionEnabled}}const Rf="[DEFAULT]";function Of(t=Bn()){return t=Tt(t),ye(t,"performance").getImmediate()}const Bf=(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();if(n.name!==Rf)throw B.create("FB not default");if(typeof window>"u")throw B.create("no window");zd(window);const a=new Vf(n,s);return a._init(e),a};function Ff(){ee(new K("performance",Bf,"PUBLIC")),W(tn,dt),W(tn,dt,"esm2017")}Ff();const Hf=t=>(V("data-v-3835a11e"),t=t(),R(),t),Uf=Hf(()=>h("div",{"data-v-98ddab3d":"","data-v-8f7cd5e4":"",class:"VPContent",id:"VPContent"},[h("div",{"data-v-6c4a3ffe":"","data-v-98ddab3d":"",class:"NotFound"},[h("img",{src:"https://rust.coldmint.top/ftp/ling/cdnpng/logo.png",alt:"",class:"notfound-img"}),h("p",{"data-v-6c4a3ffe":"",class:"code"},"404"),h("h1",{"data-v-6c4a3ffe":"",class:"title"}," 你干嘛~，这里什么都没有! "),h("div",{"data-v-6c4a3ffe":"",class:"divider"}),h("blockquote",{"data-v-6c4a3ffe":"",class:"quote"}," 你寻找的页面可能不存在或被迁移…… "),h("div",{"data-v-6c4a3ffe":"",class:"action"},[h("a",{"data-v-6c4a3ffe":"",class:"link",href:"/","aria-label":"go to home"}," 返回主页 ")])])],-1)),jf={__name:"NotFound",setup(t){const{Layout:e}=Pn;return(n,s)=>(c(),k(u(e),null,{"not-found":p(()=>[Uf]),_:1}))}},zf=I(jf,[["__scopeId","data-v-3835a11e"]]),qf=()=>{const e=On({apiKey:"AIzaSyANVvapu0ihi1cM8ZzuXTkwjx9lM_J1RyQ",authDomain:"rw-api-code-d0779.firebaseapp.com",projectId:"rw-api-code-d0779",storageBucket:"rw-api-code-d0779.appspot.com",messagingSenderId:"363611843335",appId:"1:363611843335:web:f15aef7ab427f52b4033a2",measurementId:"G-XJH5TKP5VL"});return Vd(e),Of(e),"Firebase initialized successfully"};(async function(){try{const t=await qf();console.log(t)}catch(t){console.error(t)}})();function Gf(t){return new Promise(e=>setTimeout(e,t))}async function Wf(){try{await navigator.permissions.query({name:"clipboard-write"})}catch(t){console.error(t)}}async function xf(){try{await Gf(1e3);const t=document.getElementsByClassName("copy");for(let e=0;e<t.length;e++){const n=t[e];n.addEventListener("touchend",async()=>{await Wf();const o=[...n.parentNode.querySelector("code").querySelectorAll("span")],r=[...new Set(o.map(i=>i.textContent))].join("");try{await navigator.clipboard.writeText(r)}catch{const l=document.createElement("textarea");l.value=r,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l)}})}}catch(t){console.error(t)}}xf();const Xf={...Pn,Layout:zf};export{Xf as R,Ti as c,w as u};
