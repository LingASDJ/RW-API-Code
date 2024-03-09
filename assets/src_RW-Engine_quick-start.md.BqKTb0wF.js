import{_ as s,c as i,o as e,a4 as a}from"./chunks/framework.C5rzuSi5.js";const E=JSON.parse('{"title":"QuickStart","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/RW-Engine/quick-start.md","filePath":"src/RW-Engine/quick-start.md"}'),n={name:"src/RW-Engine/quick-start.md"},t=a(`<h1 id="quickstart" tabindex="-1"><strong>QuickStart</strong> <a class="header-anchor" href="#quickstart" aria-label="Permalink to &quot;**QuickStart**&quot;">​</a></h1><h2 id="一-安装rw-engine" tabindex="-1">一.安装RW-Engine <a class="header-anchor" href="#一-安装rw-engine" aria-label="Permalink to &quot;一.安装RW-Engine&quot;">​</a></h2><h3 id="下载rw-engine" tabindex="-1">下载RW-Engine <a class="header-anchor" href="#下载rw-engine" aria-label="Permalink to &quot;下载RW-Engine&quot;">​</a></h3><pre><code>蓝奏云:
</code></pre><h3 id="安装rw-engine" tabindex="-1">安装RW-Engine <a class="header-anchor" href="#安装rw-engine" aria-label="Permalink to &quot;安装RW-Engine&quot;">​</a></h3><pre><code>解压下载的ZIP，将里面的RW_Engine这个文件夹整个复制到你的mod的目录下。

文件结构：
---units
    ---你的mod1
        ---RW_Engine
        ---mod-info.txt
        ---.........
    ---你的mod2
</code></pre><h2 id="二-使用rw-engine" tabindex="-1">二.使用RW-Engine <a class="header-anchor" href="#二-使用rw-engine" aria-label="Permalink to &quot;二.使用RW-Engine&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如没特殊注明，函数均支持commonCallBack</p></div><h3 id="linetextview-函数列表" tabindex="-1">LineTextView-函数列表 <a class="header-anchor" href="#linetextview-函数列表" aria-label="Permalink to &quot;LineTextView-函数列表&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p>函数列表： 1.setText <br> Data: (&quot;text&quot;,type=&quot;string&quot;) <br> 设置显示的文本 <br> 2.setTextMax <br> Data: (&quot;textMax&quot;,type=&quot;number&quot;) <br> 设置一行所能显示的最大文本数量 <br> 3.setTextColor <br> Data: (&quot;commonHeadLength&quot;,type=&quot;number&quot;) (&quot;indexStart&quot;,type=&quot;number&quot;) (&quot;indexEnd&quot;,type=&quot;number&quot;) (&quot;color&quot;,type=&quot;number&quot;) <br> 设置文本的颜色 <br> 4.setTextScale <br> Data: (&quot;textScale&quot;,type=&quot;number&quot;) <br> 设置文本的缩放</p></div><h3 id="linetextview-使用" tabindex="-1">LineTextView-使用 <a class="header-anchor" href="#linetextview-使用" aria-label="Permalink to &quot;LineTextView-使用&quot;">​</a></h3><p>LineTextView作为RW-Engine最基本的组件 <br> 默认以ini被铁锈加载。 <br> 所以使用LineTextView有俩种方式 <br> 第一种是spawnUnits，生成一个LineTextView <br> 或者在附属添加LineTextView <br> 第二种是copyForm这个ini <br></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>第一种方式</p></div><br><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[core]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@memory LTVSystem:unit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[hiddenAction_created]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">autoTriggerOnEvent:created</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">resetCustomTimer:true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#创建文本框</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">spawnUnits:LineTextViewSystem</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#文本框会自动发送tag为addLTVSystemToEpoll给该单位</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[hiddenAction_addLTVSystemToEpoll]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">autoTriggerOnEvent:newMessage(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">withTag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;addLTVSystemToEpoll&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">setUnitMemory:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LTVSystem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eventSource</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[action_setTextTest]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text:setText</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">isVisible:true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sendMessageTo:memory.LTVSystem</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sendMessageWithTags:setText</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sendMessageWithData:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B站关注学画画的十山月&quot;</span></span></code></pre></div>`,15),l=[t];function r(p,o,h,c,k,d){return e(),i("div",null,l)}const g=s(n,[["render",r]]);export{E as __pageData,g as default};
