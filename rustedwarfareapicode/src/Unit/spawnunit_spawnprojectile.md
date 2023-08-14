---
outline: deep
---

# **spawnUnits&spawnProjectiles**

::: tip
以下为spawnUnits或者SpawnProjetiles代码的相关参数，需要填到他们后面的括号里面
:::

## 第一类-通用代码

::: tip
以下为spawnUnits和SpawnProjetiles都可以运行的参数
:::

### spawnChance
#### spawnChance-代码简介
代码:spawnChance 中文释义:产生几率 类型:浮点数 隶属于:通用代码
#### spawnChance-要点指示
定义单位或抛射体的产生几率

::: tip
这个产生几率只能是0~1之间的数
:::

#### spawnChance-演示例子
```ini
spawnUnits:builder(spawnChance=0.5)
```
<hr>

### maxSpawnLimit
#### maxSpawnLimit-代码简介
代码:maxSpawnLimit 中文释义:最大产生限制 类型:整数 隶属于:通用代码
#### maxSpawnLimit-要点指示
定义单位或抛射体的最大产生数量

::: tip
此代码一般和spawnChance连用来达到随机产生多少数量的单位或抛射体
:::

#### maxSpawnLimit-演示例子
```ini
spawnUnits:builder(spawnChance=0.5,maxSpawnLimit=5)
```
<hr>

### offsetX/offsetY
#### offsetX/offsetY-代码简介
代码:offsetX/offsetY 中文释义:偏移量X/偏移量Y 类型:浮点数 隶属于:通用代码
#### offsetX/offsetY-要点指示
定义单位或抛射体产生时XY的绝对偏移

#### offsetX/offsetY-演示例子
```ini
spawnUnits:builder(offsetX=10,offsetY=-10)
```
<hr>

### offsetRandomX/offsetRandomY
#### offsetRandomX/offsetRandomY-代码简介
代码:offsetRandomX/offsetRandomY 中文释义:随机偏移X/随机偏移Y 类型:浮点数 隶属于:通用代码
#### offsetRandomX/offsetRandomY-要点指示
定义单位或抛射体的随机XY偏移

#### offsetRandomX/offsetRandomY-演示例子
```ini
spawnUnits:builder(offsetRandomX=10,offsetRandomY=10)
```
<hr>

### offsetHeight
#### offsetHeight-代码简介
代码:offsetHeight 中文释义:高度偏移 类型:浮点数 隶属于:通用代码
#### spawnChance-要点指示
定义单位或抛射体产生时的高度

#### offsetHeight-演示例子
```ini
spawnUnits:builder(offsetHeight=10)
```
<hr>

### offsetDir
#### offsetDir-代码简介
代码:offsetDir 中文释义:角度偏移 类型:浮点数 隶属于:通用代码
#### offsetDir-要点指示
定义单位或抛射体的相对角度偏移

::: tip
默认产生角度和产生他的单位相同
:::

#### offsetDir-演示例子
```ini
spawnUnits:builder(offsetDir=90)
```
<hr>

### offsetRandomDir
#### offsetRandomDir-代码简介
代码:offsetRandomDir 中文释义:随机角度偏移 类型:浮点数 隶属于:通用代码
#### offsetRandomDir-要点指示
定义单位或抛射体产生时随机的角度偏移

#### offsetRandomDir-演示例子
```ini
spawnUnits:builder(offsetRandomDir=45)
```
<hr>

## 第二类-spawnUnits专有

### neutralTeam
#### neutralTeam-代码简介
代码:neutralTeam 中文释义:队伍中立 类型:布尔值 隶属于:spawnUnits专有
#### neutralTeam-要点指示
定义单位的产生是否为中立单位

::: tip
中立单位一般会被周围高度近似的单位捕获，所以说被产生单位一般需要配合`[core]stayNeutral:true`使用
:::

#### neutralTeam-演示例子
```ini
spawnUnits:builder(neutralTeam=true)
```
<hr>

### setToTeamOfLastAttacker
#### setToTeamOfLastAttacker-代码简介
代码:setToTeamOfLastAttacker 中文释义:归属最后攻击者 类型:布尔值 隶属于:spawnUnits专有
#### setToTeamOfLastAttacker-要点指示
定义产生的单位是否归于最后的攻击者

#### neutralTeam-演示例子
```ini
spawnUnits:builder(setToTeamOfLastAttacker=true)
```
<hr>

### spawnSource
#### spawnSource-代码简介
代码:spawnSource 中文释义:单位产生源 类型:单位参考/标记 隶属于:spawnUnits专有
#### spawnSource-要点指示
定义单位的产生的产生源

::: tip
这个参数使得被产生单位的customTarget1会变成产生源而不是源单位
:::

#### spawnSource-演示例子
```ini
spawnUnits:builder(spawnSource=attacking)
```
<hr>

### gridAlign
#### gridAlign-代码简介
代码:gridAlign 中文释义:对其网格 类型:布尔值 隶属于:spawnUnits专有
#### gridAlign-要点指示
定义产生的建筑是否与网格对齐

::: tip
只能对建筑使用
:::

#### gridAlign-演示例子
```ini
spawnUnits:builder(gridAlign=true)
```
<hr>

### skipIfOverlapping
#### skipIfOverlapping-代码简介
代码:skipIfOverlapping 中文释义:跳过条件 类型:布尔值 隶属于:spawnUnits专有
#### neutralTeam-要点指示
定义单位的产生是否检测地块能否产生

::: tip
如果被产生单位移动类型为`LAND`，且`skipIfOverlapping=true`，那么如果产生时在非LAND地块将不会产生此单位
:::

#### skipIfOverlapping-演示例子
```ini
spawnUnits:builder(skipIfOverlapping=true)
```
<hr>

### addResources
#### addResources-代码简介
代码:addResources 中文释义:增加资源 类型:资源 隶属于:spawnUnits专有
#### addResources-要点指示
定义产生的单位的资源

::: tip
资源与值之间使用`:`连接，多个资源之间使用`|`进行分隔
:::

#### addResources-演示例子
```ini
spawnUnits:builder(addResources=shield:100|ammo:10)
```
<hr>

### transportedUnitsToTransfer
#### transportedUnitsToTransfer-代码简介
代码:transportedUnitsToTransfer 中文释义:产生单位至载具 类型:整数 隶属于:spawnUnits专有
#### neutralTeam-要点指示
定义产生多少单位直接到载具中

#### neutralTeam-演示例子
```ini
spawnUnits:builder(transportedUnitsToTransfer=5)
```
<hr>

### copyWaypointsFrom
#### copyWaypointsFrom-代码简介
代码:copyWaypointsFrom 中文释义:复制路径点来自 类型:单位参考 隶属于:spawnUnits专有
#### copyWaypointsFrom-要点指示
定义产生的单位的路径点

#### copyWaypointsFrom-演示例子
```ini
spawnUnits:builder(copyWaypointsFrom=self)
```
<hr>

### alwayStartDirAtZero
#### alwayStartDirAtZero-代码简介
代码:alwayStartDirAtZero 中文释义:角度总是为零 类型:布尔值 隶属于:spawnUnits专有
#### alwayStartDirAtZero-要点指示
定义产生的单位的角度是否为零度

::: tip
建筑的零度为上，单位的零度为右
:::

#### alwayStartDirAtZero-演示例子
```ini
spawnUnits:builder(alwayStartDirAtZero=true)
```
<hr>

## 第三类-spawnProjectiles专有

### recursionLimit
#### recursionLimit-代码简介
代码:recursionLimit 中文释义:递归限制 类型:整数 隶属于:spawnProjectiles专有
#### recursionLimit-要点指示
定义抛射体产生自我时的次数限制

#### recursionLimit-演示例子
```ini
spawnProjectilesOnEndOfLife:a(recursionLimit=5)
```
<hr>

### offsetRandomXY
#### offsetRandomXY-代码简介
代码:offsetRandomXY 中文释义:随机偏移XY 类型:浮点数 隶属于:spawnProjectiles专有
#### offsetRandomXY-要点指示
定义产生抛射体的XY偏移

::: tip
`offsetRandomXY=10`就相当于`offsetRandomX=10,offsetRandomY=10`
:::

#### offsetRandomXY-演示例子
```ini
spawnProjectilesOnEndOfLife:a(offsetRandomXY=10)
```
<hr>

### xOffsetRelative/yOffsetRelative
#### xOffsetRelative/yOffsetRelative-代码简介
代码:xOffsetRelative/yOffsetRelative 中文释义:x相对偏移/y相对偏移 类型:浮点数 隶属于:spawnProjectiles专有
#### offsetRandomXY-要点指示
定义产生抛射体的XY相对偏移

::: tip
不同于`offsetX/offsetY`绝对偏移的Y轴竖直X轴水平，`xOffsetRelative/yOffsetRelative`将会旋转坐标系使得Y轴正方向与产生源的角度对齐
:::

#### xOffsetRelative/yOffsetRelative-演示例子
```ini
spawnProjectilesOnEndOfLife:a(xOffsetRelative=10,yOffsetRelative=10)
```
<hr>
