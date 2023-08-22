---
outline: deep
---

# **[attachment]组**

## 第一类-附属代码组

### x/y
#### x/y-代码简介
代码:x/y 中文释义:x坐标/y坐标 类型:逻辑布尔值LogicBoolean 隶属于:附属代码组
#### x/y-要点指示
相对主体单位的x偏移坐标/y偏移坐标
#### x/y-演示例子
```ini
[attachment_1]
x:10
y:10
```
<hr>

### height
#### height-代码简介
代码:height 中文释义:高度 类型:浮点值float 隶属于:附属代码组
#### height-要点指示
附属基于主体单位的高度
#### height-演示例子
```ini
[attachment_1]
height:10.5
```
<hr>

### idleDir
#### idleDir-代码简介
代码:idleDir 中文释义:闲置角度 类型:浮点值float 隶属于:附属代码组
#### idleDir-要点指示
闲置时的角度
#### idleDir-演示例子
```ini
[attachment_1]
idleDir:45
```
<hr>

### idleDirReversing
#### idleDirReversing-代码简介
代码:idleDirReversing 中文释义:闲置角度反转 类型:布尔值bool 隶属于:附属代码组
#### idleDirReversing-要点指示
闲置时的角度在部分情况下反转
#### idleDirReversing-演示例子
```ini
[attachment_1]
idleDirReversing:true
```
<hr>

### isVisible
#### isVisible-代码简介
代码:isVisible 中文释义:是可见的 类型:逻辑布尔值LogicBoolean 隶属于:附属代码组
#### isVisible-要点指示
输出false时隐藏附属内单位
#### isVisible-演示例子
```ini
[attachment_1]
isVisible:if self.hp>=100
```
<hr>

### hidden
#### hidden-代码简介
代码:hidden 中文释义:隐藏 类型:布尔值bool 隶属于:附属代码组
#### hidden-要点指示
隐藏此附属内的单位
#### hidden-演示例子
```ini
[attachment_1]
hidden:true
```
<hr>

### onCreateSpawnUnitOf
#### onCreateSpawnUnitOf-代码简介
代码:onCreateSpawnUnitOf 中文释义:创建添加单位 类型:单位unit 隶属于:附属代码组
#### onCreateSpawnUnitOf-要点指示
创建时向此附属位添加的单位
#### onCreateSpawnUnitOf-演示例子
```ini
[attachment_1]
onCreateSpawnUnitOf:tank
```
<hr>

### canBeAttackedAndDamaged
#### canBeAttackedAndDamaged-代码简介
代码:canBeAttackedAndDamaged 中文释义:可被攻击或伤害 类型:布尔值bool 隶属于:附属代码组
#### canBeAttackedAndDamaged-要点指示
设置此附属内的单位可被攻击或伤害
#### canBeAttackedAndDamaged-演示例子
```ini
[attachment_1]
canBeAttackedAndDamaged:true
```
<hr>

### isUnselectable
#### isUnselectable-代码简介
代码:isUnselectable 中文释义:无法选择 类型:布尔值bool 隶属于:附属代码组
#### isUnselectable-要点指示
此附属内的单位无法被选中或框选
#### isUnselectable-演示例子
```ini
[attachment_1]
isUnselectable:true
```
<hr>

### isUnselectableAsTarget
#### isUnselectableAsTarget-代码简介
代码:isUnselectableAsTarget 中文释义:禁止选择和作为目标 类型:布尔值bool 隶属于:附属代码组
#### isUnselectableAsTarget-要点指示
此附属内的单位无法被选择和作为目标
#### isUnselectableAsTarget-演示例子
```ini
[attachment_1]
isUnselectableAsTarget:true
```
<hr>

### lockLegMovement
#### lockLegMovement-代码简介
代码:lockLegMovement 中文释义:锁定腿脚运动 类型:布尔值bool 隶属于:附属代码组
#### lockLegMovement-要点指示
锁定此附属内的单位的腿脚
#### lockLegMovement-演示例子
```ini
[attachment_1]
lockLegMovement:true
```
<hr>

### freezeLegMovement
#### freezeLegMovement-代码简介
代码:freezeLegMovement 中文释义:冻结腿脚运动 类型:布尔值bool 隶属于:附属代码组
#### freezeLegMovement-要点指示
相较于锁定腿脚更好用，可以避免锁定腿脚的腿脚乱动
#### freezeLegMovement-演示例子
```ini
[attachment_1]
freezeLegMovement:true
```
<hr>

### hideHp
#### hideHp-代码简介
代码:hideHp 中文释义:隐藏血条 类型:布尔值bool 隶属于:附属代码组
#### hideHp-要点指示
隐藏此附属内的单位的血量
#### hideHp-演示例子
```ini
[attachment_1]
hideHp:true
```
<hr>

### showMiniHp
#### showMiniHp-代码简介
代码:showMiniHp 中文释义:显示迷你血条 类型:布尔值bool 隶属于:附属代码组
#### showMiniHp-要点指示
显示此附属内的单位的迷你血条
如果hideHp:true时则此条强制false
#### showMiniHp-演示例子
```ini
[attachment_1]
showMiniHp:true
```
<hr>

### keepAliveWhenParentDies
#### keepAliveWhenParentDies-代码简介
代码:keepAliveWhenParentDies 中文释义:保持子单位存活 类型:布尔值bool 隶属于:附属代码组
#### keepAliveWhenParentDies-要点指示
主体单位死亡后此附属内的单位保持存活
#### keepAliveWhenParentDies-演示例子
```ini
[attachment_1]
keepAliveWhenParentDies:true
```
<hr>

### setDrawLayerOnTop
#### setDrawLayerOnTop-代码简介
代码:setDrawLayerOnTop 中文释义:绘制在顶层 类型:布尔值bool 隶属于:附属代码组
#### setDrawLayerOnTop-要点指示
此附属内的单位绘制在主体单位的顶层
#### setDrawLayerOnTop-演示例子
```ini
[attachment_1]
setDrawLayerOnTop:true
```
<hr>

### setDrawLayerOnBottom
#### setDrawLayerOnBottom-代码简介
代码:setDrawLayerOnBottom 中文释义:绘制在底层 类型:布尔值bool 隶属于:附属代码组
#### setDrawLayerOnBottom-要点指示
此附属内的单位绘制在主体单位的底层
#### setDrawLayerOnBottom-演示例子
```ini
[attachment_1]
setDrawLayerOnBottom:true
```
<hr>

### addTransportedUnits
#### addTransportedUnits-代码简介
代码:addTransportedUnits 中文释义:添加被运输单位 类型:布尔值bool 隶属于:附属代码组
#### addTransportedUnits-要点指示
单位进入运输时，进入附属内
#### addTransportedUnits-演示例子
```ini
[attachment_1]
addTransportedUnits:true
```
<hr>

### lockRotation
#### lockRotation-代码简介
代码:lockRotation 中文释义:锁定旋转 类型:布尔值bool 隶属于:附属代码组
#### lockRotation-要点指示
锁定此附属内的单位的角度，禁止旋转
#### lockRotation-演示例子
```ini
[attachment_1]
lockRotation:true
```
<hr>

### rotateWithParent
#### rotateWithParent-代码简介
代码:rotateWithParent 中文释义:子单位一同旋转 类型:布尔值bool 隶属于:附属代码组
#### rotateWithParent-要点指示
子单位与父单位一起旋转
#### rotateWithParent-演示例子
```ini
[attachment_1]
rotateWithParent:true
```
<hr>

### resetRotationWhenNotAttacking
#### resetRotationWhenNotAttacking-代码简介
代码:resetRotationWhenNotAttacking 中文释义:不攻击时重置角度 类型:布尔值bool 隶属于:附属代码组
#### resetRotationWhenNotAttacking-要点指示
子单位不攻击时旋转回闲置角度
#### resetRotationWhenNotAttacking-演示例子
```ini
[attachment_1]
resetRotationWhenNotAttacking:true
```
<hr>

### deattachIfWantingToMove
#### deattachIfWantingToMove-代码简介
代码:deattachIfWantingToMove 中文释义:移动时脱离 类型:布尔值bool 隶属于:附属代码组
#### deattachIfWantingToMove-要点指示
子单位拥有路径时自动脱离附属
#### deattachIfWantingToMove-演示例子
```ini
[attachment_1]
deattachIfWantingToMove:true
```
<hr>

### prioritizeParentsMainTarget
#### prioritizeParentsMainTarget-代码简介
代码:prioritizeParentsMainTarget 中文释义:优先攻击父单位主要目标 类型:布尔值bool 隶属于:附属代码组
#### prioritizeParentsMainTarget-要点指示
父单位攻击时子单位优先攻击父单位攻击的目标
#### prioritizeParentsMainTarget-演示例子
```ini
[attachment_1]
prioritizeParentsMainTarget:true
```
<hr>

### alwaysAllowedToAttackParentsMainTarget
#### alwaysAllowedToAttackParentsMainTarget-代码简介
代码:alwaysAllowedToAttackParentsMainTarget 中文释义:总是攻击父单位主要目标 类型:布尔值bool 隶属于:附属代码组
#### alwaysAllowedToAttackParentsMainTarget-要点指示
子单位总是跟随攻击父单位攻击的目标
#### alwaysAllowedToAttackParentsMainTarget-演示例子
```ini
[attachment_1]
alwaysAllowedToAttackParentsMainTarget:true
```
<hr>

### onlyAttackParentsMainTarget
#### onlyAttackParentsMainTarget-代码简介
代码:lockRotation 中文释义:只攻击父单位的主要目标 类型:布尔值bool 隶属于:附属代码组
#### onlyAttackParentsMainTarget-要点指示
子单位与父单位攻击目标必定相同
就算子单位攻击范围内有敌人但父单位攻击范围内没有此敌人则子单位无法攻击此敌人
#### onlyAttackParentsMainTarget-演示例子
```ini
[attachment_1]
onlyAttackParentsMainTarget:true
```
<hr>

### onParentTeamChangeKeepCurrentTeam
#### onParentTeamChangeKeepCurrentTeam-代码简介
代码:onParentTeamChangeKeepCurrentTeam 中文释义:改变队伍时子单位保持原队伍 类型:布尔值bool 隶属于:附属代码组
#### onParentTeamChangeKeepCurrentTeam-要点指示
父单位队伍改变时子单位队伍不改变
#### onParentTeamChangeKeepCurrentTeam-演示例子
```ini
[attachment_1]
onParentTeamChangeKeepCurrentTeam:true
```
<hr>

### smoothlyBlendPositionWhenExistingUnitAdded
#### smoothlyBlendPositionWhenExistingUnitAdded-代码简介
代码:smoothlyBlendPositionWhenExistingUnitAdded 中文释义:补充时平滑移动 类型:布尔值bool 隶属于:附属代码组
#### smoothlyBlendPositionWhenExistingUnitAdded-要点指示
补充运输单位至槽位时平滑移动
#### smoothlyBlendPositionWhenExistingUnitAdded-演示例子
```ini
[attachment_1]
smoothlyBlendPositionWhenExistingUnitAdded:true
```
<hr>

### keepWaypointsNeedingMovement
#### keepWaypointsNeedingMovement-代码简介
代码:keepWaypointsNeedingMovement 中文释义:保持需要移动路径点 类型:布尔值bool 隶属于:附属代码组
#### keepWaypointsNeedingMovement-要点指示
默认值为false，为false时队列中任何需要移动才能完成的队列路径点都会被移除
#### keepWaypointsNeedingMovement-演示例子
```ini
[attachment_1]
keepWaypointsNeedingMovement:true
```
<hr>

### showAllActionsFrom
#### showAllActionsFrom-代码简介
代码:showAllActionsFrom 中文释义:显示所有操作来源 类型:逻辑布尔值LogicBoolean 隶属于:附属代码组
#### showAllActionsFrom-要点指示
父单位显示子单位的全部行动
#### showAllActionsFrom-演示例子
```ini
[attachment_1]
showAllActionsFrom:if self.ammo==1
```
<hr>

### createIncompleteIfParentIs
#### createIncompleteIfParentIs-代码简介
代码:createIncompleteIfParentIs 中文释义:创建随父单位 类型:布尔值bool 隶属于:附属代码组
#### createIncompleteIfParentIs-要点指示
父单位创建时子单位同步创建
且子单位建造进度与父单位建造进度相同
#### createIncompleteIfParentIs-演示例子
```ini
[attachment_1]
createIncompleteIfParentIs:true
```
<hr>

### redirectDamageToParent
#### redirectDamageToParent-代码简介
代码:redirectDamageToParent 中文释义:附属受伤转给父单位 类型:布尔值bool 隶属于:附属代码组
#### redirectDamageToParent-要点指示
子单位受伤时将伤害传给父单位
#### redirectDamageToParent-演示例子
```ini
[attachment_1]
redirectDamageToParent:true
```
<hr>
 
### redirectDamageToParent_shieldOnly
#### redirectDamageToParent_shieldOnly-代码简介
代码:redirectDamageToParent_shieldOnly 中文释义:附属受伤转给父单位的护盾 类型:布尔值bool 隶属于:附属代码组
#### redirectDamageToParent_shieldOnly-要点指示
子单位受伤时将伤害传给父单位
如果父单位护盾为空则无法将伤害传给父单位
#### redirectDamageToParent_shieldOnly-演示例子
```ini
[attachment_1]
redirectDamageToParent_shieldOnly:true
```
<hr>

## 第二类-未知代码组

### lockDir
#### lockDir-代码简介
代码:lockDir 中文释义:锁定角度 类型:布尔值bool 隶属于:未知代码组
#### lockDir-要点指示
未知
#### lockDir-演示例子
```ini
[attachment_1]
lockDir:true
```
<hr>

### unloadInCurrentPosition
#### unloadInCurrentPosition-代码简介
代码:lockRotation 中文释义:卸载于此位置 类型:布尔值bool 隶属于:未知代码组
#### unloadInCurrentPosition-要点指示
未知
#### unloadInCurrentPosition-演示例子
```ini
[attachment_1]
unloadInCurrentPosition:true
```
<hr>

### onConvertKeepExistingUnitInSameSlot
#### onConvertKeepExistingUnitInSameSlot-代码简介
代码:onConvertKeepExistingUnitInSameSlot 中文释义:转换时附属仍然在同一槽位中 类型:布尔值bool 隶属于:未知代码组
#### onConvertKeepExistingUnitInSameSlot-要点指示
未知
#### onConvertKeepExistingUnitInSameSlot-演示例子
```ini
[attachment_1]
onConvertKeepExistingUnitInSameSlot:true
```
<hr>
