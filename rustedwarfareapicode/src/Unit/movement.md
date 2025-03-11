---
outline: deep
---

# **[movement]组**

## 第一类-通用代码组

::: tip
以下的代码为`通用代码`,多半是必要的代码，如果不包括这些，可能在`绝大多数情况下导致错误`。
:::
### movementType
#### movementType-代码简介
代码:movementType 中文释义:运动类型 类型:字符串 隶属于:通用代码组
#### string-要点指示
定义单位的运动类型，判定单位是否可在某种地形上运动，可用值为NONE、LAND、BUILDING、AIR、WATER、HOVER、OVER_CLIFF、OVER_CLIFF_WATER。
::: tip
不同的运动类型特点如下

| 类型               | 可跨陆地 | 可跨悬崖 | 可跨水 | 可跨岩浆 |
|------------------|------|------|-----|------|
| NONE             | ✓    | ✓    | ✓   | ✓    |
| LAND             | ✓    | ×    | ×   | ×    |
| BUILDING         | ✓    | ×    | ×   | ×    |
| AIR              | ✓    | ✓    | ✓   | ✓    |
| WATER            | ×    | ×    | ✓   | ×    |
| HOVER            | ✓    | ×    | ✓   | ×    |
| OVER_CLIFF       | ✓    | ✓    | ×   | ×    |
| OVER_CLIFF_WATER | ✓    | ✓    | ✓   | ×    |
:::
::: tip
类型NONE虽然说移动无视地形，但是只能在LAND类型地块进行放置
:::
::: warning
NONE移动类型在多选单位进行移动时会有卡寻路的问题
BUILDING移动类型似乎已经废弃，和LAND没有任何区别
:::
#### movementType-演示例子
```ini
[movement]
movementType:LAND
```
<hr>

## 第二类-速度相关组

### moveSpeed
#### moveSpeed-代码简介
代码:moveSpeed 中文释义:移动速度 类型:浮点数 隶属于:通用代码组
#### moveSpeed-要点指示
定义单位的移动速度，显示在单位信息中

::: tip
移动速度的单位是**像素/帧**，同时铁锈战争地图图块大小为20x20，且一秒60帧，所以说移动速度为1的话，每秒可以移动三格
:::

#### moveSpeed-演示例子
```ini
[movement]
moveSpeed:0.5
```
<hr>

### moveAccelerationSpeed
#### moveAccelerationSpeed-代码简介
代码:moveAccelerationSpeed 中文释义:加速度 类型:浮点数 隶属于:速度相关组
#### moveAccelerationSpeed-要点指示
定义单位的加速度，单位在移动时会从零开始加速直到移动速度

::: tip
加速度也是按帧计算的，如果你需要一秒加速0.6，你需要填写的值为0.01
:::

#### moveAccelerationSpeed-演示例子
```ini
[movement]
moveSpeed:1
moveAccelerationSpeed:0.01
```
<hr>

### moveDecelerationSpeed
#### moveDecelerationSpeed-代码简介
代码:moveDecelerationSpeed 中文释义:减速度 类型:浮点数 隶属于:速度相关组
#### moveDecelerationSpeed-要点指示
定义单位的减速度，单位在停止移动时会从运动速度开始减速直到零

::: tip
减速度也是按帧计算的，如果你需要一秒减速0.6，你需要填写的值为0.01
:::

#### moveDecelerationSpeed-演示例子
```ini
[movement]
moveSpeed:1
moveDecelerationSpeed:0.01
```
<hr>

### reverseSpeedPercentage
#### reverseSpeedPercentageed-代码简介
代码:reverseSpeedPercentage 中文释义:倒车速度比率 类型:浮点数 隶属于:速度相关组
#### reverseSpeedPercentage-要点指示
定义单位倒车时的速度，单位在逆向运动时会按照运动速度与倒车速度比率的乘积运行

::: tip
这个值默认为0.6
如果这个值等于0，那么无论什么距离向后运动都会先转弯
如果在0到1之间，那么短距离向后运动会倒车而不是转弯
如果等于1，那么无论什么距离，向后运动会倒车而不是转弯
:::

#### reverseSpeedPercentagepeed-演示例子
```ini
[movement]
moveSpeed:1
reverseSpeedPercentage:0.4
```
<hr>


### maxTurnSpeed
#### maxTurnSpeed-代码简介
代码:maxTurnSpeed 中文释义:转弯速度 类型:浮点数 隶属于:速度相关组
#### maxTurnSpeed-要点指示
定义单位转弯的速度

::: tip
转弯速度的单位是**度/帧**，如果转弯速度为1，那么一秒将旋转60度
:::

#### maxTurnSpeed-演示例子
```ini
[movement]
maxTurnSpeed:1.5
```
<hr>

### turnAcceleration
#### turnAcceleration-代码简介
代码:turnAcceleration 中文释义:转弯速度 类型:浮点数 隶属于:速度相关组
#### turnAcceleration-要点指示
定义单位转弯的加速度，开始转弯时将从零开始加速直到转弯速度

::: tip
转弯加速度是按帧计算的，如果想要每秒增加0.6需要填0.01
:::

#### turnAcceleration-演示例子
```ini
[movement]
maxTurnSpeed:1.5
turnAcceleration:0.01
```
<hr>

## 第三类-高度相关组

### targetHeight
#### targetHeight-代码简介
代码:targetHeight 中文释义:到达高度 类型:浮点数 隶属于:高度相关组
#### targetHeight-要点指示
定义单位的高度，当单位创建完成时会从0到达这个高度

::: tip
如果运动类型为AIR，targetHeight默认值将为20
:::
::: code-group  
``` bash [摸鱼人time]
大部分单位能被什么类型的攻击方式攻击不取决于移动类型，而是取决于高度
如果高度是负数，那么可以被水下攻击命中
如果高度位于0到10之间，可以被对表面攻击命中
如果高度大于10，可以被对空攻击命中

如果高度不为0的地面悬浮单位，对地的范围攻击(比如火炮)将无法对其造成伤害，但是可以被瞄准

建筑高度大于等于0是，只能被对表面攻击命中
```
:::
#### targetHeight-演示例子
```ini
[movement]
targetHeight:10
```
<hr>


### targetHeightDrift
#### targetHeightDrift-代码简介
代码:targetHeightDrift 中文释义:高度浮动 类型:浮点数 隶属于:高度相关组
#### targetHeight-要点指示
定义单位的高度浮动，单位会在到达高度上下浮动

::: tip
如果运动类型为AIR，targetHeightDrift默认值将为2.5
:::
#### targetHeightDrift-演示例子
```ini
[movement]
targetHeight:10
targetHeightDrift:1
```
<hr>

### landOnGround
#### landOnGround-代码简介
代码:landOnGround 中文释义:降落到地面 类型:布尔值 隶属于:高度相关组
#### landOnGround-要点指示
定义单位在不移动时是否降落到地面

::: tip
只有单位投影所在地块可以降落时才会降落
:::
#### landOnGround-演示例子
```ini
[movement]
landOnGround:true
```
<hr>

### fallingAcceleration
#### fallingAcceleration-代码简介
代码:fallingAcceleration 中文释义:降落加速度 类型:浮点值 隶属于:高度相关组
#### fallingAcceleration-要点指示
定义单位在降落到地面时的加速度

::: tip
加速度是按帧来计算的，如果想一秒加速0.6则填写0.01
:::

#### fallingAcceleration-演示例子
```ini
[movement]
fallingAcceleration:0.01
```
<hr>

### slowDeathFall
#### slowDeathFall-代码简介
代码:slowDeathFall 中文释义:死亡坠落 类型:布尔值 隶属于:高度相关组
#### slowDeathFall-要点指示
定义单位在死亡时是否坠落到地面

#### targetHeightDrift-演示例子
```ini
[movement]
slowDeathFall:true
```
<hr>

### fallingAccelerationDead
#### fallingAccelerationDead-代码简介
代码:fallingAccelerationDead 中文释义:死亡坠落加速度 类型:浮点值 隶属于:高度相关组
#### fallingAccelerationDead-要点指示
定义单位在死亡坠毁到地面时的加速度

::: tip
加速度是按帧来计算的，如果想一秒加速0.6则填写0.01
:::

#### fallingAccelerationDead-演示例子
```ini
[movement]
fallingAccelerationDead:0.01
```
<hr>

### heightChangeRate
#### heightChangeRate-代码简介
代码:heightChangeRate 中文释义:高度改变速率 类型:浮点值 隶属于:高度相关组
#### heightChangeRate-要点指示
定义单位在被创建，转换，浮动是高度改变的速度

#### heightChangeRate-演示例子
```ini
[movement]
heightChangeRate:0.4
```
<hr>

## 第四类-杂项
### moveIgnoringBody
#### moveIgnoringBody-代码简介
代码:moveIgnoringBody 中文释义:移动忽略转向 类型:布尔值 隶属于:杂项
#### moveIgnoringBody-要点指示
定义单位移动时是否需要考虑角度

#### moveIgnoringBody-演示例子
```ini
[movement]
moveIgnoringBody:true
```
<hr>

### moveSlidingMode
#### moveSlidingMode-代码简介
代码:moveSlidingMode 中文释义:移动滑动 类型:布尔值 隶属于:杂项
#### moveSlidingMode-要点指示
定义单位移动后是否进行滑动

#### moveSlidingMode-演示例子
```ini
[movement]
moveSlidingMode:true
```
<hr>

### moveSlidingDir
#### moveSlidingDir-代码简介
代码:moveSlidingDir 中文释义:移动滑动角度 类型:浮点数 隶属于:杂项
#### moveSlidingDir-要点指示
定义单位移动滑动的角度

#### moveSlidingDir-演示例子
```ini
[movement]
moveSlidingDir:-1
```
<hr>

### joinsGroupFormations
#### joinsGroupFormations-代码简介
代码:joinsGroupFormations 中文释义:加入到队形 类型:布尔值 隶属于:杂项
#### joinsGroupFormations-要点指示
定义单位移动时是否要按队形行动

::: tip
默认值为true，这使大部分单位在移动时会排列为一个方阵，着不仅有效的使单位在一定程度上散开，避免aoe伤害，也能加快寻路运算速度，但是会使大量单位行进时部分单位一直撞墙
如果改为false，每个单位将单独进行寻路，这使得单位会挤在一起并且可能造成卡顿
:::

#### joinsGroupFormations-演示例子
```ini
[movement]
joinsGroupFormations:true
```
<hr>

### ignoreMoveOrders
#### ignoreMoveOrders-代码简介
代码:ignoreMoveOrders 中文释义:忽略移动指令:布尔值 隶属于:杂项
#### ignoreMoveOrders-要点指示
定义单位是否接受来自玩家的移动指令

::: tip
这个代码只能和**moveSpeed:0**一起使用，但是可以通过setUnitStats改变移动速度
:::

#### ignoreMoveOrders-演示例子
```ini
[movement]
ignoreMoveOrders:true
moveSpeed:0
```
<hr>