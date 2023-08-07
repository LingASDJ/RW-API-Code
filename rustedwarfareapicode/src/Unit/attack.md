---
outline: deep
---

# **[attack]组**

## 第一类-基础攻击代码组

::: tip
以下的代码为`通用代码`,多半是必要的代码，如果不包括这些，可能在`绝大多数情况下导致错误`。
:::
::: info
此处攻击代码均可以在炮塔节进行覆盖
:::
### canAttack
#### canAttack-代码简介
代码:canAttack 中文释义:可攻击 类型:布尔值bool 隶属于:基础攻击代码组
#### canAttack-要点指示
设置单位是否能攻击
#### canAttack-演示例子
```ini
[attack]
canAttack:true
```
<hr>

### canAttackLandUnits
#### canAttackLandUnits-代码简介
代码:canAttackLandUnits 中文释义:可攻击表面单位 类型:逻辑布尔值LogicBoolean 隶属于:基础攻击代码组
#### canAttackLandUnits-要点指示
设置单位是否能对地面目标攻击
#### canAttackLandUnits-演示例子
```ini
[attack]
canAttackLandUnits:if self.ammo>=2
```
<hr>

### canAttackFlyingUnits
#### canAttackFlyingUnits-代码简介
代码:canAttackFlyingUnits 中文释义:可攻击空中单位 类型:逻辑布尔值LogicBoolean 隶属于:基础攻击代码组
#### canAttackFlyingUnits-要点指示
设置单位是否能对空中目标攻击
#### canAttackFlyingUnits-演示例子
```ini
[attack]
canAttackFlyingUnits:if self.ammo>=2
```
<hr>

### canAttackUnderwaterUnits
#### canAttackUnderwaterUnits-代码简介
代码:canAttackUnderwaterUnits 中文释义:可攻击水下单位 类型:逻辑布尔值LogicBoolean 隶属于:基础攻击代码组
#### canAttackUnderwaterUnits-要点指示
设置单位是否能对潜水目标攻击
#### canAttackUnderwaterUnits-演示例子
```ini
[attack]
canAttackUnderwaterUnits:if self.ammo>=2
```
<hr>

### canAttackNotTouchingWaterUnits
#### canAttackNotTouchingWaterUnits-代码简介
代码:canAttackNotTouchingWaterUnits 中文释义:可攻击非接触水单位 类型:逻辑布尔值LogicBoolean 隶属于:基础攻击代码组
#### canAttackNotTouchingWaterUnits-要点指示
设置单位是否能对不在水中的目标攻击
#### canAttackNotTouchingWaterUnits-演示例子
```ini
[attack]
canAttackNotTouchingWaterUnits:if self.ammo>=2
```
<hr>

## 第二类-攻击代码组

::: tip
非必须存在的代码，根据情况自行使用
:::

### canOnlyAttackUnitsWithTags
#### canOnlyAttackUnitsWithTags-代码简介
代码:canOnlyAttackUnitsWithTags 中文释义:只攻击带特定标签单位 类型:标签tag 隶属于:攻击代码组
#### canOnlyAttackUnitsWithTags-要点指示
设置单位只能攻击携带此标签的目标
#### canOnlyAttackUnitsWithTags-演示例子
```ini
[attack]
canOnlyAttackUnitsWithTags:标签
```
<hr>

### canOnlyAttackUnitsWithoutTags
#### canOnlyAttackUnitsWithTags-代码简介
代码:canOnlyAttackUnitsWithoutTags 中文释义:不攻击带特定标签单位 类型:标签tag 隶属于:攻击代码组
#### canOnlyAttackUnitsWithoutTags-要点指示
设置单位不能攻击携带此标签的目标
#### canOnlyAttackUnitsWithoutTags-演示例子
```ini
[attack]
canOnlyAttackUnitsWithoutTags:标签
```
<hr>

### turretMultiTargeting
#### turretMultiTargeting-代码简介
代码:turretMultiTargeting 中文释义:炮塔攻击多目标 类型:布尔值bool 隶属于:攻击代码组
#### turretMultiTargeting-要点指示
设置单位是否允许炮塔攻击不同目标,对范围限制 角度限制 不同类型炮塔很有用
#### turretMultiTargeting-演示例子
```ini
[attack]
turretMultiTargeting:true
```
<hr>

### dieOnAttack/removeOnAttack
#### dieOnAttack-代码简介
代码:dieOnAttack/removeOnAttack中文释义:自爆攻击/移除攻击 类型:布尔值bool 隶属于:攻击代码组
#### dieOnAttack-要点指示
设置单位是否在攻击时自毁
#### removeOnAttack-要点指示
设置单位是否在攻击时移除自身
#### dieOnAttack/removeOnAttack-演示例子
```ini
[attack]
dieOnAttack:true
removeOnAttack:true
```
<hr>

### isFixedFiring
#### isFixedFiring-代码简介
代码:isFixedFiring 中文释义:固定射击 类型:布尔值bool 隶属于:攻击代码组
#### isFixedFiring-要点指示
设置单位炮塔是否需要必须对准敌人才能攻击
#### isFixedFiring-演示例子
```ini
[attack]
isFixedFiring:true
```
<hr>

### stopTargetingAfterFiring
#### stopTargetingAfterFiring-代码简介
代码:stopTargetingAfterFiring 中文释义:自动停火 类型:布尔值bool 隶属于:攻击代码组
#### stopTargetingAfterFiring-要点指示
设置单位在攻击后是否停止攻击
#### stopTargetingAfterFiring-演示例子
```ini
[attack]
stopTargetingAfterFiring:true
```
<hr>

### disablePassiveTargeting
#### disablePassiveTargeting-代码简介
代码:disablePassiveTargeting 中文释义:不能主动攻击 类型:布尔值bool 隶属于:攻击代码组
#### disablePassiveTargeting-要点指示
设置单位是否需要手动指定目标才能攻击,由于attack路径点回在目标死亡后会重新选定目标,导致此条代码失效
#### disablePassiveTargeting-演示例子
```ini
[attack]
disablePassiveTargeting:true
```
<hr>

### isMelee
#### isMelee-代码简介
代码:isMelee 中文释义:近战 类型:布尔值bool 隶属于:攻击代码组
#### isMelee-要点指示
设置单位是否拥有近战逻辑,如单位攻击时不需要瞄准到目标中心,只需要瞄准到半径内,同时自动索敌
#### isMelee-演示例子
```ini
[attack]
isMelee:true
```
<hr>

### meleeEngangementDistance
#### meleeEngangementDistance-代码简介
代码:meleeEngangementDistance 中文释义:近战索敌距离 类型:整数int 隶属于:攻击代码组
#### meleeEngangementDistance-要点指示
设置单位的近战逻辑索敌距离,与isMelee结合使用,最高1500
#### meleeEngangementDistance-演示例子
```ini
[attack]
meleeEngangementDistance:1500
```
<hr>

## 第三类-攻击属性代码组
::: tip
以下的代码为`属性代码`,优先级低于炮塔节的代码，如果炮塔节未填写覆盖则使用此处的属性。
:::
### turretSize
#### turretSize-代码简介
代码:turretSize 中文释义:炮塔大小 类型:浮点值float 隶属于:攻击属性代码组
#### turretSize-要点指示
设置单位炮塔大小，按像素修改炮塔开火位置，在炮塔节使用size覆盖
#### turretSize-演示例子
```ini
[attack]
turretSize:20
```
<hr>

### turretTurnSpeed
#### turretTurnSpeed-代码简介
代码:turretTurnSpeed 中文释义:炮塔转速 类型:浮点值float 隶属于:攻击属性代码组
#### turretTurnSpeed-要点指示
设置单位炮塔的旋转速度，按帧转动炮塔，如60帧1速就是1秒旋转60度，在炮塔节使用turnSpeed覆盖
#### turretTurnSpeed-演示例子
```ini
[attack]
turretTurnSpeed:2
```
<hr>

### shootDelay
#### shootDelay-代码简介
代码:shootDelay 中文释义:攻击间隔 类型:浮点值float 隶属于:攻击属性代码组
#### shootDelay-要点指示
设置单位炮塔的攻击间隔，按帧或按时间修改，如填写60可以更换成1s，在炮塔节使用delay覆盖
#### shootDelay-演示例子
```ini
[attack]
shootDelay:60
```
<hr>

### maxAttackRange
#### maxAttackRange-代码简介
代码:maxAttackRange 中文释义:攻击距离 类型:整数int 隶属于:攻击属性代码组
#### maxAttackRange-要点指示
设置单位炮塔的攻击距离，在炮塔节使用limitingRange覆盖
::: details
limitingRange不能超过maxAttackRange，如果炮塔都使用了limitingRange，那此处需要删除maxAttackRange
:::
#### maxAttackRange-演示例子
```ini
[attack]
maxAttackRange:1000
```
<hr>

### aimOffsetSpread
#### aimOffsetSpread-代码简介
代码:aimOffsetSpread 中文释义:攻击偏移 类型:浮点值float 隶属于:攻击属性组
#### aimOffsetSpread-要点指示
攻击时按照敌人半径乘对应值进行位置偏移，填0时攻击中心
#### aimOffsetSpread-演示例子
```ini
[attack]
aimOffsetSpread:0.6
```
<hr>

### shootDelayMultiplier/shootDamageMultiplier
#### shootDelayMultiplier/shootDamageMultiplier-代码简介
代码:shootDelayMultiplier/shootDamageMultiplier 中文释义:攻击间隔乘数/攻击伤害乘数 类型:浮点值 隶属于:攻击属性代码组
#### shootDelayMultiplier/shootDamageMultiplier-要点指示
设置单位的攻击间隔乘数和攻击伤害乘数，在行动节使用setUnitStats修改
#### shootDelayMultiplier/shootDamageMultiplier-演示例子
```ini
[action_1]
setUnitStats:shootDelayMultiplier=0.8,shootDamageMultiplier=1.4
```
<hr>

## 第四类-显示相关组

::: code-group
``` bash [屑狐狸]
以下的代码为`显示代码`,用于让单位在攻击时效果更好
对于部分有对应需求的单位来说这部分较为有用
```
:::

### setMainTurretAs
#### setMainTurretAs-代码简介
代码:setMainTurretAs 中文释义:设置主炮塔 类型:炮塔turret ref 隶属于:显示相关组
#### setMainTurretAs-要点指示
设置单位主炮塔
#### setMainTurretAs-演示例子
```ini
[attack]
setMainTurretAs:31
```
<hr>

### turretRotateWithBody
#### turretRotateWithBody-代码简介
代码:turretRotateWithBody 中文释义:炮塔跟随主体旋转 类型:布尔值bool 隶属于:显示相关组
#### turretRotateWithBody-要点指示
设置单位炮塔跟随主体旋转，比如重型拦截机
#### turretRotateWithBody-演示例子
```ini
[attack]
turretRotateWithBody:true
```
<hr>

### attackMovement
#### attackMovement-代码简介
代码:attackMovement 中文释义:攻击移动类型 类型:字符串string 隶属于:显示相关组
#### attackMovement-要点指示
设置单位攻击移动类型
::: tip
可填类型如下
|类型|normal|bomber|moveaway|strafing|
|-|-|-|-|-
|效果|无|轰炸机|无效|无效|
:::
#### attackMovement-演示例子
```ini
[attack]
attackMovement:bomber
```
<hr>

### showRangeUIGuide
#### showRangeUIGuide-代码简介
代码:showRangeUIGuide 中文释义:显示范围UI 类型:布尔值bool 隶属于:显示相关组
#### showRangeUIGuide-要点指示
是否显示范围UI，如默认不显示的小范围填写true则会显示范围，比如瞭望塔
#### showRangeUIGuide-演示例子
```ini
[attack]
showRangeUIGuide:true
```
<hr>
