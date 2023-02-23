

# 
# Page 1
<!-- tabs:start -->

## **[core]组**
!> 以下的代码为`通用代码`,多半是必要的代码，如果不包括这些，可能在`绝大多数情况下导致错误`。
### name
#### name-代码简介
?> 代码:name 中文释义:名字 类型:字符型 隶属于:通用代码组
#### name-要点指示
!> name代码的要点指示：  
定义单位原始名称，可以是中文。  
游戏使用它区分其它单位。如果没有在`displayText或者语言文件设置显示名称`，那么它也将作为单位的显示名称。  
<br>
具体描述文件位置(内部):    
1.assets/translationsStrings_zh.properties 
格式:units.单位名称.name=写单位显示的名称   
units.单位名称.description= [[填单位显示的描述]]    
<br>
ini文件的单独定义(外部-推荐):  
2.displayText: 单位的标题  
&nbsp;&nbsp;&nbsp;displayDescription: -单位的描述  
<br>

特别提醒:`displayText支持本地化`，例如如果要写一个`多语言的单位描述`，可以通过以下例子：

#### name-演示例子

```ini
演示例子
[core]
name: Ling
displayText: English Title Text
displayText_zh:中文标题

displayDescription: -English Description
displayDescription_zh:-中文描述

```

### price
#### price-代码简介
?> 代码:price 中文释义:价格 类型:整数 隶属于:通用代码组
#### price-要点指示
!> price代码要点指示:
定义单位的价格，显示在单位信息中，建造时也以此价格为准。

默认情况下，price只需要填写一个整数，此时使用的是游戏内自带的资金credit；
想要更改资源类型，可以使用 `price:资源1=数值1,资源2=数值2,...` 的格式（前提是此资源要在使用的单位进行定义）。
#### price-演示例子
```ini
[core]
price:120,石油=80,铁=60
```

### radius
#### radius-代码简介
?> 代码:radius 中文释义:半径 类型:整数 隶属于:通用代码组
#### radius-要点指示
!> radius代码要点指示:
半径定义单位的`实际碰撞体积和显示范围`，在未设置`选择框大小`时，半径决定是单位选择框的大小。
半径的单位是像素(px)。
#### radius-演示例子
```ini
[core]
radius:20
```

### mass
#### mass-代码简介
?> 代码:mass 中文释义:质量 类型:整数 隶属于:通用代码组
#### mass-要点指示
!> mass代码要点指示:
质量决定单位在各种碰撞时的效果。`质量越大，其他单位越难推动`。
#### mass-演示例子
```ini
[core]
mass:2000
```

### maxHp
#### maxHp-代码简介
?> 代码:maxHp 中文释义:最大生命值 类型:整数 隶属于:通用代码组
#### maxHp-要点指示
!> maxHp代码要点指示:
最大生命值定义单位在不修改它时最多能够有多少血量，单位默认生成时即是这个血量。
maxHp可以通过`单位参考.maxHp()`来获取，也可以通过`[action]setUnitStatus`进行修改。
#### maxHp-演示例子
```ini
[core]
maxHp:600
```

### altNames
### altNames-代码简介
?> 代码:altNames 中文释义:别名 类型:字符型 隶属于:通用代码组
### altNames-要点指示
!> altNames代码要点指示:
主要在`启用多个自定义Mod`进行优先级定义
以逗号分隔的名称列表。像`名称一样，但优先级较低`，对于`启用多个自定义mod`有用。
### altNames-演示例子:
```ini
[core]
altNames:ling,tobby3600,coldmint
```

# **[canBuild_Name]组**

# **[graphics]组**

## **折叠该页**
该页已被折叠，点击其他选项卡可以再次展开。


<!-- tabs:end -->
# Page 2
<!-- tabs:start -->
# **[attack]组**

# **[turret_Name]组**

# **[projectile_Name]组**
## **折叠该页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->
# Page 3
<!-- tabs:start -->
# **[movement]组**

# **[ai]组**

# **[leg_#]/[arm_#]集合组**
## **折叠该页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->
# Page 4
<!-- tabs:start -->
# **[attachment_Name]组**

# **[effect_Name]组**

# **[animation_Name]组**
## **折叠该页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->
# Page 5
<!-- tabs:start -->
# **[action_Name]/[hiddenAction_Name]集合组**

# **[spawn unit] 刷兵序列组**

# **[placementRule_Name] 放置规则组**
## **折叠该页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->
# Page 6
<!-- tabs:start -->
# **[LogicBoolean] 逻辑序列组**

# **[Prices/Resources] 价格/资源序列组**

# **[global_resource_Name] 全局资源组**
## **折叠该页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->
# Page 7
<!-- tabs:start -->

# **[resource_Name] 局部资源组**

# **[template_Name] 模板组**

# **[comment_Name] 注解组**

## **折叠该页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->

# Page 8
<!-- tabs:start -->



# **[decal_Name] 贴花组**

# **[Dex-Code] 源码Dex扩展组**

# **[hidden-code] 隐藏代码扩展组**

## **折叠该页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->