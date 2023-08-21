---
outline: deep
---

# **[LogicBoolean] 逻辑序列组**

::: danger
由于这个组的特殊性，格式不标准，请勿参考这个组的写法。
:::

## 前置知识
::: tip
以下的内容为`逻辑组前置知识`，是学习逻辑必备的前置内容。
:::

### 布尔值
<font color=orange>布尔值</font>表达“真(true)”或“假(false)”的一个状态。在铁锈中，布尔值(`boolean`)被运用于逻辑判断。

### 数据类型
数据类型指数据的种类，在铁锈中，不同的数据有不同的类型，不同的数据类型之间通常不能直接进行运算。

|常见数据类型英文 |存储的值类型 |
| -------- | ------------ |
| string   | 字符串       |
| number   | 整数         |
| float    | 浮点数(小数) |
| boolean  | 布尔值       |
| unit     | 单位         |
<!-- MarkDown表格必须有上方的分割线以告诉浏览器是表格 -->

数据类型之间的转换函数包括:`int`、`str`。

### 算数优先级
与数学中计算符一样，铁锈中算数运算符有优先级区别。`%`和`*`和`/`的优先级大于`+`和`-`。

## 比较运算符
::: tip
以下的内容为逻辑中用于`比较`的运算符。
:::

### if
#### if-代码简介
代码:if 中文释义:如果 类型:逻辑函数
#### if-要点指示
`if`是大部分逻辑运算的开头(select等不需要if)，用于在支持逻辑的键引入逻辑判断。
#### if-演示例子
```ini
[action]
autoTrigger:if self.maxHp() > memory.emx_hp
```

<hr>

### <
#### <-代码简介
代码:< 中文释义:小于 类型:比较运算符
#### <-要点指示
小于用于在逻辑布尔值中比较两个数的大小，格式为`数据a < 数据b`，若`a<b`则整个式子的值为`true`，否则为`false`。
#### <-演示例子
```ini
[action]
autoTrigger:if memory.a < memory.b
```

<hr>

### >
#### >-代码简介
代码:> 中文释义:大于 类型:比较运算符
#### >-要点指示
大于用于在逻辑布尔值中比较两个数的大小，格式为`数据a > 数据b`，若`a>b`则整个式子的值为`true`，否则为`false`。
#### >-演示例子
```ini
[action]
autoTrigger:if memory.a > memory.b
```

<hr>

### <=
#### <=-代码简介
代码:<= 中文释义:小于等于 类型:比较运算符
#### <=-要点指示
小于等于用于在逻辑布尔值中比较两个数的大小，格式为`数据a <= 数据b`，若`a<=b`则整个式子的值为`true`，否则为`false`。
#### <=-演示例子
```ini
[action]
autoTrigger:if memory.a <= memory.b
```

<hr>

### >=
#### >=-代码简介
代码:>= 中文释义:大于等于 类型:比较运算符
#### >=-要点指示
大于等于用于在逻辑布尔值中比较两个数的大小，格式为`数据a >= 数据b`，若`a>=b`则整个式子的值为`true`，否则为`false`。
#### >=-演示例子
```ini
[action]
autoTrigger:if memory.a >= memory.b
```

<hr>

### ==
#### ==-代码简介
代码:== 中文释义:等于 类型:比较运算符
#### ==-要点指示
等于用于在逻辑布尔值中比较值是否相同，格式为`数据a = 数据b`，若`a=b`则整个式子的值为`true`，否则为`false`。
::: tip
请注意，铁锈中等于的符号为<font color=orange>==</font>，<font color=orange>=</font>在铁锈中用于赋值或参数。
:::
#### ==-演示例子
```ini
[action]
autoTrigger:if memory.a == memory.b
```

<hr>

### !=
#### !=-代码简介
代码:!= 中文释义:不等于 类型:比较运算符
#### !=-要点指示
不等于用于在逻辑布尔值中比较值是否相同，格式为`数据a = 数据b`，若`a!=b`则整个式子的值为`true`，否则为`false`。
#### !=-演示例子
```ini
[action]
autoTrigger:if memory.a != memory.b
```

<hr>

## 逻辑运算符
::: tip
以下的内容为逻辑中用于`进行逻辑运算`的运算符，它们的结果都是`boolean`类型。
:::

### and
#### and-代码简介
代码:and 中文释义:且 类型:逻辑运算符
#### and-要点指示
::: tip
<font color=orange>and</font>用于连接两个逻辑判断，只有在这两个逻辑判断的值都为<font color=orange>true</font>时，<font color=orange>and</font>的值才为true。
<br>
:::

#### and-演示例子
```ini
[action]
autoTrigger:if memory.a < memory.b and memory.a > memory.c
# 在这个例子中，只有a小于b且a大于c时，自动触发才会被触发
```

<hr>

### or
#### or-代码简介
代码:or 中文释义:或 类型:逻辑运算符
#### or-要点指示
::: tip
<font color=orange>or</font>用于连接两个逻辑判断，只要这两个逻辑判断的值有一个为<font color=orange>true</font>时，<font color=orange>or</font>的值就为true。
<br>
:::

#### or-演示例子
```ini
[action]
autoTrigger:if memory.a < memory.b or memory.a > memory.c
# 在这个例子中，只要a小于b或a大于c，自动触发就会被触发
```

<hr>

### not
#### not-代码简介
代码:not 中文释义:非 类型:逻辑运算符
#### not-要点指示
::: tip
<font color=orange>not</font>用于将某个逻辑判断的值取反，即`true`变`false`，`false`变`true`。
:::

::: info
多个逻辑运算符同时使用时，优先级为`not>and>or`，同时<font color=orange>支持使用括号改变运算优先级</font>。
<br>推荐<font color=orange>在不确定优先级时打括号</font>。
:::

#### not-演示例子
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
答案：a必须满足小于b和大于c中的一个，且a必须不小于d，自动触发才会被触发。
```
:::

<hr>


## 算数运算符
::: tip
以下的内容为逻辑中用于`进行算数运算`的运算符，它们的结果类型为`参与运算的值的`类型。
:::
::: info
不同数据类型通常<font color=orange>不能直接进行算数运算</font>，但在部分情况下，<font color=orange>number</font>和<font color=orange>float</font>类型可以混用（建议<font color=orange>所有数值全部使用float</font>来避免混淆）。
:::

### +
#### +-代码简介
代码:+ 中文释义:加 类型:算数运算符
#### +-要点指示
加用于将两个逻辑值相加，得到结果，格式为`数据a + 数据b`。
#### +-演示例子
```ini
[action]
autoTrigger:if (memory.a + memory.c) < memory.b
#内存a和c的值之和需要小于b
```

<hr>

### -
#### --代码简介
代码:- 中文释义:减 类型:算数运算符
#### --要点指示
减用于将两个逻辑值相减，得到结果，格式为`数据a - 数据b`。
::: info
对于<font color=orange>不满足交换律的运算符</font>，需要注意<font color=orange>运算优先级</font>是否正确。由于铁锈本身bug，<font color=orange>在数学上正确的优先级不一定在铁锈中正确</font>，因此可能出现减法顺序混乱等问题。
<br>为了避免可能的问题，请尽量在任何<font color=orange>不满足交换律的运算符</font>两边打上括号。
:::

#### --演示例子
```ini
[action]
autoTrigger:if (memory.a - memory.c) < memory.b
#内存a与c的值之差需要小于b
```

<hr>

### *
#### *-代码简介
代码:* 中文释义:乘 类型:算数运算符
#### *-要点指示
乘用于将两个逻辑值相乘，得到结果，格式为`数据a * 数据b`。
#### *-演示例子
```ini
[action]
autoTrigger:if (memory.a * memory.c) == memory.b
#内存a和c的乘积需要等于b
```

<hr>

### /
#### /-代码简介
代码:/ 中文释义:除 类型:算数运算符
#### /-要点指示
除用于将两个逻辑值相除，得到结果，格式为`数据a / 数据b`。
#### /-演示例子
```ini
[action]
autoTrigger:if (memory.a / memory.c) == memory.b
#内存a除以c的积需要等于b
```

<hr>

### %
#### %-代码简介
代码:% 中文释义:求余(取模) 类型:算数运算符
#### %-要点指示
求余用于获取两个逻辑值中，第一个除第二个的余数，格式为`数据a % 数据b`，例如`7%3=1(7除3余1)`。
#### %-演示例子
```ini
[action]
autoTrigger:if (memory.a % memory.c) == memory.b
#内存a除以c的余数需要等于b
```

<hr>

## 单位统计
::: tip
以下的内容为逻辑中用于`单位数值获取`的函数，它们的类型与单位此项数值对应。
:::

### 通用统计关键字
单位统计中部分通用的关键字：
1. `greaterThan` 大于
2. `lessThan` 小于
3. `empty` 空
4. `full` 满
5. `equalTo` 等于

### 内置参数-单一或无传参
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
37. `game.nukesEnabled()` 是否启用核武器

### 内置参数-需要传参

<!-- 这一部分因为###被占用，无法按照传统格式 -->

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

### 单位运动与定位
这部分代码的返回值全部为`boolean`类型，用于检测单位的运动和位置情况
1. `self.underwater/self.isUnderwater()` 单位在水下
2. `self.gound/self.ground/self.isAtGroundHeight()` 单位位于地面高度
3. `self.flying/self.isFlying()` 单位在飞行
4. `self.isMoving()` 单位正在移动
5. `self.isAtTopSpeed()` 单位处于最高速度
6. `self.inwater/self.isInWater()` 单位在水中
7. `self.isReversing()` 单位在倒车
8. `self.isOverwater()` 单位在水上(在水上方或接触水)
9. `self.isOverLiquid()` 单位在液体上(岩浆等)
10. `self.isOverClift/self.isOverCliff()` 单位在悬崖上
11. `self.isOverOpenLand()` 单位在开阔的陆地上
12. `self.isTransportUnloading()` 单位正在卸载单位
13. `self.isOverPassableTile()` 单位在可通过的地块上(可通过加参数`type=地块类型`来指定特定类型的地块)


附移动类型:
| 英文               | 移动类型  |
|------------------|-------|
| NONE             | 无     |
| LAND             | 陆地    |
| BUILDING         | 建筑    |
| AIR              | 空中    |
| WATER            | 水中    |
| HOVER            | 两栖    |
| OVER_CLIFF       | 跨悬崖   |
| OVER_CLIFF_WATER | 跨水和悬崖 |



## 单位计时

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

## 杂项

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

## 单位参照

### 当前动作目标
::: info
`thisActionTarget`是一条用于获取当前行动目标的代码，不同的行动中，`thisActionTarget`也不同(或没有)。
以下是不同情况下的`thisActionTarget`。
:::

fireTurretXAtGround: mainTurret <br>
此时`thisActionTarget`是目标地面位置的标记

alsoTriggerAction: x <br>
此时`thisActionTarget`是原动作的`thisActionTarget`

[turret]onShoot_triggerActions: x  <br>
此时`thisActionTarget`是被击中的目标

takeResources_triggerActionIfAnyCollected: x <br>
此时`thisActionTarget`是该资源

addWaypoint_triggerActionIfMatched: x <br>
此时`thisActionTarget`是搜索到的标记/目标

autoTriggerOnEvent: tookDamage <br>
此时`thisActionTarget`是造成伤害的单位

autoTriggerOnEvent: killedAnyUnit <br>
此时`thisActionTarget`是被杀死的单位

autoTriggerOnEvent: transportingNewUnit <br>
此时`thisActionTarget`是被运输的单位

autoTriggerOnEvent: transportUnloadedOrRemovedUnit <br>
此时`thisActionTarget`是被卸载打单位

autoTriggerOnEvent: queuedUnitFinished <br>
此时`thisActionTarget`是创建的新单位

autoTriggerOnEvent: touchTargetSuccess <br>
此时`thisActionTarget`是接触的目标

<!-- 这一段内容是这样的，不知道怎么优化格式好一点，ling帮帮 :D -->

### 杂项

attachment
代码:self.attachment() 中文释义:附属物 返回类型:unit/marker<br>

`attachment`用于获取单位特定附属物的单位参考，参数有`slot`和`withFlag`。<br>
`slot`参数即代码中`[attachment_abc]`的`abc`，`withFlag`参数用于获取拥有指定标签的附属物。

::: code-group
```ini{2} [演示例子]
self.attachment(withTag="x").lastDamagedBy.getAsMarker()
#这里获取有x标签的附属物,然后获取此附属物上一个攻击者,并创建标记
```
:::

transporting
代码:self.transporting() 中文释义:运载的单位 返回类型:unit/marker<br>

`transporting`用于获取单位运输队列中特定单位的单位参考，参数有`slot`。<br>
与`attachment`不同，`transporting`的`slot`参数为数字，即运输队列的第几个。

attacking
代码:self.attacking() 中文释义:攻击目标 返回类型:unit/marker<br>

`attacking`用于获取单位的攻击目标。

::: warning
attacking不一定是正在攻击的目标，<font color=orange>只要是设定了攻击目标都会存在</font>。
:::

lastDamagedBy
代码:self.lastDamagedBy() 中文释义:最后伤害源 返回类型:unit/marker<br>
`attacking`用于获取最后攻击该单位的单位。

parent
代码:self.parent() 中文释义:父单位 返回类型:unit/marker<br>
`parent`用于获取单位的附属主单位或运输单位。<br>
当单位离开附属/运输时，父单位会为`null`，因此可以用于检测单位是否被运输/在附属中。

activeWaypointTarget
代码:self.activeWaypointTarget() 中文释义:自身活动的路径点 返回类型:unit/marker<br>
`activeWaypointTarget`用于获取自身正在进行的路径点，参数有`type`。<br>
`type`参数用于指定路径点类型。

customTarget1
代码:self.customTarget1() 中文释义:自定义目标1 返回类型:unit/marker<br>
`customTarget1`是铁锈内置的unit类型内存，<font color=orange>默认值为创建该单位的单位</font>。

customTarget2
代码:self.customTarget2() 中文释义:自定义目标1 返回类型:unit/marker<br>
`customTarget2`是铁锈内置的unit类型内存。

nearestUnit
代码:self.nearestUnit() 中文释义:指定最近单位 返回类型:unit/marker<br>
`nearestUnit`用于获取满足条件的最近单位，参数有`withinRange`、`withTag`、`relation`。
`withinRange`:指定最大搜索范围(最高为1000)
`withTag`:指定需要含有的标签
`relation`:目标单位与自己的关系(与路径点靠近类型相同)

| 英文         | 关系类型 |
|------------|------|
| any        | 所有   |
| enemy      | 敌对   |
| own        | 己方   |
| ally       | 盟友   |
| allyNotOwn | 仅盟友  |
| notOwn     | 除己方  |
| neutral    | 中立   |

globalSearchForFirstUnit
代码:self.globalSearchForFirstUnit() 中文释义:指定最近单位 返回类型:unit/marker<br>
`globalSearchForFirstUnit`用于在全局范围内搜索第一个满足条件的最近单位，参数有`withTag`、`relation`，用法与`nearestUnit`基本相同。

nullUnit
代码:nullUnit 中文释义:空单位 返回类型:unit/marker<br>
`nullUnit`是铁锈的空单位，用于比较/判断。

### 标记

getAsMarker
代码:self.getAsMarker() 中文释义:获取标记 返回类型:unit/marker<br>
`getAsMarker`用于在指定单位创建标记。标记的创建速度非常快，不再需要时会自动删除。<br>
标记不链接到任何单位并且在单位死亡时仍然存在，在源头移动时保持不变。

getOffsetAbsolute
代码:self.getOffsetAbsolute() 中文释义:获取绝对偏移标记 返回类型:unit/marker<br>
`getOffsetAbsolute`用于在指定单位创建一个绝对偏移后的标记。可用的参数有`x`、`y`、`height`(-y为北,+x为东)。

getOffsetRelative
代码:self.getOffsetRelative() 中文释义:获取相对偏移标记 返回类型:unit/marker<br>
`getOffsetRelative`用于在指定单位创建一个相对偏移后的标记。可用的参数有`x`、`y`、`height`(+y为前,-为左)、`dirOffset`(角度偏移)。

::: tip
相对偏移可以理解为<font color=orange>在单位自己位置以自己的方向建立一个平面直角坐标系</font>，然后计算在这个坐标系内的便宜，并返回地图中大坐标系的单位参考。
:::

eventSource
代码:eventSource 中文释义:事件源 返回类型:event<br>
`eventSource`用于获取`autoTriggerOnEvent`当前触发器,没有则返回`null`，可以看作对于事件的`autoTriggerOnEvent`。

### 全局函数

readUnitMemory
代码:self.readUnitMemory() 中文释义:读取单位内存 返回类型:跟随内存类型<br>
`readUnitMemory`用于读取指定单位上的自定义内存，与读取其他单位的资源不同，内存可以直接读取而不需要在本单位进行定义。<br>
`readUnitMemory`的格式为`单位参考.readUnitMemory("内存名称",type="内存类型")`，简写格式为`memory.内存名称`，但简写格式只能用于读取自己的内存。<br>

<div class="alert callout tip">
<p>self.readUnitMemory()基础演示例子:</p>
</div>

```ini
if parent.readUnitMemory("a", type="float") == 1
#如果 父单位内存a的值为1
```

::: warning
`readUnitMemory`还可以用于读取内存数组,格式为`单位参考.readUnitMemory("数组名称",type="数组类型",index=数组下标)`<br>
在<font color=orange>跨单位读取数组</font>时，如果下标使用了逻辑，无论逻辑值都会返回第零项，
<font color=orange>为游戏bug</font>，解决方法可以参考：
https://www.bilibili.com/video/BV17v4y1r7dV (感谢十山月)
:::

<!-- 写完才发现readUnitMemory写过了:( -->

distance
代码:distance() 中文释义:两点距离 返回类型:float<br>
`distance`用于获取两个坐标之间的距离，格式为`distance(x1,y1,x2,y2)`。<br>

distanceSquared
代码:distanceSquared() 中文释义:两点距离平方 返回类型:float<br>
`distanceSquared`返回两个点的距离的平方，速度更快，格式与`distance`一样。<br>

distanceBetween
代码:distanceBetween() 中文释义:单位间的距离 返回类型:float<br>
`distanceBetween`返回两个单位(标记)之间的距离，格式为`distanceBetween(单位1,单位2)`。<br>

distanceBetweenSquared
代码:distanceBetweenSquared() 中文释义:单位间的距离平方 返回类型:float<br>
`distanceBetweenSquared`返回两个单位(标记)之间的距离的平方，速度更快，格式与`distanceBetween`一致。<br>

select
代码:select() 中文释义:三目运算符 返回类型:随结果类型(有说为string)<br>
`select`用于简化部分需要使用如果进行分别判断的场景，格式为`select(bool a,str b,str c)`，当`a`成立时，整个`select`返回`b`，否则返回`c`。<br>

::: tip
`select`支持套娃。在适当的地方使用，可以<font color=orange>极大的简化代码</font>。
:::

debug
代码:debug() 中文释义:返回调试值 返回类型:string<br>
`debug`可以针对逻辑布尔值输出一个字符串，解释这个值产生的原因，可以查看嵌套逻辑、比较和运算符。<br>

::: code-group
```ini{3} [演示例子]
showMessageToAllPlayers:%{debug(memory.a)}
#假设a为unit类型memory
#这里就会输出a单位的id等信息
```
:::

substring
代码:substring() 中文释义:取子字符串 返回类型:string<br>
`substring`用于截取一个字符串的一部分，格式为`substring(开始处,结束处)`，字符串的“下标”从0开始。<br>

length
代码:length() 中文释义:取字符串长度 返回类型:number/float<br>
`length`用于获取一个字符串的长度，格式为`length(string)`，返回长度数字。<br>

squareRoot
代码:squareRoot() 中文释义:平方根 返回类型:number/float<br>
`squareRoot`用于获取一个数的平方根，格式为`squareRoot(number/float)`。<br>

min
代码:min() 中文释义:最小值 返回类型:number/float<br>
`min`用于获取两个数中更小的那个，格式为`min(number1,number2)`。<br>

max
代码:max() 中文释义:最大值 返回类型:number/float<br>
`max`用于获取两个数中更大的那个，格式为`max(number1,number2)`。<br>

createMarker
代码:createMarker() 中文释义:创建标记 返回类型:marker<br>
`createMarker`用于创建一个临时的标记，格式为`createMarker(x, y, [height], [teamId], [dir])`。其中`x`、`y`为必须的参数<br>
标记的创建速度很快，创建后可以用于填入路径点等`unit/marker`类型处。<br>

::: tip
其实marker也是一个单位，可以通过路径点`thisActionTarget`和`debug`发现它。
:::

eventData
代码:eventData() 中文释义:事件数据 返回类型:跟随事件<br>
`eventData`用于获取自身接收的`[action]sendMessageTo`中发送的信息，格式为`eventData("数据名称",type="数据类型")`。<br>
`eventData`只在`autoTriggerOnEvent:newMessage`事件中使用。<br>

sin
代码:sin() 中文释义:正弦 返回类型:float<br>
`sin`用于正弦值，格式为`sin(角度)`。<br>

cos
代码:cos() 中文释义:余弦 返回类型:float<br>
`cos`用于余弦值，格式为`cos(角度)`。<br>

::: tip
铁锈三角函数没有tan，但是可以通过`tan(a)=sin(a)/cos(a)`来求。
:::

rnd
代码:rnd() 中文释义:随机数 返回类型:float<br>
`rnd`用于生成一个自定义区间内的随机数，格式为`rnd(最小,最大)`。<br>

::: warning
沙盒地图中随机数种子是一样的，且<font color=orange>卢克的随机数并不“随机”</font>，实际使用可能需要自己增加参数后求余。
:::

lowercase
代码:lowercase() 中文释义:转小写 返回类型:string<br>
`lowercase`用于将一个字符串中的大写字符全部转换成小写，格式为`lowercase(string)`。<br>

uppercase
代码:uppercase() 中文释义:转大写 返回类型:string<br>
`uppercase`用于将一个字符串中的小写字符全部转换成大写，格式为`uppercase(string)`。<br>

direction
代码:direction() 中文释义:相对角度 返回类型:float<br>
`direction`用于获取两个点之间的相对角度，格式为`direction(x1,y1,x2,y2)`。<br>

directionBetween
代码:direction() 中文释义:单位相对角度 返回类型:float<br>
`direction`用于获取两个单位之间的相对角度，格式为`direction(unit1,unit2)`。<br>directionBetween