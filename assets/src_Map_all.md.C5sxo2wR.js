import{_ as t,c as s,o as n,ag as p}from"./chunks/framework.DPDPlp3K.js";const d=JSON.parse('{"title":"map","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/Map/all.md","filePath":"src/Map/all.md"}'),e={name:"src/Map/all.md"};function l(o,a,i,r,c,u){return n(),s("div",null,a[0]||(a[0]=[p(`<h1 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;map&quot;">​</a></h1><ul><li><p>现代化工具，已经能很好的帮助我们编辑地块，tiles与layer等将不再说明。</p></li><li><p>在阅读本文之前，请确保你理解&lt;xml&gt;格式。</p></li></ul><h2 id="trigger" tabindex="-1">Trigger <a class="header-anchor" href="#trigger" aria-label="Permalink to &quot;Trigger&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;map&gt;</span></span>
<span class="line"><span>…</span></span>
<span class="line"><span>&lt;objectgroup name=&quot;Triggers&quot;&gt;</span></span>
<span class="line"><span>…</span></span>
<span class="line"><span>&lt;/objectgroup&gt;</span></span>
<span class="line"><span>&lt;/map&gt;</span></span></code></pre></div><p>&lt;map&gt;中包含了一个&lt;objectgroup&gt;组，它的“name”是“Trigger”（不区分大小写），我们称之它为宾语（触发）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;object name=&quot;map_info&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;20&quot; height=&quot;20&quot;&gt;</span></span>
<span class="line"><span> &lt;properties&gt;</span></span>
<span class="line"><span> &lt;property name=&quot;type&quot; value=&quot;skirmish&quot; /&gt;</span></span>
<span class="line"><span> &lt;/properties&gt;</span></span>
<span class="line"><span>&lt;/object&gt;</span></span></code></pre></div><p>这是其中一个元素，它符合文档中“●map_info”（●选项表示值为“name”，否则是“type”）特征。</p><p>这样是为了方便描述，文档不需要太复杂，参考此处出现的特征符合文档部分相信你自己理解了格式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;object type=&quot;unitAdd&quot; x=&quot;-Infinity&quot; y=&quot;-Infinity&quot;&gt;</span></span>
<span class="line"><span> &lt;properties&gt;</span></span>
<span class="line"><span>  &lt;property name=&quot;spawnUnits&quot; value=&quot;tree*1000&quot; /&gt;</span></span>
<span class="line"><span>  &lt;property name=&quot;team&quot; value=&quot;3&quot; /&gt;</span></span>
<span class="line"><span>  &lt;property name=&quot;resetActivationAfter&quot; value=&quot;0&quot; /&gt;</span></span>
<span class="line"><span> &lt;/properties&gt;</span></span>
<span class="line"><span>&lt;/object&gt;</span></span></code></pre></div><p>这是一个“unitAdd”组，到这里格式介绍就完成了，详细请见文档。</p><p>当你熟练Trigger后，可以试试<a href="https://github.com/n9tank/rwtmxJava" target="_blank" rel="noreferrer">rwtmxJava</a>可以重用组件同时还有语法提示。</p>`,11)]))}const m=t(e,[["render",l]]);export{d as __pageData,m as default};
