---
outline: deep
---

# **[decal]组**
## 第一类-贴花代码组

### layer
#### layer-代码简介
代码:layer 中文释义:绘制图层 类型:图层类型layer type 隶属于:贴花代码组
#### layer-要点指示
设置贴花显示类型
#### layer-演示例子
```ini
[decal_name]
layer:beforeUI
```
::: tip
可填入类型

| 类型 | shadow | afterBody | afterBody | onTop | beforeUI | inactive |
|----|--------|-----------|-----------|-------|----------|----------|
| 层级 | 在阴影层   | 在主体层下     | 在主体层上     | 在最顶层  | 在显示层上    | 在行动中     |

:::
<hr>

### order
#### order-代码简介
代码:order 中文释义:图层排序 类型:浮点数float 隶属于:贴花代码组
#### order-要点指示
设置贴花显示排序(默认为0且按照ini内的顺序)
#### order-演示例子
```ini
[decal_name]
order:0
```
<hr>

### onlyWhenSelectedByOwnPlayer
#### onlyWhenSelectedByOwnPlayer-代码简介
代码:onlyWhenSelectedByOwnPlayer 中文释义:仅在被拥有者选中时绘制 类型:布尔值bool 隶属于:贴花代码组
#### onlyWhenSelectedByOwnPlayer-要点指示
只有当玩家查看本单位时才可绘制贴花
#### onlyWhenSelectedByOwnPlayer-演示例子
```ini
[decal_name]
onlyWhenSelectedByOwnPlayer:true
```
<hr>

### onlyWhenSelectedByEnemyPlayer
#### onlyWhenSelectedByEnemyPlayer-代码简介
代码:onlyWhenSelectedByEnemyPlayer 中文释义:被敌方玩家选中时绘制 类型:布尔值bool 隶属于:贴花代码组
#### onlyWhenSelectedByEnemyPlayer-要点指示
被敌方玩家选中时绘制
#### onlyWhenSelectedByEnemyPlayer-演示例子
```ini
[decal_name]
onlyWhenSelectedByEnemyPlayer:true
```
<hr>

### onlyWhenSelectedByAllyNotOwnPlayer
#### onlyWhenSelectedByAllyNotOwnPlayer-代码简介
代码:onlyWhenSelectedByAllyNotOwnPlayer 中文释义:非自身队伍的盟友选中时绘制 类型:布尔值bool 隶属于:贴花代码组
#### onlyWhenSelectedByAllyNotOwnPlayer-要点指示
非自身队伍的盟友选中时绘制
#### onlyWhenSelectedByAllyNotOwnPlayer-演示例子
```ini
[decal_name]
onlyWhenSelectedByAllyNotOwnPlayer:true
```
<hr>

### onlyWhenSelectedByAnyPlayer
#### onlyWhenSelectedByAnyPlayer-代码简介
代码:onlyWhenSelectedByAnyPlayer 中文释义:被任意玩家选中时绘制 类型:布尔值bool 隶属于:贴花代码组
#### onlyWhenSelectedByAnyPlayer-要点指示
在任何玩家选中本单位值绘制贴花
#### onlyWhenSelectedByAnyPlayer-演示例子
```ini
[decal_name]
onlyWhenSelectedByAnyPlayer:true
```
<hr>
### includeParentsSelection
#### includeParentsSelection-代码简介
代码:includeParentsSelection 中文释义:包括被父单位选中 类型:布尔值bool 隶属于:贴花代码组
#### includeParentsSelection-要点指示
仅当选定时，还检查父项选择
#### includeParentsSelection-演示例子
```ini
[decal_name]
includeParentsSelection:true
```
<hr>

### onlyPlayersWithUnitControl
#### onlyPlayersWithUnitControl-代码简介
代码:onlyPlayersWithUnitControl 中文释义:仅在查看者能够控制此单位时绘制 类型:布尔值bool 隶属于:贴花代码组
#### onlyPlayersWithUnitControl-要点指示
仅当观看者可以控制此单元时才绘制贴花
#### onlyPlayersWithUnitControl-演示例子
```ini
[decal_name]
onlyPlayersWithUnitControl:true
```
<hr>

### onlyTeam
#### onlyTeam-代码简介
代码:onlyTeam 中文释义:仅在查看者为特定队伍时显示 类型:队伍关系TeamRelation 隶属于:贴花代码组
#### onlyTeam-要点指示
仅当单位和查看玩家之间的关系时绘制
#### onlyTeam-演示例子
```ini
[decal_name]
onlyTeam:any
```
::: tip

| own | notOwn | neutral | allyNotOwn | ally | enemy | any |
|-----|--------|---------|------------|------|-------|-----|
| 己方  | 非己方    | 中立方     | 除自己外盟友     | 盟友   | 敌方    | 任意  |
:::
<hr>

### onlyWithZoomLevelOrMore
#### onlyWithZoomLevelOrMore-代码简介
代码:onlyWithZoomLevelOrMore 中文释义:仅当缩放到当前大小或更大时绘制 类型:浮点数float 隶属于:贴花代码组
#### onlyWithZoomLevelOrMore-要点指示
屏幕上，建议设置在三维立体体积元素样式单位、小细节或小阴影的贴花上。缩小一点时会隐藏贴花。当许多单元可能需要时，有助于减少性能的调用
#### onlyWithZoomLevelOrMore-演示例子
```ini
[decal_name]
onlyWithZoomLevelOrMore:2.5
```
<hr>

### onlyWhileActive
#### onlyWhileActive-代码简介
代码:onlyWhileActive 中文释义:仅在单位建造完成时绘制 类型:布尔值bool 隶属于:贴花代码组
#### onlyWhileActive-要点指示
仅在单位完成时绘制，比如建造者建造一般的建筑就不算
#### onlyWhileActive-演示例子
```ini
[decal_name]
onlyWhileActive:true
```
<hr>

### onlyOnBodyFrameOf
#### onlyOnBodyFrameOf-代码简介
代码:onlyOnBodyFrameOf 中文释义:只在主体关键帧时绘制 类型:整数int 隶属于:贴花代码组
#### onlyOnBodyFrameOf-要点指示
只有在主体到某个关键帧时绘制
#### onlyOnBodyFrameOf-演示例子
```ini
[decal_name]
onlyOnBodyFrameOf:1
```
<hr>

### onlyWhileAlive
#### onlyWhileAlive-代码简介
代码:onlyWhileAlive 中文释义:仅在存活时绘制 类型:布尔值bool 隶属于:贴花代码组
#### onlyWhileAlive-要点指示
如果图层类型(layer)为beforeUI默认为true,否则false，为ture死后消失
#### onlyWhileAlive-演示例子
```ini
[decal_name]
onlyWhileAlive:true
```
<hr>

### onlyInPreview
#### onlyInPreview-代码简介
代码:onlyInPreview 中文释义:仅在侧边栏和建筑放置预览中显示 类型:布尔值bool 隶属于:贴花代码组
#### onlyInPreview-要点指示
仅在侧边栏中显示，以及建筑布局预
#### onlyInPreview-演示例子
```ini
[decal_name]
onlyInPreview:true
```
<hr>

### onlyOnNonPreview
#### onlyOnNonPreview-代码简介
代码:onlyOnNonPreview 中文释义:仅在非预览中显示(与侧边栏和建筑放置预览相反) 类型:布尔值bool 隶属于:贴花代码组
#### onlyOnNonPreview-要点指示
仅在真实单位上显示，而不是动作侧边栏和建筑放置预览等
#### onlyOnNonPreview-演示例子
```ini
[decal_name]
onlyOnNonPreview:true
```
<hr>

### imageScale
#### imageScale-代码简介
代码:imageScale 中文释义:图像缩放(倍数) 类型:逻辑布尔值LogicFloat 隶属于:贴花代码组
#### imageScale-要点指示
图像缩放(倍数)
#### imageScale-演示例子
```ini
[decal_name]
imageScale:self.hp
```
<hr>

### imageScaleX
#### imageScaleX-代码简介
代码:imageScaleX 中文释义:图像X缩放(倍数) 类型:逻辑布尔值LogicFloat 隶属于:贴花代码组
#### imageScaleX-要点指示
图像缩放(倍数)
#### imageScaleX-演示例子
```ini
[decal_name]
imageScaleX:self.hp
```
<hr>

### imageScaleY
#### imageScaleY-代码简介
代码:imageScaleY 中文释义:图像Y缩放(倍数) 类型:逻辑布尔值LogicFloat 隶属于:贴花代码组
#### imageScaleY-要点指示
图像缩放(倍数)
#### imageScaleY-演示例子
```ini
[decal_name]
imageScaleY:self.hp
```
<hr>

### image
#### image-代码简介
代码:image 中文释义:图像缩放(倍数) 类型:图像file(image) 隶属于:贴花代码组
#### image-要点指示
图像缩放(倍数)
#### image-演示例子
```ini
[decal_name]
image:XXX.png
```
<hr>

### teamColors
#### teamColors-代码简介
代码:teamColors 中文释义:阵营色 类型:布尔值bool 隶属于:贴花代码组
#### teamColors-要点指示
在图像和图像堆栈上启用队伍色
#### teamColors-演示例子
```ini
[decal_name]
teamColors:true
```
<hr>

### imageStack
#### imageStack-代码简介
代码:imageStack 中文释义:图像列表 类型:图像file(image) 隶属于:贴花代码组
#### imageStack-要点指示
推荐用于三维立体体积元素样式单位的图像列表，因为当使用相同的子画面时，可以批量绘制图像。用于3d单位
#### imageStack-演示例子
```ini
[decal_name]
imageStack:XXX.png
```
<hr>

### stack_hOffset
#### stack_hOffset-代码简介
代码:stack_hOffset 中文释义:列表图像高度偏移 类型:整数int 隶属于:贴花代码组
#### stack_hOffset-要点指示
用于三维立体体积元素样式单位
#### stack_hOffset-演示例子
```ini
[decal_name]
stack_hOffset:1
```
<hr>

### stack_frameOffset
#### stack_frameOffset-代码简介
代码:stack_frameOffset 中文释义:列表图像帧偏移 类型:整数int 隶属于:贴花代码组
#### stack_frameOffset-要点指示
用于三维立体体积元素样式单位
#### stack_frameOffset-演示例子
```ini
[decal_name]
stack_frameOffset:2
```
<hr>

### stack_drawInReverseOrder
#### stack_drawInReverseOrder-代码简介
代码:stack_drawInReverseOrder 中文释义:列表图像绘图顺序 类型:整数int 隶属于:贴花代码组
#### stack_drawInReverseOrder-要点指示
列表图像绘图顺序
#### stack_drawInReverseOrder-演示例子
```ini
[decal_name]
stack_drawInReverseOrder:0
```
<hr>

### stack_indexStart
#### stack_indexStart-代码简介
代码:stack_indexStart 中文释义:列表图像起始图像 类型:动态整数logicInteger 隶属于:贴花代码组
#### stack_indexStart-要点指示
图像堆栈的起始图像
#### stack_indexStart-演示例子
```ini
[decal_name]
stack_indexStart:self.x
```
<hr>

### stack_indexCount
#### stack_indexCount-代码简介
代码:stack_indexCount 中文释义:列表图像数量 类型:动态整数logicInteger 隶属于:贴花代码组
#### stack_indexCount-要点指示
要绘制的图像数，可以设置为1以使用堆栈索引开始作为图像选择器
#### stack_indexCount-演示例子
```ini
[decal_name]
stack_indexCount:1
```
<hr>

### total_frames
#### total_frames-代码简介
代码:total_frames 中文释义:总帧数 类型:整数int 隶属于:贴花代码组
#### total_frames-要点指示
总帧数(与 帧宽度/帧高度 选择一个使用)
#### total_frames-演示例子
```ini
[decal_name]
total_frames:1
```
<hr>

### frame_verticalOrdering
#### frame_verticalOrdering-代码简介
代码:frame_verticalOrdering 中文释义:是否列出帧清单 类型:布尔值bool 隶属于:贴花代码组
#### frame_verticalOrdering-要点指示
总帧数(与 帧宽度/帧高度 选择一个使用)
#### frame_verticalOrdering-演示例子
```ini
[decal_name]
frame_verticalOrdering:true
```
<hr>

### frame_width
#### frame_width-代码简介
代码:frame_width 中文释义:帧宽度 类型:整数int 隶属于:贴花代码组
#### frame_width-要点指示
帧宽度
#### frame_width-演示例子
```ini
[decal_name]
frame_width:2
```
<hr>

### frame_height
#### frame_height-代码简介
代码:frame_height 中文释义:总帧数 类型:整数int 隶属于:贴花代码组
#### frame_height-要点指示
帧高度
#### frame_height-演示例子
```ini
[decal_name]
frame_height:2
```
<hr>

### frame
#### frame-代码简介
代码:frame 中文释义:帧 类型:动态整数logicInteger 隶属于:贴花代码组
#### frame-要点指示
可以改变内存来修改第几帧
#### frame-演示例子
```ini
[decal_name]
frame:memory.内存
```
<hr>

### addBodyFrameMultipliedBy
#### addBodyFrameMultipliedBy-代码简介
代码:addBodyFrameMultipliedBy 中文释义:添加主体帧乘数 类型:浮点数float 隶属于:贴花代码组
#### addBodyFrameMultipliedBy-要点指示
添加主体帧乘数
#### addBodyFrameMultipliedBy-演示例子
```ini
[decal_name]
addBodyFrameMultipliedBy:1.2
```
<hr>

### isVisible
#### isVisible-代码简介
代码:isVisible 中文释义:可见 类型:逻辑布尔值LogicBoolean 隶属于:贴花代码组
#### isVisible-要点指示
表明该帖花是否可以被我们看见(可以使用逻辑)
#### isVisible-演示例子
```ini
[decal_name]
isVisible:if self.hp>self.maxHp*0.5
```
<hr>

### xOffsetRelative
#### xOffsetRelative-代码简介
代码:xOffsetRelative 中文释义:X相对偏移 类型:浮点数float 隶属于:贴花代码组
#### xOffsetRelative-要点指示
X相对偏移
#### xOffsetRelative-演示例子
```ini
[decal_name]
xOffsetRelative:200
```
<hr>

### yOffsetRelative
#### yOffsetRelative-代码简介
代码:yOffsetRelative 中文释义:Y相对偏移 类型:浮点数float 隶属于:贴花代码组
#### yOffsetRelative-要点指示
Y相对偏移
#### yOffsetRelative-演示例子
```ini
[decal_name]
yOffsetRelative:200
```
<hr>

### xOffsetAbsolute
#### xOffsetAbsolute-代码简介
代码:xOffsetAbsolute 中文释义:X绝对偏移 类型:动态浮点值LogicFloat 隶属于:贴花代码组
#### xOffsetAbsolute-要点指示
X绝对偏移
#### xOffsetAbsolute-演示例子
```ini
[decal_name]
xOffsetAbsolute:self.hp
```
<hr>

### yOffsetAbsolute
#### yOffsetAbsolute-代码简介
代码:yOffsetAbsolute 中文释义:Y绝对偏移 类型:动态浮点值LogicFloat 隶属于:贴花代码组
#### yOffsetAbsolute-要点指示
Y绝对偏移
#### yOffsetAbsolute-演示例子
```ini
[decal_name]
yOffsetAbsolute:self.hp
```
<hr>

### hOffset
#### hOffset-代码简介
代码:hOffset 中文释义:X绝对偏移 类型:浮点值float 隶属于:贴花代码组
#### hOffset-要点指示
高度偏移
#### hOffset-演示例子
```ini
[decal_name]
hOffset:2
```
<hr>

### dirOffset
#### dirOffset-代码简介
代码:dirOffset 中文释义:X绝对偏移 类型:浮点值float 隶属于:贴花代码组
#### dirOffset-要点指示
朝向角度偏移
#### dirOffset-演示例子
```ini
[decal_name]
dirOffset:45
```
<hr>

### pivotOffset
#### pivotOffset-代码简介
代码:pivotOffset 中文释义:坐标系旋转 类型:浮点值float 隶属于:贴花代码组
#### pivotOffset-要点指示
相当于把单位定位的直角坐标系旋转该角度,然后重新确定xy 只影响X/Y相对偏移,不旋转图像
#### pivotOffset-演示例子
```ini
[decal_name]
pivotOffset:125 (180>X>-180)
```
<hr>

### alwaysStartDirAtZero
#### alwaysStartDirAtZero-代码简介
代码:alwaysStartDirAtZero 中文释义:总是固定角度为零 类型:布尔值bool 隶属于:贴花代码组
#### alwaysStartDirAtZero-要点指示
总是固定角度为零(总是朝上)
#### alwaysStartDirAtZero-演示例子
```ini
[decal_name]
alwaysStartDirAtZero:true
```
<hr>

### basePosition
#### basePosition-代码简介
代码:basePosition 中文释义:中心位置(填单位参考) 类型:单位参考unitRef 隶属于:贴花代码组
#### basePosition-要点指示
作为基础绘制的单位或标记
#### basePosition-演示例子
```ini
[decal_name]
basePosition:nearestUnit
```
<hr>

### basePositionFromLeg
#### basePositionFromLeg-代码简介
代码:basePositionFromLeg 中文释义:以脚为中心位置 类型:腿参考legRef 隶属于:贴花代码组
#### basePositionFromLeg-要点指示
使用 腿 位置而不是单位身体作为基础
#### basePositionFromLeg-演示例子
```ini
[decal_name]
basePositionFromLeg:1
```
<hr>

### basePositionFromTurret
#### basePositionFromTurret-代码简介
代码:basePositionFromTurret 中文释义:以炮塔为中心位置 类型:炮塔参考turretRef 隶属于:贴花代码组
#### basePositionFromTurret-要点指示
使用炮塔位置而不是单元主体作为底座
#### basePositionFromTurret-演示例子
```ini
[decal_name]
basePositionFromTurret:1
```
<hr>

### basePositionFromLegEnd
#### basePositionFromLegEnd-代码简介
代码:basePositionFromLegEnd 中文释义:以腿/脚为中心位置 类型:腿/脚参考leg/armRef 隶属于:贴花代码组
#### basePositionFromLegEnd-要点指示
填腿脚/胳膊节
#### basePositionFromLegEnd-演示例子
```ini
[decal_name]
basePositionFromLegEnd:leg_1
```
<hr>

### drawLineTo
#### drawLineTo-代码简介
代码:drawLineTo 中文释义:绘制线条 类型:单位/标记unit/marker 隶属于:贴花代码组
#### drawLineTo-要点指示
绘制线条到单位参考位置(受到颜色和宽度影响)
#### drawLineTo-演示例子
```ini
[decal_name]
drawLineTo:attacking
```
<hr>

### lineWidth
#### lineWidth-代码简介
代码:lineWidth 中文释义:线宽度 类型:浮点值float 隶属于:贴花代码组
#### lineWidth-要点指示
绘制线条的宽度
#### lineWidth-演示例子
```ini
[decal_name]
lineWidth:2.5
```
<hr>

### image_shadow
#### image_shadow-代码简介
代码:image_shadow 中文释义:阴影图像 类型:图像file(image) 隶属于:贴花代码组
#### image_shadow-要点指示
阴影图像
#### image_shadow-演示例子
```ini
[decal_name]
image_shadow:XXX.png
```
<hr>

### shadowOffsetX
#### shadowOffsetX-代码简介
代码:shadowOffsetX 中文释义:阴影偏移X 类型:浮点值float 隶属于:贴花代码组
#### shadowOffsetX-要点指示
阴影偏移X
#### shadowOffsetX-演示例子
```ini
[decal_name]
shadowOffsetX:1
```
<hr>

### shadowOffsetY
#### shadowOffsetY-代码简介
代码:shadowOffsetY 中文释义:阴影偏移Y 类型:浮点值float 隶属于:贴花代码组
#### shadowOffsetY-要点指示
阴影偏移Y
#### shadowOffsetY-演示例子
```ini
[decal_name]
shadowOffsetY:1
```
<hr>

### color
#### color-代码简介
代码:color 中文释义:颜色 类型:颜色color 隶属于:贴花代码组
#### color-要点指示
影像图像和线条
#### color-演示例子
```ini
[decal_name]
color:#FFFF00
```
<hr>

### alpha
#### alpha-代码简介
代码:alpha 中文释义:透明度 类型:动态浮点值LogicFloat 隶属于:贴花代码组
#### alpha-要点指示
以颜色堆叠透明度 影响图像和线条
#### alpha-演示例子
```ini
[decal_name]
alpha:(self.hp/self.maxHp)
```
<hr>
