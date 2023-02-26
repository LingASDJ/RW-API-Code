

# 

# Page 1
<!-- tabs:start -->

## **[core]组**
!> 以下的代码为`通用代码`,多半是必要的代码，如果不包括这些，可能在`绝大多数情况下导致错误`。
### name
#### name-代码简介
?> 代码:name 中文释义:名字 类型:字符型 隶属于:通用代码组
#### name-要点指示

> [!NOTE] name代码的要点指示：  

<!-- chat:start -->
#### **JDSALing**
定义单位原始名称，可以是中文。<br>
游戏使用它区分其它单位。<br>
如果没有在[displayText或者语言文件设置显示名称]，<br>
那么它也将作为单位的显示名称。  <br>
具体描述文件位置(内部):    <br>
1.assets/translationsStrings_zh.properties <br>
格式:units.单位名称.name=写单位显示的名称   <br>
units.单位名称.description= [[填单位显示的描述]]   <br> 
#### **tobby3600**

ini文件的单独定义(外部-推荐):  <br>
2.displayText: 单位的标题  <br>
&nbsp;&nbsp;&nbsp;displayDescription: -单位的描述  <br>

<!-- chat:end -->

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
<!-- chat:start -->
#### **tobby3600**
默认情况下，price只需要填写一个整数，此时使用的是游戏内自带的资金credit；
想要更改资源类型，可以使用 `price:资源1=数值1,资源2=数值2,...` 的格式（前提是此资源要在使用的单位进行定义）。
<!-- chat:end -->

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

<!-- chat:start -->
#### **tobby3600**
最大生命值定义单位在不修改它时最多能够有多少血量，单位默认生成时即是这个血量。<br>
maxHp可以通过<font color=orange>单位参考.maxHp()</font>来获取，也可以通过<font color=orange>[action]setUnitStatus</font>进行修改。

<!-- chat:end -->

#### maxHp-演示例子
```ini
[core]
maxHp:600
```

### altNames
#### altNames-代码简介
?> 代码:altNames 中文释义:别名 类型:字符型 隶属于:通用代码组
#### altNames-要点指示

!> altNames代码要点指示:
<!-- chat:start -->
#### **JDSALing**
主要在<font color=orange>启用多个自定义Mod</font>进行优先级定义<br>
以逗号分隔的名称列表。像<font color=orange>名称一样，但优先级较低</font>，对于<font color=orange>启用多个自定义mod</font>有用。
<!-- chat:end -->

#### altNames-演示例子:
```ini
[core]
altNames:ling,tobby3600,coldmint
```
### class
#### class-代码简介

?> 代码:class 中文释义:类 类型:字符型 隶属于:通用代码组

> [!ATTENTION] 无实际用处，可以删除。<br>
Luke：保留供将来使用，默认情况下必须为CustomUnitMetadata。由于该代码无实际用途，可以忽略该代码<br>
该代码后面什么都可以输，但没有实际用途。或许在未来会有用。

#### class-演示例子:
```ini
[core]
class:CustomUnitMetadata
```

### strictLevel
#### strictLevel-代码简介

?> 代码:strictLevel 中文释义:严格级别 类型:数字固定型 隶属于:通用代码组

> [!TIP] 建议添加到"all-units.template"以应用于所有单位,进行统一查错。<br>
默认值为0，忽略代码重复。设为1时如果当前单位内有重复代码，则报错。

#### strictLevel-演示例子:
```all-units.template & ini
[core]
strictLevel:1
```

### techLevel
#### techLevel-代码简介:
?> 代码:techLevel 中文释义:科技等级 类型:数字固定型 隶属于:通用代码组

> [!TIP] 早期是用于在<font color=orange>builtFrom</font>的代码,并结合科技等级使用。如果工厂的等级低于单位的目标科技等级，则会在工厂里面隐藏该单位。<br>自铁锈1.09后出现<font color=orange>overrideAndReplace</font>后，该方法则不建议使用。有关于新策略，请参考<font color=orange>overrideAndReplace</font>代码文档指南。<br>
设置单位的科技等级，共有3个级别，1级GUI显示为绿色，2、3级显示为黄色。超过3报错。

#### techLevel-演示例子:
```ini
[core]
techLevel:2
```

### buildSpeed
#### buildSpeed-代码简介

?> 代码:buildSpeed 中文释义:建造速度 类型:浮点/秒型 隶属于:通用代码组

> [!TIP] 建造此单位需要的时间，填秒。<br>
以前的计算方式为：此处所填时间=1÷(60x你需要的秒)如果定义了工厂速率则需要乘以建造乘数。

#### buildSpeed-演示例子:
```ini
[core]
buildSpeed:30s
#或者：
## 下方可能有误差
buildSpeed:0.0006
```

### isBio
#### isBio-代码简介

?> 代码:xxxx 中文释义:xxxx 类型:xxxx 隶属于:xxxx

> [!TIP] xxxxxx

```ini
xxxx
```

## **[canBuild_Name]组**

## **[graphics]组**

### image
#### image-代码简介
?> 代码:image 中文释义:主体图像 类型:文件(图像文件) 隶属于:通用代码组
#### image-要点指示
!> image代码要点指示:
<!-- chat:start -->
#### **tobby3600**
主体图像定义单位的图像。<br>
在不进行额外修改的情况下，主体图像会显示在<font color=orange>单位</font>、<font color=orange>单位列表</font>、<font color=orange>单位信息</font>处。
#### **JDSALing**
填写的值可以包含路径，若只包含文件名，则会在和当前ini相同文件夹内寻找图片文件。<br>
可以通过<font color=orange>`ROOT:路径\文件`</font>的形式来访问在模组目录下的任何文件。
#### **tobby3600**
上述方法还可以在路径中添加`..`来访问外部文件
<!-- chat:end -->

#### image-演示例子
```ini
[graphics]
image:main.png
```

### image_wreak
#### image_wreak-代码简介
?> 代码:image_wreak 中文释义:死亡图像 类型:文件(图像文件) 隶属于:通用代码组
#### image_wreak-要点指示
!> image_wreak代码要点指示:
<!-- chat:start -->
#### **tobby3600**
死亡图像定义单位死亡后产生的图像。<br>
文件定义方式与image相同。
#### **JDSALing**
填写`NONE`可以让单位死亡后不产生死亡图像。
<!-- chat:end -->

#### image_wreak-演示例子
```ini
[graphics]
image_wreak:dead.png
或者
image_wreak:NONE
```

### imageScale
#### imageScale-代码简介
?> 代码:imageScale 中文释义:图像缩放比例 类型:文件(图像文件) 隶属于:通用代码组
#### imageScale-要点指示
!> imageScale代码要点指示:
<!-- chat:start -->
#### **tobby3600**
填写后，铁锈会将图像大小乘以缩放比例。<br>
默认值为1。
<!-- chat:end -->

#### imageScale-演示例子
```ini
[graphics]
imageScale:1.2
```

## **折叠第1页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->


# Page 2
<!-- tabs:start -->
# **[attack]组**

# **[turret_Name]组**

# **[projectile_Name]组**
## **折叠第2页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->
# Page 3
<!-- tabs:start -->
# **[movement]组**

# **[ai]组**

# **[leg_#]/[arm_#]集合组**
## **折叠第3页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->
# Page 4
<!-- tabs:start -->
# **[attachment_Name]组**

# **[effect_Name]组**

# **[animation_Name]组**
## **折叠第4页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->
# Page 5
<!-- tabs:start -->
# **[action_Name]/[hiddenAction_Name]集合组**

# **[spawn unit] 刷兵序列组**

# **[placementRule_Name] 放置规则组**
## **折叠第5页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->
# Page 6
<!-- tabs:start -->
# **[LogicBoolean] 逻辑序列组**

# **[Prices/Resources] 价格/资源序列组**

# **[global_resource_Name] 全局资源组**
## **折叠第6页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->
# Page 7
<!-- tabs:start -->

# **[resource_Name] 局部资源组**

# **[template_Name] 模板组**

# **[comment_Name] 注解组**

## **折叠第7页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->

# Page 8
<!-- tabs:start -->

# **[decal_Name] 贴花组**

# **[Dex-Code] 源码Dex扩展组**

# **[hidden-code] 隐藏代码扩展组**

## **折叠第8页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->