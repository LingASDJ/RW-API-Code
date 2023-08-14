---
outline: deep
---

# **[graphics]图像组**

### image
#### image-代码简介
代码:image 中文释义:图像 类型:字符型
::: danger
如果需要隐藏单位的图像请使用空白透明的图像替代。<br>
请勿直接忽略此项，会直接报错导致此单位代码无法加载，从而报错。
:::
::: warning
铁锈战争支持多种图片格式，如：jpg,png,bmp...等，但也有一部分的格式并不支持，如webp这种的。<br>
尽量使用png格式的图片也许不失为一个好的选择。
:::

#### image-用法
填写图片文件或图片文件的路径，图片文件将作为单位的主体图像。

::: tip
路径可使用相对路径或绝对路径。<br>
绝对路径中的根目录是以模组包内的首层目录为根目录的。<br>
相对路径则是以ini代码文件的目录为起始目录。<br>
图片和代码在同一目录下直接填写路径的用法相当于使用了相对路径。<br>
此方法基本适用于[graphics]组内所有需要引用图像文件的地方。
:::

#### image-示例
```ini
[graphics]
image: ROOT:\124\255\tank.png # 绝对路径

[graphics]
image: \124\255\tank.png # 相对路径

```

### image_back
#### image_back-代码简介
代码:image_back 中文释义:背景图像 类型:字符型

#### image_back-用法
填写图片文件或图片文件的路径，图片文件将作为单位的背景图像。

::: tip
在单位后面后面绘制的图像，不随单位转动。<br>
如无需要可以选择不填，可以作为单位角标和工厂底图使用。
:::

#### image_back-示例
```ini
[graphics]
image_back: ROOT:\124\255\background.png # 绝对路径

[graphics]
image_back: \124\255\background.png # 相对路径
```

### image_wreak
#### image_wreak-代码简介
代码:image_wreak 中文释义:死亡图像 类型:字符型

#### image_wreak-用法
填写图片文件或图片文件的路径，图片文件将作为单位的死亡图像。

::: tip
作为在单位后面死亡后绘制的图像。<br>
不填写此项不会影响代码的运行，同时可以使用NONE作为路径名将表示没有任何图像。
:::

::: info
如果不填死亡图像，默认将以单位的主体图像作为死亡图像使用。
:::

#### image_wreak-示例
```ini
[graphics]
image_wreak: ROOT:\124\255\image_wreak.png # 绝对路径

[graphics]
image_wreak: \124\255\image_wreak.png # 相对路径

[graphics]
image_wreak: NONE
```

### image_shield
#### image_shield-代码简介
代码:image_shield 中文释义:护盾图像 类型:字符型

#### image_shield-用法
填写图片文件或图片文件的路径，图片文件将作为单位的护盾图像。

::: tip
作为在单位的护盾所绘制的图像。<br>
本项仅作为自定义护盾图像使用，如设置护盾且未填此项时将使用默认护盾。<br>
不填写此项不会影响代码的运行，同时可以使用NONE作为路径名将表示没有任何图像。
:::

#### image_shield-示例
```ini
[graphics]
image_shield: ROOT:\124\255\image_shield.png # 绝对路径

[graphics]
image_shield: \124\255\image_shield.png # 相对路径

[graphics]
image_shield: NONE
```

### image_offsetX
#### image_offsetX-代码简介
代码:image_offsetX 中文释义:图像X轴偏移 类型:整数

#### image_offsetX-用法
作用于主体图像，填写的数值会作为偏移的像素大小，可以为负。

::: tip
偏移的方向依据X的数值而定。<br>
X轴以单位中心点为坐标，X增大则图像向右偏移。
:::

#### image_offsetX-示例
```ini
[graphics]
image_offsetX:1 # 偏移量为 1

```

### image_offsetY
#### image_offsetY-代码简介
代码:image_offsetY 中文释义:图像Y轴偏移 类型:整数

#### image_offsetY-用法
作用于主体图像，填写的数值会作为偏移的像素大小，可以为负。

::: tip
偏移的方向依据Y的数值而定。<br>
X轴以单位中心点为坐标，Y增大则图像向下偏移。
:::

#### image_offsetY-示例
```ini
[graphics]
image_offsetY:1 # 偏移量为 1

```

### isVisible
#### isVisible-代码简介
代码:isVisible 中文释义:可见 类型:逻辑布尔值

#### isVisible-用法
填写布尔值或逻辑判断语句，作用于全部图像，会决定单位图像是否可见。

::: info
默认值为true。<br>
即使图像隐藏，在小地图上还是可以看见的。
:::

#### isVisible-示例
```ini
[graphics]
isVisible:false # 使用布尔值

[graphics]
isVisible:if self.hp() > 200 # 使用逻辑语句

```

### isVisibleToEnemies
#### isVisibleToEnemies-代码简介
代码:isVisibleToEnemies 中文释义:对敌人可见 类型:逻辑布尔值

#### isVisibleToEnemies-用法
填写布尔值或逻辑判断语句，作用于全部图像，会决定单位图像是否被敌人可见。

::: info
与showOnMinimapToEnemies,canOnlyBeAttackedByUnitsWithTags一起使用时，可以创建隐形系统。<br>
（抄自HX代码表）
:::

#### isVisibleToEnemies-示例
```ini
[graphics]
isVisibleToEnemies:false # 使用布尔值

[graphics]
isVisibleToEnemies:if self.hp() > 200 # 使用逻辑语句

```

### teamColorsUseHue
#### teamColorsUseHue-代码简介
代码:teamColorsUseHue 中文释义:阵营色色相 类型:布尔值

#### teamColorsUseHue-用法
填写布尔值决定如何使用，大概就是在单位主体图像上附着一层半透明的阵营色滤镜。

::: info
默认为false。 
:::

#### teamColorsUseHue-示例
```ini
[graphics]
teamColorsUseHue:true # 使用布尔值

```

### teamColoringMode
#### teamColoringMode-代码简介
代码:teamColoringMode 中文释义:阵营色模式 类型:字符串

#### teamColorsUseHue-用法
填写对应的字符串选择图像的着色逻辑。

::: tip
默认是纯绿，即pureGreen。<br>
一共有disabled、hueShift、hueAdd、pureGreen，四种模式。<br>
中文便是，禁用，色相偏移，色相添加，纯绿。
:::

#### teamColoringMode-示例
```ini
[graphics]
teamColoringMode:disabled # 禁用 会使单位不使用阵营色

[graphics]
teamColoringMode:hueShift # 色相偏移 颜色会影响周围其他像素的着色

[graphics]
teamColoringMode:hueShift # 色相添加 像极了使用teamColorsUseHue，加了一层颜色滤镜

[graphics]
teamColoringMode:pureGreen # 纯绿 默认就是这个

```

### scaleImagesTo
#### scaleImagesTo-代码简介
代码:scaleImagesTo 中文释义:图像缩放到 类型:浮点数

#### scaleImagesTo-用法
填写单位像素以缩放图像，同时影响腿部和阴影图像。

::: tip
这里的像素大小指的是每帧图像宽度的像素大小。<br>
例如图像原每帧宽度12，这里填24，图像将被等比例放大2倍。
:::

#### scaleImagesTo-示例
```ini
[graphics]
scaleImagesTo:12.5

```

### imageScale
#### imageScale-代码简介
代码:imageScale 中文释义:图像缩放比例 类型:浮点数

#### imageScale-用法
填写需要缩放的百分比，缩放单位主体图像的大小。

::: tip
效果基本与scaleImagesTo相同，但百分比更为直观。<br>
默认值为1，也就是100%。
:::

#### imageScale-示例
```ini
[graphics]
imageScale:12.5

```

### drawLayer
#### drawLayer-代码简介
代码:drawLayer 中文释义:绘制图层 类型:字符串

#### drawLayer-用法
填写希望图像所在的图层，以影响单位图像的绘制。

::: tip
官方给出了8种可填写的图层样式，具体可见示例。<br>
陆上单位默认图层便是ground或ground2，运输船这类便是ground2。
:::

#### drawLayer-示例
```ini
[graphics]
drawLayer:ground

[graphics]
drawLayer:ground2

[graphics]
drawLayer:wreaks

[graphics]
drawLayer:underwater

[graphics]
drawLayer:bottom

[graphics]
drawLayer:experimentals

[graphics]
drawLayer:air

[graphics]
drawLayer:top

```

### whenBeingBuiltMakeTransparentTill
#### whenBeingBuiltMakeTransparentTill-代码简介
代码:whenBeingBuiltMakeTransparentTill 中文释义:建造时透明度 类型:浮点数

#### whenBeingBuiltMakeTransparentTill-用法
填写0-1之间的小数，以影响建造时的透明度情况。

::: tip
若设为0则表示透明度为0，建造一开始就不透明。<br>
设为1则将完全建造时才会不透明。<br>
所谓透明到不透明，也就是从虚影到实体的转变。
:::

::: info
0-1可以理解为0%和100%，取超过100%的数字不会报错但也并没有什么意义。
::: 

#### whenBeingBuiltMakeTransparentTill-示例
```ini
[graphics]
whenBeingBuiltMakeTransparentTill:0

[graphics]
whenBeingBuiltMakeTransparentTill:0.5

[graphics]
whenBeingBuiltMakeTransparentTill:1

```

### icon_zoomed_out
#### icon_zoomed_out-代码简介
代码:icon_zoomed_out 中文释义:缩放图标 类型:字符串

#### icon_zoomed_out-用法
填写缩放图标的文件路径，改变单位缩放时显示的图标。

::: tip
路径引用规则和文件格式与image相同。<br>
默认图标将根据运动类型或单位类型使用内置的图标。
:::

::: info
绘制图标时请注意图标的大小。<br>
具体可以参考默认图标。<br>
资源文件在游戏根目录\res\drawable\中，安卓安装包同理。
:::

#### icon_zoomed_out-示例
```ini
[graphics]
icon_zoomed_out:mytubiao.png

[graphics]
icon_zoomed_out:tank_icon.png

```


### icon_zoomed_out_neverShow
#### icon_zoomed_out_neverShow-代码简介
代码:icon_zoomed_out_neverShow 中文释义:缩放图标不显示 类型:布尔值

#### icon_zoomed_out_neverShow-用法
填写布尔值决定缩放图标是否显示。

::: info
默认为false。
:::

#### icon_zoomed_out_neverShow-示例
```ini
[graphics]
icon_zoomed_out_neverShow:false

[graphics]
icon_zoomed_out_neverShow:true

```

### icon_zoomed_out_neverShow
#### icon_zoomed_out_neverShow-代码简介
代码:icon_zoomed_out_neverShow 中文释义:缩放图标不显示 类型:布尔值

#### icon_zoomed_out_neverShow-用法
填写布尔值决定缩放图标是否显示。

::: info
默认为false。
:::

#### icon_zoomed_out_neverShow-示例
```ini
[graphics]
icon_zoomed_out_neverShow:false

[graphics]
icon_zoomed_out_neverShow:true

```

### showSelectionIndicator
#### showSelectionIndicator-代码简介
代码:showSelectionIndicator 中文释义:显示选择指示 类型:布尔值

#### showSelectionIndicator-用法
填写布尔值决定选择框是否显示。

::: info
默认为true。
:::

#### showSelectionIndicator-示例
```ini
[graphics]
showSelectionIndicator:false

[graphics]
showSelectionIndicator:true

```

### image_offsetH
#### image_offsetH-代码简介
代码:image_offsetH 中文释义:高度绘制偏移 类型:浮点数

#### image_offsetH-用法
填写浮点数决定高度的偏移大小。

::: info
默认为true。
:::

#### image_offsetH-示例
```ini
[graphics]
image_offsetH:1

[graphics]
image_offsetH:1.2
```


### image_turret
#### image_turret-代码简介
代码:image_turret 中文释义:炮塔图像 类型:字符串

#### image_turret-用法
填写图像路径，用于给炮塔设置图像文件，也可以在每个炮塔上单独设置。

::: info
设置的炮塔图像会默认应用于所有未设置图像的炮塔上。
:::

#### image_turret-示例
```ini
[graphics]
image_turret:ROOT:\124\255\image_shield.png # 绝对路径

[graphics]
image_turret:\124\255\image_shield.png # 相对路径

```

### turretImageScale
#### turretImageScale-代码简介
代码:turretImageScale 中文释义:炮塔图像比例 类型:浮点数

#### turretImageScale-用法
填写百分比以缩放图像，仅影响炮塔。

::: info
和imageScale用法一致。
:::

#### turretImageScale-示例
```ini
[graphics]
turretImageScale:0.1

[graphics]
turretImageScale:2

```

### scaleTurretImagesTo
#### scaleTurretImagesTo-代码简介
代码:scaleTurretImagesTo 中文释义:将炮塔图像缩放到  类型:浮点数

#### scaleTurretImagesTo-用法
填写像素将炮塔图像大小缩放到指定像素。

::: info
仅用填写宽度。
:::

#### scaleTurretImagesTo-示例
```ini
[graphics]
scaleTurretImagesTo:11.2

[graphics]
scaleTurretImagesTo:33

```

### teamColorsOnTurret
#### teamColorsOnTurret-代码简介
代码:teamColorsOnTurret 中文释义:炮塔图像使用阵营色 类型:布尔值

#### teamColorsOnTurret-用法
填写布尔值决定炮塔图像是否使用阵营色。

::: info
默认为false。
:::

#### teamColorsOnTurret-示例
```ini
[graphics]
teamColorsOnTurret:true 

[graphics]
teamColorsOnTurret:false 

```

### lock_body_rotation_with_main_turret
#### lock_body_rotation_with_main_turret-代码简介
代码:lock_body_rotation_with_main_turret 中文释义:锁定主体旋转随主炮塔 类型:布尔值

#### lock_body_rotation_with_main_turret-用法
填写布尔值决定锁定主体图像是否旋转追随主炮塔图像。

#### lock_body_rotation_with_main_turret-示例
```ini
[graphics]
lock_body_rotation_with_main_turret:true 

[graphics]
lock_body_rotation_with_main_turret:false 

```

### lock_leg_rotation_with_main_turret
#### lock_leg_rotation_with_main_turret-代码简介
代码:lock_leg_rotation_with_main_turret 中文释义:锁定腿脚旋转随主炮塔 类型:布尔值

#### lock_leg_rotation_with_main_turret-用法
填写布尔值决定锁定腿脚图像是否旋转追随主炮塔图像。

#### lock_leg_rotation_with_main_turret-示例
```ini
[graphics]
lock_leg_rotation_with_main_turret:true 

[graphics]
lock_leg_rotation_with_main_turret:false 

```

### image_shadow
#### image_shadow-代码简介
代码:image_shadow 中文释义:阴影图像 类型:字符串

#### image_shadow-用法
填写填NONE或AUTO,或图像文件的路径，决定该单位使用哪种阴影图像。

#### image_shadow-示例
```ini
[graphics]
image_shadow:NONE #不使用阴影图像

[graphics]
image_shadow:AUTO #使用自动生成的阴影图像

[graphics]
image_shadow:./shadow/shadowA.png #使用自定义的阴影图像

```

### shadowOffsetX
#### shadowOffsetX-代码简介
代码:shadowOffsetX 中文释义:阴影图像偏移X轴 类型:浮点数

#### shadowOffsetX-用法
作用于阴影图像，填写的数值会作为偏移的像素大小，可以为负。

::: tip
偏移的方向依据X的数值而定。<br>
X轴以阴影图像中心点为坐标，X增大则图像向右偏移。
:::

#### shadowOffsetX-示例
```ini
[graphics]
shadowOffsetX:14

[graphics]
shadowOffsetX:-14.5

```

### shadowOffsetY
#### shadowOffsetY-代码简介
代码:shadowOffsetY 中文释义:阴影图像偏移Y轴 类型:浮点数

#### shadowOffsetY-用法
作用于阴影图像，填写的数值会作为偏移的像素大小，可以为负。

::: tip
偏移的方向依据Y的数值而定。<br>
Y轴以阴影图像中心点为坐标，Y增大则图像向右偏移。
:::

#### shadowOffsetY-示例
```ini
[graphics]
shadowOffsetY:14

[graphics]
shadowOffsetY:-14.5

```

### image_shadow_frames
#### image_shadow_frames-代码简介
代码:image_shadow_frames 中文释义:阴影图像指定 类型:布尔值

#### image_shadow_frames-用法
填写布尔值，决定阴影是否随单位移动而改变方向。

::: info
填写为true则不改变。
:::

#### image_shadow_frames-示例
```ini
[graphics]
image_shadow_frames:true

[graphics]
image_shadow_frames:false

```

### lock_shadow_rotation_with_main_turret
#### lock_shadow_rotation_with_main_turret-代码简介
代码:lock_shadow_rotation_with_main_turret 中文释义:阴影锁定为主炮塔方向 类型:布尔值

#### lock_shadow_rotation_with_main_turret-用法
填写布尔值，决定是否将身体图像阴影锁定到主炮塔的方向。

::: info
填写为true则锁定。
:::

#### lock_shadow_rotation_with_main_turret-示例
```ini
[graphics]
lock_shadow_rotation_with_main_turret:true

[graphics]
lock_shadow_rotation_with_main_turret:false

```

### total_frames
#### total_frames-代码简介
代码:total_frames 中文释义:图像帧数 类型:正整数

#### total_frames-用法
填写数字，将图像分割为指定份数，用于动画。

::: info
默认值为1，第一帧编号为0。
:::

#### total_frames-示例
```ini
[graphics]
total_frames:5

[graphics]
total_frames:3

```

### frame_width
#### frame_width-代码简介
代码:frame_width 中文释义:图像宽度 类型:正整数

#### frame_width-用法
填写像素大小，作为图像的帧宽度。将自动根据图像的帧宽度将图像分割为不同的帧，并覆盖总帧数。

#### frame_width-示例
```ini
[graphics]
frame_width:23

[graphics]
frame_width:23

```

### frame_height
#### frame_height-代码简介
代码:frame_height 中文释义:图像高度 类型:正整数

#### frame_height-用法
填写像素大小，作为图像帧的高度。

::: info
默认为图像的高度。
:::

#### frame_height-示例
```ini
[graphics]
frame_height:23

[graphics]
frame_height:23

```

### splastEffect
#### splastEffect-代码简介
代码:splastEffect 中文释义:水波效果 类型:布尔值

#### splastEffect-用法
填写布尔值，决定在水上时是否创建水波效果。

::: info
效果为内置的，默认为false。
:::

#### splastEffect-示例
```ini
[graphics]
splastEffect:true

[graphics]
splastEffect:false

```

### dustEffect
#### dustEffect-代码简介
代码:dustEffect 中文释义:灰尘效果 类型:布尔值

#### dustEffect-用法
填写布尔值，决定在水上时是否创建灰尘效果。

::: info
效果为内置的，默认为false。
:::

#### dustEffect-示例
```ini
[graphics]
dustEffect:true

[graphics]
dustEffect:false

```

### splastEffectReverse
#### splastEffectReverse-代码简介
代码:splastEffectReverse 中文释义:逆向水波效果 类型:布尔值

#### splastEffectReverse-用法
填写布尔值，决定在水上时倒车时是否产生水波效果。

::: info
效果为内置的，默认为false。
:::

#### splastEffectReverse-示例
```ini
[graphics]
splastEffectReverse:true

[graphics]
splastEffectReverse:false

```

### dustEffectReverse
#### dustEffectReverse-代码简介
代码:dustEffectReverse 中文释义:逆向灰尘效果 类型:布尔值

#### dustEffectReverse-用法
填写布尔值，决定在水上时倒车时是否产生灰尘效果。

::: info
效果为内置的，默认为false。
:::

#### dustEffectReverse-示例
```ini
[graphics]
dustEffectReverse:true

[graphics]
dustEffectReverse:false

```
