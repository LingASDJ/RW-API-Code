import{_ as t,o as r,c as i,C as l,z as s,a as e,x as a,N as n,D as c}from"./chunks/framework.afbd7175.js";const J=JSON.parse('{"title":"[LogicBoolean] 逻辑序列组","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/Unit/loginboolean.md"}'),d={name:"src/Unit/loginboolean.md"},p=n('<h1 id="logicboolean-逻辑序列组" tabindex="-1"><strong>[LogicBoolean] 逻辑序列组</strong> <a class="header-anchor" href="#logicboolean-逻辑序列组" aria-label="Permalink to &quot;**[LogicBoolean] 逻辑序列组**&quot;">​</a></h1><blockquote><p>[!ATTENTION] 由于这个组的特殊性，格式不标准，请勿参考这个组的写法。</p></blockquote><h3 id="前置知识" tabindex="-1">前置知识 <a class="header-anchor" href="#前置知识" aria-label="Permalink to &quot;前置知识&quot;">​</a></h3><h4 id="布尔值" tabindex="-1">布尔值 <a class="header-anchor" href="#布尔值" aria-label="Permalink to &quot;布尔值&quot;">​</a></h4>',4),u=a("code",null,"boolean",-1),h=n(`<h4 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h4><p>数据类型指数据的种类，在铁锈中，不同的数据有不同的类型，不同的数据类型之间通常不能直接进行运算。</p><table><thead><tr><th>常见数据类型英文</th><th>存储的值类型</th></tr></thead><tbody><tr><td>string</td><td>字符串</td></tr><tr><td>number</td><td>整数</td></tr><tr><td>float</td><td>浮点数(小数)</td></tr><tr><td>boolean</td><td>布尔值</td></tr><tr><td>unit</td><td>单位</td></tr></tbody></table><h4 id="算数优先级" tabindex="-1">算数优先级 <a class="header-anchor" href="#算数优先级" aria-label="Permalink to &quot;算数优先级&quot;">​</a></h4><p>与数学中计算符一样，铁锈中算数运算符有优先级区别。<code>%</code>和<code>*</code>和<code>/</code>的优先级大于<code>+</code>和<code>-</code>。</p><h3 id="比较运算符" tabindex="-1">比较运算符 <a class="header-anchor" href="#比较运算符" aria-label="Permalink to &quot;比较运算符&quot;">​</a></h3><h4 id="如果" tabindex="-1">如果 <a class="header-anchor" href="#如果" aria-label="Permalink to &quot;如果&quot;">​</a></h4><p>代码:if 中文释义:如果 <code>if</code>是大部分逻辑运算的开头(select等不需要if)，用于在支持逻辑的键引入逻辑判断。</p><div class="alert callout tip"><p>演示例子:</p></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[action]</span></span>
<span class="line"><span style="color:#A6ACCD;">autoTrigger:if self.maxHp() &gt; memory.emx_hp</span></span></code></pre></div><h4 id="小于" tabindex="-1">小于 <a class="header-anchor" href="#小于" aria-label="Permalink to &quot;小于&quot;">​</a></h4><p>代码:&lt; 中文释义:小于<br> 小于用于在逻辑布尔值中比较两个数的大小，格式为<code>数据a &lt; 数据b</code>，若<code>a&lt;b</code>则整个式子的值为<code>true</code>，否则为<code>false</code>。</p><div class="alert callout note"><p class="title"><span class="icon icon-note"></span>要点指示:</p></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[action]</span></span>
<span class="line"><span style="color:#A6ACCD;">autoTrigger:if memory.a &lt; memory.b</span></span></code></pre></div><h4 id="大于" tabindex="-1">大于 <a class="header-anchor" href="#大于" aria-label="Permalink to &quot;大于&quot;">​</a></h4><p>代码:&gt; 中文释义:大于<br> 同上，格式为<code>数据a &gt; 数据b</code>，若<code>a&gt;b</code>则整个式子的值为<code>true</code>，否则为<code>false</code>。</p><h4 id="小于等于" tabindex="-1">小于等于 <a class="header-anchor" href="#小于等于" aria-label="Permalink to &quot;小于等于&quot;">​</a></h4><p>代码:&lt;= 中文释义:小于等于<br> 同上，若<code>a&lt;=b</code>则整个式子的值为<code>true</code>，否则为<code>false</code>。</p><h4 id="大于等于" tabindex="-1">大于等于 <a class="header-anchor" href="#大于等于" aria-label="Permalink to &quot;大于等于&quot;">​</a></h4><p>代码:&gt;= 中文释义:大于等于<br> 同上，若<code>a&gt;=b</code>则整个式子的值为<code>true</code>，否则为<code>false</code>。</p><h4 id="等于" tabindex="-1">等于 <a class="header-anchor" href="#等于" aria-label="Permalink to &quot;等于&quot;">​</a></h4><p>代码:== 中文释义:等于<br></p>`,22),f=n('<p>同上，若<code>a=b</code>则整个式子的值为<code>true</code>，否则为<code>false</code>。</p><h4 id="不等于" tabindex="-1">不等于 <a class="header-anchor" href="#不等于" aria-label="Permalink to &quot;不等于&quot;">​</a></h4><p>代码:!= 中文释义:不等于<br> 同上，若<code>a!=b</code>则整个式子的值为<code>true</code>，否则为<code>false</code>。</p><h3 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-label="Permalink to &quot;逻辑运算符&quot;">​</a></h3><h4 id="且" tabindex="-1">且 <a class="header-anchor" href="#且" aria-label="Permalink to &quot;且&quot;">​</a></h4><p>代码:and 中文释义:且<br></p>',6),m=a("br",null,null,-1),b=n(`<div class="alert callout note"><p class="title"><span class="icon icon-note"></span>要点指示:</p></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[action]</span></span>
<span class="line"><span style="color:#A6ACCD;">autoTrigger:if memory.a &lt; memory.b and memory.a &gt; memory.c</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在这个例子中，只有a小于b且a大于c时，自动触发才会被触发</span></span></code></pre></div><h4 id="或" tabindex="-1">或 <a class="header-anchor" href="#或" aria-label="Permalink to &quot;或&quot;">​</a></h4><p>代码:or 中文释义:或<br></p>`,4),_=a("h4",{id:"非",tabindex:"-1"},[e("非 "),a("a",{class:"header-anchor",href:"#非","aria-label":'Permalink to "非"'},"​")],-1),g=a("p",null,[e("代码:not 中文释义:非"),a("br")],-1),T=a("code",null,"true",-1),y=a("code",null,"false",-1),q=a("code",null,"false",-1),A=a("code",null,"true",-1),C=a("code",null,"not>and>or",-1),D=a("br",null,null,-1),k=n(`<div class="alert callout tip"><p>演示例子:</p></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[action]</span></span>
<span class="line"><span style="color:#A6ACCD;">autoTrigger:if (memory.a &lt; memory.b or memory.a &gt; memory.c) and not memory.a &lt; memory.d</span></span></code></pre></div><h4 id="动动脑考考你" tabindex="-1"><strong>动动脑考考你</strong> <a class="header-anchor" href="#动动脑考考你" aria-label="Permalink to &quot;**动动脑考考你**&quot;">​</a></h4><h4 id="考考你-在上述这个例子中-满足什么条件才会触发" tabindex="-1">考考你，在上述这个例子中，满足什么条件才会触发？ <a class="header-anchor" href="#考考你-在上述这个例子中-满足什么条件才会触发" aria-label="Permalink to &quot;考考你，在上述这个例子中，满足什么条件才会触发？&quot;">​</a></h4><h4 id="显示答案-2" tabindex="-1"><strong>显示答案-#2</strong> <a class="header-anchor" href="#显示答案-2" aria-label="Permalink to &quot;**显示答案-#2**&quot;">​</a></h4><h4 id="答案-a必须满足小于b和大于c中的一个-且a必须小于c-自动触发才会被触发。" tabindex="-1">答案：a必须满足小于b和大于c中的一个，且a必须小于c，自动触发才会被触发。 <a class="header-anchor" href="#答案-a必须满足小于b和大于c中的一个-且a必须小于c-自动触发才会被触发。" aria-label="Permalink to &quot;答案：a必须满足小于b和大于c中的一个，且a必须小于c，自动触发才会被触发。&quot;">​</a></h4><h3 id="算数运算符" tabindex="-1">算数运算符 <a class="header-anchor" href="#算数运算符" aria-label="Permalink to &quot;算数运算符&quot;">​</a></h3><h4 id="加" tabindex="-1">加 <a class="header-anchor" href="#加" aria-label="Permalink to &quot;加&quot;">​</a></h4><p>代码:+ 中文释义:加<br></p><p>加用于将两个逻辑值相加，得到结果，格式为<code>数据a + 数据b</code>。</p>`,10),P=n(`<div class="alert callout tip"><p>演示例子:</p></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[action]</span></span>
<span class="line"><span style="color:#A6ACCD;">autoTrigger:if (memory.a + memory.c) &lt; memory.b</span></span></code></pre></div><h4 id="减" tabindex="-1">减 <a class="header-anchor" href="#减" aria-label="Permalink to &quot;减&quot;">​</a></h4><p>代码:- 中文释义:减<br></p><p>减用于将两个逻辑值相减，得到结果，格式为<code>数据a - 数据b</code>。</p>`,5),x=a("br",null,null,-1),v=n('<h4 id="乘" tabindex="-1">乘 <a class="header-anchor" href="#乘" aria-label="Permalink to &quot;乘&quot;">​</a></h4><p>代码:* 中文释义:乘<br></p><p>乘用于将两个逻辑值相乘，得到结果，格式为<code>数据a * 数据b</code>。</p><h4 id="除" tabindex="-1">除 <a class="header-anchor" href="#除" aria-label="Permalink to &quot;除&quot;">​</a></h4><p>代码:/ 中文释义:除<br></p><p>除用于将两个逻辑值相除，得到结果，格式为<code>数据a / 数据b</code>。</p><h4 id="求余" tabindex="-1">求余 <a class="header-anchor" href="#求余" aria-label="Permalink to &quot;求余&quot;">​</a></h4><p>代码:% 中文释义:求余(取模)<br></p><p>求余用于获取两个逻辑值中，第一个除第二个的余数，格式为<code>数据a % 数据b</code>。 例如<code>7%3=1(7除3余1)</code></p><h3 id="单位统计" tabindex="-1">单位统计 <a class="header-anchor" href="#单位统计" aria-label="Permalink to &quot;单位统计&quot;">​</a></h3><h4 id="通用统计关键字" tabindex="-1">通用统计关键字 <a class="header-anchor" href="#通用统计关键字" aria-label="Permalink to &quot;通用统计关键字&quot;">​</a></h4><p>单位统计中部分通用的关键字：</p><ol><li><code>greaterThan</code> 大于</li><li><code>lessThan</code> 小于</li><li><code>empty</code> 空</li><li><code>full</code> 满</li><li><code>equalTo</code> 等于</li></ol><h4 id="内置参数" tabindex="-1">内置参数 <a class="header-anchor" href="#内置参数" aria-label="Permalink to &quot;内置参数&quot;">​</a></h4><p>单位统计中部分内置参数返回代码（由于过于简单不单独列出）：</p><ol><li><code>self.hp()</code> 生命值</li><li><code>self.maxHp()</code> 最大生命值</li><li><code>self.energy()</code> 能量</li><li><code>self.shield()</code> 护盾</li><li><code>self.kills()</code> 击杀数</li><li><code>self.maxEnergy()</code> 最大能量</li><li><code>self.maxShield()</code> 最大护盾</li><li><code>self.height()/self.x()</code> 高度</li><li><code>self.ammo()</code> 弹药</li><li><code>self.isAmmoEmpty()</code> 弹药为空(快捷方式:<code>self.ammo(empty=true)</code>)</li><li><code>self.ammoIncludingQueued()</code> 包括队列中的弹药</li><li><code>self.energyIncludingQueued()</code> 包括队列中的能量</li><li><code>self.isEnergyFull()</code> 能量满(快捷方式:<code>self.energy(full=true)</code>)</li><li><code>self.isEnergyEmpty()</code> 能量空(快捷方式:<code>self.energy(empty=true)</code>)</li><li><code>self.isEnergyRecharing()</code> 能量充能中</li><li><code>self.playerName()</code> 玩家名称</li><li><code>self.teamName()</code> 队伍名称</li><li><code>self.x(),self.y()</code> x,y坐标</li><li><code>self.dir()</code> 方向</li><li><code>self.priceCredits()</code> 金钱价格</li><li><code>self.speed()</code> 当前速度</li><li><code>self.maxMoveSpeed()</code> 最大速度</li><li><code>self.id()</code> 单位id(每个单位的序号)</li><li><code>self.builtAmount()</code> 建造数量</li><li><code>self.complate()</code> 自身建造完成</li><li><code>self.teamDefeatedTech()</code> 队伍失败</li><li><code>self.teamWipedOut()</code> 队伍全部死亡</li><li><code>self.teamVictory()</code> 队伍获胜</li><li><code>self.queueSize()</code> 自身队列大小</li><li><code>self.transportingCount()</code> 运输数量</li><li><code>self.isAttacking()</code> 在攻击</li><li><code>self.isOnNeutralTeam()</code> 是中立队伍</li><li><code>self.isControlledByAI()</code> 是AI控制</li><li><code>self.isInMap()</code> 在地图内</li><li><code>game.mapWidth()</code> 地图宽度</li><li><code>game.mapHeight()</code> 地图高度</li></ol><h4 id="self-hasresources" tabindex="-1">self.hasResources() <a class="header-anchor" href="#self-hasresources" aria-label="Permalink to &quot;self.hasResources()&quot;">​</a></h4><p>代码:self.hasResources() 中文释义:有资源 返回类型:boolean<br></p><p><code>self.hasResources()</code> 用于检测自身某资源是否大于等于某数值，格式为<code>self.hasResources(资源名=数值)</code></p><div class="alert callout tip"><p>演示例子:</p></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">self.hasResources(</span><span style="color:#F07178;">hp</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">10,</span><span style="color:#F07178;">energy</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">5)</span></span></code></pre></div><h4 id="self-resource" tabindex="-1">self.resource() <a class="header-anchor" href="#self-resource" aria-label="Permalink to &quot;self.resource()&quot;">​</a></h4><p>代码:self.resource() 中文释义:资源 返回类型:float<br></p><p>与<code>self.hasResources()</code>不同，<code>self.resource()</code>直接返回某个资源的数值。格式为<code>self.resource(type=&quot;资源名&quot;)</code>。</p>',24),I=n('<h4 id="self-resource-resource-type" tabindex="-1">self.resource.RESOURCE_TYPE <a class="header-anchor" href="#self-resource-resource-type" aria-label="Permalink to &quot;self.resource.RESOURCE_TYPE&quot;">​</a></h4><p>代码:self.resource.RESOURCE_TYPE 中文释义:资源 返回类型:float<br></p><p><code>self.resource.RESOURCE_TYPE</code>是<code>self.resource()</code>的快捷方式。格式为<code>self.resource.资源名称</code>，引用更加方便。</p><h4 id="self-isresourcelargerthan" tabindex="-1">self.isResourceLargerThan() <a class="header-anchor" href="#self-isresourcelargerthan" aria-label="Permalink to &quot;self.isResourceLargerThan()&quot;">​</a></h4><p>代码:self.isResourceLargerThan() 中文释义:资源是否大于 返回类型:boolean<br></p><blockquote><p>[!ATTENTION] 此代码为老旧解决方案，不推荐使用。</p></blockquote><p><code>self.isResourceLargerThan()</code>用于比较两种资源的大小。格式为<code>self.isResourceLargerThan(source=资源A,compareTarget=资源B,byMoreThan=大于资源B数量,multiplyTargetBy=资源B倍数)</code></p><h4 id="self-numberofqueuedwaypoints" tabindex="-1">self.numberOfQueuedWaypoints() <a class="header-anchor" href="#self-numberofqueuedwaypoints" aria-label="Permalink to &quot;self.numberOfQueuedWaypoints()&quot;">​</a></h4><p>代码:self.numberOfQueuedWaypoints() 中文释义:队列中路径点数量 返回类型:float<br></p><p><code>self.numberOfQueuedWaypoints()</code>用于返回队列中路径点的数量。格式为<code>self.numberOfQueuedWaypoints(type=&quot;路径点类型&quot;)</code>。</p><h3 id="单位计时" tabindex="-1">单位计时 <a class="header-anchor" href="#单位计时" aria-label="Permalink to &quot;单位计时&quot;">​</a></h3><h4 id="self-hastakendemage" tabindex="-1">self.hasTakenDemage() <a class="header-anchor" href="#self-hastakendemage" aria-label="Permalink to &quot;self.hasTakenDemage()&quot;">​</a></h4><p>代码:self.hasTakenDemage() 中文释义:受到伤害 返回类型:bool<br></p>',13),F=n(`<p><code>self.hasTakenDemage()</code>用于获取指定时间内是否收到伤害。使用<code>self.hasTakenDemage(withInSecounds=多少秒内,laterThanSecounds=多少秒后)</code>格式时，返回bool类型。</p><h4 id="self-timealive" tabindex="-1">self.timeAlive() <a class="header-anchor" href="#self-timealive" aria-label="Permalink to &quot;self.timeAlive()&quot;">​</a></h4><p>代码:self.timeAlive() 中文释义:存活时间 返回类型:float/bool<br></p><p><code>self.timeAlive()</code>用于获取单位存活时间。使用<code>self.timeAlive(withInSecounds=多少秒内,laterThanSecounds=多少秒后)</code>格式时，返回bool类型（是否符合此范围）；使用<code>self.timeAlive()</code>格式时，返回float类型。（更推荐使用后者）</p><h4 id="self-lastconverted" tabindex="-1">self.lastConverted() <a class="header-anchor" href="#self-lastconverted" aria-label="Permalink to &quot;self.lastConverted()&quot;">​</a></h4><p>代码:self.lastConverted() 中文释义:最后转换时间 返回类型:float/bool<br></p><p><code>self.timeAlive()</code>用于获取单位上次转换后的时间。使用<code>self.lastConverted(withInSecounds=多少秒内,laterThanSecounds=多少秒后)</code>格式时，返回bool类型（是否符合此范围）；使用<code>self.lastConverted()</code>格式时，返回float类型。</p><h4 id="self-customtimer" tabindex="-1">self.customTimer() <a class="header-anchor" href="#self-customtimer" aria-label="Permalink to &quot;self.customTimer()&quot;">​</a></h4><p>代码:self.customTimer() 中文释义:自定义计时器 返回类型:float/bool<br></p><p><code>self.timeAlive()</code>用于获取自定义计时器的时间。使用<code>self.customTimer(withInSecounds=多少秒内,laterThanSecounds=多少秒后)</code>格式时，返回bool类型（是否符合此范围）；使用<code>self.customTimer()</code>格式时，返回float类型。</p><div class="alert callout tip"><p>演示例子:</p></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[action]</span></span>
<span class="line"><span style="color:#A6ACCD;">autoTrigger:if self.customTimer() &gt;= 10</span></span>
<span class="line"><span style="color:#A6ACCD;">resetCustomTimer:true</span></span>
<span class="line"><span style="color:#A6ACCD;">showMessageToPlayers:10秒过去了</span></span></code></pre></div><h3 id="杂项" tabindex="-1">杂项 <a class="header-anchor" href="#杂项" aria-label="Permalink to &quot;杂项&quot;">​</a></h3><h4 id="thisactionindex-index" tabindex="-1">thisActionIndex/index() <a class="header-anchor" href="#thisactionindex-index" aria-label="Permalink to &quot;thisActionIndex/index()&quot;">​</a></h4><p>代码:thisActionIndex/index() 中文释义:索引 返回类型:float(number)<br></p><p><code>thisActionIndex/index()</code>是<code>alsoTriggerActionRepeat</code>中当前的索引。例如<code>alsoTriggerActionRepeat:10</code>，那么index在10次循环中分别为1-10。</p><h4 id="self-hasflag" tabindex="-1">self.hasFlag() <a class="header-anchor" href="#self-hasflag" aria-label="Permalink to &quot;self.hasFlag()&quot;">​</a></h4><p>代码:self.hasFlag() 中文释义:有标志 返回类型:boolean<br></p>`,18),O=a("code",null,"self.hasFlag()",-1),U=a("code",null,"self.hasFlag(id=数字)",-1),E=a("br",null,null,-1),S=n('<h4 id="self-tags" tabindex="-1">self.tags() <a class="header-anchor" href="#self-tags" aria-label="Permalink to &quot;self.tags()&quot;">​</a></h4><p>代码:self.tags() 中文释义:有标签 返回类型:boolean<br></p><p><code>self.tags()</code>用于检测自身是否有某个标签，格式为<code>self.tags(includes=&quot;标签&quot;)</code>。</p><h4 id="self-globalteamtags-self-hasglobalteamtags" tabindex="-1">self.globalTeamTags/self.hasGlobalTeamTags() <a class="header-anchor" href="#self-globalteamtags-self-hasglobalteamtags" aria-label="Permalink to &quot;self.globalTeamTags/self.hasGlobalTeamTags()&quot;">​</a></h4><p>代码:self.globalTeamTags/self.hasGlobalTeamTags() 中文释义:有全局标签 返回类型:boolean<br></p><p><code>self.globalTeamTags/self.hasGlobalTeamTags()</code>用于检测队伍内是否有某个全局标签，格式为<code>self.globalTeamTags/self.hasGlobalTeamTags(includes=&quot;标签&quot;)</code></p><h4 id="self-numberofconnections" tabindex="-1">self.numberOfConnections() <a class="header-anchor" href="#self-numberofconnections" aria-label="Permalink to &quot;self.numberOfConnections()&quot;">​</a></h4><p>代码:self.numberOfConnections() 中文释义:连接数 返回类型:float<br></p><p>隐藏代码，用途不明。</p><h4 id="self-numberofattachedunits" tabindex="-1">self.numberOfAttachedUnits() <a class="header-anchor" href="#self-numberofattachedunits" aria-label="Permalink to &quot;self.numberOfAttachedUnits()&quot;">​</a></h4><p>代码:self.numberOfAttachedUnits() 中文释义:有附属物 返回类型:int/bool<br></p><p><code>self.numberOfAttachedUnits()</code>用于获取自身附属物数量，可以通过<code>self.numberOfAttachedUnits(withTag=&quot;标签&quot;)</code>格式来限制附属物标签。</p><h4 id="self-hasactivewaypoint" tabindex="-1">self.hasActiveWaypoint() <a class="header-anchor" href="#self-hasactivewaypoint" aria-label="Permalink to &quot;self.hasActiveWaypoint()&quot;">​</a></h4><p>代码:self.hasActiveWaypoint() 中文释义:有活动的路径点 返回类型:bool<br></p><p><code>self.hasActiveWaypoint()</code>用于获取自身有无活动的路径点，格式为<code>self.hasActiveWaypoint(type=&quot;路径点类型&quot;)</code>。</p>',15),N=n(`<h4 id="self-transportingunitwithtags" tabindex="-1">self.transportingUnitWithTags() <a class="header-anchor" href="#self-transportingunitwithtags" aria-label="Permalink to &quot;self.transportingUnitWithTags()&quot;">​</a></h4><p>代码:self.transportingUnitWithTags() 中文释义:运输单位中有此标签 返回类型:bool<br></p><p><code>self.transportingUnitWithTags()</code>用于检测自身运输的单位中是否有含有特定标签的单位，格式为<code>self.transportingUnitWithTags(includes=&quot;标签&quot;)</code>。</p><h4 id="self-hasparent" tabindex="-1">self.hasParent() <a class="header-anchor" href="#self-hasparent" aria-label="Permalink to &quot;self.hasParent()&quot;">​</a></h4><p>代码:self.hasParent() 中文释义:有父单位 返回类型:bool<br></p><p><code>self.hasParent()</code>用于检测自身是否有父单位，且可以通过<code>self.hasParent(hasTag=&quot;标签&quot;)</code>来筛选父单位标签。<br> 通常情况下，附属和被运输单位会有父单位。</p><h4 id="self-numberofunitsinteam" tabindex="-1">self.numberOfUnitsInTeam() <a class="header-anchor" href="#self-numberofunitsinteam" aria-label="Permalink to &quot;self.numberOfUnitsInTeam()&quot;">​</a></h4><p>代码:self.numberOfUnitsInTeam() 中文释义:队伍中此单位数量 返回类型:float<br></p><p><code>self.numberOfUnitsInTeam()</code>(可省略<code>self.</code>)用于检测自身队伍符合条件的单位数量，格式为<code>self.numberOfUnitsInTeam(withTag=&quot;标签&quot;,withinRange=此距离内,incompleteBuildings=包含不完整建筑,factoryQueue=包含工厂队列)</code></p><div class="alert callout tip"><p>演示例子:</p></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">self.numberOfUnitsInTeam(</span><span style="color:#F07178;">withTag</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">air</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span><span style="color:#F07178;">withInRange</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">500,</span><span style="color:#F07178;">factoryQueue</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">true)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#有air标签，500范围内，包含工厂队列中的单位</span></span></code></pre></div><h4 id="self-numberofunitsinallynotownteam" tabindex="-1">self.numberOfUnitsInAllyNotOwnTeam() <a class="header-anchor" href="#self-numberofunitsinallynotownteam" aria-label="Permalink to &quot;self.numberOfUnitsInAllyNotOwnTeam()&quot;">​</a></h4><p>代码:self.numberOfUnitsInAllyNotOwnTeam() 中文释义:盟友队伍中此单位数量 返回类型:float<br></p><p><code>self.numberOfUnitsInAllyNotOwnTeam()</code>与<code>self.numberOfUnitsInTeam()</code>用法完全相同，区别仅在于前者的查询范围是盟友中。</p><h4 id="self-numberofunitsinenemyteam" tabindex="-1">self.numberOfUnitsInEnemyTeam() <a class="header-anchor" href="#self-numberofunitsinenemyteam" aria-label="Permalink to &quot;self.numberOfUnitsInEnemyTeam()&quot;">​</a></h4><p>代码:self.numberOfUnitsInEnemyTeam() 中文释义:敌方队伍中此单位数量 返回类型:float<br></p><p><code>self.numberOfUnitsInEnemyTeam()</code>与<code>self.numberOfUnitsInTeam()</code>用法完全相同，区别仅在于前者的查询范围是敌方中。</p><h4 id="self-numberofunitsinneutralteam" tabindex="-1">self.numberOfUnitsInNeutralTeam() <a class="header-anchor" href="#self-numberofunitsinneutralteam" aria-label="Permalink to &quot;self.numberOfUnitsInNeutralTeam()&quot;">​</a></h4><p>代码:self.numberOfUnitsInNeutralTeam() 中文释义:中立队伍中此单位数量 返回类型:float<br></p><p><code>self.numberOfUnitsInNeutralTeam()</code>与<code>self.numberOfUnitsInTeam()</code>用法完全相同，区别仅在于前者的查询范围是中立中。</p><h4 id="self-numberofunitsinaggressiveteam" tabindex="-1">self.numberOfUnitsInAggressiveTeam() <a class="header-anchor" href="#self-numberofunitsinaggressiveteam" aria-label="Permalink to &quot;self.numberOfUnitsInAggressiveTeam()&quot;">​</a></h4><p>代码:self.numberOfUnitsInAggressiveTeam() 中文释义:敌对中立队伍中此单位数量 返回类型:float<br></p><p><code>self.numberOfUnitsInAggressiveTeam()</code>与<code>self.numberOfUnitsInTeam()</code>用法完全相同，区别仅在于前者的查询范围是敌对中立中。</p><h4 id="self-numberofunitsinallyteam" tabindex="-1">self.numberOfUnitsInAllyTeam() <a class="header-anchor" href="#self-numberofunitsinallyteam" aria-label="Permalink to &quot;self.numberOfUnitsInAllyTeam()&quot;">​</a></h4><p>代码:self.numberOfUnitsInAllyTeam() 中文释义:所有队伍中此单位数量 返回类型:float<br></p><p><code>self.numberOfUnitsInAllyTeam()</code>与<code>self.numberOfUnitsInTeam()</code>用法完全相同，区别仅在于前者的查询范围是所有中。</p><h4 id="self-hasunitinteam" tabindex="-1">self.hasUnitInTeam() <a class="header-anchor" href="#self-hasunitinteam" aria-label="Permalink to &quot;self.hasUnitInTeam()&quot;">​</a></h4><p>代码:self.hasUnitInTeam() 中文释义:队伍中有单位 返回类型:bool<br></p><p><code>self.hasUnitInTeam()</code>与<code>self.numberOfUnitsInTeam()</code>格式完全相同，区别在于前者仅查询队伍中有无符合条件的单位，并返回<code>boolean</code>类型。</p><h4 id="self-nounitinteam" tabindex="-1">self.noUnitInTeam() <a class="header-anchor" href="#self-nounitinteam" aria-label="Permalink to &quot;self.noUnitInTeam()&quot;">​</a></h4><p>代码:self.noUnitInTeam() 中文释义:队伍中无单位 返回类型:bool<br></p><p><code>self.noUnitInTeam()</code>与<code>self.numberOfUnitsInTeam()</code>格式完全相同，区别在于前者仅查询队伍中是否无符合条件的单位，并返回<code>boolean</code>类型。</p><h4 id="self-readunitmemory" tabindex="-1">self.readUnitMemory() <a class="header-anchor" href="#self-readunitmemory" aria-label="Permalink to &quot;self.readUnitMemory()&quot;">​</a></h4><p>代码:self.readUnitMemory() 中文释义:读取单位内存 返回类型:跟随memory类型<br></p><p><code>self.readUnitMemory()</code>用于获取指定单位内存，格式为<code>self.readUnitMemory(&quot;内存名&quot;,type=&quot;类型&quot;,index=下标(仅当类型是数组时可选填写))</code>。</p>`,35),R=a("br",null,null,-1),V=a("a",{href:"https://www.bilibili.com/video/BV17v4y1r7dV",target:"_blank",rel:"noreferrer"},"https://www.bilibili.com/video/BV17v4y1r7dV",-1),w=a("br",null,null,-1),W=a("iframe",{src:"//player.bilibili.com/player.html?aid=566144438&bvid=BV17v4y1r7dV&cid=988997369&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"600",height:"400"}," ",-1),B=n(`<div class="vp-code-group"><div class="tabs"><input type="radio" name="group-0PTe-" id="tab-QfuaxLO" checked="checked"><label for="tab-QfuaxLO">如果下标使用了逻辑，无论逻辑值都会返回第零项的解决策略--Thanks 十山月</label></div><div class="blocks"><div class="language-ini active"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">[action_copyArry]</span></span>
<span class="line"><span style="color:#A6ACCD;">text:copyFromUnit</span></span>
<span class="line"><span style="color:#A6ACCD;">alsoTriggerAction:copyOne</span></span>
<span class="line"><span style="color:#A6ACCD;">alsoTriggerActionRepeat:memory.target.readUnitMemory(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Afloat</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">float[]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">).size</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 最重要的</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">alsoTriggerOrQueueActionWithTarget:memory.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[hiddenAction_copyOne]</span></span>
<span class="line"><span style="color:#A6ACCD;">setUnitMemory:Afloat[index] = thisActionTarget.readUnitMemory(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Afloat</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">float[]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)[index]</span></span></code></pre></div></div></div><div class="alert callout tip"><p>演示例子:</p></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">if parent.readUnitMemory(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">boostTarget</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">unit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) == self</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#如果 父单位内存boostTarget的值等于自己</span></span></code></pre></div>`,3);function M(Q,L,G,Y,$,z){const o=c("font");return r(),i("div",null,[p,l(o,{color:"orange"},{default:s(()=>[e("布尔值")]),_:1}),e("表达“真(true)”或“假(false)”的一个状态。在铁锈中，布尔值("),u,e(")被运用于逻辑判断。"),h,a("blockquote",null,[a("p",null,[e("[!TIP] 请注意，铁锈中等于的符号为"),l(o,{color:"orange"},{default:s(()=>[e("==")]),_:1}),e("，"),l(o,{color:"orange"},{default:s(()=>[e("=")]),_:1}),e("在铁锈中用于赋值或参数。")])]),f,a("blockquote",null,[a("p",null,[e("[!TIP] "),l(o,{color:"orange"},{default:s(()=>[e("and")]),_:1}),e("用于连接两个逻辑判断，只有在这两个逻辑判断的值都为"),l(o,{color:"orange"},{default:s(()=>[e("true")]),_:1}),e("时，"),l(o,{color:"orange"},{default:s(()=>[e("and")]),_:1}),e("的值才为true。 "),m])]),b,a("blockquote",null,[a("p",null,[e("[!TIP] "),l(o,{color:"orange"},{default:s(()=>[e("or")]),_:1}),e("用于连接两个逻辑判断，只要这两个逻辑判断的值有一个为"),l(o,{color:"orange"},{default:s(()=>[e("true")]),_:1}),e("时，"),l(o,{color:"orange"},{default:s(()=>[e("or")]),_:1}),e("的值就为true。")])]),_,g,a("blockquote",null,[a("p",null,[e("[!TIP] "),l(o,{color:"orange"},{default:s(()=>[e("not")]),_:1}),e("用于将某个逻辑判断的值取反，即"),T,e("变"),y,e("，"),q,e("变"),A,e("。")])]),a("blockquote",null,[a("p",null,[e("[!NOTE] 多个逻辑运算符同时使用时，优先级为"),C,e("，同时"),l(o,{color:"orange"},{default:s(()=>[e("支持使用括号改变运算优先级")]),_:1}),e("。 "),D,e("推荐"),l(o,{color:"orange"},{default:s(()=>[e("在不确定优先级时打括号")]),_:1}),e("。")])]),k,a("blockquote",null,[a("p",null,[e("[!NOTE] 不同数据类型通常"),l(o,{color:"orange"},{default:s(()=>[e("不能直接进行算数运算")]),_:1}),e("，但在部分情况下，"),l(o,{color:"orange"},{default:s(()=>[e("number")]),_:1}),e("和"),l(o,{color:"orange"},{default:s(()=>[e("float")]),_:1}),e("类型可以混用（建议"),l(o,{color:"orange"},{default:s(()=>[e("所有数值全部使用float")]),_:1}),e("来避免混淆）。")])]),P,a("blockquote",null,[a("p",null,[e("[!NOTE] 对于"),l(o,{color:"orange"},{default:s(()=>[e("不满足交换律的运算符")]),_:1}),e("，需要注意"),l(o,{color:"orange"},{default:s(()=>[e("运算优先级")]),_:1}),e("是否正确。由于铁锈本身bug，"),l(o,{color:"orange"},{default:s(()=>[e("在数学上正确的优先级不一定在铁锈中正确")]),_:1}),e("，因此可能出现减法顺序混乱等问题。 "),x,e("为了避免可能的问题，请尽量在任何"),l(o,{color:"orange"},{default:s(()=>[e("不满足交换律的运算符")]),_:1}),e("两边打上括号。")])]),v,a("blockquote",null,[a("p",null,[e("[!NOTE] 引用资源时，请确保"),l(o,{color:"orange"},{default:s(()=>[e("这个资源在这个单位定义过")]),_:1}),e("，否则会报错。")])]),I,a("blockquote",null,[a("p",null,[e("[!NOTE] 单位计时部分能返回到最小时间精度为"),l(o,{color:"orange"},{default:s(()=>[e("0.1秒")]),_:1}),e("。")])]),F,a("p",null,[O,e("用于获取自身是否有"),l(o,{color:"orange"},{default:s(()=>[e("标志")]),_:1}),e("，格式为"),U,e("。")]),a("blockquote",null,[a("p",null,[e("[!NOTE] 不同于"),l(o,{color:"orange"},{default:s(()=>[e("标签（tag）")]),_:1}),e("，"),l(o,{color:"orange"},{default:s(()=>[e("标志（flag）")]),_:1}),e("是内置的一些"),l(o,{color:"orange"},{default:s(()=>[e("布尔值")]),_:1}),e("，无需定义即可直接使用。"),E,e(" 标签的添加方法为"),l(o,{color:"orange"},{default:s(()=>[e("[action]addResource:flag=1,3-7,13")]),_:1}),e("，且只支持"),l(o,{color:"orange"},{default:s(()=>[e("0-31")]),_:1}),e("，标签的移除方法与之相反。")])]),S,a("blockquote",null,[a("p",null,[e("[!NOTE] 路径点类型可以是"),l(o,{color:"orange"},{default:s(()=>[e("move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget")]),_:1}),e("。")])]),N,a("blockquote",null,[a("p",null,[e("[!NOTE] 在"),l(o,{color:"orange"},{default:s(()=>[e("跨单位读取数组")]),_:1}),e("时，如果下标使用了逻辑，无论逻辑值都会返回第零项，"),l(o,{color:"orange"},{default:s(()=>[e("为游戏bug")]),_:1}),e("，解决方法可以参考"),R,V,e(" (感谢十山月)"),w])]),W,B])}const j=t(d,[["render",M]]);export{J as __pageData,j as default};
