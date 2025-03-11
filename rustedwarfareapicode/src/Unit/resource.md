---
outline: deep
---

# **[resource]组**

## 开头-resource的简介和注意事项
resource如名字一样, 一般情况是作为统计玩家的资源而使用(例如金钱, 矿物, 电力等), 
但实际上资源在大部分动态逻辑中都可以使用, 这导致资源实际上更像是一种变量

::: tip
1. 相较于其他代码组, resource并没有强制需要的代码, 但必须要至少有一条代码进行占位, 
否则铁锈战争将不会识别该代码组<br>
2. resource组的格式为`[resource_xxx]`, 请勿直接使用<br>
3. resource分为两类, `resource`和`global-resource`, 为了便于区分, 
本文将称呼它们为`局部resource`和`全局resource`, 如果直接使用`resource`, 将泛指两种resource<br>
:::

## 第一类-通用代码组
:::tip
部分代码只有全局资源可用, 或只有全局资源使用有效果
:::

### displayName
#### displayName-代码简介
代码:displayName 中文释义:显示名称 类型:字符串 隶属于:通用代码组
#### displayName-要点指示
顾名思义, 就是该资源显示给玩家的名称<br>
使用实例:<br>
```ini
[global_resource_power]
displayName: 电力
```
如果不设置的话, 是有默认值的:<br>
1. 如果是全局资源的话
    ```ini
    [global_resource_xxx]
    #当然只是演示一下, 如开头所言, resource组里面没代码是不会被读取的
    ```
    该资源默认名字将为`g_xxx`
2. 如果是局部资源的话
    ```ini
    [resource_xxx]
    #我是一段演示
    ```
   该资源默认名字将为`l_xxx`

### displayNameShort
#### displayNameShort-代码简介
代码:displayNameShort 中文释义:显示短名称 类型:字符串 隶属于:通用代码组
#### displayNameShort-要点指示
在某些UI中, 如果资源名称太长而显示效果不好, 将使用短名称进行替代显示<br>
使用实例:<br>
```ini
[global_resource_power]
displayName: 可复用的可编程的可替换的五彩斑斓的组件
displayNameShort: 组件
```
这样在某些情况下就会只显示组件而不是那一长串了 ~~但正常人谁这么写啊~~

### hidden
#### hidden-代码简介
代码:hidden 中文释义:隐藏 类型:逻辑布尔值 隶属于:通用代码组
#### hidden-要点指示

用于控制这个资源是否展示给玩家<br>
使用实例:<br>
```ini
[global_resource_xxx]
hidden:false
```
:::tip
对于全局资源来说, 将会在屏幕右上角展示这个资源, 
而对于局部资源来说, 因为单位之间局部资源独立, 所以说你只能在单位信息栏里看到它的值, 并且没有图标之类的
:::

### priority
#### priority-代码简介
代码:priority 中文释义:优先级 类型:整形 隶属于:通用代码组
#### priority-要点指示

用于控制不同mod之间相同名字的全局资源会优先使用哪一个的图标, 颜色等信息<br>
使用实例:<br>
```ini
[global_resource_xxx]
priority:1
```

没错铁锈如果多个mod有相同的资源名会只取其中一个, 而不是mod之间独立 ~~, 我是该说luke做的兼容性真好还是luke是懒狗~~

### displayColor
#### displayColor-代码简介
代码:displayColor 中文释义:为零时显示 类型:布尔值 隶属于:通用代码组
#### displayColor-要点指示

用于控制该资源的颜色, 默认就是铁锈内置资金那个颜色<br>
使用实例:<br>
```ini
[global_resource_xxx]
displayColor:#00FFFF
```

### displayRoundedDown
#### displayRoundedDown-代码简介
代码:displayRoundedDown 中文释义:显示为向下取整 类型:字符串 隶属于:通用代码组
#### displayRoundedDown-要点指示

用于控制该资源显示时是否显示小数<br>
使用实例:<br>
```ini
[global_resource_xxx]
displayRoundedDown:true
```

### displayWithRounding
#### displayWithRounding-代码简介
代码:displayWithRounding 中文释义:显示为四舍五入 类型:字符串 隶属于:通用代码组
#### displayWithRounding-要点指示

用于控制该资源显示时是否四舍五入到整数<br>
使用实例:<br>
```ini
[global_resource_xxx]
displayWithRounding:true
```

### displayWhenZero
#### displayWhenZero-代码简介
代码:displayWhenZero 中文释义:为零时显示 类型:布尔值 隶属于:通用代码组
#### displayWhenZero-要点指示

用于控制该资源为0时是否显示<br>
:::tip
这个值默认是false, 所以说如果你写了一个全局资源但屏幕右上角没有显示, 大概率就是这玩意作妖
:::
使用实例:<br>
```ini
[global_resource_xxx]
displayWhenZero:true
```

### iconImageUseInText
#### iconImageUseInText-代码简介
代码:iconImageUseInText 中文释义:文本中资源图标 类型:字符串 隶属于:通用代码组
#### iconImageUseInText-要点指示

用于控制该资源在action的text中展现的图标<br>
使用实例:<br>
```ini
[global_resource_xxx]
iconImageUseInText:nuclear.png
```

### iconImage
#### iconImage-代码简介
代码:iconImage  中文释义:资源图标 类型:字符串 隶属于:通用代码组
#### iconImage-要点指示

用于控制该资源展现的图标<br>
使用实例:<br>
```ini
[global_resource_xxx]
iconImage:nuclear.png
```

### displayNameHideWhenIconShownInText
#### displayNameHideWhenIconShownInText-代码简介
代码:displayNameHideWhenIconShownInText 中文释义:在文本中有图标时隐藏名称 类型:布尔值 隶属于:通用代码组
#### displayNameHideWhenIconShownInText-要点指示

如果为`true`, 则在action中不再显示资源名称, 只显示资源图标, 有助于简化信息<br>
使用实例:<br>
```ini
[global_resource_xxx]
displayName: 可复用的可编程的可替换的五彩斑斓的又是我组件
iconImageUseInText:SHARED:blank.png
displayNameHideWhenIconShownInText:true
```

### displayNameHideWhenIconShownInHUD
#### displayNameHideWhenIconShownInHUD-代码简介
代码:displayNameHideWhenIconShownInHUD 中文释义:在HUD中有图标时隐藏名称 类型:布尔值 隶属于:通用代码组
#### displayNameHideWhenIconShownInHUD-要点指示

如果为`true`, 则在屏幕右上角(全局资源)不再显示资源名称, 只显示资源图标, 有助于简化信息<br>
使用实例:<br>
```ini
[global_resource_xxx]
displayName: 可复用的可编程的可替换的五彩斑斓的还是我组件
iconImageUseInText:SHARED:blank.png
displayNameHideWhenIconShownInHUD:true
```

### displayColorUseInText
#### displayColorUseInText-代码简介
代码:displayColorUseInText 中文释义:文本中显示颜色 类型:字符串 隶属于:通用代码组
#### displayColorUseInText-要点指示

资源在`action`中显示的颜色, 默认和资源颜色相同<br>
使用实例:<br>
```ini
[resource_xxx]
displayColorUseInText:#00FFFF
```

### appendResourceInHUD
#### appendResourceInHUD-代码简介
代码:appendResourceInHUD 中文释义:在HUD中追加资源 类型:字符串 隶属于:通用代码组
#### appendResourceInHUD-要点指示

在该资源后连接显示另一个资源<br>
使用实例:<br>
```ini
[global_resource_a]
appendResourceInHUD:b

[global_resource_b]
hidden:true
```

:::tip
因为只是在a资源后额外显示了b资源, 所以说b资源原本占用的那一行并没有消失, 导致屏幕上将出现两个b资源, 所以说, 隐藏b资源效果更佳
:::

### appendResourceInHUD
#### appendResourceInHUD-代码简介
代码:appendResourceInHUD 中文释义:在HUD中追加资源 类型:字符串 隶属于:通用代码组
#### appendResourceInHUD-要点指示

在该资源后连接显示另一个资源<br>
使用实例:<br>
```ini
[global_resource_a]
appendResourceInHUD:b

[global_resource_b]
hidden:true
```

### displayPrefixInHUD
#### displayPrefixInHUD-代码简介
代码:displayPrefixInHUD 中文释义:在HUD中显示前缀 类型:字符串 隶属于:通用代码组
#### displayPrefixInHUD-要点指示

给该资源显示一个前缀<br>
使用实例:<br>
```ini
[global_resource_a]
displayPrefixInHUD:(
```

:::tip
配合appendResourceInHUD使用可以展现更多效果, 比如<br>
```ini
[global_resource_a]
displayText:人口
appendResourceInHUD:b

[global_resource_b]
hidden:true
displayPrefixInHUD:/
```
这样可以做出一个显示人口上限的效果, 当然只是显示, 具体实现代码需要你自己写
:::

### displayPostfixInHUD
#### displayPostfixInHUD-代码简介
代码:displayPostfixInHUD 中文释义:在HUD中显示后缀 类型:字符串 隶属于:通用代码组
#### displayPostfixInHUD-要点指示

给该资源显示一个后缀<br>
使用实例:<br>
```ini
[global_resource_a]
displayPrefixInHUD:%
```

### displayTextAppendResourceWithGap
#### displayTextAppendResourceWithGap-代码简介
代码:displayTextAppendResourceWithGap 中文释义:在HUD中追加资源时带有间隔 类型:布尔值 隶属于:通用代码组
#### displayTextAppendResourceWithGap-要点指示

追加显示资源时, 如果这个值为true, 将额外增加一个间隔, 可以用于把不相关的资源间隔开<br>
使用实例:<br>
```ini
[global_resource_a]
appendResourceInHUD:b
displayTextAppendResourceWithGap:true

[global_resource_b]
hidden:true
```

### appendResourceInHUD_whenThisZero
#### appendResourceInHUD_whenThisZero-代码简介
代码:appendResourceInHUD_whenThisZero 中文释义:在HUD中追加资源时为零显示 类型:布尔值 隶属于:通用代码组
#### appendResourceInHUD_whenThisZero-要点指示

默认为true, 如果为false, 则在该资源为0时不显示后续追加的资源<br>
使用实例:<br>
```ini
[global_resource_a]
appendResourceInHUD:b
appendResourceInHUD_whenThisZero:false

[global_resource_b]
hidden:true
```

### includeInStats
#### includeInStats-代码简介
代码:includeInStats 中文释义:统计包含 类型:布尔值 隶属于:通用代码组
#### includeInStats-要点指示

用于是否在游戏结束后的统计中包含此资源 ~~, 这样打mod的时候就知道哪个队友摸鱼了~~<br>
使用实例:<br>
```ini
[global_resource_xxx]
includeInStats:true
```

### valueInStats
#### valueInStats-代码简介
代码:valueInStats 中文释义:统计比重 类型:浮点 隶属于:通用代码组
#### valueInStats-要点指示

用于游戏结束后该资源在统计中相较于原版资源的比重, 比如, 你有一个资源获取比较困难, 可以将这个值设置的更高一些<br>
使用实例:<br>
```ini
[global_resource_xxx]
valueInStats:10
```

### displayDigitGrouping
#### displayDigitGrouping-代码简介
代码:displayDigitGrouping 中文释义:数字显示分组 类型:none/comma/space 隶属于:通用代码组
#### displayDigitGrouping-要点指示

决定该资源每三位之间用什么符号间隔开<br>
:::tip
以10000举例, 这是效果<br>
none: 10000<br>
comma: 10,000<br>
space: 10 000<br>
:::
使用实例:<br>
```ini
[global_resource_xxx]
valueInStats:sapce
```

### displayPos
#### displayPos-代码简介
代码:displayPos 中文释义:显示位置 类型:浮点 隶属于:通用代码组
#### displayPos-要点指示

用于决定该资源排列顺序, 数字越小越靠上<br>
使用实例:<br>
```ini
[global_resource_xxx]
displayPos:1
```

### displayTextPrefix
同[displayPrefixInHUD](#displayprefixinhud)

### displayTextPostfix
同[displayPostfixInHUD](#displaypostfixinhud)

## 未知代码
:::warning
该代码为未知效果, 或者不可用代码, 除非测试, 一般情况不推荐使用
:::

### displayInHud

### stackHorizontal