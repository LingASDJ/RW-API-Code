---
outline: deep
---

# **[LogicBoolean] 逻辑序列组**

::: danger
由于这个组的特殊性，格式不标准，请勿参考这个组的写法。
:::

### 前置知识

#### 布尔值
<font color=orange>布尔值</font>表达“真(true)”或“假(false)”的一个状态。在铁锈中，布尔值(`boolean`)被运用于逻辑判断。

#### 数据类型
数据类型指数据的种类，在铁锈中，不同的数据有不同的类型，不同的数据类型之间通常不能直接进行运算。

|常见数据类型英文 |存储的值类型 |
| -------- | ------------ |
| string   | 字符串       |
| number   | 整数         |
| float    | 浮点数(小数) |
| boolean  | 布尔值       |
| unit     | 单位         |
<!-- MarkDown表格必须有上方的分割线以告诉浏览器是表格 -->

#### 算数优先级
与数学中计算符一样，铁锈中算数运算符有优先级区别。`%`和`*`和`/`的优先级大于`+`和`-`。

### 比较运算符

#### 如果
代码:if 中文释义:如果
`if`是大部分逻辑运算的开头(select等不需要if)，用于在支持逻辑的键引入逻辑判断。

<!-- 若要连续嵌套，请直接使用Html原生代码 -->
<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
[action]
autoTrigger:if self.maxHp() > memory.emx_hp
```

#### 小于
代码:< 中文释义:小于<br>
小于用于在逻辑布尔值中比较两个数的大小，格式为`数据a < 数据b`，若`a<b`则整个式子的值为`true`，否则为`false`。

<!-- 自定义的提示框请使用原生Html进行套入 -->
<div class="alert callout note">
  <p class="title">
  <span class="icon icon-note"></span>要点指示:</p>
</div>


```ini
[action]
autoTrigger:if memory.a < memory.b
```

#### 大于
代码:> 中文释义:大于<br>
同上，格式为`数据a > 数据b`，若`a>b`则整个式子的值为`true`，否则为`false`。

#### 小于等于
代码:<= 中文释义:小于等于<br>
同上，若`a<=b`则整个式子的值为`true`，否则为`false`。

#### 大于等于
代码:>= 中文释义:大于等于<br>
同上，若`a>=b`则整个式子的值为`true`，否则为`false`。

#### 等于
代码:== 中文释义:等于<br>

::: tip
请注意，铁锈中等于的符号为<font color=orange>==</font>，<font color=orange>=</font>在铁锈中用于赋值或参数。
:::


同上，若`a=b`则整个式子的值为`true`，否则为`false`。

#### 不等于
代码:!= 中文释义:不等于<br>
同上，若`a!=b`则整个式子的值为`true`，否则为`false`。

### 逻辑运算符

#### 且
代码:and 中文释义:且<br>
::: tip
<font color=orange>and</font>用于连接两个逻辑判断，只有在这两个逻辑判断的值都为<font color=orange>true</font>时，<font color=orange>and</font>的值才为true。
<br>
:::

<!-- 自定义的提示框请使用原生Html进行套入 -->
<div class="alert callout note">
  <p class="title">
  <span class="icon icon-note"></span>要点指示:</p>
</div>
<!-- 并保证首尾留有一行换行以便Markdown正确解析 -->

```ini
[action]
autoTrigger:if memory.a < memory.b and memory.a > memory.c
# 在这个例子中，只有a小于b且a大于c时，自动触发才会被触发
```

#### 或
代码:or 中文释义:或<br>
::: tip
<font color=orange>or</font>用于连接两个逻辑判断，只要这两个逻辑判断的值有一个为<font color=orange>true</font>时，<font color=orange>or</font>的值就为true。
:::

#### 非
代码:not 中文释义:非<br>
::: tip
<font color=orange>not</font>用于将某个逻辑判断的值取反，即`true`变`false`，`false`变`true`。
:::

::: info
多个逻辑运算符同时使用时，优先级为`not>and>or`，同时<font color=orange>支持使用括号改变运算优先级</font>。
<br>推荐<font color=orange>在不确定优先级时打括号</font>。
:::

<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
[action]
autoTrigger:if (memory.a < memory.b or memory.a > memory.c) and not memory.a < memory.d
```

:::code-group
```bash [考考你]
考考你，在上述这个例子中，满足什么条件才会触发？
```
```bash [显示答案]
答案：a必须满足小于b和大于c中的一个，且a必须小于c，自动触发才会被触发。
```
:::


### 算数运算符

#### 加
代码:+ 中文释义:加<br>

加用于将两个逻辑值相加，得到结果，格式为`数据a + 数据b`。

::: info
不同数据类型通常<font color=orange>不能直接进行算数运算</font>，但在部分情况下，<font color=orange>number</font>和<font color=orange>float</font>类型可以混用（建议<font color=orange>所有数值全部使用float</font>来避免混淆）。
:::

<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
[action]
autoTrigger:if (memory.a + memory.c) < memory.b
```

#### 减
代码:- 中文释义:减<br>

减用于将两个逻辑值相减，得到结果，格式为`数据a - 数据b`。

::: info
对于<font color=orange>不满足交换律的运算符</font>，需要注意<font color=orange>运算优先级</font>是否正确。由于铁锈本身bug，<font color=orange>在数学上正确的优先级不一定在铁锈中正确</font>，因此可能出现减法顺序混乱等问题。
<br>为了避免可能的问题，请尽量在任何<font color=orange>不满足交换律的运算符</font>两边打上括号。
:::

#### 乘
代码:* 中文释义:乘<br>

乘用于将两个逻辑值相乘，得到结果，格式为`数据a * 数据b`。

#### 除
代码:/ 中文释义:除<br>

除用于将两个逻辑值相除，得到结果，格式为`数据a / 数据b`。

#### 求余
代码:% 中文释义:求余(取模)<br>

求余用于获取两个逻辑值中，第一个除第二个的余数，格式为`数据a % 数据b`。
例如`7%3=1(7除3余1)`

### 单位统计

#### 通用统计关键字
单位统计中部分通用的关键字：
1. `greaterThan` 大于
2. `lessThan` 小于
3. `empty` 空
4. `full` 满
5. `equalTo` 等于

#### 内置参数
单位统计中部分内置参数返回代码（由于过于简单不单独列出）：
1. `self.hp()` 生命值
2. `self.maxHp()` 最大生命值
3. `self.energy()` 能量
4. `self.shield()` 护盾
5. `self.kills()` 击杀数
6. `self.maxEnergy()` 最大能量
7. `self.maxShield()` 最大护盾
8. `self.height()/self.x()` 高度
9. `self.ammo()` 弹药
10. `self.isAmmoEmpty()` 弹药为空(快捷方式:`self.ammo(empty=true)`)
11. `self.ammoIncludingQueued()` 包括队列中的弹药
12. `self.energyIncludingQueued()` 包括队列中的能量
13. `self.isEnergyFull()` 能量满(快捷方式:`self.energy(full=true)`)
14. `self.isEnergyEmpty()` 能量空(快捷方式:`self.energy(empty=true)`)
15. `self.isEnergyRecharing()` 能量充能中
16. `self.playerName()` 玩家名称
17. `self.teamName()` 队伍名称
18. `self.x(),self.y()` x,y坐标
19. `self.dir()` 方向
20. `self.priceCredits()` 金钱价格
21. `self.speed()` 当前速度
22. `self.maxMoveSpeed()` 最大速度
23. `self.id()` 单位id(每个单位的序号)
24. `self.builtAmount()` 建造数量
25. `self.complate()` 自身建造完成
26. `self.teamDefeatedTech()` 队伍失败
27. `self.teamWipedOut()` 队伍全部死亡
28. `self.teamVictory()` 队伍获胜
29. `self.queueSize()` 自身队列大小
30. `self.transportingCount()` 运输数量
31. `self.isAttacking()` 在攻击
32. `self.isOnNeutralTeam()` 是中立队伍
33. `self.isControlledByAI()` 是AI控制
34. `self.isInMap()` 在地图内
35. `game.mapWidth()` 地图宽度
36. `game.mapHeight()` 地图高度

self.hasResources()
代码:self.hasResources() 中文释义:有资源 返回类型:boolean<br>

`self.hasResources()` 用于检测自身某资源是否大于等于某数值，格式为`self.hasResources(资源名=数值)`

<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
self.hasResources(hp=10,energy=5) 
```

self.resource()
代码:self.resource() 中文释义:资源 返回类型:float<br>

与`self.hasResources()`不同，`self.resource()`直接返回某个资源的数值。格式为`self.resource(type="资源名")`。

::: info
引用资源时，请确保<font color=orange>这个资源在这个单位定义过</font>，否则会报错。
:::

self.resource.RESOURCE_TYPE
代码:self.resource.RESOURCE_TYPE 中文释义:资源 返回类型:float<br>

`self.resource.RESOURCE_TYPE`是`self.resource()`的快捷方式。格式为`self.resource.资源名称`，引用更加方便。

self.isResourceLargerThan()
代码:self.isResourceLargerThan() 中文释义:资源是否大于 返回类型:boolean<br>

::: warning
此代码为老旧解决方案，不推荐使用。
:::

`self.isResourceLargerThan()`用于比较两种资源的大小。格式为`self.isResourceLargerThan(source=资源A,compareTarget=资源B,byMoreThan=大于资源B数量,multiplyTargetBy=资源B倍数)`

self.numberOfQueuedWaypoints()
代码:self.numberOfQueuedWaypoints() 中文释义:队列中路径点数量 返回类型:float<br>

`self.numberOfQueuedWaypoints()`用于返回队列中路径点的数量。格式为`self.numberOfQueuedWaypoints(type="路径点类型")`。

### 单位计时

self.hasTakenDemage()
代码:self.hasTakenDemage() 中文释义:受到伤害 返回类型:bool<br>

::: info
单位计时部分能返回到最小时间精度为<font color=orange>0.1秒</font>。
:::

`self.hasTakenDemage()`用于获取指定时间内是否收到伤害。使用`self.hasTakenDemage(withInSecounds=多少秒内,laterThanSecounds=多少秒后)`格式时，返回bool类型。

self.timeAlive()
代码:self.timeAlive() 中文释义:存活时间 返回类型:float/bool<br>

`self.timeAlive()`用于获取单位存活时间。使用`self.timeAlive(withInSecounds=多少秒内,laterThanSecounds=多少秒后)`格式时，返回bool类型（是否符合此范围）；使用`self.timeAlive()`格式时，返回float类型。（更推荐使用后者）

self.lastConverted()
代码:self.lastConverted() 中文释义:最后转换时间 返回类型:float/bool<br>

`self.timeAlive()`用于获取单位上次转换后的时间。使用`self.lastConverted(withInSecounds=多少秒内,laterThanSecounds=多少秒后)`格式时，返回bool类型（是否符合此范围）；使用`self.lastConverted()`格式时，返回float类型。

self.customTimer()
代码:self.customTimer() 中文释义:自定义计时器 返回类型:float/bool<br>

`self.timeAlive()`用于获取自定义计时器的时间。使用`self.customTimer(withInSecounds=多少秒内,laterThanSecounds=多少秒后)`格式时，返回bool类型（是否符合此范围）；使用`self.customTimer()`格式时，返回float类型。

<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
[action]
autoTrigger:if self.customTimer() >= 10
resetCustomTimer:true
showMessageToPlayers:10秒过去了
```

### 杂项

thisActionIndex/index()
代码:thisActionIndex/index() 中文释义:索引 返回类型:float(number)<br>

`thisActionIndex/index()`是`alsoTriggerActionRepeat`中当前的索引。例如`alsoTriggerActionRepeat:10`，那么index在10次循环中分别为1-10。

self.hasFlag()
代码:self.hasFlag() 中文释义:有标志 返回类型:boolean<br>

`self.hasFlag()`用于获取自身是否有<font color=orange>标志</font>，格式为`self.hasFlag(id=数字)`。

::: info
不同于<font color=orange>标签（tag）</font>，<font color=orange>标志（flag）</font>是内置的一些<font color=orange>布尔值</font>，无需定义即可直接使用。<br>
> 标签的添加方法为<font color=orange>[action]addResource:flag=1,3-7,13</font>，且只支持<font color=orange>0-31</font>，标签的移除方法与之相反。
:::

self.tags()
代码:self.tags() 中文释义:有标签 返回类型:boolean<br>

`self.tags()`用于检测自身是否有某个标签，格式为`self.tags(includes="标签")`。

self.globalTeamTags/self.hasGlobalTeamTags()
代码:self.globalTeamTags/self.hasGlobalTeamTags() 中文释义:有全局标签 返回类型:boolean<br>

`self.globalTeamTags/self.hasGlobalTeamTags()`用于检测队伍内是否有某个全局标签，格式为`self.globalTeamTags/self.hasGlobalTeamTags(includes="标签")`

self.numberOfConnections()
代码:self.numberOfConnections() 中文释义:连接数 返回类型:float<br>

隐藏代码，用途不明。

self.numberOfAttachedUnits()
代码:self.numberOfAttachedUnits() 中文释义:有附属物 返回类型:int/bool<br>

`self.numberOfAttachedUnits()`用于获取自身附属物数量，可以通过`self.numberOfAttachedUnits(withTag="标签")`格式来限制附属物标签。

self.hasActiveWaypoint()
代码:self.hasActiveWaypoint() 中文释义:有活动的路径点 返回类型:bool<br>

`self.hasActiveWaypoint()`用于获取自身有无活动的路径点，格式为`self.hasActiveWaypoint(type="路径点类型")`。

::: info
路径点类型可以是<font color=orange>move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget</font>。
:::

self.transportingUnitWithTags()
代码:self.transportingUnitWithTags() 中文释义:运输单位中有此标签 返回类型:bool<br>

`self.transportingUnitWithTags()`用于检测自身运输的单位中是否有含有特定标签的单位，格式为`self.transportingUnitWithTags(includes="标签")`。

self.hasParent()
代码:self.hasParent() 中文释义:有父单位 返回类型:bool<br>

`self.hasParent()`用于检测自身是否有父单位，且可以通过`self.hasParent(hasTag="标签")`来筛选父单位标签。<br>
通常情况下，附属和被运输单位会有父单位。

self.numberOfUnitsInTeam()
代码:self.numberOfUnitsInTeam() 中文释义:队伍中此单位数量 返回类型:float<br>

`self.numberOfUnitsInTeam()`(可省略`self.`)用于检测自身队伍符合条件的单位数量，格式为`self.numberOfUnitsInTeam(withTag="标签",withinRange=此距离内,incompleteBuildings=包含不完整建筑,factoryQueue=包含工厂队列)`

<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
self.numberOfUnitsInTeam(withTag="air",withInRange=500,factoryQueue=true)
#有air标签，500范围内，包含工厂队列中的单位
```

self.numberOfUnitsInAllyNotOwnTeam()
代码:self.numberOfUnitsInAllyNotOwnTeam() 中文释义:盟友队伍中此单位数量 返回类型:float<br>

`self.numberOfUnitsInAllyNotOwnTeam()`与`self.numberOfUnitsInTeam()`用法完全相同，区别仅在于前者的查询范围是盟友中。

self.numberOfUnitsInEnemyTeam()
代码:self.numberOfUnitsInEnemyTeam() 中文释义:敌方队伍中此单位数量 返回类型:float<br>

`self.numberOfUnitsInEnemyTeam()`与`self.numberOfUnitsInTeam()`用法完全相同，区别仅在于前者的查询范围是敌方中。

self.numberOfUnitsInNeutralTeam()
代码:self.numberOfUnitsInNeutralTeam() 中文释义:中立队伍中此单位数量 返回类型:float<br>

`self.numberOfUnitsInNeutralTeam()`与`self.numberOfUnitsInTeam()`用法完全相同，区别仅在于前者的查询范围是中立中。

self.numberOfUnitsInAggressiveTeam()
代码:self.numberOfUnitsInAggressiveTeam() 中文释义:敌对中立队伍中此单位数量 返回类型:float<br>

`self.numberOfUnitsInAggressiveTeam()`与`self.numberOfUnitsInTeam()`用法完全相同，区别仅在于前者的查询范围是敌对中立中。

self.numberOfUnitsInAllyTeam()
代码:self.numberOfUnitsInAllyTeam() 中文释义:所有队伍中此单位数量 返回类型:float<br>

`self.numberOfUnitsInAllyTeam()`与`self.numberOfUnitsInTeam()`用法完全相同，区别仅在于前者的查询范围是所有中。

self.hasUnitInTeam()
代码:self.hasUnitInTeam() 中文释义:队伍中有单位 返回类型:bool<br>

`self.hasUnitInTeam()`与`self.numberOfUnitsInTeam()`格式完全相同，区别在于前者仅查询队伍中有无符合条件的单位，并返回`boolean`类型。

self.noUnitInTeam()
代码:self.noUnitInTeam() 中文释义:队伍中无单位 返回类型:bool<br>

`self.noUnitInTeam()`与`self.numberOfUnitsInTeam()`格式完全相同，区别在于前者仅查询队伍中是否无符合条件的单位，并返回`boolean`类型。

self.readUnitMemory()
代码:self.readUnitMemory() 中文释义:读取单位内存 返回类型:跟随memory类型<br>

`self.readUnitMemory()`用于获取指定单位内存，格式为`self.readUnitMemory("内存名",type="类型",index=下标(仅当类型是数组时可选填写))`。

::: danger
在<font color=orange>跨单位读取数组</font>时，如果下标使用了逻辑，无论逻辑值都会返回第零项，
<font color=orange>为游戏bug</font>，解决方法可以参考：
https://www.bilibili.com/video/BV17v4y1r7dV (感谢十山月)

<iframe src="//player.bilibili.com/player.html?aid=566144438&bvid=BV17v4y1r7dV&cid=988997369&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="400">
</iframe>

::: code-group
```ini{7} [演示例子]
[action_copyArry]
text:copyFromUnit
alsoTriggerAction:copyOne
alsoTriggerActionRepeat:memory.target.readUnitMemory("Afloat",type="float[]").size

## 最重要的
alsoTriggerOrQueueActionWithTarget:memory.target

[hiddenAction_copyOne]
setUnitMemory:Afloat[index] = thisActionTarget.readUnitMemory("Afloat",type="float[]")[index]
```
:::

<div class="alert callout tip">
<p>self.readUnitMemory()基础演示例子:</p>
</div>

```ini
if parent.readUnitMemory("boostTarget", type="unit") == self
#如果 父单位内存boostTarget的值等于自己
```