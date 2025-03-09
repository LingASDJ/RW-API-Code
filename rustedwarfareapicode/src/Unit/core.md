---
outline: deep
---

# **[core]组**

## 第一类-通用代码组

::: tip
以下的代码为`通用代码`,多半是必要的代码，如果不包括这些，可能在`绝大多数情况下导致错误`。
:::

### name
#### name-代码简介
代码:name 中文释义:名字 类型:字符型 隶属于:通用代码组
#### name-要点指示

<hr>

<!-- 代码盒子例子 -->
::: code-group
```bash [JDSALing]
定义单位原始名称，可以是中文。
游戏使用它区分其它单位。

如果没有在[displayText或者语言文件设置显示名称]，
那么它也将作为单位的显示名称。 

具体描述文件位置(内部):
1.assets/translationsStrings_zh.properties
格式:units.单位名称.name=写单位显示的名称
units.单位名称.description= [[填单位显示的描述]]
```
```bash [Tobby3600]
ini文件的单独定义(外部-推荐):
 
2.displayText: -单位的标题
displayDescription: -单位的描述
```
:::

特别提醒:`displayText支持本地化`，例如如果要写一个`多语言的单位描述`，可以通过以下例子：

#### name-演示例子

```ini
[core]
name: Ling
displayText: English Title Text
displayText_zh:中文标题

displayDescription: -English Description
displayDescription_zh:-中文描述

```

<hr>

### price
#### price-代码简介
代码:price 中文释义:价格 类型:整数 隶属于:通用代码组
#### price-要点指示
定义单位的价格，显示在单位信息中，建造时也以此价格为准。
::: code-group 
``` bash [Tobby3600]
默认情况下，price只需要填写一个整数，此时使用的是游戏内自带的资金credit；  
想要更改资源类型，可以使用:
`price:资源1=数值1,资源2=数值2,资源3=数值3,……` 的格式
（前提是此资源要在使用的单位进行定义）。
```
:::
#### price-演示例子
```ini
[core]
price:120,石油=80,铁=60
```
<hr>

### radius
#### radius-代码简介
代码:radius 中文释义:半径 类型:整数 隶属于:通用代码组
#### radius-要点指示
半径定义单位的`实际碰撞体积和显示范围`，在未设置`选择框大小`时，半径决定是单位选择框的大小。
半径的单位是像素(px)。
#### radius-演示例子
```ini
[core]
radius:20
```

<hr>

### mass
#### mass-代码简介
代码:mass 中文释义:质量 类型:整数 隶属于:通用代码组
#### mass-要点指示
质量决定单位在各种碰撞时的效果。`质量越大，其他单位越难推动`。
#### mass-演示例子
```ini
[core]
mass:2000
```

<hr>

### maxHp
#### maxHp-代码简介
代码:maxHp 中文释义:最大生命值 类型:整数 隶属于:通用代码组
#### maxHp-要点指示

::: code-group  
``` bash [tobby3600]
最大生命值定义单位在不修改它时最多能够有多少血量，
单位默认生成时即是这个血量。
maxHp可以通过单位参考.maxHp()来获取，
也可以通过[action]进行修改。
```
:::

#### maxHp-演示例子
```ini
[core]
maxHp:600
```

### altNames
#### altNames-代码简介
代码:altNames 中文释义:别名/曾用名 类型:字符型 隶属于:通用代码组
#### altNames-要点指示

altNames代码要点指示:
<!-- chat:start -->
#### **JDSALing的小提示**
主要在<font color=orange>启用多个自定义Mod</font>进行优先级定义<br>
以逗号分隔的名称列表。像<font color=orange>名称一样，但优先级较低</font>，对于<font color=orange>启用多个自定义mod</font>有用。
<!-- chat:end -->

#### altNames-演示例子
```ini
[core]
altNames:ling,tobby3600,coldmint
```

<hr>

### class
#### class-代码简介

代码:class 中文释义:类 类型:字符型 隶属于:通用代码组

无实际用处，可以删除。<br>
Luke：保留供将来使用，默认情况下必须为`CustomUnitMetadata`。由于该代码无实际用途，可以忽略该代码<br>
该代码后面什么都可以输，但没有实际用途。或许在未来会有用。

#### class-演示例子
```ini
[core]
class:CustomUnitMetadata
```

<hr>

### strictLevel
#### strictLevel-代码简介

代码:strictLevel 中文释义:严格级别 类型:数字固定型 隶属于:通用代码组

::: tip
建议添加到"all-units.template"以应用于所有单位,进行统一查错。<br>
默认值为0，忽略代码重复。设为1时如果当前单位内有重复代码，则报错。
:::

#### strictLevel-演示例子
```all-units.template,ini
[core]
strictLevel:1
```

<hr>

### techLevel
#### techLevel-代码简介
代码:techLevel 中文释义:科技等级 类型:数字固定型 隶属于:通用代码组

::: tip
早期是用于在<font color=orange>builtFrom</font>的代码,并结合科技等级使用。如果工厂的等级低于单位的目标科技等级，则会在工厂里面隐藏该单位。<br>自铁锈1.09后出现<font color=orange>overrideAndReplace</font>后，该方法则不建议使用。有关于新策略，请参考<font color=orange>overrideAndReplace</font>代码文档指南。<br>
设置单位的科技等级，共有3个级别，1级GUI显示为绿色，2、3级显示为黄色。超过3报错。
:::

#### techLevel-演示例子
```ini
[core]
techLevel:2
```

<hr>

### buildSpeed
#### buildSpeed-代码简介

代码:buildSpeed 中文释义:建造速度 类型:浮点/秒型 隶属于:通用代码组

::: tip
建造此单位需要的时间，填秒。<br>
以前的计算方式为：此处所填时间=1÷(60x你需要的秒)如果定义了工厂速率则需要乘以建造乘数。
:::

#### buildSpeed-演示例子
```ini
[core]
buildSpeed:30s
#或者：
## 下方可能有误差
buildSpeed:0.0006
```

<hr>

### isBio
#### isBio-代码简介

代码:isBio 中文释义:是生物 类型:布尔型 隶属于:通用代码组

::: tip
若设置成true,则会在单位死亡时产生血迹,  
图像在<font color=orange>drawable/blood_mark.png<br>当hideScorchMark:true</font>时可以隐藏非生物则为黑色爆炸效果。
:::
#### isBio-演示例子
```ini
[core]
isBio:true
```

<hr>

### isBug
#### isBug-代码简介

代码:isBug 中文释义:是虫子 类型:布尔型 隶属于:通用代码组

::: tip
若设置成true,则会认定为虫子，用于沙盒中的单独分类。
:::
#### isBug-演示例子
```ini
[core]
isBug:true
```

<hr>

### isBuilder
#### isBuilder-代码简介

代码:isBuilder 中文释义:是建造者 类型:布尔型 隶属于:通用代码组

::: tip
若设置成true,则会需要此单位建造建筑物，则通常需要此代码。
并且默认设为[ai] useAsBuilder。
:::
#### isBuilder-演示例子
```ini
[core]
isBuilder:true
```

<hr>

### streamingCost
#### streamingCost-代码简介

代码:streamingCost 中文释义:流式资金 类型:整数型 隶属于:通用代码组

::: tip
和价格一样，但在建造时逐渐消耗资金，如果在构建过程中资源耗尽，  
建造或生产队列将暂停。就像是红警中那样。铁锈默认是预先扣除资金。  
若使用该代码，则玩家的每秒资金将会根据流式资金的算法进行扣减。
:::
#### streamingCost-演示例子
```ini
[core]
streamingCost:1145
```

<hr>

### switchPriceWithStreamingCost

#### switchPriceWithStreamingCost-代码简介

代码:switchPriceWithStreamingCost(S.P.S.C.)   
中文释义:流式资金模式全局切换 类型:布尔型 隶属于:通用代码组

::: tip
快捷设置为默认资金消耗方式或为流式建造方式。
建议使用模板快速将一个模组为所有单位切换流资源。
例如all-units.template.
:::
#### switchPriceWithStreamingCost-演示例子
```ini,all-units.template
[core]
switchPriceWithStreamingCost:true
```

## 第二类-单位统计代码组

::: tip
非必须存在的代码，请根据情况自行使用
:::

### selfRegenRate
#### selfRegenRate-代码简介

代码:selfRegenRate 中文释义:生命恢复速度 类型:浮点型 隶属于:单位统计代码组

::: tip
此数值决定每帧增加血量。游戏内默认速度下，一秒为60逻辑帧，而你看到的FPS帧数为渲染帧，所以电脑上几百帧和手机上60帧和省电模式下30帧并不影响计算。所以不要写太大。可以写负值用于自毁。
:::
#### selfRegenRate-演示例子
```ini
[core]
maxHp:500
selfRegenRate:0.5
```

<hr>

### maxShield
#### maxShield-代码简介

代码:maxShield 中文释义:护盾值 类型:整型 隶属于:单位统计代码组

::: tip
单位最大护盾值，默认生成时即为此值。如果设置了startShieldAtZero:true，则初始为0.
:::
#### maxShield-演示例子
```ini
[core]
maxShield:3000
```

<hr>

### startShieldAtZero
#### startShieldAtZero-代码简介

代码:startShieldAtZero 中文释义:护盾初始值为0 类型:布尔型 隶属于:单位统计代码组

::: tip
如果为true，则单位护盾值从0开始增加。
:::
#### startShieldAtZero-演示例子
```ini
[core]
maxShield:3000
startShieldAtZero:true
```

<hr>

### shieldRegen
#### shieldRegen-代码简介

代码:shieldRegen 中文释义:护盾恢复速度 类型:浮点型 隶属于:单位统计代码组

::: tip
此数值决定每帧增加护盾值，游戏内一秒为60帧，所以不要写太大。可以写负值。
:::
#### shieldRegen-演示例子
```ini
[core]
maxShield:3000
shieldRegen:0.5
```

<hr>

### energyMax
#### energyMax-代码简介

代码:energyMax 中文释义:能量值 类型:浮点型 隶属于:单位统计代码组

::: tip
默认值为0。可以用作炮塔，激光防御和行动的弹药的能量。
:::
#### energyMax-演示例子
```ini
[core]
energyMax:5
```

<hr>

### energyRegen
#### energyRegen-代码简介

代码:energyRegen 中文释义:能量恢复速度 类型:浮点型 隶属于:单位统计代码组

::: tip
能量每帧恢复速度，游戏内一秒为60帧，所以不要写太大。可以写负值。
:::
#### energyRegen-演示例子
```ini
[core]
energyRegen:0.4
```

<hr>

### energyRegenWhenRecharging

#### energyRegenWhenRecharging-代码简介

代码:energyRegenWhenRecharging
 中文释义:充能时能量恢复速度 类型:浮点型 隶属于:单位统计代码组

::: tip
能量恢复是持续的，如果你设置了<font color="orange">energyNeedsToRechargeToFull</font>，
那么攻击时按energyRegen恢复，耗尽时的灰条按此处设定值恢复。
:::
#### energyRegenWhenRecharging-演示例子
```ini
[core]
energyMax:1
energyRegenWhenRecharging:0.4
```

<hr>

### energyNeedsToRechargeToFull
#### energyNeedsToRechargeToFull-代码简介

代码:energyNeedsToRechargeToFull
 中文释义:能量需要充满 类型:布尔型 隶属于:单位统计代码组

::: tip
如果能量耗尽，则需要完全充能才能进行攻击。
:::
#### energyNeedsToRechargeToFull-演示例子
```ini
[core]
energyMax:4
energyNeedsToRechargeToFull:true
```

<hr>

### armour
#### armour-代码简介

代码:armour
 中文释义:装甲 类型:整型 隶属于:单位统计代码组

::: tip
抵消敌方攻击所造成的伤害。
:::
#### armour-演示例子
```ini
[core]
armour:40
#如果受到40以上的常规攻击，则进行抵消，反之返回1伤害点。
#例如45伤害，40护甲，那么将获得5点伤害。
```

<hr>

### armourMinDamageToKeep
#### armourMinDamageToKeep-代码简介

代码:armourMinDamageToKeep
中文释义:装甲最低伤害 类型:整型 隶属于:单位统计代码组

::: tip
至少造成多少点伤害，默认为1.防止护甲太高完全打不动。
:::
#### armourMinDamageToKeep-演示例子
```ini
[core]
armour:40
armourMinDamageToKeep:2
#如果受到40以下的常规攻击，则进行最低伤害判定
```

<hr>

### borrowResourcesWhileAlive
#### borrowResourcesWhileAlive-代码简介

代码:armour
 中文释义:资源活着时借用 类型:Price型 隶属于:单位统计代码组

::: tip
创建时获取这些资源，删除或销毁时将其返回。
例如用于电力逻辑，负数供电和正数耗电。
:::

#### borrowResourcesWhileAlive-演示例子
```ini
[core]
borrowResourcesWhileAlive:5000
#单位活着的时候给予5000金币，死亡扣除5000金币
#一个小型贷款系统，
```

:::code-group
``` bash [考考你]
如果这里要通过这个代码做一个小的贷款系统，
并经过一段时间让单位死亡。  
只需要4行代码即可实现，试试看。
提示：dieOnZeroEnergy:true
(无能量时死亡|如果能量值为零，该单位死亡)
```

``` bash [显示答案]
#参考答案为：
[core]
borrowResourcesWhileAlive:5000
energyMax:1
energyRegen:-0.4
dieOnZeroEnergy:true
#原理是通过能量为0单位死亡并通过这个代码还钱，
是很简陋的贷款思路，当然，在后续会有更加高级的思路。
```
:::

<hr>

### generation_resources
#### generation_resources-代码简介

代码:generation_resources
 中文释义:资源获取 类型:Price型 隶属于:单位统计代码组

::: tip
单位定时获得的资源，可自定义资源。
:::
#### generation_resources-演示例子
```ini
[core]
generation_resources:10
#or
generation_resources:credits=10
#常规产出10credits/1s游戏资金
-----------我是分界线----------
#自定义资源写法
[core]
generation_resources:金属=5
```

<hr>

### generation_active
#### generation_active-代码简介

代码:generation_active
 中文释义:资源获取条件 类型:逻辑布尔型 隶属于:单位统计代码组

::: tip
获取资源条件。可用于受损时无法产出。
:::
#### generation_active-演示例子
```ini
[core]
#1.14写法
generation_resources:金属=5
generation_active: if not self.hp(lessThan=100)
#1.15写法
[core]
generation_resources:金属=5
generation_active: if not self.hp<100
#效果：单位低于1000血量可以产出资源
```

<hr>

### generation_credits
#### generation_credits-代码简介

代码:generation_credits
 中文释义:资金获取 类型:整型 隶属于:单位统计代码组

::: tip
生成资源，仅用于默认的资金，也就是铁锈默认的金钱。
:::
#### generation_credits-演示例子
```ini
[core]
generation_credits=5
```

### generation_delay

::: danger
此代码为老旧代码，作者Luke不推荐使用。
:::

::: warning
警告：请勿使用40以外的数值，否则会有视觉Bug。
例如使用30，资金生成3，实际就为6，但是一旦这类单位多了，游戏的资金显示会出问题。
:::

<hr>

#### generation_delay-代码简介

代码:generation_delay
 中文释义:资金获取时间 类型:整型 隶属于:单位统计代码组

::: tip
多久帧添加添加一次资源(generation_credits指定数值)。
默认值为40，一秒为60帧。
:::
#### generation_delay-演示例子
```ini
[core]
generation_delay=40
```

## 第三类-UI和图形代码
### showInEditor
#### showInEditor-代码简介

代码:showInEditor
 中文释义:沙盒中可见 类型:布尔型 隶属于:UI和图形代码组

::: tip
设置为false可在沙盒编辑器中隐藏单位。(默认为true)
:::

#### showInEditor-演示例子
```ini
[core]
showInEditor:false
```

### displayText_LANG
#### displayText_{LANG}-代码简介

代码:displayText_{LANG}
 中文释义:界面显示文本多语言 类型:字符型 隶属于:UI和图形代码组

::: tip
为单位名称添加多语言支持。此方法并不方便，不如设置游戏内部语言文件，建议催Luke改。有关常见语言代码，请参考下表
:::

| 语言代码 | 所属国家/地区| 语言代码 | 所属国家/地区 
|:--------:|:-----------:|:--------:|:-----------:
| zh       | (中文通用)      | en(可忽略)  | (英语通用)          
| zh-cn    | (简体)        | ru       | (俄语)        
| zh-tw    | (台湾)        | ja       | (日语)        
| zh-hk    | 中文(香港)      | es-ES    | （西班牙）       
| de       | （德语）        | fr-FR    | 法语（法国）      

::: warning
其它自查(此列表并不全)，不过你应该不会闲着支持这么多语言。另外英文的语言代码`en`可以忽略，因为英文在软件里为默认语言,故而无需加`en`,当然加了也没事。
:::

如果你不想进行多语言化，你应该直接`displayText:坦克`，而不是`displayText_zh:坦克`，如果你写了`displayText_zh:坦克`，<br>你必须再声明一个`displayText:Tank`,否则，游戏会找不到`默认语言缺省值`，将会导致`mod报错而无法运行`。所有可以使用多语言的都有这个检查，还请各位Modder留意。（若有特别的代码，将会在它里面特别提示）

#### displayText_{LANG}-演示例子
```ini
[core]
#English
displayText:Tank
#Chinese
displayText_zh:坦克
```

<hr>

### displayDescription_LANG
#### displayDescription-代码简介

代码:displayDescription_{LANG}
 中文释义:界面显示描述 类型:字符型 隶属于:UI和图形代码组

::: tip
单位显示给玩家的单位描述,可以使用多语言,具体使用方法参考在`displayText`的演示说明，这里不再过多讨论。
:::

#### displayDescription-演示例子
```ini
[core]
displayText:坦克
displayDescription:只能对地，弱输出，只能在地上行走。
```

<hr>

### displayLocaleKey
#### displayLocaleKey-代码简介

代码:displayLocaleKey
 中文释义:界面显示内部调用 类型:字符型 隶属于:UI和图形代码组

::: tip
调用内部语言文件的单位名称和说明的翻译文件。用处不大，通常是在`替换原版单位的同时直接调用它的原始描述`。该代码例子需要会拆包，如果你是初学者，该代码了解即可。
:::

#### displayLocaleKey-演示例子
```ini
[core]
displayLocaleKey: units.mechArtillery
```

<hr>

### displayRadius
#### displayRadius-代码简介

代码:displayRadius 中文释义:单位选择时显示圆圈 类型:整形 隶属于:UI和图形代码组

::: tip
修改选择单位时显示的绿色圆圈，不更改实际碰撞(radius)和可选择范围。
:::

#### displayRadius-演示例子
```ini
[core]
displayRadius:25
```

<hr>

### uiTargetRadius
#### uiTargetRadius-代码简介

代码:uiTargetRadius 中文释义:为目标时半径 类型:整形 隶属于:UI和图形代码组

::: tip
默认为显示半径值。攻击/回收/等单位时使用的半径
:::

#### uiTargetRadius-演示例子
```ini
[core]
uiTargetRadius:25
```

<hr>

### shieldRenderRadius
#### shieldRenderRadius-代码简介

代码:shieldRenderRadius 中文释义:单位护盾显示半径 类型:整形 隶属于:UI和图形代码组

::: tip
护盾绘制半径，默认值比半径大一点。
可以设置在单位上显示更大或更小的护盾圈。
:::

#### shieldRenderRadius-演示例子
```ini
[core]
shieldRenderRadius:20
```

<hr>

### shieldDisplayOnlyDeflection
#### shieldDisplayOnlyDeflection-代码简介

代码:shieldDisplayOnlyDeflection 中文释义:护盾只在受攻击时显示 类型:布尔型 隶属于:UI和图形代码组

::: tip
隐藏护盾，只在受到攻击时显示。
:::

#### shieldDisplayOnlyDeflection-演示例子
```ini
[core]
shieldDisplayOnlyDeflection:true
```

<hr>

### shieldDeflectionDisplayRate
#### shieldDeflectionDisplayRate-代码简介

代码:shieldDeflectionDisplayRate 中文释义:护盾消失速度 类型:浮点型 隶属于:UI和图形代码组

::: tip
默认值为4。数值越大消失越快。
:::

#### shieldDeflectionDisplayRate-演示例子
```ini
[core]
shieldDeflectionDisplayRate:3
```

<hr>

### showOnMinimap
#### showOnMinimap-代码简介

代码:showOnMinimap 中文释义:显示在小地图上 类型:布尔型 隶属于:UI和图形代码组

::: tip
默认为true。如果为false，则在小地图上不显示此单位。
:::

#### showOnMinimap-演示例子
```ini
[core]
showOnMinimap:true
```

<hr>

### showOnMinimapToEnemies
#### showOnMinimapToEnemies-代码简介

代码:showOnMinimapToEnemies 中文释义:显示于敌人小地图 类型:布尔型 隶属于:UI和图形代码组

::: tip
是否在敌人小地图上显示。
:::

#### showOnMinimapToEnemies-演示例子
```ini
[core]
showOnMinimapToEnemies:true
```

<hr>

### showActionsWithMixedSelectionIfOtherUnitsHaveTag
#### showActionsWithMixedSelectionIfOtherUnitsHaveTag-代码简介

代码:showActionsWithMixedSelectionIfOtherUnitsHaveTag 中文释义:混合所选单位所显示的行为 类型:标签型 隶属于:UI和图形代码组

::: tip
如果选择的单位都包含此处使用的标签，则合并“行为(action)”。比如你的步兵通过部署转化成另一个单位，在混合时可以当作同一个单位处理，不再是默认的谁都无法执行操作。例子如红警的盟军大兵在混合选中后依旧可执行部署或解除。
:::

#### showActionsWithMixedSelectionIfOtherUnitsHaveTag-演示例子
```ini
[core]
showActionsWithMixedSelectionIfOtherUnitsHaveTag:tag_联系
```

## 第四类-构建代码

### isBuilding
#### isBuilding-代码简介

代码:isBuilding 中文释义:是建筑 类型:布尔型 隶属于:构建代码组

::: tip
定义单位是否为建筑物。为true时无论移动方式是什么都会强制为建筑。
:::

#### isBuilding-演示例子
```ini
[core]
isBuilding:true
```

<hr>

### footprint
#### footprint-代码简介

代码:footprint 中文释义:建筑碰撞范围 类型:多整型 隶属于:构建代码组

::: tip
填四个数值(左，上，右，下)，单位是格子，建筑默认占一格，向左和向上需要填负数，填整数在选择时有偏移。
四个数值可以完全颠倒，这样不会阻碍单位移动。决定建筑单位碰撞体积，此区域内单位不能通过，如果在单位运动途中单位则会绕过。单位实际可选择面积使用的是radius。
:::

#### footprint-演示例子
```ini
[core]
##（1x1）
footprint: 0,0,0,0
##（2X2）
footprint: 0,0,1,1
##（3X3）
footprint: -1,-1,1,1
```

<hr>

### constructionFootprint
#### constructionFootprint-代码简介

代码:constructionFootprint 中文释义:建筑覆盖范围 类型:多整型 隶属于:构建代码组

::: tip
基础规则同上，这个区域内不能建造建筑，但是单位可以通过。   
一般需要设定比上一个面积大。   
好处是即使建造的密密麻麻，单位也有路可走。
:::

#### constructionFootprint-演示例子
```ini
[core]
constructionFootprint: -1,-1,1,3
```

<hr>

### displayFootprint
#### displayFootprint-代码简介

代码:displayFootprint 中文释义:建筑选择UI 类型:多整型 隶属于:构建代码组

::: tip
基础规则同上，用于选择单位时UI显示。不设定则默认为建筑覆盖区域。
:::

#### displayFootprint-演示例子
```ini
[core]
displayFootprint: 0,0,1,1
```

<hr>

### buildingSelectionOffset
#### buildingSelectionOffset-代码简介

代码:buildingSelectionOffset 中文释义:建筑UI调整 类型:整型 隶属于:构建代码组

::: tip
基础规则同上，用于选择单位时UI显示。不设定则默认为建筑覆盖区域。
:::

#### buildingSelectionOffset-演示例子
```ini
[core]
buildingSelectionOffset: 4
```

<hr>
