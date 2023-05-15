import{_ as a,c as s,o as e,V as i}from"./chunks/framework.fcc0bf38.js";const b=JSON.parse('{"title":"[graphics]图像组","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/Unit/graphics.md","filePath":"src/Unit/graphics.md"}'),l={name:"src/Unit/graphics.md"},n=i(`<h1 id="graphics-图像组" tabindex="-1"><strong>[graphics]图像组</strong> <a class="header-anchor" href="#graphics-图像组" aria-label="Permalink to &quot;**[graphics]图像组**&quot;">​</a></h1><h3 id="image" tabindex="-1">image <a class="header-anchor" href="#image" aria-label="Permalink to &quot;image&quot;">​</a></h3><h4 id="image-代码简介" tabindex="-1">image-代码简介 <a class="header-anchor" href="#image-代码简介" aria-label="Permalink to &quot;image-代码简介&quot;">​</a></h4><p>代码:image 中文释义:图像 类型:字符型</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>如果需要隐藏单位的图像请使用空白透明的图像替代。<br> 请勿直接忽略此项，会直接报错导致此单位代码无法加载。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>铁锈战争支持多种图片格式，如：jpg,png,bmp...等，但也有一部分的格式并不支持，如webp这种的。<br> 尽量使用png格式的图片也许不失为一个好的选择。</p></div><h4 id="image-用法" tabindex="-1">image-用法 <a class="header-anchor" href="#image-用法" aria-label="Permalink to &quot;image-用法&quot;">​</a></h4><p>填写图片文件或图片文件的路径，图片文件将作为单位的主体图像。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>路径可使用相对路径或绝对路径。<br> 绝对路径中的根目录是以模组包内的首层目录为根目录的。<br> 相对路径则是以ini代码文件的目录为起始目录。<br> 图片和代码在同一目录下直接填写路径的用法相当于使用了相对路径。<br> 此方法基本适用于[graphics]组内所有需要引用图像文件的地方。</p></div><h4 id="image-示例" tabindex="-1">image-示例 <a class="header-anchor" href="#image-示例" aria-label="Permalink to &quot;image-示例&quot;">​</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">image: ROOT:\\124\\255\\tank.png </span><span style="color:#676E95;font-style:italic;"># 绝对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">image: \\124\\255\\tank.png </span><span style="color:#676E95;font-style:italic;"># 相对路径</span></span></code></pre></div><h3 id="image-back" tabindex="-1">image_back <a class="header-anchor" href="#image-back" aria-label="Permalink to &quot;image_back&quot;">​</a></h3><h4 id="image-back-代码简介" tabindex="-1">image_back-代码简介 <a class="header-anchor" href="#image-back-代码简介" aria-label="Permalink to &quot;image_back-代码简介&quot;">​</a></h4><p>代码:image_back 中文释义:背景图像 类型:字符型</p><h4 id="image-back-用法" tabindex="-1">image_back-用法 <a class="header-anchor" href="#image-back-用法" aria-label="Permalink to &quot;image_back-用法&quot;">​</a></h4><p>填写图片文件或图片文件的路径，图片文件将作为单位的背景图像。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在单位后面后面绘制的图像，不随单位转动。<br> 如无需要可以选择不填，可以作为单位角标和工厂底图使用。</p></div><h4 id="image-back-示例" tabindex="-1">image_back-示例 <a class="header-anchor" href="#image-back-示例" aria-label="Permalink to &quot;image_back-示例&quot;">​</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">image_back: ROOT:\\124\\255\\background.png </span><span style="color:#676E95;font-style:italic;"># 绝对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">image_back: \\124\\255\\background.png </span><span style="color:#676E95;font-style:italic;"># 相对路径</span></span></code></pre></div><h3 id="image-wreak" tabindex="-1">image_wreak <a class="header-anchor" href="#image-wreak" aria-label="Permalink to &quot;image_wreak&quot;">​</a></h3><h4 id="image-wreak-代码简介" tabindex="-1">image_wreak-代码简介 <a class="header-anchor" href="#image-wreak-代码简介" aria-label="Permalink to &quot;image_wreak-代码简介&quot;">​</a></h4><p>代码:image_wreak 中文释义:死亡图像 类型:字符型</p><h4 id="image-wreak-用法" tabindex="-1">image_wreak-用法 <a class="header-anchor" href="#image-wreak-用法" aria-label="Permalink to &quot;image_wreak-用法&quot;">​</a></h4><p>填写图片文件或图片文件的路径，图片文件将作为单位的死亡图像。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>作为在单位后面死亡后绘制的图像。<br> 不填写此项不会影响代码的运行，同时可以使用NONE作为路径名将表示没有任何图像。</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>如果不填死亡图像，默认将以单位的主体图像作为死亡图像使用。</p></div><h4 id="image-wreak-示例" tabindex="-1">image_wreak-示例 <a class="header-anchor" href="#image-wreak-示例" aria-label="Permalink to &quot;image_wreak-示例&quot;">​</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">image_wreak: ROOT:\\124\\255\\image_wreak.png </span><span style="color:#676E95;font-style:italic;"># 绝对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">image_wreak: \\124\\255\\image_wreak.png </span><span style="color:#676E95;font-style:italic;"># 相对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">image_wreak: NONE</span></span></code></pre></div><h3 id="image-shield" tabindex="-1">image_shield <a class="header-anchor" href="#image-shield" aria-label="Permalink to &quot;image_shield&quot;">​</a></h3><h4 id="image-shield-代码简介" tabindex="-1">image_shield-代码简介 <a class="header-anchor" href="#image-shield-代码简介" aria-label="Permalink to &quot;image_shield-代码简介&quot;">​</a></h4><p>代码:image_shield 中文释义:护盾图像 类型:字符型</p><h4 id="image-shield-用法" tabindex="-1">image_shield-用法 <a class="header-anchor" href="#image-shield-用法" aria-label="Permalink to &quot;image_shield-用法&quot;">​</a></h4><p>填写图片文件或图片文件的路径，图片文件将作为单位的护盾图像。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>作为在单位的护盾所绘制的图像。<br> 本项仅作为自定义护盾图像使用，如设置护盾且未填此项时将使用默认护盾。<br> 不填写此项不会影响代码的运行，同时可以使用NONE作为路径名将表示没有任何图像。</p></div><h4 id="image-shield-示例" tabindex="-1">image_shield-示例 <a class="header-anchor" href="#image-shield-示例" aria-label="Permalink to &quot;image_shield-示例&quot;">​</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">image_shield: ROOT:\\124\\255\\image_shield.png </span><span style="color:#676E95;font-style:italic;"># 绝对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">image_shield: \\124\\255\\image_shield.png </span><span style="color:#676E95;font-style:italic;"># 相对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">image_shield: NONE</span></span></code></pre></div><h3 id="image-offsetx" tabindex="-1">image_offsetX <a class="header-anchor" href="#image-offsetx" aria-label="Permalink to &quot;image_offsetX&quot;">​</a></h3><h4 id="image-offsetx-代码简介" tabindex="-1">image_offsetX-代码简介 <a class="header-anchor" href="#image-offsetx-代码简介" aria-label="Permalink to &quot;image_offsetX-代码简介&quot;">​</a></h4><p>代码:image_offsetX 中文释义:图像X轴偏移 类型:整数</p><h4 id="image-offsetx-用法" tabindex="-1">image_offsetX-用法 <a class="header-anchor" href="#image-offsetx-用法" aria-label="Permalink to &quot;image_offsetX-用法&quot;">​</a></h4><p>作用于主体图像，填写的数值会作为偏移的像素大小，可以为负。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>偏移的方向依据X的数值而定。<br> X轴以单位中心点为坐标，X增大则图像向右偏移。</p></div><h4 id="image-offsetx-示例" tabindex="-1">image_offsetX-示例 <a class="header-anchor" href="#image-offsetx-示例" aria-label="Permalink to &quot;image_offsetX-示例&quot;">​</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">image_offsetX:1 </span><span style="color:#676E95;font-style:italic;"># 偏移量为 1</span></span></code></pre></div><h3 id="image-offsety" tabindex="-1">image_offsetY <a class="header-anchor" href="#image-offsety" aria-label="Permalink to &quot;image_offsetY&quot;">​</a></h3><h4 id="image-offsety-代码简介" tabindex="-1">image_offsetY-代码简介 <a class="header-anchor" href="#image-offsety-代码简介" aria-label="Permalink to &quot;image_offsetY-代码简介&quot;">​</a></h4><p>代码:image_offsetY 中文释义:图像Y轴偏移 类型:整数</p><h4 id="image-offsety-用法" tabindex="-1">image_offsetY-用法 <a class="header-anchor" href="#image-offsety-用法" aria-label="Permalink to &quot;image_offsetY-用法&quot;">​</a></h4><p>作用于主体图像，填写的数值会作为偏移的像素大小，可以为负。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>偏移的方向依据Y的数值而定。<br> X轴以单位中心点为坐标，Y增大则图像向下偏移。</p></div><h4 id="image-offsety-示例" tabindex="-1">image_offsetY-示例 <a class="header-anchor" href="#image-offsety-示例" aria-label="Permalink to &quot;image_offsetY-示例&quot;">​</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">image_offsetY:1 </span><span style="color:#676E95;font-style:italic;"># 偏移量为 1</span></span></code></pre></div><h3 id="isvisible" tabindex="-1">isVisible <a class="header-anchor" href="#isvisible" aria-label="Permalink to &quot;isVisible&quot;">​</a></h3><h4 id="isvisible-代码简介" tabindex="-1">isVisible-代码简介 <a class="header-anchor" href="#isvisible-代码简介" aria-label="Permalink to &quot;isVisible-代码简介&quot;">​</a></h4><p>代码:isVisible 中文释义:可见 类型:逻辑布尔值</p><h4 id="isvisible-用法" tabindex="-1">isVisible-用法 <a class="header-anchor" href="#isvisible-用法" aria-label="Permalink to &quot;isVisible-用法&quot;">​</a></h4><p>填写布尔值或逻辑判断语句，作用于全部图像，会决定单位图像是否可见。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>默认值为true。<br> 即使图像隐藏，在小地图上还是可以看见的。</p></div><h4 id="isvisible-示例" tabindex="-1">isVisible-示例 <a class="header-anchor" href="#isvisible-示例" aria-label="Permalink to &quot;isVisible-示例&quot;">​</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">isVisible:false </span><span style="color:#676E95;font-style:italic;"># 使用布尔值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">isVisible:if self.hp() &gt; 200 </span><span style="color:#676E95;font-style:italic;"># 使用逻辑语句</span></span></code></pre></div><h3 id="isvisibletoenemies" tabindex="-1">isVisibleToEnemies <a class="header-anchor" href="#isvisibletoenemies" aria-label="Permalink to &quot;isVisibleToEnemies&quot;">​</a></h3><h4 id="isvisibletoenemies-代码简介" tabindex="-1">isVisibleToEnemies-代码简介 <a class="header-anchor" href="#isvisibletoenemies-代码简介" aria-label="Permalink to &quot;isVisibleToEnemies-代码简介&quot;">​</a></h4><p>代码:isVisibleToEnemies 中文释义:对敌人可见 类型:逻辑布尔值</p><h4 id="isvisibletoenemies-用法" tabindex="-1">isVisibleToEnemies-用法 <a class="header-anchor" href="#isvisibletoenemies-用法" aria-label="Permalink to &quot;isVisibleToEnemies-用法&quot;">​</a></h4><p>填写布尔值或逻辑判断语句，作用于全部图像，会决定单位图像是否被敌人可见。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>与showOnMinimapToEnemies,canOnlyBeAttackedByUnitsWithTags一起使用时，可以创建隐形系统。<br> （抄自HX代码表）</p></div><h4 id="isvisibletoenemies-示例" tabindex="-1">isVisibleToEnemies-示例 <a class="header-anchor" href="#isvisibletoenemies-示例" aria-label="Permalink to &quot;isVisibleToEnemies-示例&quot;">​</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">isVisibleToEnemies:false </span><span style="color:#676E95;font-style:italic;"># 使用布尔值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">isVisibleToEnemies:if self.hp() &gt; 200 </span><span style="color:#676E95;font-style:italic;"># 使用逻辑语句</span></span></code></pre></div><h3 id="teamcolorsusehue" tabindex="-1">teamColorsUseHue <a class="header-anchor" href="#teamcolorsusehue" aria-label="Permalink to &quot;teamColorsUseHue&quot;">​</a></h3><h4 id="teamcolorsusehue-代码简介" tabindex="-1">teamColorsUseHue-代码简介 <a class="header-anchor" href="#teamcolorsusehue-代码简介" aria-label="Permalink to &quot;teamColorsUseHue-代码简介&quot;">​</a></h4><p>代码:teamColorsUseHue 中文释义:阵营色色相 类型:布尔值</p><h4 id="teamcolorsusehue-用法" tabindex="-1">teamColorsUseHue-用法 <a class="header-anchor" href="#teamcolorsusehue-用法" aria-label="Permalink to &quot;teamColorsUseHue-用法&quot;">​</a></h4><p>填写布尔值决定如何使用，大概就是在单位主体图像上附着一层半透明的阵营色滤镜。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>默认为false。</p></div><h4 id="teamcolorsusehue-示例" tabindex="-1">teamColorsUseHue-示例 <a class="header-anchor" href="#teamcolorsusehue-示例" aria-label="Permalink to &quot;teamColorsUseHue-示例&quot;">​</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">teamColorsUseHue:true </span><span style="color:#676E95;font-style:italic;"># 使用布尔值</span></span></code></pre></div><h3 id="teamcoloringmode" tabindex="-1">teamColoringMode <a class="header-anchor" href="#teamcoloringmode" aria-label="Permalink to &quot;teamColoringMode&quot;">​</a></h3><h4 id="teamcoloringmode-代码简介" tabindex="-1">teamColoringMode-代码简介 <a class="header-anchor" href="#teamcoloringmode-代码简介" aria-label="Permalink to &quot;teamColoringMode-代码简介&quot;">​</a></h4><p>代码:teamColoringMode 中文释义:阵营色模式 类型:字符串</p><h4 id="teamcolorsusehue-用法-1" tabindex="-1">teamColorsUseHue-用法 <a class="header-anchor" href="#teamcolorsusehue-用法-1" aria-label="Permalink to &quot;teamColorsUseHue-用法&quot;">​</a></h4><p>填写对应的字符串选择图像的着色逻辑。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>默认是纯绿，即pureGreen。<br> 一共有disabled、hueShift、hueAdd、pureGreen，四种模式。<br> 中文便是，禁用，色相偏移，色相添加，纯绿。</p></div><h4 id="teamcoloringmode-示例" tabindex="-1">teamColoringMode-示例 <a class="header-anchor" href="#teamcoloringmode-示例" aria-label="Permalink to &quot;teamColoringMode-示例&quot;">​</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">teamColoringMode:disabled </span><span style="color:#676E95;font-style:italic;"># 禁用 会使单位不使用阵营色</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">teamColoringMode:hueShift </span><span style="color:#676E95;font-style:italic;"># 色相偏移 颜色会影响周围其他像素的着色</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">teamColoringMode:hueShift </span><span style="color:#676E95;font-style:italic;"># 色相添加 像极了使用teamColorsUseHue，加了一层颜色滤镜</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">teamColoringMode:pureGreen </span><span style="color:#676E95;font-style:italic;"># 纯绿 默认就是这个</span></span></code></pre></div><h3 id="scaleimagesto" tabindex="-1">scaleImagesTo <a class="header-anchor" href="#scaleimagesto" aria-label="Permalink to &quot;scaleImagesTo&quot;">​</a></h3><h4 id="scaleimagesto-代码简介" tabindex="-1">scaleImagesTo-代码简介 <a class="header-anchor" href="#scaleimagesto-代码简介" aria-label="Permalink to &quot;scaleImagesTo-代码简介&quot;">​</a></h4><p>代码:scaleImagesTo 中文释义:图像缩放到 类型:浮点数</p><h4 id="scaleimagesto-用法" tabindex="-1">scaleImagesTo-用法 <a class="header-anchor" href="#scaleimagesto-用法" aria-label="Permalink to &quot;scaleImagesTo-用法&quot;">​</a></h4><p>填写单位像素以缩放图像，同时影响腿部和阴影图像。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里的像素大小指的是每帧图像宽度的像素大小。<br> 例如图像原每帧宽度12，这里填24，图像将被等比例放大2倍。</p></div><h4 id="scaleimagesto-示例" tabindex="-1">scaleImagesTo-示例 <a class="header-anchor" href="#scaleimagesto-示例" aria-label="Permalink to &quot;scaleImagesTo-示例&quot;">​</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[graphics]</span></span>
<span class="line"><span style="color:#A6ACCD;">scaleImagesTo:12.5</span></span></code></pre></div>`,92),o=[n];function t(c,p,r,h,m,d){return e(),s("div",null,o)}const u=a(l,[["render",t]]);export{b as __pageData,u as default};
