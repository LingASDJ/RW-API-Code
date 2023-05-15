---
outline: deep
---

# **[graphics]图像组**

### image
#### image-代码简介
代码:image 中文释义:图像 类型:字符型
::: danger
如果需要隐藏单位的图像请使用空白透明的图像替代。<br>
请勿直接忽略此项，会直接报错导致此单位代码无法加载。
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
