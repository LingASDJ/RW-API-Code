---
outline: deep
---

# **[turret]组**

## 第一类-重复代码组

::: tip
以下的代码与`攻击节`重复，在此处可以覆盖`攻击节`的全局数据
:::

::: warning
炮塔上限为31个，显示顺序为ini顺序递增
:::

### canShoot
#### canShoot-代码简介
代码:canShoot 中文释义:可攻击 类型:布尔值bool 隶属于:重复代码组
#### canShoot-要点指示
设置该炮塔是否能攻击
#### canShoot-演示例子
```ini
[turret_1]
canShoot:true
```
<hr>

### canAttackLandUnits
#### canAttackLandUnits-代码简介
代码:canAttackLandUnits 中文释义:可攻击表面单位 类型:逻辑布尔值LogicBoolean 隶属于:重复代码组
#### canAttackLandUnits-要点指示
设置该炮塔是否能对地面目标攻击
#### canAttackLandUnits-演示例子
```ini
[turret_1]
canAttackLandUnits:if self.ammo>=2
```
<hr>

### canAttackFlyingUnits
#### canAttackFlyingUnits-代码简介
代码:canAttackFlyingUnits 中文释义:可攻击空中单位 类型:逻辑布尔值LogicBoolean 隶属于:重复代码组
#### canAttackFlyingUnits-要点指示
设置该炮塔是否能对空中目标攻击
#### canAttackFlyingUnits-演示例子
```ini
[turret_1]
canAttackFlyingUnits:if self.ammo>=2
```
<hr>

### canAttackUnderwaterUnits
#### canAttackUnderwaterUnits-代码简介
代码:canAttackUnderwaterUnits 中文释义:可攻击水下单位 类型:逻辑布尔值LogicBoolean 隶属于:重复代码组
#### canAttackUnderwaterUnits-要点指示
设置该炮塔是否能对潜水目标攻击
#### canAttackUnderwaterUnits-演示例子
```ini
[turret_1]
canAttackUnderwaterUnits:if self.ammo>=2
```
<hr>

### canAttackNotTouchingWaterUnits
#### canAttackNotTouchingWaterUnits-代码简介
代码:canAttackNotTouchingWaterUnits 中文释义:可攻击非接触水单位 类型:逻辑布尔值LogicBoolean 隶属于:重复代码组
#### canAttackNotTouchingWaterUnits-要点指示
设置该炮塔是否能对不在水中的目标攻击
#### canAttackNotTouchingWaterUnits-演示例子
```ini
[turret_1]
canAttackNotTouchingWaterUnits:if self.ammo>=2
```
<hr>

### limitingRange
#### limitingRange-代码简介
代码:limitingRange 中文释义:限制范围 类型:整数int 隶属于:重复代码组
#### limitingRange-要点指示
设置该炮塔的攻击距离，不能超过maxAttackRange
#### limitingRange-演示例子
```ini
[turret_1]
limitingRange:1000
```
<hr>

### aimOffsetSpread
#### aimOffsetSpread-代码简介
代码:aimOffsetSpread 中文释义:攻击偏移 类型:浮点值float 隶属于:重复代码组
#### aimOffsetSpread-要点指示
攻击时按照敌人半径乘对应值进行位置偏移，填0时攻击中心
#### aimOffsetSpread-演示例子
```ini
[turret_1]
aimOffsetSpread:0.6
```
<hr>

### delay
#### delay-代码简介
代码:limitingRange 中文释义:开火间隔 类型:浮点数float 隶属于:重复代码组
#### delay-要点指示
设置该炮塔的开火间隔，按帧计时，60帧为1秒
#### delay-演示例子
```ini
[turret_1]
delay:60
```
<hr>

### size
#### size-代码简介
代码:size 中文释义:攻击偏移 类型:浮点值float 隶属于:重复代码组
#### size-要点指示
将炮塔开火位置进行y偏移，不能与barrelY一起使用
#### size-演示例子
```ini
[turret_1]
size:20
```
<hr>

### turnSpeed
#### turnSpeed-代码简介
代码:turnSpeed 中文释义:炮塔转速 类型:浮点数float 隶属于:重复代码组
#### turnSpeed-要点指示
设置该炮塔的旋转速度，按帧旋转，每帧转动此数值，如填1是1秒旋转60度
#### turnSpeed-演示例子
```ini
[turret_1]
turnSpeed:1
```
<hr>

### showRangeUIGuide
#### showRangeUIGuide-代码简介
代码:turnSpeed 中文释义:显示范围 类型:布尔值bool 隶属于:重复代码组
#### showRangeUIGuide-要点指示
设置是否显示该炮塔的范围
#### showRangeUIGuide-演示例子
```ini
[turret_1]
showRangeUIGuide:true
```
<hr>

## 第二类-基础代码组

### x y
#### x y-代码简介
代码:x y 中文释义:坐标X 坐标Y 类型:浮点数float 隶属于:基础代码组
#### x y-要点指示
设置该炮塔相对单位中心的位置
#### x y-演示例子
```ini
[turret_1]
x:10
y:10
```
<hr>

### height
#### height-代码简介
代码:height 中文释义:高度 类型:浮点数float 隶属于:基础代码组
#### height-要点指示
设置该炮塔的高度，同时链接此炮塔的炮塔也会受影响
#### height-演示例子
```ini
[turret_1]
height:10
```
<hr>

### copyFrom
#### copyFrom-代码简介
代码:copyFrom 中文释义:复制数据自 类型:炮塔turret 隶属于:基础代码组
#### copyFrom-要点指示
复制此炮塔的数据并使用此数据，可被覆盖
#### copyFrom-演示例子
```ini
[turret_1]
copyFrom:2
```
<hr>

### projectile
#### projectile-代码简介
代码:projectile 中文释义:抛射体 类型:抛射体projectile 隶属于:基础代码组
#### projectile-要点指示
炮塔使用此抛射体，如不填写则默认使用最前排的抛射体
#### projectile-演示例子
```ini
[turret_1]
projectile:1
```
<hr>

### altProjectile
#### altProjectile-代码简介
代码:altProjectile 中文释义:关联抛射体 类型:抛射体projectile 隶属于:基础代码组
#### altProjectile-要点指示
炮塔额外关联此抛射体，如altProjectileCondition输出true，则使用此抛射体，否则使用默认projectile
#### altProjectile-演示例子
```ini
[turret_1]
altProjectile:2
```
<hr>

### altProjectileCondition
#### altProjectileCondition-代码简介
代码:altProjectileCondition 中文释义:关联抛射体条件 类型:逻辑布尔值LogicBoolean 隶属于:基础代码组
#### altProjectileCondition-要点指示
此逻辑输出true时该炮塔使用altProjectile抛射体，否则使用projectile抛射体
#### altProjectileCondition-演示例子
```ini
[turret_1]
altProjectileCondition:if self.ammo>=2
```
<hr>

### barrelX barrelY
#### barrelX barrelY-代码简介
代码:barrelX barrelY 中文释义:炮塔开火位置 类型:浮点值float 隶属于:基础代码组
#### barrelX barrelY-要点指示
炮塔开火位置X偏移
炮塔开火位置Y偏移 
barrelY不能和size一起使用
#### barrelX barrelYtion-演示例子
```ini
[turret_1]
barrelX:10
barrelY:10 
```
<hr>

### barrelHeight
#### barrelHeight-代码简介
代码:barrelHeight 中文释义:开火位置高度偏移 类型:浮点值float 隶属于:基础代码组
#### barrelHeight-要点指示
炮塔开火位置高度偏移
#### barrelHeight-演示例子
```ini
[turret_1]
barrelHeight:20
```
<hr>

### turnSpeedAcceleration turnSpeedDeceleration
#### turnSpeedAcceleration turnSpeedDeceleration-代码简介
代码:turnSpeedAcceleration 中文释义:炮塔加速度/减速度 类型:浮点值float 隶属于:基础代码组
#### turnSpeedAcceleration turnSpeedDeceleration-要点指示
炮塔旋转加速度/减速度，按帧加速/减速
#### turnSpeedAcceleration turnSpeedDeceleration-演示例子
```ini
[turret_1]
turnSpeedAcceleration:1
turnSpeedDeceleration:1

```
<hr>

### idleDir
#### idleDir-代码简介
代码:idleDir 中文释义:闲置角度偏移 类型:浮点值float 隶属于:基础代码组
#### idleDir-要点指示
炮塔闲置时的角度偏移
#### idleDir-演示例子
```ini
[turret_1]
idleDir:20
```
<hr>

### idleDirReversing
#### idleDirReversing-代码简介
代码:idleDirReversing 中文释义:允许角度偏移反转 类型:布尔值bool 隶属于:基础代码组
#### idleDirReversing-要点指示
允许单位反转后炮塔偏移角度也反转，如果该炮塔写了隶属和链接则无效
#### idleDirReversing-演示例子
```ini
[turret_1]
idleDirReversing:true
```
<hr>

### shouldResetTurret
#### shouldResetTurret-代码简介
代码:shouldResetTurret 中文释义:空闲时自动复位 类型:布尔值bool 隶属于:基础代码组
#### shouldResetTurret-要点指示
设置该炮塔在空闲时自动复位
#### shouldResetTurret-演示例子
```ini
[turret_1]
shouldResetTurret:true
```
<hr>

### idleSweepAngle
#### idleSweepAngle-代码简介
代码:idleSweepAngle 中文释义:空闲扫描角度 类型:浮点值float 隶属于:基础代码组
#### idleSweepAngle-要点指示
空闲时炮塔扫描的角度，如原版炮塔
#### idleSweepAngle-演示例子
```ini
[turret_1]
idleSweepAngle:60
```
<hr>

### idleSweepDelay
#### idleSweepDelay-代码简介
代码:idleSweepAngle 中文释义:空闲扫描间隔 类型:浮点值float 隶属于:基础代码组
#### idleSweepDelay-要点指示
空闲时炮塔扫描的间隔，按帧计时
#### idleSweepDelay-演示例子
```ini
[turret_1]
idleSweepDelay:60
```
<hr>

### idleSweepSpeed
#### idleSweepSpeed-代码简介
代码:idleSweepSpeed 中文释义:空闲扫描速度 类型:浮点值float 隶属于:基础代码组
#### idleSweepSpeed-要点指示
空闲时炮塔扫描的速度，每帧移动的度数
#### idleSweepSpeed-演示例子
```ini
[turret_1]
idleSweepSpeed:1
```
<hr>

### idleSweepCondition
#### idleSweepCondition-代码简介
代码:idleSweepCondition 中文释义:空闲扫描条件 类型:逻辑布尔值LogicBoolean 隶属于:基础代码组
#### altProjectileCondition-要点指示
空闲扫描需要的条件
#### idleSweepCondition-演示例子
```ini
[turret_1]
idleSweepCondition:if self.ammo>=2
```
<hr>

### idleSweepAddRandomAngle
#### idleSweepAddRandomAngle-代码简介
代码:idleSweepAddRandomAngle 中文释义:空闲扫描随机角度 类型:浮点值float 隶属于:基础代码组
#### idleSweepAddRandomAngle-要点指示
空闲时炮塔扫描的随机角度
#### idleSweepAddRandomAngle-演示例子
```ini
[turret_1]
idleSweepAddRandomAngle:60
```
<hr>

### idleSweepAddRandomDelay
#### idleSweepAddRandomDelay-代码简介
代码:idleSweepAddRandomDelay 中文释义:空闲扫描随机间隔 类型:浮点值float 隶属于:基础代码组
#### idleSweepAddRandomDelay-要点指示
空闲时炮塔扫描的随机间隔，按帧计时
#### idleSweepAddRandomDelay-演示例子
```ini
[turret_1]
idleSweepAddRandomDelay:60
```
<hr>

### attachedTo
#### attachedTo-代码简介
代码:attachedTo 中文释义:链接 类型:炮塔turret 隶属于:基础代码组
#### attachedTo-要点指示
链接到此炮塔，原点重定位至此炮塔
#### attachedTo-演示例子
```ini
[turret_1]
attachedTo:1
```
<hr>

### slave
#### slave-代码简介
代码:slave 中文释义:隶属 类型:布尔值bool 隶属于:基础代码组
#### slave-要点指示
与attachedTo一起使用，用于让炮塔与链接的炮塔一起旋转
#### slave-演示例子
```ini
[turret_1]
slave:true
```
<hr>

### isMainNanoTurret
#### isMainNanoTurret-代码简介
代码:isMainNanoTurret 中文释义:是主构建炮塔 类型:布尔值bool 隶属于:基础代码组
#### isMainNanoTurret-要点指示
将炮塔设定为用于修复/建造的炮塔
只能有一个主构建炮塔
#### isMainNanoTurret-演示例子
```ini
[turret_1]
isMainNanoTurret:true
```
<hr>

### energyUsage
#### energyUsage-代码简介
代码:energyUsage 中文释义:能量需求 类型:浮点值float 隶属于:基础代码组
#### energyUsage-要点指示
炮塔攻击需要的能量，攻击后扣除，能量不够时无法攻击
#### energyUsage-演示例子
```ini
[turret_1]
energyUsage:60
```
<hr>

### resourceUsage
#### resourceUsage-代码简介
代码:resourceUsage 中文释义: 类型:资源resource 隶属于:基础代码组
#### resourceUsage-要点指示
攻击后扣除的资源，即使资源不足也能攻击
#### resourceUsage-演示例子
```ini
[turret_1]
resourceUsage:资源=60,ammo=60
```
<hr>

### linkDelayWithTurret
#### linkDelayWithTurret-代码简介
代码:linkDelayWithTurret 中文释义:链接间隔 类型:炮塔turret 隶属于:基础代码组
#### linkDelayWithTurret-要点指示
链接的炮塔攻击后重置炮塔攻击间隔，与预热一起使用可以做出交替开火的效果
#### linkDelayWithTurret-演示例子
```ini
[turret_1]
linkDelayWithTurret:1
```
<hr>

### warmup
#### warmup-代码简介
代码:warmup 中文释义:预热 类型:浮点值float 隶属于:基础代码组
#### warmup-要点指示
炮塔蓄力的时间，停止攻击时归零，按帧计时
#### warmup-演示例子
```ini
[turret_1]
warmup:60
```
<hr>

### warmupCallDownRate
#### warmupCallDownRate-代码简介
代码:warmupCallDownRate 中文释义:预热下降速度 类型:浮点值float 隶属于:基础代码组
#### warmupCallDownRate-要点指示
停止攻击时预热的降低速度，按帧下降
需要warmupNoReset:true
#### warmupCallDownRate-演示例子
```ini
[turret_1]
warmupCallDownRate:1
```
<hr>

### warmupNoReset
#### warmupNoReset-代码简介
代码:warmupNoReset 中文释义:预热不重置 类型:布尔值bool 隶属于:基础代码组
#### warmupNoReset-要点指示
默认为false，停止攻击时炮塔预热不会归零
填true时warmupCallDownRate会生效并降低预热
#### warmupNoReset-演示例子
```ini
[turret_1]
warmupNoReset:true
```
<hr>

### warmupShootDelayTransfer
#### warmupShootDelayTransfer-代码简介
代码:warmupShootDelayTransfer 中文释义:开火间隔过渡 类型:浮点值float 隶属于:基础代码组
#### warmupShootDelayTransfer-要点指示
按炮塔蓄力的时间，与攻击间隔进行相减
填写正数时会让攻击间隔缩短
相减为负数时会自动取绝对值
填写负数时会让攻击间隔延长
#### warmupShootDelayTransfer-演示例子
```ini
[turret_1]
warmupShootDelayTransfer:60
```
::: details
delay:30-攻击间隔为0.5秒
warmupShootDelayTransfer:120-攻击间隔降低2秒
最后得出数据为-1.5秒-攻击间隔为1.5秒
:::
<hr>

### onShoot_freezeBodyMovementFor
#### onShoot_freezeBodyMovementFor-代码简介
代码:onShoot_freezeBodyMovementFor 中文释义:射击时冻结主体 类型:浮点值float 隶属于:基础代码组
#### onShoot_freezeBodyMovementFor-要点指示
攻击后冻结主体的时间，按帧计时
#### onShoot_freezeBodyMovementFor-演示例子
```ini
[turret_1]
onShoot_freezeBodyMovementFor:60
```
<hr>

### barrelOffsetX_onOddShots
#### barrelOffsetX_onOddShots-代码简介
代码:barrelOffsetX_onOddShots 中文释义:射击时炮塔偏移 类型:浮点值float 隶属于:基础代码组
#### barrelOffsetX_onOddShots-要点指示
攻击时炮塔角度偏移量，用于单个炮塔使用多炮管图像时让炮管偏移
如原版T2机枪塔T3机枪塔，炮管越多效果越差
#### barrelOffsetX_onOddShots-演示例子
```ini
[turret_1]
barrelOffsetX_onOddShots:10
```
<hr>

### canAttackCondition
#### canAttackCondition-代码简介
代码:canAttackCondition 中文释义:攻击条件 类型:逻辑布尔值LogicBoolean 隶属于:基础代码组
#### canAttackCondition-要点指示
设置该炮塔攻击需要的额外条件
输出false时无法攻击
#### canAttackCondition-演示例子
```ini
[turret_1]
canAttackCondition:if self.ammo>=2
```
<hr>

### clearTurretTargetAfterFiring
#### clearTurretTargetAfterFiring-代码简介
代码:clearTurretTargetAfterFiring 中文释义:攻击后重置炮塔目标 类型:布尔值bool 隶属于:重复代码组
#### clearTurretTargetAfterFiring-要点指示
炮塔攻击后重置目标
#### clearTurretTargetAfterFiring-演示例子
```ini
[turret_1]
clearTurretTargetAfterFiring:true
```
<hr>

### limitingAngle
#### limitingAngle-代码简介
代码:limitingAngle 中文释义:限制角度 类型:浮点值float 隶属于:基础代码组
#### limitingAngle-要点指示
与idleDir配合使用，炮塔只能以+/-此角度进行攻击。
如idleDir:0的炮塔，此数值填写90则可以旋转到[-90,90]这个区间的任意角度
#### limitingAngle-演示例子
```ini
[turret_1]
limitingAngle:30
```
<hr>

### limitingMinRange
#### limitingMinRange-代码简介
代码:limitingMinRange 中文释义:最小范围 类型:浮点值float 隶属于:基础代码组
#### limitingMinRange-要点指示
设置炮塔不能攻击此范围内的敌人
#### limitingMinRange-演示例子
```ini
[turret_1]
limitingMinRange:30
```
<hr>

### canAttackMaxAngle
#### canAttackMaxAngle-代码简介
代码:canAttackMaxAngle 中文释义:最大可攻击角度 类型:浮点值float 隶属于:基础代码组
#### canAttackMaxAngle-要点指示
设置炮塔可攻击的角度，默认为15
填写181可以实现全角度攻击
#### canAttackMaxAngle-演示例子
```ini
[turret_1]
canAttackMaxAngle:30
```
<hr>

### interceptProjectiles_withTags
#### interceptProjectiles_withTags-代码简介
代码:interceptProjectiles_withTags 中文释义:拦截抛射体需要标签 类型:标签tags 隶属于:基础代码组
#### interceptProjectiles_withTags-要点指示
设置拦截的抛射体携带的标签
拥有此标签的抛射体才能触发并进行拦截
#### interceptProjectiles_withTags-演示例子
```ini
[turret_1]
interceptProjectiles_withTags:标签
```
<hr>

### interceptProjectiles_andTargetingGroundUnderDistance
#### interceptProjectiles_andTargetingGroundUnderDistance-代码简介
代码:interceptProjectiles_andTargetingGroundUnderDistance 中文释义:拦截抛射体检索范围 类型:浮点值float 隶属于:基础代码组
#### interceptProjectiles_andTargetingGroundUnderDistance-要点指示
设置拦截抛射体的范围
携带对应标签的抛射体落点在此范围内才会拦截
#### interceptProjectiles_andTargetingGroundUnderDistance-演示例子
```ini
[turret_1]
interceptProjectiles_andTargetingGroundUnderDistance:1000
```
<hr>

### interceptProjectiles_andUnderDistance
#### interceptProjectiles_andUnderDistance-代码简介
代码:interceptProjectiles_andUnderDistance 中文释义:拦截抛射体攻击范围 类型:浮点值float 隶属于:基础代码组
#### interceptProjectiles_andUnderDistance-要点指示
设置拦截抛射体攻击范围
携带对应标签的抛射体进入此范围就会进行拦截
#### interceptProjectiles_andUnderDistance-演示例子
```ini
[turret_1]
interceptProjectiles_andUnderDistance:2000
```
<hr>

### interceptProjectiles_andOverHeight
#### interceptProjectiles_andOverHeight-代码简介
代码:interceptProjectiles_withTags 中文释义:拦截抛射体高度 类型:浮点值float 隶属于:基础代码组
#### interceptProjectiles_andOverHeight-要点指示
设置拦截抛射体时，发射的抛射体初始爬升的高度
#### interceptProjectiles_andOverHeight-演示例子
```ini
[turret_1]
interceptProjectiles_andOverHeight:50
```
<hr>

### interceptProjectile_removeTargetLifeOnly
#### interceptProjectile_removeTargetLifeOnly-代码简介
代码:interceptProjectile_removeTargetLifeOnly 中文释义:拦截抛射体移除目标存活时间 类型:布尔值bool 隶属于:基础代码组
#### interceptProjectile_removeTargetLifeOnly-要点指示
设置被击中的抛射体可爆炸或分裂。用于设定命中抛射体时是否执行分裂逻辑。
#### interceptProjectile_removeTargetLifeOnly-演示例子
```ini
[turret_1]
interceptProjectile_removeTargetLifeOnly:true
```
<hr>

### laserDefenceEnergyUse
#### laserDefenceEnergyUse-代码简介
代码:laserDefenceEnergyUse 中文释义:激光防御能量需求 类型:浮点数float 隶属于:基础代码组
#### laserDefenceEnergyUse-要点指示
拦截1次抛射体消耗的能量
#### laserDefenceEnergyUse-演示例子
```ini
[turret_1]
laserDefenceEnergyUse:1
```
<hr>

### laserDefenceEnergyUse
#### laserDefenceEnergyUse-代码简介
代码:laserDefenceEnergyUse 中文释义:激光防御能量需求 类型:浮点数float 隶属于:基础代码组
#### laserDefenceEnergyUse-要点指示
拦截1次抛射体消耗的能量
#### laserDefenceEnergyUse-演示例子
```ini
[turret_1]
laserDefenceEnergyUse:1
```
<hr>

## 第三类-显示相关组

### invisible
#### invisible-代码简介
代码:invisible 中文释义:隐藏图像 类型:逻辑布尔值LogicBoolean 隶属于:显示相关组
#### invisible-要点指示
是否隐藏炮塔图像
#### invisible-演示例子
```ini
[turret_1]
invisible:if self.ammo<=2
```
<hr>

### image
#### image-代码简介
代码:image 中文释义:主体图像 类型:图像png 隶属于:显示相关组
#### image-要点指示
炮塔图像
#### image-演示例子
```ini
[turret_1]
image:png.png
```
<hr>

### image_applyTeamColors
#### image_applyTeamColors-代码简介
代码:image_applyTeamColors 中文释义:隐藏图像 类型:逻辑布尔值LogicBoolean 隶属于:显示相关组
#### image_applyTeamColors-要点指示
炮塔图像是否使用阵营色
#### image_applyTeamColors-演示例子
```ini
[turret_1]
image_applyTeamColors:true
```
<hr>

### image_drawOffsetX/image_drawOffsetY
#### image_drawOffsetX/image_drawOffsetY-代码简介
代码:image_drawOffsetX/image_drawOffsetY 中文释义:图像x偏移/图像y偏移 类型:浮点数float 隶属于:显示相关组
#### image_drawOffsetX/image_drawOffsetY-要点指示
图像偏移x或y，不影响炮塔属性
#### image_drawOffsetX/image_drawOffsetY-演示例子
```ini
[turret_1]
image_drawOffsetX:20
image_drawOffsetY:20
```
<hr>

### chargeEffectImage
#### chargeEffectImage-代码简介
代码:chargeEffectImage 中文释义:蓄力图像 类型:图像png 隶属于:显示相关组
#### chargeEffectImage-要点指示
炮塔蓄力图像，与warmup配合使用
#### chargeEffectImage-演示例子
```ini
[turret_1]
chargeEffectImage:png.png
```
<hr>

### warmupStartEffect
#### warmupStartEffect-代码简介
代码:warmupStartEffect 中文释义:炮塔蓄力图像 类型:效果effect 隶属于:显示相关组
#### warmupStartEffect-要点指示
蓄力时产生一次效果
#### warmupStartEffect-演示例子
```ini
[turret_1]
warmupStartEffect:CUSTOM:效果
```
<hr>


### shoot_sound
#### shoot_sound-代码简介
代码:shoot_sound 中文释义:攻击音效 类型:音频wav/ogg 隶属于:显示相关组
#### shoot_sound-要点指示
攻击时播放音频
#### shoot_sound-演示例子
```ini
[turret_1]
shoot_sound:ogg.ogg/wav.wav
```
<hr>

### shoot_sound_vol
#### shoot_sound_vol-代码简介
代码:shoot_sound_vol 中文释义:攻击音效大小 类型:浮点值float 隶属于:显示相关组
#### shoot_sound_vol-要点指示
设置攻击时产生音效的音量大小
#### shoot_sound_vol-演示例子
```ini
[turret_1]
shoot_sound_vol:0.1
```
<hr>

### shoot_flame
#### shoot_flame-代码简介
代码:shoot_flame 中文释义:开火效果 类型:效果effect 隶属于:显示相关组
#### shoot_flame-要点指示
设置开火时产生的效果
#### shoot_flame-演示例子
```ini
[turret_1]
shoot_flame:CUSTOM:效果
```
<hr>

### shoot_light
#### shoot_light-代码简介
代码:shoot_light 中文释义:攻击闪光 类型:颜色码 隶属于:显示相关组
#### shoot_light-要点指示
设置攻击时产生闪光，颜色码排列为AARRGGBB
#### shoot_light-演示例子
```ini
[turret_1]
shoot_light:#00000000
```
<hr>

### idleSpin
#### idleSpin-代码简介
代码:idleSpin 中文释义:闲时转速 类型:浮点值float 隶属于:显示相关组
#### idleSpin-要点指示
设置炮塔每帧转动角度，如原版萨姆导弹
#### idleSpin-演示例子
```ini
[turret_1]
idleSpin:1
```
<hr>

### recoilOffset
#### recoilOffset-代码简介
代码:recoilOffset 中文释义:后坐力大小 类型:浮点值float 隶属于:显示相关组
#### recoilOffset-要点指示
设置炮塔在攻击后产生后坐力
填负数让炮塔后退，填正数则前进
#### recoilOffset-演示例子
```ini
[turret_1]
recoilOffset:-5
```
<hr>

### recoilOutTime
#### recoilOutTime-代码简介
代码:recoilOutTime 中文释义:后坐力速度 类型:浮点值float 隶属于:显示相关组
#### recoilOutTime-要点指示
设置炮塔后坐力产生的速度
后坐力会在此时间完成后退/前进
#### recoilOutTime-演示例子
```ini
[turret_1]
recoilOutTime:7.5
```
<hr>

### recoilReturnTime
#### recoilReturnTime-代码简介
代码:recoilReturnTime 中文释义:后坐力恢复 类型:浮点值float 隶属于:显示相关组
#### recoilReturnTime-要点指示
后坐力完成后退/前进后，复位所需要的时间
炮塔会在此时间完成复位
#### recoilReturnTime-演示例子
```ini
[turret_1]
recoilReturnTime:15
```
<hr>

### yAxisScaling
#### yAxisScaling-代码简介
代码:yAxisScaling 中文释义:Y轴缩放比例 类型:浮点值float 隶属于:显示相关组
#### yAxisScaling-要点指示
多用于用于2.5D效果，也就是伪3D
#### yAxisScaling-演示例子
```ini
[turret_1]
yAxisScaling:25
```
<hr>

## 第四类-触发相关组

### onShoot_playAnimation
#### onShoot_playAnimation-代码简介
代码:onShoot_playAnimation 中文释义:开火触发动画 类型:动画animation 隶属于:触发相关组
#### onShoot_playAnimation-要点指示
设置炮塔攻击时播放该动画
#### onShoot_playAnimation-演示例子
```ini
[turret_1]
onShoot_playAnimation:1
```
<hr>

### onShoot_freezeBodyMovementFor
#### onShoot_freezeBodyMovementFor-代码简介
代码:onShoot_freezeBodyMovementFor 中文释义:开火冻结移动 类型:浮点值float 隶属于:触发相关组
#### onShoot_freezeBodyMovementFor-要点指示
设置炮塔开火后无法移动的时间，按帧计时
#### onShoot_freezeBodyMovementFor-演示例子
```ini
[turret_1]
onShoot_freezeBodyMovementFor:60
```
<hr>

### onShoot_triggerActions
#### onShoot_triggerActions-代码简介
代码:onShoot_triggerActions 中文释义:开火触发行动 类型:行动action 隶属于:触发相关组
#### onShoot_triggerActions-要点指示
设置炮塔攻击时触发的行动
#### onShoot_triggerActions-演示例子
```ini
[turret_1]
onShoot_triggerActions:1
```
<hr>

### unloadUpToXUnitsAndGiveAttackOrder
#### unloadUpToXUnitsAndGiveAttackOrder-代码简介
代码:unloadUpToXUnitsAndGiveAttackOrder 中文释义:卸载n个单位并赋予攻击目标 类型:整数int 隶属于:触发相关组
#### unloadUpToXUnitsAndGiveAttackOrder-要点指示
在炮塔开火处卸载n个单位
同时提供路径让它们攻击炮塔指定的目标
#### unloadUpToXUnitsAndGiveAttackOrder-演示例子
```ini
[turret_1]
unloadUpToXUnitsAndGiveAttackOrder:1
```
<hr>
