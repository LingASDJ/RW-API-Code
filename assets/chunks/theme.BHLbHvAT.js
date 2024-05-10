const __vite__fileDeps=["assets/chunks/VPLocalSearchBox.TlSQsKbu.js","assets/chunks/framework.C8a7ZmGe.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as b,o as c,c as f,r as d,n as L,a as W,t as A,b as $,w as p,e as _,T as ht,_ as k,u as Ss,i as Ts,f as ws,g as pt,h as S,j as P,k as ue,l as h,m as u,p as R,q as O,s as re,v as et,x as ne,y as Ce,z as mt,A as un,B as Es,C as As,D as de,F as N,E as F,G as dn,H as Le,I as y,J as pe,K as fn,L as Ne,M as ke,N as Me,O as Ps,P as hn,Q as tt,R as Cs,S as pn,U as De,V as Ls,W as Ns,X as Ms,Y as mn,Z as vn,$ as Ds,a0 as Vs,a1 as Rs,a2 as Os}from"./framework.C8a7ZmGe.js";const Bs=b({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(c(),f("span",{class:L(["VPBadge",e.type])},[d(e.$slots,"default",{},()=>[W(A(e.text),1)])],2))}}),Fs={key:0,class:"VPBackdrop"},Hs=b({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(c(),$(ht,{name:"fade"},{default:p(()=>[e.show?(c(),f("div",Fs)):_("",!0)]),_:1}))}}),Us=k(Hs,[["__scopeId","data-v-c79a1216"]]),w=Ss;function js(t,e){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(t,e):(t(),(s=!0)&&setTimeout(()=>s=!1,e))}}function nt(t){return/^\//.test(t)?t:`/${t}`}function vt(t){const{pathname:e,search:n,hash:s,protocol:a}=new URL(t,"http://a.com");if(Ts(t)||t.startsWith("#")||!a.startsWith("http")||!ws(e))return t;const{site:o}=w(),r=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${n}${s}`);return pt(r)}function _e({removeCurrent:t=!0,correspondingLink:e=!1}={}){const{site:n,localeIndex:s,page:a,theme:o,hash:r}=w(),i=S(()=>{var m,g;return{index:s.value,label:(m=n.value.locales[s.value])==null?void 0:m.label,link:((g=n.value.locales[s.value])==null?void 0:g.link)||(s.value==="root"?"/":`/${s.value}/`)}});return{localeLinks:S(()=>Object.entries(n.value.locales).flatMap(([m,g])=>t&&i.value.label===g.label?[]:{index:m,text:g.label,link:zs(g.link||(m==="root"?"/":`/${m}/`),o.value.i18nRouting!==!1&&e,a.value.relativePath.slice(i.value.link.length-1),!n.value.cleanUrls)+r.value})),currentLang:i}}function zs(t,e,n,s){return e?t.replace(/\/$/,"")+nt(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):t}const qs=t=>(R("data-v-4f08a194"),t=t(),O(),t),Gs={class:"NotFound"},xs={class:"code"},Ws={class:"title"},Ks=qs(()=>h("div",{class:"divider"},null,-1)),Xs={class:"quote"},Ys={class:"action"},Js=["href","aria-label"],Qs=b({__name:"NotFound",setup(t){const{site:e}=w(),{localeLinks:n}=_e({removeCurrent:!1}),s=P({link:"/",index:"root"});ue(()=>{const o=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");n.value.length&&(s.value=n.value.find(({link:r})=>r.startsWith(o))||n.value[0])});const a=S(()=>{var o,r,i,l;return{code:404,title:"PAGE NOT FOUND",quote:"But if you don't change your direction, and if you keep looking, you may end up where you are heading.",linkLabel:"go to home",linkText:"Take me home",...s.value.index==="root"?(o=e.value.themeConfig)==null?void 0:o.notFound:(l=(i=(r=e.value.locales)==null?void 0:r[s.value.index])==null?void 0:i.themeConfig)==null?void 0:l.notFound}});return(o,r)=>(c(),f("div",Gs,[h("p",xs,A(a.value.code),1),h("h1",Ws,A(a.value.title),1),Ks,h("blockquote",Xs,A(a.value.quote),1),h("div",Ys,[h("a",{class:"link",href:u(pt)(s.value.link),"aria-label":a.value.linkLabel},A(a.value.linkText),9,Js)])]))}}),Zs=k(Qs,[["__scopeId","data-v-4f08a194"]]);function gn(t,e){if(Array.isArray(t))return $e(t);if(t==null)return[];e=nt(e);const n=Object.keys(t).sort((a,o)=>o.split("/").length-a.split("/").length).find(a=>e.startsWith(nt(a))),s=n?t[n]:[];return Array.isArray(s)?$e(s):$e(s.items,s.base)}function ea(t){const e=[];let n=0;for(const s in t){const a=t[s];if(a.items){n=e.push(a);continue}e[n]||e.push({items:[]}),e[n].items.push(a)}return e}function ta(t){const e=[];function n(s){for(const a of s)a.text&&a.link&&e.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&n(a.items)}return n(t),e}function st(t,e){return Array.isArray(e)?e.some(n=>st(t,n)):re(t,e.link)?!0:e.items?st(t,e.items):!1}function $e(t,e){return[...t].map(n=>{const s={...n},a=s.base||e;return a&&s.link&&(s.link=a+s.link),s.items&&(s.items=$e(s.items,a)),s})}function X(){const{frontmatter:t,page:e,theme:n}=w(),s=et("(min-width: 960px)"),a=P(!1),o=S(()=>{const D=n.value.sidebar,E=e.value.relativePath;return D?gn(D,E):[]}),r=P(o.value);ne(o,(D,E)=>{JSON.stringify(D)!==JSON.stringify(E)&&(r.value=o.value)});const i=S(()=>t.value.sidebar!==!1&&r.value.length>0&&t.value.layout!=="home"),l=S(()=>m?t.value.aside==null?n.value.aside==="left":t.value.aside==="left":!1),m=S(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:n.value.aside!==!1),g=S(()=>i.value&&s.value),v=S(()=>i.value?ea(r.value):[]);function I(){a.value=!0}function T(){a.value=!1}function M(){a.value?T():I()}return{isOpen:a,sidebar:r,sidebarGroups:v,hasSidebar:i,hasAside:m,leftAside:l,isSidebarEnabled:g,open:I,close:T,toggle:M}}function na(t,e){let n;Ce(()=>{n=t.value?document.activeElement:void 0}),ue(()=>{window.addEventListener("keyup",s)}),mt(()=>{window.removeEventListener("keyup",s)});function s(a){a.key==="Escape"&&t.value&&(e(),n==null||n.focus())}}function sa(t){const{page:e,hash:n}=w(),s=P(!1),a=S(()=>t.value.collapsed!=null),o=S(()=>!!t.value.link),r=P(!1),i=()=>{r.value=re(e.value.relativePath,t.value.link)};ne([e,t,n],i),ue(i);const l=S(()=>r.value?!0:t.value.items?st(e.value.relativePath,t.value.items):!1),m=S(()=>!!(t.value.items&&t.value.items.length));Ce(()=>{s.value=!!(a.value&&t.value.collapsed)}),un(()=>{(r.value||l.value)&&(s.value=!1)});function g(){a.value&&(s.value=!s.value)}return{collapsed:s,collapsible:a,isLink:o,isActiveLink:r,hasActiveLink:l,hasChildren:m,toggle:g}}function aa(){const{hasSidebar:t}=X(),e=et("(min-width: 960px)"),n=et("(min-width: 1280px)");return{isAsideEnabled:S(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const at=[];function _n(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function gt(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const s=Number(n.tagName[1]);return{element:n,title:oa(n),link:"#"+n.id,level:s}});return ra(e,t)}function oa(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor")||n.classList.contains("ignore-header"))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function ra(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[s,a]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;t=t.filter(r=>r.level>=s&&r.level<=a),at.length=0;for(const{element:r,link:i}of t)at.push({element:r,link:i});const o=[];e:for(let r=0;r<t.length;r++){const i=t[r];if(r===0)o.push(i);else{for(let l=r-1;l>=0;l--){const m=t[l];if(m.level<i.level){(m.children||(m.children=[])).push(i);continue e}}o.push(i)}}return o}function ia(t,e){const{isAsideEnabled:n}=aa(),s=js(o,100);let a=null;ue(()=>{requestAnimationFrame(o),window.addEventListener("scroll",s)}),Es(()=>{r(location.hash)}),mt(()=>{window.removeEventListener("scroll",s)});function o(){if(!n.value)return;const i=window.scrollY,l=window.innerHeight,m=document.body.offsetHeight,g=Math.abs(i+l-m)<1,v=at.map(({element:T,link:M})=>({link:M,top:ca(T)})).filter(({top:T})=>!Number.isNaN(T)).sort((T,M)=>T.top-M.top);if(!v.length){r(null);return}if(i<1){r(null);return}if(g){r(v[v.length-1].link);return}let I=null;for(const{link:T,top:M}of v){if(M>i+As()+4)break;I=T}r(I)}function r(i){a&&a.classList.remove("active"),i==null?a=null:a=t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`);const l=a;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function ca(t){let e=0;for(;t!==document.body;){if(t===null)return NaN;e+=t.offsetTop,t=t.offsetParent}return e}const la=["href","title"],ua=b({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:n}){const s=n.href.split("#")[1],a=document.getElementById(decodeURIComponent(s));a==null||a.focus({preventScroll:!0})}return(n,s)=>{const a=de("VPDocOutlineItem",!0);return c(),f("ul",{class:L(["VPDocOutlineItem",n.root?"root":"nested"])},[(c(!0),f(N,null,F(n.headers,({children:o,link:r,title:i})=>(c(),f("li",null,[h("a",{class:"outline-link",href:r,onClick:e,title:i},A(i),9,la),o!=null&&o.length?(c(),$(a,{key:0,headers:o},null,8,["headers"])):_("",!0)]))),256))],2)}}}),bn=k(ua,[["__scopeId","data-v-b933a997"]]),da={class:"content"},fa={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},ha=b({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:n}=w(),s=dn([]);Le(()=>{s.value=gt(e.value.outline??n.value.outline)});const a=P(),o=P();return ia(a,o),(r,i)=>(c(),f("nav",{"aria-labelledby":"doc-outline-aria-label",class:L(["VPDocAsideOutline",{"has-outline":s.value.length>0}]),ref_key:"container",ref:a,role:"navigation"},[h("div",da,[h("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),h("div",fa,A(u(_n)(u(n))),1),y(bn,{headers:s.value,root:!0},null,8,["headers"])])],2))}}),pa=k(ha,[["__scopeId","data-v-269c27a6"]]),ma={class:"VPDocAsideCarbonAds"},va=b({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,s)=>(c(),f("div",ma,[y(u(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),ga=t=>(R("data-v-3f215769"),t=t(),O(),t),_a={class:"VPDocAside"},ba=ga(()=>h("div",{class:"spacer"},null,-1)),ya=b({__name:"VPDocAside",setup(t){const{theme:e}=w();return(n,s)=>(c(),f("div",_a,[d(n.$slots,"aside-top",{},void 0,!0),d(n.$slots,"aside-outline-before",{},void 0,!0),y(pa),d(n.$slots,"aside-outline-after",{},void 0,!0),ba,d(n.$slots,"aside-ads-before",{},void 0,!0),u(e).carbonAds?(c(),$(va,{key:0,"carbon-ads":u(e).carbonAds},null,8,["carbon-ads"])):_("",!0),d(n.$slots,"aside-ads-after",{},void 0,!0),d(n.$slots,"aside-bottom",{},void 0,!0)]))}}),Ia=k(ya,[["__scopeId","data-v-3f215769"]]);function ka(){const{theme:t,page:e}=w();return S(()=>{const{text:n="Edit this page",pattern:s=""}=t.value.editLink||{};let a;return typeof s=="function"?a=s(e.value):a=s.replace(/:path/g,e.value.filePath),{url:a,text:n}})}function $a(){const{page:t,theme:e,frontmatter:n}=w();return S(()=>{var m,g,v,I,T,M,D,E;const s=gn(e.value.sidebar,t.value.relativePath),a=ta(s),o=Sa(a,Y=>Y.link.replace(/[?#].*$/,"")),r=o.findIndex(Y=>re(t.value.relativePath,Y.link)),i=((m=e.value.docFooter)==null?void 0:m.prev)===!1&&!n.value.prev||n.value.prev===!1,l=((g=e.value.docFooter)==null?void 0:g.next)===!1&&!n.value.next||n.value.next===!1;return{prev:i?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((v=o[r-1])==null?void 0:v.docFooterText)??((I=o[r-1])==null?void 0:I.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((T=o[r-1])==null?void 0:T.link)},next:l?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((M=o[r+1])==null?void 0:M.docFooterText)??((D=o[r+1])==null?void 0:D.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((E=o[r+1])==null?void 0:E.link)}}})}function Sa(t,e){const n=new Set;return t.filter(s=>{const a=e(s);return n.has(a)?!1:n.add(a)})}const q=b({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=S(()=>e.tag??(e.href?"a":"span")),s=S(()=>e.href&&fn.test(e.href));return(a,o)=>(c(),$(pe(n.value),{class:L(["VPLink",{link:a.href,"vp-external-link-icon":s.value,"no-icon":a.noIcon}]),href:a.href?u(vt)(a.href):void 0,target:a.target??(s.value?"_blank":void 0),rel:a.rel??(s.value?"noreferrer":void 0)},{default:p(()=>[d(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Ta={class:"VPLastUpdated"},wa=["datetime"],Ea=b({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,frontmatter:s,lang:a}=w(),o=S(()=>new Date(s.value.lastUpdated??n.value.lastUpdated)),r=S(()=>o.value.toISOString()),i=P("");return ue(()=>{Ce(()=>{var l,m,g;i.value=new Intl.DateTimeFormat((m=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&m.forceLocale?a.value:void 0,((g=e.value.lastUpdated)==null?void 0:g.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(l,m)=>{var g;return c(),f("p",Ta,[W(A(((g=u(e).lastUpdated)==null?void 0:g.text)||u(e).lastUpdatedText||"Last updated")+": ",1),h("time",{datetime:r.value},A(i.value),9,wa)])}}}),Aa=k(Ea,[["__scopeId","data-v-7e05ebdb"]]),yn=t=>(R("data-v-d4a0bba5"),t=t(),O(),t),Pa={key:0,class:"VPDocFooter"},Ca={key:0,class:"edit-info"},La={key:0,class:"edit-link"},Na=yn(()=>h("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Ma={key:1,class:"last-updated"},Da={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Va=yn(()=>h("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),Ra={class:"pager"},Oa=["innerHTML"],Ba=["innerHTML"],Fa={class:"pager"},Ha=["innerHTML"],Ua=["innerHTML"],ja=b({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:s}=w(),a=ka(),o=$a(),r=S(()=>e.value.editLink&&s.value.editLink!==!1),i=S(()=>n.value.lastUpdated&&s.value.lastUpdated!==!1),l=S(()=>r.value||i.value||o.value.prev||o.value.next);return(m,g)=>{var v,I,T,M;return l.value?(c(),f("footer",Pa,[d(m.$slots,"doc-footer-before",{},void 0,!0),r.value||i.value?(c(),f("div",Ca,[r.value?(c(),f("div",La,[y(q,{class:"edit-link-button",href:u(a).url,"no-icon":!0},{default:p(()=>[Na,W(" "+A(u(a).text),1)]),_:1},8,["href"])])):_("",!0),i.value?(c(),f("div",Ma,[y(Aa)])):_("",!0)])):_("",!0),(v=u(o).prev)!=null&&v.link||(I=u(o).next)!=null&&I.link?(c(),f("nav",Da,[Va,h("div",Ra,[(T=u(o).prev)!=null&&T.link?(c(),$(q,{key:0,class:"pager-link prev",href:u(o).prev.link},{default:p(()=>{var D;return[h("span",{class:"desc",innerHTML:((D=u(e).docFooter)==null?void 0:D.prev)||"Previous page"},null,8,Oa),h("span",{class:"title",innerHTML:u(o).prev.text},null,8,Ba)]}),_:1},8,["href"])):_("",!0)]),h("div",Fa,[(M=u(o).next)!=null&&M.link?(c(),$(q,{key:0,class:"pager-link next",href:u(o).next.link},{default:p(()=>{var D;return[h("span",{class:"desc",innerHTML:((D=u(e).docFooter)==null?void 0:D.next)||"Next page"},null,8,Ha),h("span",{class:"title",innerHTML:u(o).next.text},null,8,Ua)]}),_:1},8,["href"])):_("",!0)])])):_("",!0)])):_("",!0)}}}),za=k(ja,[["__scopeId","data-v-d4a0bba5"]]),qa=t=>(R("data-v-39a288b8"),t=t(),O(),t),Ga={class:"container"},xa=qa(()=>h("div",{class:"aside-curtain"},null,-1)),Wa={class:"aside-container"},Ka={class:"aside-content"},Xa={class:"content"},Ya={class:"content-container"},Ja={class:"main"},Qa=b({__name:"VPDoc",setup(t){const{theme:e}=w(),n=Ne(),{hasSidebar:s,hasAside:a,leftAside:o}=X(),r=S(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(i,l)=>{const m=de("Content");return c(),f("div",{class:L(["VPDoc",{"has-sidebar":u(s),"has-aside":u(a)}])},[d(i.$slots,"doc-top",{},void 0,!0),h("div",Ga,[u(a)?(c(),f("div",{key:0,class:L(["aside",{"left-aside":u(o)}])},[xa,h("div",Wa,[h("div",Ka,[y(Ia,null,{"aside-top":p(()=>[d(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[d(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[d(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[d(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[d(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[d(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):_("",!0),h("div",Xa,[h("div",Ya,[d(i.$slots,"doc-before",{},void 0,!0),h("main",Ja,[y(m,{class:L(["vp-doc",[r.value,u(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),y(za,null,{"doc-footer-before":p(()=>[d(i.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),d(i.$slots,"doc-after",{},void 0,!0)])])]),d(i.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Za=k(Qa,[["__scopeId","data-v-39a288b8"]]),eo=b({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const e=t,n=S(()=>e.href&&fn.test(e.href)),s=S(()=>e.tag||e.href?"a":"button");return(a,o)=>(c(),$(pe(s.value),{class:L(["VPButton",[a.size,a.theme]]),href:a.href?u(vt)(a.href):void 0,target:e.target??(n.value?"_blank":void 0),rel:e.rel??(n.value?"noreferrer":void 0)},{default:p(()=>[W(A(a.text),1)]),_:1},8,["class","href","target","rel"]))}}),to=k(eo,[["__scopeId","data-v-cad61b99"]]),no=["src","alt"],so=b({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const s=de("VPImage",!0);return e.image?(c(),f(N,{key:0},[typeof e.image=="string"||"src"in e.image?(c(),f("img",ke({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:u(pt)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,no)):(c(),f(N,{key:1},[y(s,ke({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),y(s,ke({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):_("",!0)}}}),Se=k(so,[["__scopeId","data-v-8426fc1a"]]),ao=t=>(R("data-v-303bb580"),t=t(),O(),t),oo={class:"container"},ro={class:"main"},io={key:0,class:"name"},co=["innerHTML"],lo=["innerHTML"],uo=["innerHTML"],fo={key:0,class:"actions"},ho={key:0,class:"image"},po={class:"image-container"},mo=ao(()=>h("div",{class:"image-bg"},null,-1)),vo=b({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=Me("hero-image-slot-exists");return(n,s)=>(c(),f("div",{class:L(["VPHero",{"has-image":n.image||u(e)}])},[h("div",oo,[h("div",ro,[d(n.$slots,"home-hero-info-before",{},void 0,!0),d(n.$slots,"home-hero-info",{},()=>[n.name?(c(),f("h1",io,[h("span",{innerHTML:n.name,class:"clip"},null,8,co)])):_("",!0),n.text?(c(),f("p",{key:1,innerHTML:n.text,class:"text"},null,8,lo)):_("",!0),n.tagline?(c(),f("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,uo)):_("",!0)],!0),d(n.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(c(),f("div",fo,[(c(!0),f(N,null,F(n.actions,a=>(c(),f("div",{key:a.link,class:"action"},[y(to,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link,target:a.target,rel:a.rel},null,8,["theme","text","href","target","rel"])]))),128))])):_("",!0),d(n.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||u(e)?(c(),f("div",ho,[h("div",po,[mo,d(n.$slots,"home-hero-image",{},()=>[n.image?(c(),$(Se,{key:0,class:"image-src",image:n.image},null,8,["image"])):_("",!0)],!0)])])):_("",!0)])],2))}}),go=k(vo,[["__scopeId","data-v-303bb580"]]),_o=b({__name:"VPHomeHero",setup(t){const{frontmatter:e}=w();return(n,s)=>u(e).hero?(c(),$(go,{key:0,class:"VPHomeHero",name:u(e).hero.name,text:u(e).hero.text,tagline:u(e).hero.tagline,image:u(e).hero.image,actions:u(e).hero.actions},{"home-hero-info-before":p(()=>[d(n.$slots,"home-hero-info-before")]),"home-hero-info":p(()=>[d(n.$slots,"home-hero-info")]),"home-hero-info-after":p(()=>[d(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":p(()=>[d(n.$slots,"home-hero-actions-after")]),"home-hero-image":p(()=>[d(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):_("",!0)}}),bo=t=>(R("data-v-a3976bdc"),t=t(),O(),t),yo={class:"box"},Io={key:0,class:"icon"},ko=["innerHTML"],$o=["innerHTML"],So=["innerHTML"],To={key:4,class:"link-text"},wo={class:"link-text-value"},Eo=bo(()=>h("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),Ao=b({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(c(),$(q,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:p(()=>[h("article",yo,[typeof e.icon=="object"&&e.icon.wrap?(c(),f("div",Io,[y(Se,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(c(),$(Se,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(c(),f("div",{key:2,class:"icon",innerHTML:e.icon},null,8,ko)):_("",!0),h("h2",{class:"title",innerHTML:e.title},null,8,$o),e.details?(c(),f("p",{key:3,class:"details",innerHTML:e.details},null,8,So)):_("",!0),e.linkText?(c(),f("div",To,[h("p",wo,[W(A(e.linkText)+" ",1),Eo])])):_("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Po=k(Ao,[["__scopeId","data-v-a3976bdc"]]),Co={key:0,class:"VPFeatures"},Lo={class:"container"},No={class:"items"},Mo=b({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=S(()=>{const s=e.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,a)=>s.features?(c(),f("div",Co,[h("div",Lo,[h("div",No,[(c(!0),f(N,null,F(s.features,o=>(c(),f("div",{key:o.title,class:L(["item",[n.value]])},[y(Po,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):_("",!0)}}),Do=k(Mo,[["__scopeId","data-v-a6181336"]]),Vo=b({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=w();return(n,s)=>u(e).features?(c(),$(Do,{key:0,class:"VPHomeFeatures",features:u(e).features},null,8,["features"])):_("",!0)}}),Ro=b({__name:"VPHomeContent",setup(t){const{width:e}=Ps({includeScrollbar:!1});return(n,s)=>(c(),f("div",{class:"vp-doc container",style:hn(u(e)?{"--vp-offset":`calc(50% - ${u(e)/2}px)`}:{})},[d(n.$slots,"default",{},void 0,!0)],4))}}),Oo=k(Ro,[["__scopeId","data-v-82d4af08"]]),Bo={class:"VPHome"},Fo=b({__name:"VPHome",setup(t){const{frontmatter:e}=w();return(n,s)=>{const a=de("Content");return c(),f("div",Bo,[d(n.$slots,"home-hero-before",{},void 0,!0),y(_o,null,{"home-hero-info-before":p(()=>[d(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[d(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[d(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[d(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[d(n.$slots,"home-hero-image",{},void 0,!0)]),_:3}),d(n.$slots,"home-hero-after",{},void 0,!0),d(n.$slots,"home-features-before",{},void 0,!0),y(Vo),d(n.$slots,"home-features-after",{},void 0,!0),u(e).markdownStyles!==!1?(c(),$(Oo,{key:0},{default:p(()=>[y(a)]),_:1})):(c(),$(a,{key:1}))])}}}),Ho=k(Fo,[["__scopeId","data-v-686f80a6"]]),Uo={},jo={class:"VPPage"};function zo(t,e){const n=de("Content");return c(),f("div",jo,[d(t.$slots,"page-top"),y(n),d(t.$slots,"page-bottom")])}const qo=k(Uo,[["render",zo]]),Go=b({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=w(),{hasSidebar:s}=X();return(a,o)=>(c(),f("div",{class:L(["VPContent",{"has-sidebar":u(s),"is-home":u(n).layout==="home"}]),id:"VPContent"},[u(e).isNotFound?d(a.$slots,"not-found",{key:0},()=>[y(Zs)],!0):u(n).layout==="page"?(c(),$(qo,{key:1},{"page-top":p(()=>[d(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[d(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(n).layout==="home"?(c(),$(Ho,{key:2},{"home-hero-before":p(()=>[d(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[d(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[d(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[d(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[d(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[d(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[d(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[d(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[d(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(n).layout&&u(n).layout!=="doc"?(c(),$(pe(u(n).layout),{key:3})):(c(),$(Za,{key:4},{"doc-top":p(()=>[d(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[d(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":p(()=>[d(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[d(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[d(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":p(()=>[d(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":p(()=>[d(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[d(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[d(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[d(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":p(()=>[d(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),xo=k(Go,[["__scopeId","data-v-1428d186"]]),Wo={class:"container"},Ko=["innerHTML"],Xo=["innerHTML"],Yo=b({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=w(),{hasSidebar:s}=X();return(a,o)=>u(e).footer&&u(n).footer!==!1?(c(),f("footer",{key:0,class:L(["VPFooter",{"has-sidebar":u(s)}])},[h("div",Wo,[u(e).footer.message?(c(),f("p",{key:0,class:"message",innerHTML:u(e).footer.message},null,8,Ko)):_("",!0),u(e).footer.copyright?(c(),f("p",{key:1,class:"copyright",innerHTML:u(e).footer.copyright},null,8,Xo)):_("",!0)])],2)):_("",!0)}}),Jo=k(Yo,[["__scopeId","data-v-e315a0ad"]]);function Qo(){const{theme:t,frontmatter:e}=w(),n=dn([]),s=S(()=>n.value.length>0);return Le(()=>{n.value=gt(e.value.outline??t.value.outline)}),{headers:n,hasLocalNav:s}}const Zo=t=>(R("data-v-17a5e62e"),t=t(),O(),t),er={class:"menu-text"},tr=Zo(()=>h("span",{class:"vpi-chevron-right icon"},null,-1)),nr={class:"header"},sr={class:"outline"},ar=b({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=w(),s=P(!1),a=P(0),o=P(),r=P();function i(v){var I;(I=o.value)!=null&&I.contains(v.target)||(s.value=!1)}ne(s,v=>{if(v){document.addEventListener("click",i);return}document.removeEventListener("click",i)}),tt("Escape",()=>{s.value=!1}),Le(()=>{s.value=!1});function l(){s.value=!s.value,a.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function m(v){v.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),Cs(()=>{s.value=!1}))}function g(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(v,I)=>(c(),f("div",{class:"VPLocalNavOutlineDropdown",style:hn({"--vp-vh":a.value+"px"}),ref_key:"main",ref:o},[v.headers.length>0?(c(),f("button",{key:0,onClick:l,class:L({open:s.value})},[h("span",er,A(u(_n)(u(n))),1),tr],2)):(c(),f("button",{key:1,onClick:g},A(u(n).returnToTopLabel||"Return to top"),1)),y(ht,{name:"flyout"},{default:p(()=>[s.value?(c(),f("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:m},[h("div",nr,[h("a",{class:"top-link",href:"#",onClick:g},A(u(n).returnToTopLabel||"Return to top"),1)]),h("div",sr,[y(bn,{headers:v.headers},null,8,["headers"])])],512)):_("",!0)]),_:1})],4))}}),or=k(ar,[["__scopeId","data-v-17a5e62e"]]),rr=t=>(R("data-v-a6f0e41e"),t=t(),O(),t),ir={class:"container"},cr=["aria-expanded"],lr=rr(()=>h("span",{class:"vpi-align-left menu-icon"},null,-1)),ur={class:"menu-text"},dr=b({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:n}=w(),{hasSidebar:s}=X(),{headers:a}=Qo(),{y:o}=pn(),r=P(0);ue(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Le(()=>{a.value=gt(n.value.outline??e.value.outline)});const i=S(()=>a.value.length===0),l=S(()=>i.value&&!s.value),m=S(()=>({VPLocalNav:!0,"has-sidebar":s.value,empty:i.value,fixed:l.value}));return(g,v)=>u(n).layout!=="home"&&(!l.value||u(o)>=r.value)?(c(),f("div",{key:0,class:L(m.value)},[h("div",ir,[u(s)?(c(),f("button",{key:0,class:"menu","aria-expanded":g.open,"aria-controls":"VPSidebarNav",onClick:v[0]||(v[0]=I=>g.$emit("open-menu"))},[lr,h("span",ur,A(u(e).sidebarMenuLabel||"Menu"),1)],8,cr)):_("",!0),y(or,{headers:u(a),navHeight:r.value},null,8,["headers","navHeight"])])],2)):_("",!0)}}),fr=k(dr,[["__scopeId","data-v-a6f0e41e"]]);function hr(){const t=P(!1);function e(){t.value=!0,window.addEventListener("resize",a)}function n(){t.value=!1,window.removeEventListener("resize",a)}function s(){t.value?n():e()}function a(){window.outerWidth>=768&&n()}const o=Ne();return ne(()=>o.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:s}}const pr={},mr={class:"VPSwitch",type:"button",role:"switch"},vr={class:"check"},gr={key:0,class:"icon"};function _r(t,e){return c(),f("button",mr,[h("span",vr,[t.$slots.default?(c(),f("span",gr,[d(t.$slots,"default",{},void 0,!0)])):_("",!0)])])}const br=k(pr,[["render",_r],["__scopeId","data-v-1d5665e3"]]),In=t=>(R("data-v-d1f28634"),t=t(),O(),t),yr=In(()=>h("span",{class:"vpi-sun sun"},null,-1)),Ir=In(()=>h("span",{class:"vpi-moon moon"},null,-1)),kr=b({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:n}=w(),s=Me("toggle-appearance",()=>{e.value=!e.value}),a=S(()=>e.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme");return(o,r)=>(c(),$(br,{title:a.value,class:"VPSwitchAppearance","aria-checked":u(e),onClick:u(s)},{default:p(()=>[yr,Ir]),_:1},8,["title","aria-checked","onClick"]))}}),_t=k(kr,[["__scopeId","data-v-d1f28634"]]),$r={key:0,class:"VPNavBarAppearance"},Sr=b({__name:"VPNavBarAppearance",setup(t){const{site:e}=w();return(n,s)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),f("div",$r,[y(_t)])):_("",!0)}}),Tr=k(Sr,[["__scopeId","data-v-e6aabb21"]]),bt=P();let kn=!1,Ue=0;function wr(t){const e=P(!1);if(De){!kn&&Er(),Ue++;const n=ne(bt,s=>{var a,o,r;s===t.el.value||(a=t.el.value)!=null&&a.contains(s)?(e.value=!0,(o=t.onFocus)==null||o.call(t)):(e.value=!1,(r=t.onBlur)==null||r.call(t))});mt(()=>{n(),Ue--,Ue||Ar()})}return Ls(e)}function Er(){document.addEventListener("focusin",$n),kn=!0,bt.value=document.activeElement}function Ar(){document.removeEventListener("focusin",$n)}function $n(){bt.value=document.activeElement}const Pr={class:"VPMenuLink"},Cr=b({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=w();return(n,s)=>(c(),f("div",Pr,[y(q,{class:L({active:u(re)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:p(()=>[W(A(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Ve=k(Cr,[["__scopeId","data-v-43f1e123"]]),Lr={class:"VPMenuGroup"},Nr={key:0,class:"title"},Mr=b({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),f("div",Lr,[e.text?(c(),f("p",Nr,A(e.text),1)):_("",!0),(c(!0),f(N,null,F(e.items,s=>(c(),f(N,null,["link"in s?(c(),$(Ve,{key:0,item:s},null,8,["item"])):_("",!0)],64))),256))]))}}),Dr=k(Mr,[["__scopeId","data-v-69e747b5"]]),Vr={class:"VPMenu"},Rr={key:0,class:"items"},Or=b({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(c(),f("div",Vr,[e.items?(c(),f("div",Rr,[(c(!0),f(N,null,F(e.items,s=>(c(),f(N,{key:s.text},["link"in s?(c(),$(Ve,{key:0,item:s},null,8,["item"])):(c(),$(Dr,{key:1,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):_("",!0),d(e.$slots,"default",{},void 0,!0)]))}}),Br=k(Or,[["__scopeId","data-v-e7ea1737"]]),Fr=t=>(R("data-v-b6c34ac9"),t=t(),O(),t),Hr=["aria-expanded","aria-label"],Ur={key:0,class:"text"},jr=["innerHTML"],zr=Fr(()=>h("span",{class:"vpi-chevron-down text-icon"},null,-1)),qr={key:1,class:"vpi-more-horizontal icon"},Gr={class:"menu"},xr=b({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=P(!1),n=P();wr({el:n,onBlur:s});function s(){e.value=!1}return(a,o)=>(c(),f("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:o[1]||(o[1]=r=>e.value=!0),onMouseleave:o[2]||(o[2]=r=>e.value=!1)},[h("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":a.label,onClick:o[0]||(o[0]=r=>e.value=!e.value)},[a.button||a.icon?(c(),f("span",Ur,[a.icon?(c(),f("span",{key:0,class:L([a.icon,"option-icon"])},null,2)):_("",!0),a.button?(c(),f("span",{key:1,innerHTML:a.button},null,8,jr)):_("",!0),zr])):(c(),f("span",qr))],8,Hr),h("div",Gr,[y(Br,{items:a.items},{default:p(()=>[d(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),yt=k(xr,[["__scopeId","data-v-b6c34ac9"]]),Wr=["href","aria-label","innerHTML"],Kr=b({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,n=S(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}" />`);return(s,a)=>(c(),f("a",{class:"VPSocialLink no-icon",href:s.link,"aria-label":s.ariaLabel??(typeof s.icon=="string"?s.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,Wr))}}),Xr=k(Kr,[["__scopeId","data-v-eee4e7cb"]]),Yr={class:"VPSocialLinks"},Jr=b({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,n)=>(c(),f("div",Yr,[(c(!0),f(N,null,F(e.links,({link:s,icon:a,ariaLabel:o})=>(c(),$(Xr,{key:s,icon:a,link:s,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),It=k(Jr,[["__scopeId","data-v-7bc22406"]]),Qr={key:0,class:"group translations"},Zr={class:"trans-title"},ei={key:1,class:"group"},ti={class:"item appearance"},ni={class:"label"},si={class:"appearance-action"},ai={key:2,class:"group"},oi={class:"item social-links"},ri=b({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=w(),{localeLinks:s,currentLang:a}=_e({correspondingLink:!0}),o=S(()=>s.value.length&&a.value.label||e.value.appearance||n.value.socialLinks);return(r,i)=>o.value?(c(),$(yt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:p(()=>[u(s).length&&u(a).label?(c(),f("div",Qr,[h("p",Zr,A(u(a).label),1),(c(!0),f(N,null,F(u(s),l=>(c(),$(Ve,{key:l.link,item:l},null,8,["item"]))),128))])):_("",!0),u(e).appearance&&u(e).appearance!=="force-dark"?(c(),f("div",ei,[h("div",ti,[h("p",ni,A(u(n).darkModeSwitchLabel||"Appearance"),1),h("div",si,[y(_t)])])])):_("",!0),u(n).socialLinks?(c(),f("div",ai,[h("div",oi,[y(It,{class:"social-links-list",links:u(n).socialLinks},null,8,["links"])])])):_("",!0)]),_:1})):_("",!0)}}),ii=k(ri,[["__scopeId","data-v-d0bd9dde"]]),ci=t=>(R("data-v-e5dd9c1c"),t=t(),O(),t),li=["aria-expanded"],ui=ci(()=>h("span",{class:"container"},[h("span",{class:"top"}),h("span",{class:"middle"}),h("span",{class:"bottom"})],-1)),di=[ui],fi=b({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(c(),f("button",{type:"button",class:L(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=s=>e.$emit("click"))},di,10,li))}}),hi=k(fi,[["__scopeId","data-v-e5dd9c1c"]]),pi=["innerHTML"],mi=b({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=w();return(n,s)=>(c(),$(q,{class:L({VPNavBarMenuLink:!0,active:u(re)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,noIcon:n.item.noIcon,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:p(()=>[h("span",{innerHTML:n.item.text},null,8,pi)]),_:1},8,["class","href","noIcon","target","rel"]))}}),vi=k(mi,[["__scopeId","data-v-9c663999"]]),gi=b({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=w(),s=o=>"link"in o?re(n.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(s),a=S(()=>s(e.item));return(o,r)=>(c(),$(yt,{class:L({VPNavBarMenuGroup:!0,active:u(re)(u(n).relativePath,o.item.activeMatch,!!o.item.activeMatch)||a.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),_i=t=>(R("data-v-7f418b0f"),t=t(),O(),t),bi={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},yi=_i(()=>h("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Ii=b({__name:"VPNavBarMenu",setup(t){const{theme:e}=w();return(n,s)=>u(e).nav?(c(),f("nav",bi,[yi,(c(!0),f(N,null,F(u(e).nav,a=>(c(),f(N,{key:a.text},["link"in a?(c(),$(vi,{key:0,item:a},null,8,["item"])):(c(),$(gi,{key:1,item:a},null,8,["item"]))],64))),128))])):_("",!0)}}),ki=k(Ii,[["__scopeId","data-v-7f418b0f"]]);function $i(t){const{localeIndex:e,theme:n}=w();function s(a){var M,D,E;const o=a.split("."),r=(M=n.value.search)==null?void 0:M.options,i=r&&typeof r=="object",l=i&&((E=(D=r.locales)==null?void 0:D[e.value])==null?void 0:E.translations)||null,m=i&&r.translations||null;let g=l,v=m,I=t;const T=o.pop();for(const Y of o){let J=null;const he=I==null?void 0:I[Y];he&&(J=I=he);const Fe=v==null?void 0:v[Y];Fe&&(J=v=Fe);const He=g==null?void 0:g[Y];He&&(J=g=He),he||(I=J),Fe||(v=J),He||(g=J)}return(g==null?void 0:g[T])??(v==null?void 0:v[T])??(I==null?void 0:I[T])??""}return s}const Si=["aria-label"],Ti={class:"DocSearch-Button-Container"},wi=h("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),Ei={class:"DocSearch-Button-Placeholder"},Ai=h("span",{class:"DocSearch-Button-Keys"},[h("kbd",{class:"DocSearch-Button-Key"}),h("kbd",{class:"DocSearch-Button-Key"},"K")],-1),Vt=b({__name:"VPNavBarSearchButton",setup(t){const n=$i({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(s,a)=>(c(),f("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":u(n)("button.buttonAriaLabel")},[h("span",Ti,[wi,h("span",Ei,A(u(n)("button.buttonText")),1)]),Ai],8,Si))}}),Pi={class:"VPNavBarSearch"},Ci={id:"local-search"},Li={key:1,id:"docsearch"},Ni=b({__name:"VPNavBarSearch",setup(t){const e=Ns(()=>Ms(()=>import("./VPLocalSearchBox.TlSQsKbu.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:s}=w(),a=P(!1),o=P(!1);ue(()=>{});function r(){a.value||(a.value=!0,setTimeout(i,16))}function i(){const v=new Event("keydown");v.key="k",v.metaKey=!0,window.dispatchEvent(v),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||i()},16)}function l(v){const I=v.target,T=I.tagName;return I.isContentEditable||T==="INPUT"||T==="SELECT"||T==="TEXTAREA"}const m=P(!1);tt("k",v=>{(v.ctrlKey||v.metaKey)&&(v.preventDefault(),m.value=!0)}),tt("/",v=>{l(v)||(v.preventDefault(),m.value=!0)});const g="local";return(v,I)=>{var T;return c(),f("div",Pi,[u(g)==="local"?(c(),f(N,{key:0},[m.value?(c(),$(u(e),{key:0,onClose:I[0]||(I[0]=M=>m.value=!1)})):_("",!0),h("div",Ci,[y(Vt,{onClick:I[1]||(I[1]=M=>m.value=!0)})])],64)):u(g)==="algolia"?(c(),f(N,{key:1},[a.value?(c(),$(u(n),{key:0,algolia:((T=u(s).search)==null?void 0:T.options)??u(s).algolia,onVnodeBeforeMount:I[2]||(I[2]=M=>o.value=!0)},null,8,["algolia"])):_("",!0),o.value?_("",!0):(c(),f("div",Li,[y(Vt,{onClick:r})]))],64)):_("",!0)])}}}),Mi=b({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=w();return(n,s)=>u(e).socialLinks?(c(),$(It,{key:0,class:"VPNavBarSocialLinks",links:u(e).socialLinks},null,8,["links"])):_("",!0)}}),Di=k(Mi,[["__scopeId","data-v-0394ad82"]]),Vi=["href","rel","target"],Ri={key:1},Oi={key:2},Bi=b({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=w(),{hasSidebar:s}=X(),{currentLang:a}=_e(),o=S(()=>{var l;return typeof n.value.logoLink=="string"?n.value.logoLink:(l=n.value.logoLink)==null?void 0:l.link}),r=S(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.rel}),i=S(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.target});return(l,m)=>(c(),f("div",{class:L(["VPNavBarTitle",{"has-sidebar":u(s)}])},[h("a",{class:"title",href:o.value??u(vt)(u(a).link),rel:r.value,target:i.value},[d(l.$slots,"nav-bar-title-before",{},void 0,!0),u(n).logo?(c(),$(Se,{key:0,class:"logo",image:u(n).logo},null,8,["image"])):_("",!0),u(n).siteTitle?(c(),f("span",Ri,A(u(n).siteTitle),1)):u(n).siteTitle===void 0?(c(),f("span",Oi,A(u(e).title),1)):_("",!0),d(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,Vi)],2))}}),Fi=k(Bi,[["__scopeId","data-v-ab179fa1"]]),Hi={class:"items"},Ui={class:"title"},ji=b({__name:"VPNavBarTranslations",setup(t){const{theme:e}=w(),{localeLinks:n,currentLang:s}=_e({correspondingLink:!0});return(a,o)=>u(n).length&&u(s).label?(c(),$(yt,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:u(e).langMenuLabel||"Change language"},{default:p(()=>[h("div",Hi,[h("p",Ui,A(u(s).label),1),(c(!0),f(N,null,F(u(n),r=>(c(),$(Ve,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):_("",!0)}}),zi=k(ji,[["__scopeId","data-v-88af2de4"]]),qi=t=>(R("data-v-ccf7ddec"),t=t(),O(),t),Gi={class:"wrapper"},xi={class:"container"},Wi={class:"title"},Ki={class:"content"},Xi={class:"content-body"},Yi=qi(()=>h("div",{class:"divider"},[h("div",{class:"divider-line"})],-1)),Ji=b({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const{y:e}=pn(),{hasSidebar:n}=X(),{frontmatter:s}=w(),a=P({});return un(()=>{a.value={"has-sidebar":n.value,home:s.value.layout==="home",top:e.value===0}}),(o,r)=>(c(),f("div",{class:L(["VPNavBar",a.value])},[h("div",Gi,[h("div",xi,[h("div",Wi,[y(Fi,null,{"nav-bar-title-before":p(()=>[d(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[d(o.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),h("div",Ki,[h("div",Xi,[d(o.$slots,"nav-bar-content-before",{},void 0,!0),y(Ni,{class:"search"}),y(ki,{class:"menu"}),y(zi,{class:"translations"}),y(Tr,{class:"appearance"}),y(Di,{class:"social-links"}),y(ii,{class:"extra"}),d(o.$slots,"nav-bar-content-after",{},void 0,!0),y(hi,{class:"hamburger",active:o.isScreenOpen,onClick:r[0]||(r[0]=i=>o.$emit("toggle-screen"))},null,8,["active"])])])])]),Yi],2))}}),Qi=k(Ji,[["__scopeId","data-v-ccf7ddec"]]),Zi={key:0,class:"VPNavScreenAppearance"},ec={class:"text"},tc=b({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=w();return(s,a)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),f("div",Zi,[h("p",ec,A(u(n).darkModeSwitchLabel||"Appearance"),1),y(_t)])):_("",!0)}}),nc=k(tc,[["__scopeId","data-v-2d7af913"]]),sc=b({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=Me("close-screen");return(n,s)=>(c(),$(q,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e),innerHTML:n.item.text},null,8,["href","target","rel","onClick","innerHTML"]))}}),ac=k(sc,[["__scopeId","data-v-7f31e1f6"]]),oc=b({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=Me("close-screen");return(n,s)=>(c(),$(q,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e)},{default:p(()=>[W(A(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Sn=k(oc,[["__scopeId","data-v-19976ae1"]]),rc={class:"VPNavScreenMenuGroupSection"},ic={key:0,class:"title"},cc=b({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),f("div",rc,[e.text?(c(),f("p",ic,A(e.text),1)):_("",!0),(c(!0),f(N,null,F(e.items,s=>(c(),$(Sn,{key:s.text,item:s},null,8,["item"]))),128))]))}}),lc=k(cc,[["__scopeId","data-v-8133b170"]]),uc=t=>(R("data-v-ff6087d4"),t=t(),O(),t),dc=["aria-controls","aria-expanded"],fc=["innerHTML"],hc=uc(()=>h("span",{class:"vpi-plus button-icon"},null,-1)),pc=["id"],mc={key:1,class:"group"},vc=b({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=P(!1),s=S(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function a(){n.value=!n.value}return(o,r)=>(c(),f("div",{class:L(["VPNavScreenMenuGroup",{open:n.value}])},[h("button",{class:"button","aria-controls":s.value,"aria-expanded":n.value,onClick:a},[h("span",{class:"button-text",innerHTML:o.text},null,8,fc),hc],8,dc),h("div",{id:s.value,class:"items"},[(c(!0),f(N,null,F(o.items,i=>(c(),f(N,{key:i.text},["link"in i?(c(),f("div",{key:i.text,class:"item"},[y(Sn,{item:i},null,8,["item"])])):(c(),f("div",mc,[y(lc,{text:i.text,items:i.items},null,8,["text","items"])]))],64))),128))],8,pc)],2))}}),gc=k(vc,[["__scopeId","data-v-ff6087d4"]]),_c={key:0,class:"VPNavScreenMenu"},bc=b({__name:"VPNavScreenMenu",setup(t){const{theme:e}=w();return(n,s)=>u(e).nav?(c(),f("nav",_c,[(c(!0),f(N,null,F(u(e).nav,a=>(c(),f(N,{key:a.text},["link"in a?(c(),$(ac,{key:0,item:a},null,8,["item"])):(c(),$(gc,{key:1,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):_("",!0)}}),yc=b({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=w();return(n,s)=>u(e).socialLinks?(c(),$(It,{key:0,class:"VPNavScreenSocialLinks",links:u(e).socialLinks},null,8,["links"])):_("",!0)}}),Tn=t=>(R("data-v-858fe1a4"),t=t(),O(),t),Ic=Tn(()=>h("span",{class:"vpi-languages icon lang"},null,-1)),kc=Tn(()=>h("span",{class:"vpi-chevron-down icon chevron"},null,-1)),$c={class:"list"},Sc=b({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=_e({correspondingLink:!0}),s=P(!1);function a(){s.value=!s.value}return(o,r)=>u(e).length&&u(n).label?(c(),f("div",{key:0,class:L(["VPNavScreenTranslations",{open:s.value}])},[h("button",{class:"title",onClick:a},[Ic,W(" "+A(u(n).label)+" ",1),kc]),h("ul",$c,[(c(!0),f(N,null,F(u(e),i=>(c(),f("li",{key:i.link,class:"item"},[y(q,{class:"link",href:i.link},{default:p(()=>[W(A(i.text),1)]),_:2},1032,["href"])]))),128))])],2)):_("",!0)}}),Tc=k(Sc,[["__scopeId","data-v-858fe1a4"]]),wc={class:"container"},Ec=b({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=P(null),n=mn(De?document.body:null);return(s,a)=>(c(),$(ht,{name:"fade",onEnter:a[0]||(a[0]=o=>n.value=!0),onAfterLeave:a[1]||(a[1]=o=>n.value=!1)},{default:p(()=>[s.open?(c(),f("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[h("div",wc,[d(s.$slots,"nav-screen-content-before",{},void 0,!0),y(bc,{class:"menu"}),y(Tc,{class:"translations"}),y(nc,{class:"appearance"}),y(yc,{class:"social-links"}),d(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):_("",!0)]),_:3}))}}),Ac=k(Ec,[["__scopeId","data-v-cc5739dd"]]),Pc={key:0,class:"VPNav"},Cc=b({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:s}=hr(),{frontmatter:a}=w(),o=S(()=>a.value.navbar!==!1);return vn("close-screen",n),Ce(()=>{De&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(r,i)=>o.value?(c(),f("header",Pc,[y(Qi,{"is-screen-open":u(e),onToggleScreen:u(s)},{"nav-bar-title-before":p(()=>[d(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[d(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[d(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[d(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),y(Ac,{open:u(e)},{"nav-screen-content-before":p(()=>[d(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[d(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):_("",!0)}}),Lc=k(Cc,[["__scopeId","data-v-ae24b3ad"]]),wn=t=>(R("data-v-b8d55f3b"),t=t(),O(),t),Nc=["role","tabindex"],Mc=wn(()=>h("div",{class:"indicator"},null,-1)),Dc=wn(()=>h("span",{class:"vpi-chevron-right caret-icon"},null,-1)),Vc=[Dc],Rc={key:1,class:"items"},Oc=b({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:s,isLink:a,isActiveLink:o,hasActiveLink:r,hasChildren:i,toggle:l}=sa(S(()=>e.item)),m=S(()=>i.value?"section":"div"),g=S(()=>a.value?"a":"div"),v=S(()=>i.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),I=S(()=>a.value?void 0:"button"),T=S(()=>[[`level-${e.depth}`],{collapsible:s.value},{collapsed:n.value},{"is-link":a.value},{"is-active":o.value},{"has-active":r.value}]);function M(E){"key"in E&&E.key!=="Enter"||!e.item.link&&l()}function D(){e.item.link&&l()}return(E,Y)=>{const J=de("VPSidebarItem",!0);return c(),$(pe(m.value),{class:L(["VPSidebarItem",T.value])},{default:p(()=>[E.item.text?(c(),f("div",ke({key:0,class:"item",role:I.value},Ds(E.item.items?{click:M,keydown:M}:{},!0),{tabindex:E.item.items&&0}),[Mc,E.item.link?(c(),$(q,{key:0,tag:g.value,class:"link",href:E.item.link,rel:E.item.rel,target:E.item.target},{default:p(()=>[(c(),$(pe(v.value),{class:"text",innerHTML:E.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(c(),$(pe(v.value),{key:1,class:"text",innerHTML:E.item.text},null,8,["innerHTML"])),E.item.collapsed!=null&&E.item.items&&E.item.items.length?(c(),f("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:D,onKeydown:Vs(D,["enter"]),tabindex:"0"},Vc,32)):_("",!0)],16,Nc)):_("",!0),E.item.items&&E.item.items.length?(c(),f("div",Rc,[E.depth<5?(c(!0),f(N,{key:0},F(E.item.items,he=>(c(),$(J,{key:he.text,item:he,depth:E.depth+1},null,8,["item","depth"]))),128)):_("",!0)])):_("",!0)]),_:1},8,["class"])}}}),Bc=k(Oc,[["__scopeId","data-v-b8d55f3b"]]),En=t=>(R("data-v-575e6a36"),t=t(),O(),t),Fc=En(()=>h("div",{class:"curtain"},null,-1)),Hc={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Uc=En(()=>h("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),jc=b({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:n}=X(),s=t,a=P(null),o=mn(De?document.body:null);return ne([s,a],()=>{var r;s.open?(o.value=!0,(r=a.value)==null||r.focus()):o.value=!1},{immediate:!0,flush:"post"}),(r,i)=>u(n)?(c(),f("aside",{key:0,class:L(["VPSidebar",{open:r.open}]),ref_key:"navEl",ref:a,onClick:i[0]||(i[0]=Rs(()=>{},["stop"]))},[Fc,h("nav",Hc,[Uc,d(r.$slots,"sidebar-nav-before",{},void 0,!0),(c(!0),f(N,null,F(u(e),l=>(c(),f("div",{key:l.text,class:"group"},[y(Bc,{item:l,depth:0},null,8,["item"])]))),128)),d(r.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):_("",!0)}}),zc=k(jc,[["__scopeId","data-v-575e6a36"]]),qc=b({__name:"VPSkipLink",setup(t){const e=Ne(),n=P();ne(()=>e.path,()=>n.value.focus());function s({target:a}){const o=document.getElementById(decodeURIComponent(a.hash).slice(1));if(o){const r=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",r)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",r),o.focus(),window.scrollTo(0,0)}}return(a,o)=>(c(),f(N,null,[h("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),h("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s}," Skip to content ")],64))}}),Gc=k(qc,[["__scopeId","data-v-0f60ec36"]]),xc=b({__name:"Layout",setup(t){const{isOpen:e,open:n,close:s}=X(),a=Ne();ne(()=>a.path,s),na(e,s);const{frontmatter:o}=w(),r=Os(),i=S(()=>!!r["home-hero-image"]);return vn("hero-image-slot-exists",i),(l,m)=>{const g=de("Content");return u(o).layout!==!1?(c(),f("div",{key:0,class:L(["Layout",u(o).pageClass])},[d(l.$slots,"layout-top",{},void 0,!0),y(Gc),y(Us,{class:"backdrop",show:u(e),onClick:u(s)},null,8,["show","onClick"]),y(Lc,null,{"nav-bar-title-before":p(()=>[d(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[d(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[d(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[d(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":p(()=>[d(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[d(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),y(fr,{open:u(e),onOpenMenu:u(n)},null,8,["open","onOpenMenu"]),y(zc,{open:u(e)},{"sidebar-nav-before":p(()=>[d(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":p(()=>[d(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),y(xo,null,{"page-top":p(()=>[d(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[d(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":p(()=>[d(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":p(()=>[d(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[d(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[d(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[d(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[d(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[d(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[d(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[d(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[d(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":p(()=>[d(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[d(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[d(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":p(()=>[d(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[d(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":p(()=>[d(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[d(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[d(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[d(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[d(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[d(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),y(Jo),d(l.$slots,"layout-bottom",{},void 0,!0)],2)):(c(),$(g,{key:1}))}}}),Wc=k(xc,[["__scopeId","data-v-5d98c3a5"]]),An={Layout:Wc,enhanceApp:({app:t})=>{t.component("Badge",Bs)}};var Rt={};/**
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
 */const Pn=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let a=t.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Kc=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const a=t[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const o=t[n++];e[s++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=t[n++],r=t[n++],i=t[n++],l=((a&7)<<18|(o&63)<<12|(r&63)<<6|i&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],r=t[n++];e[s++]=String.fromCharCode((a&15)<<12|(o&63)<<6|r&63)}}return e.join("")},Cn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<t.length;a+=3){const o=t[a],r=a+1<t.length,i=r?t[a+1]:0,l=a+2<t.length,m=l?t[a+2]:0,g=o>>2,v=(o&3)<<4|i>>4;let I=(i&15)<<2|m>>6,T=m&63;l||(T=64,r||(I=64)),s.push(n[g],n[v],n[I],n[T])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<t.length;){const o=n[t.charAt(a++)],i=a<t.length?n[t.charAt(a)]:0;++a;const m=a<t.length?n[t.charAt(a)]:64;++a;const v=a<t.length?n[t.charAt(a)]:64;if(++a,o==null||i==null||m==null||v==null)throw new Xc;const I=o<<2|i>>4;if(s.push(I),m!==64){const T=i<<4&240|m>>2;if(s.push(T),v!==64){const M=m<<6&192|v;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yc=function(t){const e=Pn(t);return Cn.encodeByteArray(e,!0)},Ln=function(t){return Yc(t).replace(/\./g,"")},Jc=function(t){try{return Cn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zc=()=>Qc().__FIREBASE_DEFAULTS__,el=()=>{if(typeof process>"u"||typeof Rt>"u")return;const t=Rt.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jc(t[1]);return e&&JSON.parse(e)},nl=()=>{try{return Zc()||el()||tl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sl=()=>{var t;return(t=nl())===null||t===void 0?void 0:t.config};/**
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
 */class al{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function ol(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kt(){try{return typeof indexedDB=="object"}catch{return!1}}function $t(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Nn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const rl="FirebaseError";class fe extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rl,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,be.prototype.create)}}class be{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,o=this.errors[e],r=o?il(o,s):"Error",i=`${this.serviceName}: ${r} (${a}).`;return new fe(a,i,s)}}function il(t,e){return t.replace(cl,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const cl=/\{\$([^}]+)}/g;function Te(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const o=t[a],r=e[a];if(Ot(o)&&Ot(r)){if(!Te(o,r))return!1}else if(o!==r)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Ot(t){return t!==null&&typeof t=="object"}/**
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
 */const ll=1e3,ul=2,dl=4*60*60*1e3,fl=.5;function Bt(t,e=ll,n=ul){const s=e*Math.pow(n,t),a=Math.round(fl*s*(Math.random()-.5)*2);return Math.min(dl,s+a)}/**
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
 */function St(t){return t&&t._delegate?t._delegate:t}class K{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const se="[DEFAULT]";/**
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
 */class hl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new al;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ml(e))try{this.getOrInitializeService({instanceIdentifier:se})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:a});s.resolve(o)}catch{}}}}clearInstance(e=se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=se){return this.instances.has(e)}getOptions(e=se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(o);s===i&&r.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(a,o);const r=this.instances.get(a);return r&&e(r,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pl(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=se){return this.component?this.component.multipleInstances?e:se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pl(t){return t===se?void 0:t}function ml(t){return t.instantiationMode==="EAGER"}/**
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
 */class vl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var C;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(C||(C={}));const gl={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},_l=C.INFO,bl={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},yl=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),a=bl[e];if(a)console[a](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tt{constructor(e){this.name=e,this._logLevel=_l,this._logHandler=yl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const Il=(t,e)=>e.some(n=>t instanceof n);let Ft,Ht;function kl(){return Ft||(Ft=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $l(){return Ht||(Ht=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mn=new WeakMap,ot=new WeakMap,Dn=new WeakMap,je=new WeakMap,wt=new WeakMap;function Sl(t){const e=new Promise((n,s)=>{const a=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{n(Q(t.result)),a()},r=()=>{s(t.error),a()};t.addEventListener("success",o),t.addEventListener("error",r)});return e.then(n=>{n instanceof IDBCursor&&Mn.set(n,t)}).catch(()=>{}),wt.set(e,t),e}function Tl(t){if(ot.has(t))return;const e=new Promise((n,s)=>{const a=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{n(),a()},r=()=>{s(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)});ot.set(t,e)}let rt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ot.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Q(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wl(t){rt=t(rt)}function El(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ze(this),e,...n);return Dn.set(s,e.sort?e.sort():[e]),Q(s)}:$l().includes(t)?function(...e){return t.apply(ze(this),e),Q(Mn.get(this))}:function(...e){return Q(t.apply(ze(this),e))}}function Al(t){return typeof t=="function"?El(t):(t instanceof IDBTransaction&&Tl(t),Il(t,kl())?new Proxy(t,rt):t)}function Q(t){if(t instanceof IDBRequest)return Sl(t);if(je.has(t))return je.get(t);const e=Al(t);return e!==t&&(je.set(t,e),wt.set(e,t)),e}const ze=t=>wt.get(t);function Vn(t,e,{blocked:n,upgrade:s,blocking:a,terminated:o}={}){const r=indexedDB.open(t,e),i=Q(r);return s&&r.addEventListener("upgradeneeded",l=>{s(Q(r.result),l.oldVersion,l.newVersion,Q(r.transaction))}),n&&r.addEventListener("blocked",()=>n()),i.then(l=>{o&&l.addEventListener("close",()=>o()),a&&l.addEventListener("versionchange",()=>a())}).catch(()=>{}),i}const Pl=["get","getKey","getAll","getAllKeys","count"],Cl=["put","add","delete","clear"],qe=new Map;function Ut(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qe.get(e))return qe.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=Cl.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||Pl.includes(n)))return;const o=async function(r,...i){const l=this.transaction(r,a?"readwrite":"readonly");let m=l.store;return s&&(m=m.index(i.shift())),(await Promise.all([m[n](...i),a&&l.done]))[0]};return qe.set(e,o),o}wl(t=>({...t,get:(e,n,s)=>Ut(e,n)||t.get(e,n,s),has:(e,n)=>!!Ut(e,n)||t.has(e,n)}));/**
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
 */class Ll{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Nl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const it="@firebase/app",jt="0.9.7";/**
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
 */const ie=new Tt("@firebase/app"),Ml="@firebase/app-compat",Dl="@firebase/analytics-compat",Vl="@firebase/analytics",Rl="@firebase/app-check-compat",Ol="@firebase/app-check",Bl="@firebase/auth",Fl="@firebase/auth-compat",Hl="@firebase/database",Ul="@firebase/database-compat",jl="@firebase/functions",zl="@firebase/functions-compat",ql="@firebase/installations",Gl="@firebase/installations-compat",xl="@firebase/messaging",Wl="@firebase/messaging-compat",Kl="@firebase/performance",Xl="@firebase/performance-compat",Yl="@firebase/remote-config",Jl="@firebase/remote-config-compat",Ql="@firebase/storage",Zl="@firebase/storage-compat",eu="@firebase/firestore",tu="@firebase/firestore-compat",nu="firebase";/**
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
 */const ct="[DEFAULT]",su={[it]:"fire-core",[Ml]:"fire-core-compat",[Vl]:"fire-analytics",[Dl]:"fire-analytics-compat",[Ol]:"fire-app-check",[Rl]:"fire-app-check-compat",[Bl]:"fire-auth",[Fl]:"fire-auth-compat",[Hl]:"fire-rtdb",[Ul]:"fire-rtdb-compat",[jl]:"fire-fn",[zl]:"fire-fn-compat",[ql]:"fire-iid",[Gl]:"fire-iid-compat",[xl]:"fire-fcm",[Wl]:"fire-fcm-compat",[Kl]:"fire-perf",[Xl]:"fire-perf-compat",[Yl]:"fire-rc",[Jl]:"fire-rc-compat",[Ql]:"fire-gcs",[Zl]:"fire-gcs-compat",[eu]:"fire-fst",[tu]:"fire-fst-compat","fire-js":"fire-js",[nu]:"fire-js-all"};/**
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
 */const we=new Map,lt=new Map;function au(t,e){try{t.container.addComponent(e)}catch(n){ie.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function te(t){const e=t.name;if(lt.has(e))return ie.debug(`There were multiple attempts to register component ${e}.`),!1;lt.set(e,t);for(const n of we.values())au(n,t);return!0}function ye(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ou={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Z=new be("app","Firebase",ou);/**
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
 */class ru{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new K("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Z.create("app-deleted",{appName:this._name})}}function Rn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ct,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw Z.create("bad-app-name",{appName:String(a)});if(n||(n=sl()),!n)throw Z.create("no-options");const o=we.get(a);if(o){if(Te(n,o.options)&&Te(s,o.config))return o;throw Z.create("duplicate-app",{appName:a})}const r=new vl(a);for(const l of lt.values())r.addComponent(l);const i=new ru(n,s,r);return we.set(a,i),i}function On(t=ct){const e=we.get(t);if(!e&&t===ct)return Rn();if(!e)throw Z.create("no-app",{appName:t});return e}function G(t,e,n){var s;let a=(s=su[t])!==null&&s!==void 0?s:t;n&&(a+=`-${n}`);const o=a.match(/\s|\//),r=e.match(/\s|\//);if(o||r){const i=[`Unable to register library "${a}" with version "${e}":`];o&&i.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&r&&i.push("and"),r&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ie.warn(i.join(" "));return}te(new K(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const iu="firebase-heartbeat-database",cu=1,ge="firebase-heartbeat-store";let Ge=null;function Bn(){return Ge||(Ge=Vn(iu,cu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ge)}}}).catch(t=>{throw Z.create("idb-open",{originalErrorMessage:t.message})})),Ge}async function lu(t){try{return(await Bn()).transaction(ge).objectStore(ge).get(Fn(t))}catch(e){if(e instanceof fe)ie.warn(e.message);else{const n=Z.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ie.warn(n.message)}}}async function zt(t,e){try{const s=(await Bn()).transaction(ge,"readwrite");return await s.objectStore(ge).put(e,Fn(t)),s.done}catch(n){if(n instanceof fe)ie.warn(n.message);else{const s=Z.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ie.warn(s.message)}}}function Fn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uu=1024,du=30*24*60*60*1e3;class fu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pu(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=du}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qt(),{heartbeatsToSend:n,unsentEntries:s}=hu(this._heartbeatsCache.heartbeats),a=Ln(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function qt(){return new Date().toISOString().substring(0,10)}function hu(t,e=uu){const n=[];let s=t.slice();for(const a of t){const o=n.find(r=>r.agent===a.agent);if(o){if(o.dates.push(a.date),Gt(n)>e){o.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Gt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class pu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kt()?$t().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return zt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return zt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Gt(t){return Ln(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mu(t){te(new K("platform-logger",e=>new Ll(e),"PRIVATE")),te(new K("heartbeat",e=>new fu(e),"PRIVATE")),G(it,jt,t),G(it,jt,"esm2017"),G("fire-js","")}mu("");var vu="firebase",gu="9.19.1";/**
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
 */G(vu,gu,"app");const Hn="@firebase/installations",Et="0.6.4";/**
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
 */const Un=1e4,jn=`w:${Et}`,zn="FIS_v2",_u="https://firebaseinstallations.googleapis.com/v1",bu=60*60*1e3,yu="installations",Iu="Installations";/**
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
 */const ku={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ce=new be(yu,Iu,ku);function qn(t){return t instanceof fe&&t.code.includes("request-failed")}/**
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
 */function Gn({projectId:t}){return`${_u}/projects/${t}/installations`}function xn(t){return{token:t.token,requestStatus:2,expiresIn:Su(t.expiresIn),creationTime:Date.now()}}async function Wn(t,e){const s=(await e.json()).error;return ce.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Kn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $u(t,{refreshToken:e}){const n=Kn(t);return n.append("Authorization",Tu(e)),n}async function Xn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Su(t){return Number(t.replace("s","000"))}function Tu(t){return`${zn} ${t}`}/**
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
 */async function wu({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Gn(t),a=Kn(t),o=e.getImmediate({optional:!0});if(o){const m=await o.getHeartbeatsHeader();m&&a.append("x-firebase-client",m)}const r={fid:n,authVersion:zn,appId:t.appId,sdkVersion:jn},i={method:"POST",headers:a,body:JSON.stringify(r)},l=await Xn(()=>fetch(s,i));if(l.ok){const m=await l.json();return{fid:m.fid||n,registrationStatus:2,refreshToken:m.refreshToken,authToken:xn(m.authToken)}}else throw await Wn("Create Installation",l)}/**
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
 */function Yn(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Eu(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Au=/^[cdef][\w-]{21}$/,ut="";function Pu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Cu(t);return Au.test(n)?n:ut}catch{return ut}}function Cu(t){return Eu(t).substr(0,22)}/**
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
 */const Jn=new Map;function Qn(t,e){const n=Re(t);Zn(n,e),Lu(n,e)}function Zn(t,e){const n=Jn.get(t);if(n)for(const s of n)s(e)}function Lu(t,e){const n=Nu();n&&n.postMessage({key:t,fid:e}),Mu()}let ae=null;function Nu(){return!ae&&"BroadcastChannel"in self&&(ae=new BroadcastChannel("[Firebase] FID Change"),ae.onmessage=t=>{Zn(t.data.key,t.data.fid)}),ae}function Mu(){Jn.size===0&&ae&&(ae.close(),ae=null)}/**
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
 */const Du="firebase-installations-database",Vu=1,le="firebase-installations-store";let xe=null;function At(){return xe||(xe=Vn(Du,Vu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(le)}}})),xe}async function Ee(t,e){const n=Re(t),a=(await At()).transaction(le,"readwrite"),o=a.objectStore(le),r=await o.get(n);return await o.put(e,n),await a.done,(!r||r.fid!==e.fid)&&Qn(t,e.fid),e}async function es(t){const e=Re(t),s=(await At()).transaction(le,"readwrite");await s.objectStore(le).delete(e),await s.done}async function Oe(t,e){const n=Re(t),a=(await At()).transaction(le,"readwrite"),o=a.objectStore(le),r=await o.get(n),i=e(r);return i===void 0?await o.delete(n):await o.put(i,n),await a.done,i&&(!r||r.fid!==i.fid)&&Qn(t,i.fid),i}/**
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
 */async function Pt(t){let e;const n=await Oe(t.appConfig,s=>{const a=Ru(s),o=Ou(t,a);return e=o.registrationPromise,o.installationEntry});return n.fid===ut?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Ru(t){const e=t||{fid:Pu(),registrationStatus:0};return ts(e)}function Ou(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(ce.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Bu(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Fu(t)}:{installationEntry:e}}async function Bu(t,e){try{const n=await wu(t,e);return Ee(t.appConfig,n)}catch(n){throw qn(n)&&n.customData.serverCode===409?await es(t.appConfig):await Ee(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Fu(t){let e=await xt(t.appConfig);for(;e.registrationStatus===1;)await Yn(100),e=await xt(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Pt(t);return s||n}return e}function xt(t){return Oe(t,e=>{if(!e)throw ce.create("installation-not-found");return ts(e)})}function ts(t){return Hu(t)?{fid:t.fid,registrationStatus:0}:t}function Hu(t){return t.registrationStatus===1&&t.registrationTime+Un<Date.now()}/**
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
 */async function Uu({appConfig:t,heartbeatServiceProvider:e},n){const s=ju(t,n),a=$u(t,n),o=e.getImmediate({optional:!0});if(o){const m=await o.getHeartbeatsHeader();m&&a.append("x-firebase-client",m)}const r={installation:{sdkVersion:jn,appId:t.appId}},i={method:"POST",headers:a,body:JSON.stringify(r)},l=await Xn(()=>fetch(s,i));if(l.ok){const m=await l.json();return xn(m)}else throw await Wn("Generate Auth Token",l)}function ju(t,{fid:e}){return`${Gn(t)}/${e}/authTokens:generate`}/**
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
 */async function Ct(t,e=!1){let n;const s=await Oe(t.appConfig,o=>{if(!ns(o))throw ce.create("not-registered");const r=o.authToken;if(!e&&Gu(r))return o;if(r.requestStatus===1)return n=zu(t,e),o;{if(!navigator.onLine)throw ce.create("app-offline");const i=Wu(o);return n=qu(t,i),i}});return n?await n:s.authToken}async function zu(t,e){let n=await Wt(t.appConfig);for(;n.authToken.requestStatus===1;)await Yn(100),n=await Wt(t.appConfig);const s=n.authToken;return s.requestStatus===0?Ct(t,e):s}function Wt(t){return Oe(t,e=>{if(!ns(e))throw ce.create("not-registered");const n=e.authToken;return Ku(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qu(t,e){try{const n=await Uu(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ee(t.appConfig,s),n}catch(n){if(qn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await es(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ee(t.appConfig,s)}throw n}}function ns(t){return t!==void 0&&t.registrationStatus===2}function Gu(t){return t.requestStatus===2&&!xu(t)}function xu(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+bu}function Wu(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ku(t){return t.requestStatus===1&&t.requestTime+Un<Date.now()}/**
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
 */async function Xu(t){const e=t,{installationEntry:n,registrationPromise:s}=await Pt(e);return s?s.catch(console.error):Ct(e).catch(console.error),n.fid}/**
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
 */async function Yu(t,e=!1){const n=t;return await Ju(n),(await Ct(n,e)).token}async function Ju(t){const{registrationPromise:e}=await Pt(t);e&&await e}/**
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
 */function Qu(t){if(!t||!t.options)throw We("App Configuration");if(!t.name)throw We("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw We(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function We(t){return ce.create("missing-app-config-values",{valueName:t})}/**
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
 */const ss="installations",Zu="installations-internal",ed=t=>{const e=t.getProvider("app").getImmediate(),n=Qu(e),s=ye(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},td=t=>{const e=t.getProvider("app").getImmediate(),n=ye(e,ss).getImmediate();return{getId:()=>Xu(n),getToken:a=>Yu(n,a)}};function nd(){te(new K(ss,ed,"PUBLIC")),te(new K(Zu,td,"PRIVATE"))}nd();G(Hn,Et);G(Hn,Et,"esm2017");/**
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
 */const Ae="analytics",sd="firebase_id",ad="origin",od=60*1e3,rd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lt="https://www.googletagmanager.com/gtag/js";/**
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
 */const H=new Tt("@firebase/analytics");/**
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
 */const id={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},j=new be("analytics","Analytics",id);/**
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
 */function cd(t){if(!t.startsWith(Lt)){const e=j.create("invalid-gtag-resource",{gtagURL:t});return H.warn(e.message),""}return t}function as(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ld(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ud(t,e){const n=ld("firebase-js-sdk-policy",{createScriptURL:cd}),s=document.createElement("script"),a=`${Lt}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function dd(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function fd(t,e,n,s,a,o){const r=s[a];try{if(r)await e[r];else{const l=(await as(n)).find(m=>m.measurementId===a);l&&await e[l.appId]}}catch(i){H.error(i)}t("config",a,o)}async function hd(t,e,n,s,a){try{let o=[];if(a&&a.send_to){let r=a.send_to;Array.isArray(r)||(r=[r]);const i=await as(n);for(const l of r){const m=i.find(v=>v.measurementId===l),g=m&&e[m.appId];if(g)o.push(g);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",s,a||{})}catch(o){H.error(o)}}function pd(t,e,n,s){async function a(o,r,i){try{o==="event"?await hd(t,e,n,r,i):o==="config"?await fd(t,e,n,s,r,i):o==="consent"?t("consent","update",i):t("set",r)}catch(l){H.error(l)}}return a}function md(t,e,n,s,a){let o=function(...r){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(o=window[a]),window[a]=pd(o,t,e,n),{gtagCore:o,wrappedGtag:window[a]}}function vd(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Lt)&&n.src.includes(t))return n;return null}/**
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
 */const gd=30,_d=1e3;class bd{constructor(e={},n=_d){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const os=new bd;function yd(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Id(t){var e;const{appId:n,apiKey:s}=t,a={method:"GET",headers:yd(s)},o=rd.replace("{app-id}",n),r=await fetch(o,a);if(r.status!==200&&r.status!==304){let i="";try{const l=await r.json();!((e=l.error)===null||e===void 0)&&e.message&&(i=l.error.message)}catch{}throw j.create("config-fetch-failed",{httpStatus:r.status,responseMessage:i})}return r.json()}async function kd(t,e=os,n){const{appId:s,apiKey:a,measurementId:o}=t.options;if(!s)throw j.create("no-app-id");if(!a){if(o)return{measurementId:o,appId:s};throw j.create("no-api-key")}const r=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new Td;return setTimeout(async()=>{i.abort()},od),rs({appId:s,apiKey:a,measurementId:o},r,i,e)}async function rs(t,{throttleEndTimeMillis:e,backoffCount:n},s,a=os){var o;const{appId:r,measurementId:i}=t;try{await $d(s,e)}catch(l){if(i)return H.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:r,measurementId:i};throw l}try{const l=await Id(t);return a.deleteThrottleMetadata(r),l}catch(l){const m=l;if(!Sd(m)){if(a.deleteThrottleMetadata(r),i)return H.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:r,measurementId:i};throw l}const g=Number((o=m==null?void 0:m.customData)===null||o===void 0?void 0:o.httpStatus)===503?Bt(n,a.intervalMillis,gd):Bt(n,a.intervalMillis),v={throttleEndTimeMillis:Date.now()+g,backoffCount:n+1};return a.setThrottleMetadata(r,v),H.debug(`Calling attemptFetch again in ${g} millis`),rs(t,v,s,a)}}function $d(t,e){return new Promise((n,s)=>{const a=Math.max(e-Date.now(),0),o=setTimeout(n,a);t.addEventListener(()=>{clearTimeout(o),s(j.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Sd(t){if(!(t instanceof fe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Td{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function wd(t,e,n,s,a){if(a&&a.global){t("event",n,s);return}else{const o=await e,r=Object.assign(Object.assign({},s),{send_to:o});t("event",n,r)}}/**
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
 */async function Ed(){if(kt())try{await $t()}catch(t){return H.warn(j.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return H.warn(j.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ad(t,e,n,s,a,o,r){var i;const l=kd(t);l.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&H.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>H.error(T)),e.push(l);const m=Ed().then(T=>{if(T)return s.getId()}),[g,v]=await Promise.all([l,m]);vd(o)||ud(o,g.measurementId),a("js",new Date);const I=(i=r==null?void 0:r.config)!==null&&i!==void 0?i:{};return I[ad]="firebase",I.update=!0,v!=null&&(I[sd]=v),a("config",g.measurementId,I),g.measurementId}/**
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
 */class Pd{constructor(e){this.app=e}_delete(){return delete ve[this.app.options.appId],Promise.resolve()}}let ve={},Kt=[];const Xt={};let Ke="dataLayer",Cd="gtag",Yt,is,Jt=!1;function Ld(){const t=[];if(ol()&&t.push("This is a browser extension environment."),Nn()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,a)=>`(${a+1}) ${s}`).join(" "),n=j.create("invalid-analytics-context",{errorInfo:e});H.warn(n.message)}}function Nd(t,e,n){Ld();const s=t.options.appId;if(!s)throw j.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)H.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw j.create("no-api-key");if(ve[s]!=null)throw j.create("already-exists",{id:s});if(!Jt){dd(Ke);const{wrappedGtag:o,gtagCore:r}=md(ve,Kt,Xt,Ke,Cd);is=o,Yt=r,Jt=!0}return ve[s]=Ad(t,Kt,Xt,e,Yt,Ke,n),new Pd(t)}function Md(t=On()){t=St(t);const e=ye(t,Ae);return e.isInitialized()?e.getImmediate():Dd(t)}function Dd(t,e={}){const n=ye(t,Ae);if(n.isInitialized()){const a=n.getImmediate();if(Te(e,n.getOptions()))return a;throw j.create("already-initialized")}return n.initialize({options:e})}function Vd(t,e,n,s){t=St(t),wd(is,ve[t.app.options.appId],e,n,s).catch(a=>H.error(a))}const Qt="@firebase/analytics",Zt="0.9.5";function Rd(){te(new K(Ae,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return Nd(s,a,n)},"PUBLIC")),te(new K("analytics-internal",t,"PRIVATE")),G(Qt,Zt),G(Qt,Zt,"esm2017");function t(e){try{const n=e.getProvider(Ae).getImmediate();return{logEvent:(s,a,o)=>Vd(n,s,a,o)}}catch(n){throw j.create("interop-component-reg-failed",{reason:n})}}}Rd();const en="@firebase/performance",dt="0.6.4";/**
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
 */const cs=dt,Od="FB-PERF-TRACE-START",Bd="FB-PERF-TRACE-STOP",ft="FB-PERF-TRACE-MEASURE",ls="_wt_",us="_fp",ds="_fcp",fs="_fid",hs="@firebase/performance/config",ps="@firebase/performance/configexpire",Fd="performance",ms="Performance";/**
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
 */const Hd={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},B=new be(Fd,ms,Hd);/**
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
 */const x=new Tt(ms);x.logLevel=C.INFO;/**
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
 */let Xe,vs;class V{constructor(e){if(this.window=e,!e)throw B.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,n,s){!this.performance||!this.performance.measure||this.performance.measure(e,n,s)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!Nn()?(x.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):kt()?!0:(x.info("IndexedDB is not supported by current browswer"),!1)}setupObserver(e,n){if(!this.PerformanceObserver)return;new this.PerformanceObserver(a=>{for(const o of a.getEntries())n(o)}).observe({entryTypes:[e]})}static getInstance(){return Xe===void 0&&(Xe=new V(vs)),Xe}}function Ud(t){vs=t}/**
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
 */let gs;function jd(t){const e=t.getId();return e.then(n=>{gs=n}),e}function Nt(){return gs}function zd(t){const e=t.getToken();return e.then(n=>{}),e}/**
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
 */function tn(t,e){const n=t.length-e.length;if(n<0||n>1)throw B.create("invalid String merger input");const s=[];for(let a=0;a<t.length;a++)s.push(t.charAt(a)),e.length>a&&s.push(e.charAt(a));return s.join("")}/**
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
 */let Ye;class U{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=tn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=tn("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return Ye===void 0&&(Ye=new U),Ye}}/**
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
 */var me;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"})(me||(me={}));const qd=["firebase_","google_","ga_"],Gd=new RegExp("^[a-zA-Z]\\w*$"),xd=40,Wd=100;function Kd(){const t=V.getInstance().navigator;return t!=null&&t.serviceWorker?t.serviceWorker.controller?2:3:1}function _s(){switch(V.getInstance().document.visibilityState){case"visible":return me.VISIBLE;case"hidden":return me.HIDDEN;default:return me.UNKNOWN}}function Xd(){const e=V.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function Yd(t){return t.length===0||t.length>xd?!1:!qd.some(n=>t.startsWith(n))&&!!t.match(Gd)}function Jd(t){return t.length!==0&&t.length<=Wd}/**
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
 */function bs(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.appId;if(!n)throw B.create("no app id");return n}function Qd(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.projectId;if(!n)throw B.create("no project id");return n}function Zd(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.apiKey;if(!n)throw B.create("no api key");return n}/**
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
 */const ef="0.0.1",z={loggingEnabled:!0},tf="FIREBASE_INSTALLATIONS_AUTH";function nf(t,e){const n=sf();return n?(nn(n),Promise.resolve()):rf(t,e).then(nn).then(s=>af(s),()=>{})}function sf(){const t=V.getInstance().localStorage;if(!t)return;const e=t.getItem(ps);if(!e||!cf(e))return;const n=t.getItem(hs);if(n)try{return JSON.parse(n)}catch{return}}function af(t){const e=V.getInstance().localStorage;!t||!e||(e.setItem(hs,JSON.stringify(t)),e.setItem(ps,String(Date.now()+U.getInstance().configTimeToLive*60*60*1e3)))}const of="Could not fetch config, will use default configs";function rf(t,e){return zd(t.installations).then(n=>{const s=Qd(t.app),a=Zd(t.app),o=`https://firebaseremoteconfig.googleapis.com/v1/projects/${s}/namespaces/fireperf:fetch?key=${a}`,r=new Request(o,{method:"POST",headers:{Authorization:`${tf} ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:bs(t.app),app_version:cs,sdk_version:ef})});return fetch(r).then(i=>{if(i.ok)return i.json();throw B.create("RC response not ok")})}).catch(()=>{x.info(of)})}function nn(t){if(!t)return t;const e=U.getInstance(),n=t.entries||{};return n.fpr_enabled!==void 0?e.loggingEnabled=String(n.fpr_enabled)==="true":e.loggingEnabled=z.loggingEnabled,n.fpr_log_source?e.logSource=Number(n.fpr_log_source):z.logSource&&(e.logSource=z.logSource),n.fpr_log_endpoint_url?e.logEndPointUrl=n.fpr_log_endpoint_url:z.logEndPointUrl&&(e.logEndPointUrl=z.logEndPointUrl),n.fpr_log_transport_key?e.transportKey=n.fpr_log_transport_key:z.transportKey&&(e.transportKey=z.transportKey),n.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):z.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=z.networkRequestsSamplingRate),n.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):z.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=z.tracesSamplingRate),e.logTraceAfterSampling=sn(e.tracesSamplingRate),e.logNetworkAfterSampling=sn(e.networkRequestsSamplingRate),t}function cf(t){return Number(t)>Date.now()}function sn(t){return Math.random()<=t}/**
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
 */let Mt=1,Je;function ys(t){return Mt=2,Je=Je||uf(t),Je}function lf(){return Mt===3}function uf(t){return df().then(()=>jd(t.installations)).then(e=>nf(t,e)).then(()=>an(),()=>an())}function df(){const t=V.getInstance().document;return new Promise(e=>{if(t&&t.readyState!=="complete"){const n=()=>{t.readyState==="complete"&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}function an(){Mt=3}/**
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
 */const Dt=10*1e3,ff=5.5*1e3,Is=3,hf=1e3;let Pe=Is,ee=[],on=!1;function pf(){on||(Be(ff),on=!0)}function Be(t){setTimeout(()=>{if(Pe!==0){if(!ee.length)return Be(Dt);mf()}},t)}function mf(){const t=ee.splice(0,hf),e=t.map(s=>({source_extension_json_proto3:s.message,event_time_ms:String(s.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:U.getInstance().logSource,log_event:e};vf(n,t).catch(()=>{ee=[...t,...ee],Pe--,x.info(`Tries left: ${Pe}.`),Be(Dt)})}function vf(t,e){return gf(t).then(n=>(n.ok||x.info("Call to Firebase backend failed."),n.json())).then(n=>{const s=Number(n.nextRequestWaitMillis);let a=Dt;isNaN(s)||(a=Math.max(s,a));const o=n.logResponseDetails;Array.isArray(o)&&o.length>0&&o[0].responseAction==="RETRY_REQUEST_LATER"&&(ee=[...e,...ee],x.info("Retry transport request later.")),Pe=Is,Be(a)})}function gf(t){const e=U.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}function _f(t){if(!t.eventTime||!t.message)throw B.create("invalid cc log");ee=[...ee,t]}function bf(t){return(...e)=>{const n=t(...e);_f({message:n,eventTime:Date.now()})}}/**
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
 */let Qe;function ks(t,e){Qe||(Qe=bf(If)),Qe(t,e)}function Ie(t){const e=U.getInstance();!e.instrumentationEnabled&&t.isAuto||!e.dataCollectionEnabled&&!t.isAuto||V.getInstance().requiredApisAvailable()&&(t.isAuto&&_s()!==me.VISIBLE||(lf()?Ze(t):ys(t.performanceController).then(()=>Ze(t),()=>Ze(t))))}function Ze(t){if(!Nt())return;const e=U.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||setTimeout(()=>ks(t,1),0)}function yf(t){const e=U.getInstance();if(!e.instrumentationEnabled)return;const n=t.url,s=e.logEndPointUrl.split("?")[0],a=e.flTransportEndpointUrl.split("?")[0];n===s||n===a||!e.loggingEnabled||!e.logNetworkAfterSampling||setTimeout(()=>ks(t,0),0)}function If(t,e){return e===0?kf(t):$f(t)}function kf(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:$s(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}function $f(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};Object.keys(t.counters).length!==0&&(e.counters=t.counters);const n=t.getAttributes();Object.keys(n).length!==0&&(e.custom_attributes=n);const s={application_info:$s(t.performanceController.app),trace_metric:e};return JSON.stringify(s)}function $s(t){return{google_app_id:bs(t),app_instance_id:Nt(),web_app_info:{sdk_version:cs,page_url:V.getInstance().getUrl(),service_worker_status:Kd(),visibility_state:_s(),effective_connection_type:Xd()},application_process_state:0}}/**
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
 */const Sf=100,Tf="_",wf=[us,ds,fs];function Ef(t,e){return t.length===0||t.length>Sf?!1:e&&e.startsWith(ls)&&wf.indexOf(t)>-1||!t.startsWith(Tf)}function Af(t){const e=Math.floor(t);return e<t&&x.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
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
 */class oe{constructor(e,n,s=!1,a){this.performanceController=e,this.name=n,this.isAuto=s,this.state=1,this.customAttributes={},this.counters={},this.api=V.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${Od}-${this.randomId}-${this.name}`,this.traceStopMark=`${Bd}-${this.randomId}-${this.name}`,this.traceMeasure=a||`${ft}-${this.randomId}-${this.name}`,a&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw B.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw B.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Ie(this)}record(e,n,s){if(e<=0)throw B.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw B.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(n*1e3),this.startTimeUs=Math.floor(e*1e3),s&&s.attributes&&(this.customAttributes=Object.assign({},s.attributes)),s&&s.metrics)for(const a of Object.keys(s.metrics))isNaN(Number(s.metrics[a]))||(this.counters[a]=Math.floor(Number(s.metrics[a])));Ie(this)}incrementMetric(e,n=1){this.counters[e]===void 0?this.putMetric(e,n):this.putMetric(e,this.counters[e]+n)}putMetric(e,n){if(Ef(e,this.name))this.counters[e]=Af(n??0);else throw B.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,n){const s=Yd(e),a=Jd(n);if(s&&a){this.customAttributes[e]=n;return}if(!s)throw B.create("invalid attribute name",{attributeName:e});if(!a)throw B.create("invalid attribute value",{attributeValue:n})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),n=e&&e[0];n&&(this.durationUs=Math.floor(n.duration*1e3),this.startTimeUs=Math.floor((n.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,n,s,a){const o=V.getInstance().getUrl();if(!o)return;const r=new oe(e,ls+o,!0),i=Math.floor(V.getInstance().getTimeOrigin()*1e3);r.setStartTime(i),n&&n[0]&&(r.setDuration(Math.floor(n[0].duration*1e3)),r.putMetric("domInteractive",Math.floor(n[0].domInteractive*1e3)),r.putMetric("domContentLoadedEventEnd",Math.floor(n[0].domContentLoadedEventEnd*1e3)),r.putMetric("loadEventEnd",Math.floor(n[0].loadEventEnd*1e3)));const l="first-paint",m="first-contentful-paint";if(s){const g=s.find(I=>I.name===l);g&&g.startTime&&r.putMetric(us,Math.floor(g.startTime*1e3));const v=s.find(I=>I.name===m);v&&v.startTime&&r.putMetric(ds,Math.floor(v.startTime*1e3)),a&&r.putMetric(fs,Math.floor(a*1e3))}Ie(r)}static createUserTimingTrace(e,n){const s=new oe(e,n,!1,n);Ie(s)}}/**
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
 */function rn(t,e){const n=e;if(!n||n.responseStart===void 0)return;const s=V.getInstance().getTimeOrigin(),a=Math.floor((n.startTime+s)*1e3),o=n.responseStart?Math.floor((n.responseStart-n.startTime)*1e3):void 0,r=Math.floor((n.responseEnd-n.startTime)*1e3),i=n.name&&n.name.split("?")[0],l={performanceController:t,url:i,responsePayloadBytes:n.transferSize,startTimeUs:a,timeToResponseInitiatedUs:o,timeToResponseCompletedUs:r};yf(l)}/**
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
 */const Pf=5e3;function cn(t){Nt()&&(setTimeout(()=>Lf(t),0),setTimeout(()=>Cf(t),0),setTimeout(()=>Nf(t),0))}function Cf(t){const e=V.getInstance(),n=e.getEntriesByType("resource");for(const s of n)rn(t,s);e.setupObserver("resource",s=>rn(t,s))}function Lf(t){const e=V.getInstance(),n=e.getEntriesByType("navigation"),s=e.getEntriesByType("paint");if(e.onFirstInputDelay){let a=setTimeout(()=>{oe.createOobTrace(t,n,s),a=void 0},Pf);e.onFirstInputDelay(o=>{a&&(clearTimeout(a),oe.createOobTrace(t,n,s,o))})}else oe.createOobTrace(t,n,s)}function Nf(t){const e=V.getInstance(),n=e.getEntriesByType("measure");for(const s of n)ln(t,s);e.setupObserver("measure",s=>ln(t,s))}function ln(t,e){const n=e.name;n.substring(0,ft.length)!==ft&&oe.createUserTimingTrace(t,n)}/**
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
 */class Mf{constructor(e,n){this.app=e,this.installations=n,this.initialized=!1}_init(e){this.initialized||((e==null?void 0:e.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),(e==null?void 0:e.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),V.getInstance().requiredApisAvailable()?$t().then(n=>{n&&(pf(),ys(this).then(()=>cn(this),()=>cn(this)),this.initialized=!0)}).catch(n=>{x.info(`Environment doesn't support IndexedDB: ${n}`)}):x.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){U.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return U.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){U.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return U.getInstance().dataCollectionEnabled}}const Df="[DEFAULT]";function Vf(t=On()){return t=St(t),ye(t,"performance").getImmediate()}const Rf=(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();if(n.name!==Df)throw B.create("FB not default");if(typeof window>"u")throw B.create("no window");Ud(window);const a=new Mf(n,s);return a._init(e),a};function Of(){te(new K("performance",Rf,"PUBLIC")),G(en,dt),G(en,dt,"esm2017")}Of();const Bf=t=>(R("data-v-3835a11e"),t=t(),O(),t),Ff=Bf(()=>h("div",{"data-v-98ddab3d":"","data-v-8f7cd5e4":"",class:"VPContent",id:"VPContent"},[h("div",{"data-v-6c4a3ffe":"","data-v-98ddab3d":"",class:"NotFound"},[h("img",{src:"https://rust.coldmint.top/ftp/ling/cdnpng/logo.png",alt:"",class:"notfound-img"}),h("p",{"data-v-6c4a3ffe":"",class:"code"},"404"),h("h1",{"data-v-6c4a3ffe":"",class:"title"}," 你干嘛~，这里什么都没有! "),h("div",{"data-v-6c4a3ffe":"",class:"divider"}),h("blockquote",{"data-v-6c4a3ffe":"",class:"quote"}," 你寻找的页面可能不存在或被迁移…… "),h("div",{"data-v-6c4a3ffe":"",class:"action"},[h("a",{"data-v-6c4a3ffe":"",class:"link",href:"/","aria-label":"go to home"}," 返回主页 ")])])],-1)),Hf={__name:"NotFound",setup(t){const{Layout:e}=An;return(n,s)=>(c(),$(u(e),null,{"not-found":p(()=>[Ff]),_:1}))}},Uf=k(Hf,[["__scopeId","data-v-3835a11e"]]),jf=()=>{const e=Rn({apiKey:"AIzaSyANVvapu0ihi1cM8ZzuXTkwjx9lM_J1RyQ",authDomain:"rw-api-code-d0779.firebaseapp.com",projectId:"rw-api-code-d0779",storageBucket:"rw-api-code-d0779.appspot.com",messagingSenderId:"363611843335",appId:"1:363611843335:web:f15aef7ab427f52b4033a2",measurementId:"G-XJH5TKP5VL"});return Md(e),Vf(e),"Firebase initialized successfully"};(async function(){try{const t=await jf();console.log(t)}catch(t){console.error(t)}})();function zf(t){return new Promise(e=>setTimeout(e,t))}async function qf(){try{await navigator.permissions.query({name:"clipboard-write"})}catch(t){console.error(t)}}async function Gf(){try{await zf(1e3);const t=document.getElementsByClassName("copy");for(let e=0;e<t.length;e++){const n=t[e];n.addEventListener("touchend",async()=>{await qf();const o=[...n.parentNode.querySelector("code").querySelectorAll("span")],r=[...new Set(o.map(i=>i.textContent))].join("");try{await navigator.clipboard.writeText(r)}catch{const l=document.createElement("textarea");l.value=r,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l)}})}}catch(t){console.error(t)}}Gf();const Wf={...An,Layout:Uf};export{Wf as R,$i as c,w as u};
