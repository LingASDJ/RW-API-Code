

# CORE

# Page 1
<!-- tabs:start -->

## **[core]组**
> [!TIP] core组-第一类-通用代码组

> [!NOTE] 重要提示文本以下的代码为`通用代码`,多半是必要的代码，如果不包括这些，可能在`绝大多数情况下导致错误`。

### name
#### name-代码简介
代码:name 中文释义:名字 类型:字符型 隶属于:通用代码组
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
代码:price 中文释义:价格 类型:整数 隶属于:通用代码组
#### price-要点指示
price代码要点指示:
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
代码:radius 中文释义:半径 类型:整数 隶属于:通用代码组
#### radius-要点指示
radius代码要点指示:
半径定义单位的`实际碰撞体积和显示范围`，在未设置`选择框大小`时，半径决定是单位选择框的大小。
半径的单位是像素(px)。
#### radius-演示例子
```ini
[core]
radius:20
```

### mass
#### mass-代码简介
代码:mass 中文释义:质量 类型:整数 隶属于:通用代码组
#### mass-要点指示
mass代码要点指示:
质量决定单位在各种碰撞时的效果。`质量越大，其他单位越难推动`。
#### mass-演示例子
```ini
[core]
mass:2000
```

### maxHp
#### maxHp-代码简介
代码:maxHp 中文释义:最大生命值 类型:整数 隶属于:通用代码组
#### maxHp-要点指示

:::codegroup
 **tobby3600**
最大生命值定义单位在不修改它时最多能够有多少血量，单位默认生成时即是这个血量。<br>
maxHp可以通过<font color=orange>单位参考.maxHp()</font>来获取，也可以通过<font color=orange>[action]setUnitStatus</font>进行修改。
:::

#### maxHp-演示例子
```ini
[core]
maxHp:600
```

### altNames
#### altNames-代码简介
代码:altNames 中文释义:别名 类型:字符型 隶属于:通用代码组
#### altNames-要点指示

altNames代码要点指示:
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

代码:class 中文释义:类 类型:字符型 隶属于:通用代码组

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

代码:strictLevel 中文释义:严格级别 类型:数字固定型 隶属于:通用代码组

> [!TIP] 建议添加到"all-units.template"以应用于所有单位,进行统一查错。<br>
默认值为0，忽略代码重复。设为1时如果当前单位内有重复代码，则报错。

#### strictLevel-演示例子:
```all-units.template & ini
[core]
strictLevel:1
```

### techLevel
#### techLevel-代码简介:
代码:techLevel 中文释义:科技等级 类型:数字固定型 隶属于:通用代码组

> [!TIP] 早期是用于在<font color=orange>builtFrom</font>的代码,并结合科技等级使用。如果工厂的等级低于单位的目标科技等级，则会在工厂里面隐藏该单位。<br>自铁锈1.09后出现<font color=orange>overrideAndReplace</font>后，该方法则不建议使用。有关于新策略，请参考<font color=orange>overrideAndReplace</font>代码文档指南。<br>
设置单位的科技等级，共有3个级别，1级GUI显示为绿色，2、3级显示为黄色。超过3报错。

#### techLevel-演示例子:
```ini
[core]
techLevel:2
```

### buildSpeed
#### buildSpeed-代码简介

代码:buildSpeed 中文释义:建造速度 类型:浮点/秒型 隶属于:通用代码组

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


代码:isBio 中文释义:是生物 类型:布尔型 隶属于:通用代码组

> [!TIP] 若设置成true,则会在单位死亡时产生血迹,  
图像在drawable/blood_mark.png，hideScorchMark：true时可以隐藏）非生物则为黑色爆炸效果。
#### isBio-演示例子:
```ini
[core]
isBio:true
```

### isBug
#### isBug-代码简介

代码:isBug 中文释义:是虫子 类型:布尔型 隶属于:通用代码组

> [!TIP] 若设置成true,则会认定为虫子，用于沙盒中的单独分类。
#### isBug-演示例子:
```ini
[core]
isBug:true
```

### isBuilder
#### isBuilder-代码简介

代码:isBuilder 中文释义:是建造者 类型:布尔型 隶属于:通用代码组

> [!TIP] 若设置成true,则会需要此单位建造建筑物，则通常需要此代码。
并且默认设为[ai] useAsBuilder。
#### isBuilder-演示例子:
```ini
[core]
isBuilder:true
```

### streamingCost
#### streamingCost-代码简介

代码:streamingCost 中文释义:流式资金 类型:整数型 隶属于:通用代码组

> [!TIP] 和价格一样，但在建造时逐渐消耗资金，如果在构建过程中资源耗尽，  
建造或生产队列将暂停。就像是红警中那样。铁锈默认是预先扣除资金。  
若使用该代码，则玩家的每秒资金将会根据流式资金的算法进行扣减。
#### streamingCost-演示例子:
```ini
[core]
streamingCost:1145
```

### switchPriceWithStreamingCost

#### switchPriceWithStreamingCost-代码简介

代码:switchPriceWithStreamingCost 中文释义:流式资金模式全局切换 类型:布尔型 隶属于:通用代码组

> [!TIP] 快捷设置为默认资金消耗方式或为流式建造方式。
建议使用模板快速将一个模组为所有单位切换流资源。
例如all-units.template.
#### switchPriceWithStreamingCost-演示例子:
```ini,all-units.template
[core]
switchPriceWithStreamingCost:true
```

以下的代码为`单位统计代码组`,非必须存在的代码，请根据情况自行使用

### selfRegenRate
#### selfRegenRate-代码简介

代码:selfRegenRate 中文释义:生命恢复速度 类型:浮点型 隶属于:单位统计代码组

> [!TIP] 此数值决定每帧增加血量。游戏内默认速度下，一秒为60逻辑帧，而你看到的FPS帧数为渲染帧，所以电脑上几百帧和手机上60帧和省电模式下30帧并不影响计算。所以不要写太大。可以写负值用于自毁。
#### selfRegenRate-演示例子:
```ini
[core]
maxHp:500
selfRegenRate:0.5
```

### maxShield
#### maxShield-代码简介

代码:maxShield 中文释义:护盾值 类型:整型 隶属于:单位统计代码组

> [!TIP] 单位最大护盾值，默认生成时即为此值。如果设置了startShieldAtZero:true，则初始为0.
#### maxShield-演示例子:
```ini
[core]
maxShield:3000
```

### startShieldAtZero
#### startShieldAtZero-代码简介

代码:startShieldAtZero 中文释义:护盾初始值为0 类型:布尔型 隶属于:单位统计代码组

> [!TIP] 如果为true，则单位护盾值从0开始增加。
#### startShieldAtZero-演示例子:
```ini
[core]
maxShield:3000
startShieldAtZero:true
```

### shieldRegen
#### shieldRegen-代码简介

代码:shieldRegen 中文释义:护盾恢复速度 类型:浮点型 隶属于:单位统计代码组

> [!TIP] 此数值决定每帧增加护盾值，游戏内一秒为60帧，所以不要写太大。可以写负值。
#### shieldRegen-演示例子:
```ini
[core]
maxShield:3000
shieldRegen:0.5
```

### energyMax
#### energyMax-代码简介

代码:energyMax 中文释义:能量值 类型:浮点型 隶属于:单位统计代码组

> [!TIP] 默认值为0。可以用作炮塔，激光防御和行动的弹药的能量。
#### energyMax-演示例子:
```ini
[core]
energyMax:5
```

### energyRegen
#### energyRegen-代码简介

代码:energyRegen 中文释义:能量恢复速度 类型:浮点型 隶属于:单位统计代码组

> [!TIP] 能量每帧恢复速度，游戏内一秒为60帧，所以不要写太大。可以写负值。
#### energyRegen-演示例子:
```ini
[core]
energyRegen:0.4
```

### energyRegenWhenRecharging

#### energyRegenWhenRecharging-代码简介

代码:energyRegenWhenRecharging
 中文释义:充能时能量恢复速度 类型:浮点型 隶属于:单位统计代码组

> [!TIP] 能量恢复是持续的，如果你设置了energyNeedsToRechargeToFull，那么攻击时按energyRegen恢复，耗尽时的灰条按此处设定值恢复。
#### energyRegenWhenRecharging-演示例子:
```ini
[core]
energyMax:1
energyRegenWhenRecharging:0.4
```

### energyNeedsToRechargeToFull

#### energyNeedsToRechargeToFull-代码简介

代码:energyNeedsToRechargeToFull
 中文释义:能量需要充满 类型:布尔型 隶属于:单位统计代码组

> [!TIP] 如果能量耗尽，则需要完全充能才能进行攻击。
#### energyRegenWhenRecharging-演示例子:
```ini
[core]
energyMax:4
energyNeedsToRechargeToFull:true
```

### armour
#### armour-代码简介

代码:armour
 中文释义:装甲 类型:整型 隶属于:单位统计代码组

> [!TIP] 抵消敌方攻击所造成的伤害。
#### armour-演示例子:
```ini
[core]
armour:40
#如果受到40以上的常规攻击，则进行抵消，反之返回1伤害点。
#例如45伤害，40护甲，那么将获得5点伤害。
```

### armourMinDamageToKeep
#### armourMinDamageToKeep-代码简介

代码:armour
 中文释义:装甲最低伤害 类型:整型 隶属于:单位统计代码组

> [!TIP] 至少造成多少点伤害，默认为1.防止护甲太高完全打不动。
#### armourMinDamageToKeep-演示例子:
```ini
[core]
armour:40
armourMinDamageToKeep:2
#如果受到40以下的常规攻击，则进行最低伤害判定
```

### borrowResourcesWhileAlive
#### borrowResourcesWhileAlive-代码简介

代码:armour
 中文释义:资源活着时借用 类型:Price型 隶属于:单位统计代码组

> [!TIP] 创建时获取这些资源，删除或销毁时将其返回。例如用于电力逻辑，负数供电和正数耗电。
#### borrowResourcesWhileAlive-演示例子:
```ini
[core]
borrowResourcesWhileAlive:5000
#单位活着的时候给予5000金币，死亡扣除5000金币
#一个小型贷款系统，
```

<!-- tabs:start -->

<!-- 换行两个空格 或者 <br> -->
#### **动动脑考考你**
如果这里要通过这个代码做一个小的贷款系统，并经过一段时间让单位死亡。  
只需要4行代码即可实现，试试看。

提示：dieOnZeroEnergy:true---(无能量时死亡|如果能量值为零，该单位死亡)
#### **显示答案-#1**
```txt
#参考答案为：
[core]
borrowResourcesWhileAlive:5000
energyMax:1
energyRegen:-0.4
dieOnZeroEnergy:true
#原理是通过能量为0单位死亡并通过这个代码还钱，
是很简陋的贷款思路，当然，在后续会有更加高级的思路。
```

<!-- tabs:end -->

### generation_resources
#### generation_resources-代码简介

代码:generation_resources
 中文释义:资源获取 类型:Price型 隶属于:单位统计代码组

> [!TIP] 单位定时获得的资源，可自定义资源。
#### generation_resources-演示例子:
```ini
[core]
generation_resources:10
#or
generation_resources:credit=10
#常规产出10Credit/1s游戏资金
-----------我是分界线----------
#自定义资源写法
[core]
generation_resources:金属=5
```

### generation_active
#### generation_active-代码简介

代码:generation_active
 中文释义:资源获取条件 类型:逻辑布尔型 隶属于:单位统计代码组

> [!TIP] 获取资源条件。可用于受损时无法产出。
#### generation_active-演示例子:
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

### generation_credits
#### generation_credits-代码简介

代码:generation_credits
 中文释义:资金获取 类型:整型 隶属于:单位统计代码组

> [!TIP] 生成资源，仅用于默认的资金，也就是铁锈默认的金钱。
#### generation_credits-演示例子:
```ini
[core]
generation_credits=5
```

### generation_delay

> [!ATTENTION] 此代码为老旧代码，作者Luke不推荐使用。

> [!ATTENTION] 警告：请勿使用40以外的数值，否则会有视觉Bug。例如使用30，资金生成3，实际就为6，但是一旦这类单位多了，游戏的资金显示会出问题。

#### generation_delay-代码简介

代码:generation_delay
 中文释义:资金获取时间 类型:整型 隶属于:单位统计代码组

> [!TIP] 多久帧添加添加一次资源(generation_credits指定数值)。默认值为40，一秒为60帧。
#### generation_delay-演示例子:
```ini
[core]
generation_delay=40
```

> [!NOTE] Core组-第二类-UI和图形代码

### showInEditor
#### showInEditor-代码简介

代码:showInEditor
 中文释义:沙盒中可见 类型:布尔型 隶属于:UI和图形代码组

> [!TIP] 设置为false可在沙箱编辑器中隐藏单位。(默认为true)

#### showInEditor-演示例子:
```ini
[core]
showInEditor:false
```

### displayText_{LANG}
#### displayText_{LANG}-代码简介

代码:displayText_{LANG}
 中文释义:界面显示文本多语言 类型:字符型 隶属于:UI和图形代码组

> [!TIP] 为单位名称添加多语言支持。此方法并不方便，不如设置游戏内部语言文件，建议催Luke改。有关常见语言代码，请参考下表

| 语言代码 | 所属国家/地区| 语言代码 | 所属国家/地区 
|:--------:|:-----------:|:--------:|:-----------:
| zh       | (中文通用)      | en(可忽略)  | (英语通用)          
| zh-cn    | (简体)        | ru       | (俄语)        
| zh-tw    | (台湾)        | ja       | (日语)        
| zh-hk    | 中文(香港)      | es-ES    | （西班牙）       
| de       | （德语）        | fr-FR    | 法语（法国）      

>[!NOTE] 其它自查(相关标准有[ISO 639-1](https://baike.baidu.com/item/ISO%20639-1/8292914)和[ISO 3166-1](https://baike.baidu.com/item/ISO%203166-1?fromModule=lemma_search-box))，不过你应该不会闲着支持这么多语言。另外英文的语言代码`en`可以忽略，因为英文在软件里为默认语言,故而无需加`en`,当然加了也没事。

如果你不想进行多语言化，你应该直接`displayText:坦克`，而不是`displayText_zh:坦克`，如果你写了`displayText_zh:坦克`，<br>你必须再声明一个`displayText:Tank`,否则，游戏会找不到`默认语言缺省值`，将会导致`mod报错而无法运行`。所有可以使用多语言的都有这个检查，还请各位Moder留意。（若有特别的代码，将会在它里面特别提示）

#### displayText_{LANG}-演示例子:
```ini
[core]
#English
displayText:Tank
#Chinese
displayText_zh:坦克
```

### displayDescription_{LANG}
#### displayDescription-代码简介

代码:displayDescription_{LANG}
 中文释义:界面显示描述 类型:字符型 隶属于:UI和图形代码组

> [!TIP] 单位显示给玩家的单位描述,可以使用多语言,具体使用方法参考在`displayText`的演示说明，这里不再过多讨论。

#### displayDescription-演示例子:
```ini
[core]
displayText:坦克
displayDescription:只能对地，弱输出，只能在地上行走。
```

### displayLocaleKey
#### displayLocaleKey-代码简介

代码:displayLocaleKey
 中文释义:界面显示内部调用 类型:字符型 隶属于:UI和图形代码组

> [!TIP] 调用内部语言文件的单位名称和说明的翻译文件。用处不大，通常是在`替换原版单位的同时直接调用它的原始描述`。该代码例子需要会拆包，如果你是初学者，该代码了解即可。

#### displayLocaleKey-演示例子:
```ini
[core]
displayLocaleKey: units.mechArtillery
```

### displayRadius
#### displayRadius-代码简介

代码:displayRadius 中文释义:单位选择时显示圆圈 类型:整形 隶属于:UI和图形代码组

> [!TIP] 修改选择单位时显示的绿色圆圈，不更改实际碰撞(radius)和可选择范围。

#### displayRadius-演示例子:
```ini
[core]
displayRadius:25
```

### uiTargetRadius
#### uiTargetRadius-代码简介

代码:uiTargetRadius 中文释义:为目标时半径 类型:整形 隶属于:UI和图形代码组

> [!TIP] 修改选择单位时显示的绿色圆圈，不更改实际碰撞(radius)和可选择范围。

#### uiTargetRadius-演示例子:
```ini
[core]
uiTargetRadius:25
```

### shieldRenderRadius
#### shieldRenderRadius-代码简介

代码:shieldRenderRadius 中文释义:单位护盾显示半径 类型:整形 隶属于:UI和图形代码组

> [!TIP] 护盾绘制半径，默认值比半径大一点。可以设置在单位上显示更大或更小的护盾圈。

#### shieldRenderRadius-演示例子:
```ini
[core]
shieldRenderRadius:20
```

### shieldDisplayOnlyDeflection
#### shieldDisplayOnlyDeflection-代码简介

代码:shieldDisplayOnlyDeflection 中文释义:护盾只在受攻击时显示 类型:布尔型 隶属于:UI和图形代码组

> [!TIP] 隐藏护盾，只在受到攻击时显示。

#### shieldDisplayOnlyDeflection-演示例子:
```ini
[core]
shieldDisplayOnlyDeflection:true
```

### shieldDeflectionDisplayRate
#### shieldDeflectionDisplayRate-代码简介

代码:shieldDeflectionDisplayRate 中文释义:护盾消失速度 类型:浮点型 隶属于:UI和图形代码组

> [!TIP] 默认值为4。数值越大消失越快。

#### shieldDeflectionDisplayRate-演示例子:
```ini
[core]
shieldDeflectionDisplayRate:3
```

### showOnMinimap
#### showOnMinimap-代码简介

代码:shieldDeflectionDisplayRate 中文释义:显示在小地图上 类型:布尔型 隶属于:UI和图形代码组

> [!TIP] 默认为true。如果为false，则在小地图上不显示此单位。

#### showOnMinimap-演示例子:
```ini
[core]
showOnMinimap:true
```

### showOnMinimapToEnemies
#### showOnMinimapToEnemies-代码简介

代码:showOnMinimapToEnemies 中文释义:显示于敌人小地图 类型:布尔型 隶属于:UI和图形代码组

> [!TIP] 是否在敌人小地图上显示。

#### showOnMinimapToEnemies-演示例子:
```ini
[core]
showOnMinimapToEnemies:true
```

### showActionsWithMixedSelectionIfOtherUnitsHaveTag
#### showActionsWithMixedSelectionIfOtherUnitsHaveTag-代码简介

代码:showActionsWithMixedSelectionIfOtherUnitsHaveTag 中文释义:混合所选单位所显示的行为 类型:标签型 隶属于:UI和图形代码组

> [!TIP] 如果选择的单位都包含此处使用的标签，则合并“行为(action)”。比如你的步兵通过部署转化成另一个单位，在混合时可以当作同一个单位处理，不再是默认的谁都无法执行操作。例子如红警的盟军大兵在混合选中后依旧可执行部署或解除。

#### showActionsWithMixedSelectionIfOtherUnitsHaveTag-演示例子:
```ini
[core]
showActionsWithMixedSelectionIfOtherUnitsHaveTag:tag_联系
```

> [!NOTE] core组-第三类-构建代码























## **[canBuild_Name]组**

## **[graphics]组**

### image
#### image-代码简介
代码:image 中文释义:主体图像 类型:文件(图像文件) 隶属于:通用代码组
#### image-要点指示
image代码要点指示:
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
代码:image_wreak 中文释义:死亡图像 类型:文件(图像文件) 隶属于:通用代码组
#### image_wreak-要点指示
image_wreak代码要点指示:
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
代码:imageScale 中文释义:图像缩放比例 类型:文件(图像文件) 隶属于:通用代码组
#### imageScale-要点指示
imageScale代码要点指示:
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

### text
#### text-代码简介
代码:text 中文释义:显示文本 类型:字符串 隶属于:行为代码组
支持%动态显示，其内容为该action的名称

### buildSpeed
#### buildSpeed-代码简介
代码:buildSpeed 中文释义:建造速度 类型:s/帧 隶属于:行为代码组
执行此动作所需要的时间。使用秒作为单位更好。例子：buildSpeed:0.3s

### alsoTriggerAction
#### alsoTriggerAction-代码简介
代码:alsoTriggerAction 中文释义:也执行动作 类型:action refs 隶属于:行为代码组
执行完此动作后执行其他动作，忽略行动的buildSpeed,直接执行。

### requireConditional
#### requireConditional-代码简介
代码:requireConditional 中文释义:需要条件 类型:LogicBoolean 隶属于:行为代码组
如果结果为false,则不执行该action。

### alsoTriggerActionRepeat
#### alsoTriggerActionRepeat-代码简介
代码:alsoTriggerActionRepeat 中文释义:循环次数 类型:number 隶属于:行为代码组
重复alsoTriggerAction调用x次,每次重复时改变索引(+1),索引可在被调用的action使用 用于创建循环或处理数组 动态数字
#### alsoTriggerActionRepeat-演示例子
```ini
[hiddenAction_A]
alsoTriggerAction:B
alsoTriggerActionRepeat:10
[hiddenAction_B]
showMessageToAllPlayers:%{index}
```
B会被执行10次，打印结果为0~9

### setUnitMemory
#### setUnitMemory-代码简介
代码:setUnitMemory 中文释义:设置单位内存 隶属于:行为代码组
设置单位的memory的值。
#### setUnitMemory-演示例子
```ini
[core]
@memory str:string
[hiddenAction_setMemory]
setUnitMemory:str="hello shishanyue"
```

### alsoQueueAction
#### alsoQueueAction-代码简介
代码:alsoQueueAction 中文释义:也添加进队列 类型:action refs 隶属于:行为代码组
将另一个动作添加到序列中。不忽略行动的buildSpeed

### removeAllQueuedItemsWithoutRefund
#### removeAllQueuedItemsWithoutRefund-代码简介
代码:removeAllQueuedItemsWithoutRefund 中文释义:取消所有仍在序列中等待执行的行为 类型:Boolean 隶属于:行为代码组
removeAllQueuedItemsWithoutRefund:true

### alsoTriggerOrQueueActionWithTarget
#### alsoTriggerOrQueueActionWithTarget-代码简介
代码:alsoTriggerOrQueueActionWithTarget 中文释义:更改其他触发动作的目标 类型:unit ref 隶属于:行为代码组
具体实例可以看（十山月打广告（）https://www.bilibili.com/video/BV17v4y1r7dV/

### autoTriggerOnEvent
#### autoTriggerOnEvent-代码简介
代码:autoTriggerOnEvent 中文释义:自动触发事件 类型:字符串 隶属于:行为代码组
满足此条件则自动触发。

|参数表 |参数表 |
| -------- | ------------  |
|创建      |created       |
|完成且激活      |completeAndActive         |
|销毁       |destroyed       |
|杀死任何单位     |killedAnyUnit         |
|队列中单位完成      |queuedUnitFinished     |
|队列添加项目     |queueItemAdded     | 
|队列项目取消    |queueItemCancelled     |
|传送     |teleported         |
|接触目标成功(eventSource=碰到的目标)      |touchTargetSuccess     |
|玩家指定路径     |newWaypointGivenByPlayer     | 
|队列项目取消    |queueItemCancelled     |
|运输新单位(eventSource=被运输的单位)     |transportingNewUnit         |
|卸载或移除单位     |transportUnloadedOrRemovedUnit         |
|队伍变更     |teamChanged         |
|收到伤害(eventSource=造成伤害的单位)     |tookDamage          |
|杀死任意单位     |killedAnyUnit          |
|运输卸下或搬走的单位(eventSource=被卸载的单位)     |        transportUnloadedOrRemovedUnit          |
|有新单位被建造时(eventSource=被建造的新单位)     |queuedUnitFinished         |
|有单位进入运输槽(eventSource=被运输的单位)     |enteredTransport         |
|有单位离开运输槽(eventSource=被运输的单位)     |leftTransport         |
|附属被移除     |attachmentRemoved         |


### resetCustomTimer
#### resetCustomTimer-代码简介
代码:resetCustomTimer 中文释义:重置自定义计时器 类型:Boolean 隶属于:行为代码组
重置自定义计时器，与self.customTimer() resetCustomTimer:true

### teleportTo
#### teleportTo-代码简介
代码:teleportTo 中文释义:传送到 类型:unit ref 隶属于:行为代码组
传送到指定单位。teleportTo:self.customTarget1

### fireTurretXAtGround
#### fireTurretXAtGround-代码简介
代码:fireTurretXAtGround 中文释义:指定攻击地面炮塔 类型:字符串 隶属于:行为代码组
使用此炮塔攻击玩家所指定的地面。

### fireTurretXAtGround_withProjectile
#### fireTurretXAtGround_withProjectile-代码简介
代码:fireTurretXAtGround_withProjectile 中文释义:指定攻击地面抛射体 类型:字符串 隶属于:行为代码组
设定使用的抛射体，如果不设置则为炮塔默认的抛射体。

### fireTurretXAtGround_withTarget
#### fireTurretXAtGround_withTarget-代码简介
代码:fireTurretXAtGround_withTarget 中文释义:指定攻击目标 类型:unit ref/marker 隶属于:行为代码组
炮塔瞄准指示的单位或标记的位置发射

### fireTurretXAtGround_withOffset
#### fireTurretXAtGround_withOffset-代码简介
代码:fireTurretXAtGround_withTarget 中文释义:指定攻击地面坐标 类型:point 隶属于:行为代码组
攻击指定坐标所在地面，不需要手动选择

### fireTurretXAtGround_count
#### fireTurretXAtGround_count-代码简介
代码:fireTurretXAtGround_withTarget 中文释义:指定攻击地面数量 类型:number 隶属于:行为代码组
设置发射的抛射体数量，默认为1。fireTurretXAtGround_count:10

### fireTurretXAtGround_onlyOverPassableTileOf
#### fireTurretXAtGround_onlyOverPassableTileOf-代码简介
代码:fireTurretXAtGround_withTarget 中文释义:指定攻击地面类型 类型:enum 隶属于:行为代码组
设置手动选择的地面需要满足这种运动方式。列表：无，陆地，建筑，空军，水。两栖，跨悬崖，跨悬崖和度水。
NONE LAND BUILDING AIR WATER HOVER OVER_CLIFF OVER_CLIFF_WATER 


#### fireTurret-演示例子
手动选择攻击点:
```ini
[hiddenAction_fire]
fireTurretXAtGround:1
fireTurretXAtGround_onlyOverPassableTileOf:LAND
#只能点击地面
[turret_1]
projectile:1

[projectile_1]
```
指定攻击点:
```ini
[hiddenAction_fire]
fireTurretXAtGround:1
fireTurretXAtGround_onlyOverPassableTileOf:LAND
#只能点击地面
fireTurretXAtGround_withOffset: 0,0
#填的是相对坐标
fireTurretXAtGround_withProjectile:2
#使用抛射体2
fireTurretXAtGround_withTarget:self.parent
#攻击parent
[turret_1]
projectile:1
.............
.............
[projectile_1]
.............
.............
[projectile_2]
```
fireTurretXAtGround_withTarget同时只能有一个fireTurretXAtGround_withOffset。如果俩的没有则是手动选择攻击点。

当使用fireTurretXAtGround_withProjectile重新指定抛射体后，使用的不再是fireTurretXAtGround的炮塔的抛射体。

fireTurretX中的"X"是可以替换成数字。
```ini
[hiddenAction_fire]
fireTurret1AtGround:1
fireTurret1AtGround_onlyOverPassableTileOf:LAND
fireTurret1AtGround_withOffset: 0,0

fireTurret1AtGround:2
fireTurret1AtGround_onlyOverPassableTileOf:LAND
fireTurret1AtGround_withOffset: 0,0
[turret_1]
projectile:1
[turret_2]
projectile:2
[projectile_1]
[projectile_2]
```
### description
#### description-代码简介

代码:description 中文释义:显示文本介绍 类型:字符串 隶属于:行为代码组

支持%动态显示，其内容为点击action后显示的文本

### Message
#### Message-代码简介

代码:sendMessageTo 中文释义:接收message的对象 类型:unit 隶属于:行为代码组

将message发送给该对象

代码:sendMessageWithTags 中文释义:message附带的tag 类型:tagList 隶属于:行为代码组

与[core]的tags类似,以逗号分割每个tag,在接受单位中使用autoTriggerOnEvent:newMessage(withTag=xxx)接收

代码:sendMessageWithData 中文释义:message附带的数据 类型:variableList 隶属于:行为代码组

发送的数据名不是memory,但数据可以是memory

#### Message-演示例子
A单位：
```ini
[core]
@memory num:number

[hiddenAction_发送]
sendMessageTo:self.customTarget1
sendMessageWithTags:tag1,tag2
sendMessageWithData:data1="abc",data2=1,hp=self.hp,memory1=memory.num
```
> [!TIP] data1 data2这些都不用提前声明。A单位的self.customTarget1为B单位,data1为字符串,data2为数字1,hp为A单位的血量,memory1的值为num这个memory的值
B单位：
```ini
[hiddenAction_接受1]
#能够触发
autoTriggerOnEvent:newMessage(withTag="tag1")
showMessageToAllPlayers:%{eventSource}+eventData("data1",type="string")
#eventSource为发送该message的单位,即A单位(unit)。
#使用eventData("name",type="")获取该message附带的数据,name为该数据的名称(如data2，memory1)这里需要""括起来。
#type类型由A单位发送时决定
[hiddenAction_接受2]
#不能够触发，因为A单位发送的message没有附带tag3
autoTriggerOnEvent:newMessage(withTag="tag3")
showMessageToAllPlayers:ababab
```
|type类型如下 |存储的值类型 |
| -------- | ------------  |
|string      |字符串       |
|number      |整数         |
|float       |浮点数       |
|boolean     |布尔         |
|unit[]      |单位数组     |
|float[]     |浮点数组     | 
|number[]    |整数数组     |


# **[spawn unit] 刷兵序列组**

# **[placementRule_Name] 放置规则组**
## **折叠第5页**
该页已被折叠，点击其他选项卡可以再次展开。
<!-- tabs:end -->
# Page 6
<!-- tabs:start -->
# **[LogicBoolean] 逻辑序列组**
> [!ATTENTION] 由于这个组的特殊性，格式不标准，请勿参考这个组的写法。

### 前置知识

#### 布尔值
<font color=orange>布尔值</font>表达“真(true)”或“假(false)”的一个状态。在铁锈中，布尔值(`boolean`)被运用于逻辑判断。

#### 数据类型
数据类型指数据的种类，在铁锈中，不同的数据有不同的类型，不同的数据类型之间通常不能直接进行运算。

|常见数据类型英文 |存储的值类型 |
| -------- | ------------ |
| string   | 字符串       |
| number   | 整数         |
| float    | 浮点数(小数) |
| boolean  | 布尔值       |
| unit     | 单位         |
<!-- MarkDown表格必须有上方的分割线以告诉浏览器是表格 -->

#### 算数优先级
与数学中计算符一样，铁锈中算数运算符有优先级区别。`%`和`*`和`/`的优先级大于`+`和`-`。

### 比较运算符

#### 如果
代码:if 中文释义:如果
`if`是大部分逻辑运算的开头(select等不需要if)，用于在支持逻辑的键引入逻辑判断。

<!-- 若要连续嵌套，请直接使用Html原生代码 -->
<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
[action]
autoTrigger:if self.maxHp() > memory.emx_hp
```

#### 小于
代码:< 中文释义:小于<br>
小于用于在逻辑布尔值中比较两个数的大小，格式为`数据a < 数据b`，若`a<b`则整个式子的值为`true`，否则为`false`。

<!-- 自定义的提示框请使用原生Html进行套入 -->
<div class="alert callout note">
  <p class="title">
  <span class="icon icon-note"></span>要点指示:</p>
</div>


```ini
[action]
autoTrigger:if memory.a < memory.b
```

#### 大于
代码:> 中文释义:大于<br>
同上，格式为`数据a > 数据b`，若`a>b`则整个式子的值为`true`，否则为`false`。

#### 小于等于
代码:<= 中文释义:小于等于<br>
同上，若`a<=b`则整个式子的值为`true`，否则为`false`。

#### 大于等于
代码:>= 中文释义:大于等于<br>
同上，若`a>=b`则整个式子的值为`true`，否则为`false`。

#### 等于
代码:== 中文释义:等于<br>
> [!TIP] 请注意，铁锈中等于的符号为<font color=orange>==</font>，<font color=orange>=</font>在铁锈中用于赋值或参数。
> 
同上，若`a=b`则整个式子的值为`true`，否则为`false`。

#### 不等于
代码:!= 中文释义:不等于<br>
同上，若`a!=b`则整个式子的值为`true`，否则为`false`。

### 逻辑运算符

#### 且
代码:and 中文释义:且<br>
> [!TIP] <font color=orange>and</font>用于连接两个逻辑判断，只有在这两个逻辑判断的值都为<font color=orange>true</font>时，<font color=orange>and</font>的值才为true。
<br>

<!-- 自定义的提示框请使用原生Html进行套入 -->
<div class="alert callout note">
  <p class="title">
  <span class="icon icon-note"></span>要点指示:</p>
</div>
<!-- 并保证首尾留有一行换行以便Markdown正确解析 -->

```ini
[action]
autoTrigger:if memory.a < memory.b and memory.a > memory.c
# 在这个例子中，只有a小于b且a大于c时，自动触发才会被触发
```

#### 或
代码:or 中文释义:或<br>
> [!TIP] <font color=orange>or</font>用于连接两个逻辑判断，只要这两个逻辑判断的值有一个为<font color=orange>true</font>时，<font color=orange>or</font>的值就为true。

#### 非
代码:not 中文释义:非<br>
> [!TIP] <font color=orange>not</font>用于将某个逻辑判断的值取反，即`true`变`false`，`false`变`true`。

> [!NOTE] 多个逻辑运算符同时使用时，优先级为`not>and>or`，同时<font color=orange>支持使用括号改变运算优先级</font>。
<br>推荐<font color=orange>在不确定优先级时打括号</font>。

<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
[action]
autoTrigger:if (memory.a < memory.b or memory.a > memory.c) and not memory.a < memory.d
```

<!-- tabs:start -->
<!-- 换行两个空格 或者 <br> -->
#### **动动脑考考你**
#### 考考你，在上述这个例子中，满足什么条件才会触发？
#### **显示答案-#2**
#### 答案：a必须满足小于b和大于c中的一个，且a必须小于c，自动触发才会被触发。
<!-- tabs:end -->



### 算数运算符

#### 加
代码:+ 中文释义:加<br>

加用于将两个逻辑值相加，得到结果，格式为`数据a + 数据b`。

> [!NOTE] 不同数据类型通常<font color=orange>不能直接进行算数运算</font>，但在部分情况下，<font color=orange>number</font>和<font color=orange>float</font>类型可以混用（建议<font color=orange>所有数值全部使用float</font>来避免混淆）。

<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
[action]
autoTrigger:if (memory.a + memory.c) < memory.b
```

#### 减
代码:- 中文释义:减<br>

减用于将两个逻辑值相减，得到结果，格式为`数据a - 数据b`。

> [!NOTE] 对于<font color=orange>不满足交换律的运算符</font>，需要注意<font color=orange>运算优先级</font>是否正确。由于铁锈本身bug，<font color=orange>在数学上正确的优先级不一定在铁锈中正确</font>，因此可能出现减法顺序混乱等问题。
<br>为了避免可能的问题，请尽量在任何<font color=orange>不满足交换律的运算符</font>两边打上括号。

#### 乘
代码:* 中文释义:乘<br>

乘用于将两个逻辑值相乘，得到结果，格式为`数据a * 数据b`。

#### 除
代码:/ 中文释义:除<br>

除用于将两个逻辑值相除，得到结果，格式为`数据a / 数据b`。

#### 求余
代码:% 中文释义:求余(取模)<br>

求余用于获取两个逻辑值中，第一个除第二个的余数，格式为`数据a % 数据b`。
例如`7%3=1(7除3余1)`

### 单位统计

#### 通用统计关键字
单位统计中部分通用的关键字：
1. `greaterThan` 大于
2. `lessThan` 小于
3. `empty` 空
4. `full` 满
5. `equalTo` 等于

#### 内置参数
单位统计中部分内置参数返回代码（由于过于简单不单独列出）：
1. `self.hp()` 生命值
2. `self.maxHp()` 最大生命值
3. `self.energy()` 能量
4. `self.shield()` 护盾
5. `self.kills()` 击杀数
6. `self.maxEnergy()` 最大能量
7. `self.maxShield()` 最大护盾
8. `self.height()/self.x()` 高度
9. `self.ammo()` 弹药
10. `self.isAmmoEmpty()` 弹药为空(快捷方式:`self.ammo(empty=true)`)
11. `self.ammoIncludingQueued()` 包括队列中的弹药
12. `self.energyIncludingQueued()` 包括队列中的能量
13. `self.isEnergyFull()` 能量满(快捷方式:`self.energy(full=true)`)
14. `self.isEnergyEmpty()` 能量空(快捷方式:`self.energy(empty=true)`)
15. `self.isEnergyRecharing()` 能量充能中
16. `self.playerName()` 玩家名称
17. `self.teamName()` 队伍名称
18. `self.x(),self.y()` x,y坐标
19. `self.dir()` 方向
20. `self.priceCredits()` 金钱价格
21. `self.speed()` 当前速度
22. `self.maxMoveSpeed()` 最大速度
23. `self.id()` 单位id(每个单位的序号)
24. `self.builtAmount()` 建造数量
25. `self.complate()` 自身建造完成
26. `self.teamDefeatedTech()` 队伍失败
27. `self.teamWipedOut()` 队伍全部死亡
28. `self.teamVictory()` 队伍获胜
29. `self.queueSize()` 自身队列大小
30. `self.transportingCount()` 运输数量
31. `self.isAttacking()` 在攻击
32. `self.isOnNeutralTeam()` 是中立队伍
33. `self.isControlledByAI()` 是AI控制
34. `self.isInMap()` 在地图内
35. `game.mapWidth()` 地图宽度
36. `game.mapHeight()` 地图高度

#### self.hasResources()
代码:self.hasResources() 中文释义:有资源 返回类型:boolean<br>

`self.hasResources()` 用于检测自身某资源是否大于等于某数值，格式为`self.hasResources(资源名=数值)`

<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
self.hasResources(hp=10,energy=5) 
```

#### self.resource()
代码:self.resource() 中文释义:资源 返回类型:float<br>

与`self.hasResources()`不同，`self.resource()`直接返回某个资源的数值。格式为`self.resource(type="资源名")`。

> [!NOTE] 引用资源时，请确保<font color=orange>这个资源在这个单位定义过</font>，否则会报错。

#### self.resource.RESOURCE_TYPE
代码:self.resource.RESOURCE_TYPE 中文释义:资源 返回类型:float<br>

`self.resource.RESOURCE_TYPE`是`self.resource()`的快捷方式。格式为`self.resource.资源名称`，引用更加方便。

#### self.isResourceLargerThan()
代码:self.isResourceLargerThan() 中文释义:资源是否大于 返回类型:boolean<br>

> [!ATTENTION] 此代码为老旧解决方案，不推荐使用。

`self.isResourceLargerThan()`用于比较两种资源的大小。格式为`self.isResourceLargerThan(source=资源A,compareTarget=资源B,byMoreThan=大于资源B数量,multiplyTargetBy=资源B倍数)`

#### self.numberOfQueuedWaypoints()
代码:self.numberOfQueuedWaypoints() 中文释义:队列中路径点数量 返回类型:float<br>

`self.numberOfQueuedWaypoints()`用于返回队列中路径点的数量。格式为`self.numberOfQueuedWaypoints(type="路径点类型")`。

### 单位计时

#### self.hasTakenDemage()
代码:self.hasTakenDemage() 中文释义:受到伤害 返回类型:bool<br>

> [!NOTE] 单位计时部分能返回到最小时间精度为<font color=orange>0.1秒</font>。

`self.hasTakenDemage()`用于获取指定时间内是否收到伤害。使用`self.hasTakenDemage(withInSecounds=多少秒内,laterThanSecounds=多少秒后)`格式时，返回bool类型。

#### self.timeAlive()
代码:self.timeAlive() 中文释义:存活时间 返回类型:float/bool<br>

`self.timeAlive()`用于获取单位存活时间。使用`self.timeAlive(withInSecounds=多少秒内,laterThanSecounds=多少秒后)`格式时，返回bool类型（是否符合此范围）；使用`self.timeAlive()`格式时，返回float类型。（更推荐使用后者）

#### self.lastConverted()
代码:self.lastConverted() 中文释义:最后转换时间 返回类型:float/bool<br>

`self.timeAlive()`用于获取单位上次转换后的时间。使用`self.lastConverted(withInSecounds=多少秒内,laterThanSecounds=多少秒后)`格式时，返回bool类型（是否符合此范围）；使用`self.lastConverted()`格式时，返回float类型。

#### self.customTimer()
代码:self.customTimer() 中文释义:自定义计时器 返回类型:float/bool<br>

`self.timeAlive()`用于获取自定义计时器的时间。使用`self.customTimer(withInSecounds=多少秒内,laterThanSecounds=多少秒后)`格式时，返回bool类型（是否符合此范围）；使用`self.customTimer()`格式时，返回float类型。

<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
[action]
autoTrigger:if self.customTimer() >= 10
resetCustomTimer:true
showMessageToPlayers:10秒过去了
```

### 杂项

#### thisActionIndex/index()
代码:thisActionIndex/index() 中文释义:索引 返回类型:float(number)<br>

`thisActionIndex/index()`是`alsoTriggerActionRepeat`中当前的索引。例如`alsoTriggerActionRepeat:10`，那么index在10次循环中分别为1-10。

#### self.hasFlag()
代码:self.hasFlag() 中文释义:有标志 返回类型:boolean<br>

`self.hasFlag()`用于获取自身是否有<font color=orange>标志</font>，格式为`self.hasFlag(id=数字)`。

> [!NOTE] 不同于<font color=orange>标签（tag）</font>，<font color=orange>标志（flag）</font>是内置的一些<font color=orange>布尔值</font>，无需定义即可直接使用。<br>
> 标签的添加方法为<font color=orange>[action]addResource:flag=1,3-7,13</font>，且只支持<font color=orange>0-31</font>，标签的移除方法与之相反。

#### self.tags()
代码:self.tags() 中文释义:有标签 返回类型:boolean<br>

`self.tags()`用于检测自身是否有某个标签，格式为`self.tags(includes="标签")`。

#### self.globalTeamTags/self.hasGlobalTeamTags()
代码:self.globalTeamTags/self.hasGlobalTeamTags() 中文释义:有全局标签 返回类型:boolean<br>

`self.globalTeamTags/self.hasGlobalTeamTags()`用于检测队伍内是否有某个全局标签，格式为`self.globalTeamTags/self.hasGlobalTeamTags(includes="标签")`

#### self.numberOfConnections()
代码:self.numberOfConnections() 中文释义:连接数 返回类型:float<br>

隐藏代码，用途不明。

#### self.numberOfAttachedUnits()
代码:self.numberOfAttachedUnits() 中文释义:有附属物 返回类型:int/bool<br>

`self.numberOfAttachedUnits()`用于获取自身附属物数量，可以通过`self.numberOfAttachedUnits(withTag="标签")`格式来限制附属物标签。

#### self.hasActiveWaypoint()
代码:self.hasActiveWaypoint() 中文释义:有活动的路径点 返回类型:bool<br>

`self.hasActiveWaypoint()`用于获取自身有无活动的路径点，格式为`self.hasActiveWaypoint(type="路径点类型")`。

> [!NOTE] 路径点类型可以是<font color=orange>move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget</font>。

#### self.transportingUnitWithTags()
代码:self.transportingUnitWithTags() 中文释义:运输单位中有此标签 返回类型:bool<br>

`self.transportingUnitWithTags()`用于检测自身运输的单位中是否有含有特定标签的单位，格式为`self.transportingUnitWithTags(includes="标签")`。

#### self.hasParent()
代码:self.hasParent() 中文释义:有父单位 返回类型:bool<br>

`self.hasParent()`用于检测自身是否有父单位，且可以通过`self.hasParent(hasTag="标签")`来筛选父单位标签。<br>
通常情况下，附属和被运输单位会有父单位。

#### self.numberOfUnitsInTeam()
代码:self.numberOfUnitsInTeam() 中文释义:队伍中此单位数量 返回类型:float<br>

`self.numberOfUnitsInTeam()`(可省略`self.`)用于检测自身队伍符合条件的单位数量，格式为`self.numberOfUnitsInTeam(withTag="标签",withinRange=此距离内,incompleteBuildings=包含不完整建筑,factoryQueue=包含工厂队列)`

<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
self.numberOfUnitsInTeam(withTag="air",withInRange=500,factoryQueue=true)
#有air标签，500范围内，包含工厂队列中的单位
```

#### self.numberOfUnitsInAllyNotOwnTeam()
代码:self.numberOfUnitsInAllyNotOwnTeam() 中文释义:盟友队伍中此单位数量 返回类型:float<br>

`self.numberOfUnitsInAllyNotOwnTeam()`与`self.numberOfUnitsInTeam()`用法完全相同，区别仅在于前者的查询范围是盟友中。

#### self.numberOfUnitsInEnemyTeam()
代码:self.numberOfUnitsInEnemyTeam() 中文释义:敌方队伍中此单位数量 返回类型:float<br>

`self.numberOfUnitsInEnemyTeam()`与`self.numberOfUnitsInTeam()`用法完全相同，区别仅在于前者的查询范围是敌方中。

#### self.numberOfUnitsInNeutralTeam()
代码:self.numberOfUnitsInNeutralTeam() 中文释义:中立队伍中此单位数量 返回类型:float<br>

`self.numberOfUnitsInNeutralTeam()`与`self.numberOfUnitsInTeam()`用法完全相同，区别仅在于前者的查询范围是中立中。

#### self.numberOfUnitsInAggressiveTeam()
代码:self.numberOfUnitsInAggressiveTeam() 中文释义:敌对中立队伍中此单位数量 返回类型:float<br>

`self.numberOfUnitsInAggressiveTeam()`与`self.numberOfUnitsInTeam()`用法完全相同，区别仅在于前者的查询范围是敌对中立中。

#### self.numberOfUnitsInAllyTeam()
代码:self.numberOfUnitsInAllyTeam() 中文释义:所有队伍中此单位数量 返回类型:float<br>

`self.numberOfUnitsInAllyTeam()`与`self.numberOfUnitsInTeam()`用法完全相同，区别仅在于前者的查询范围是所有中。

#### self.hasUnitInTeam()
代码:self.hasUnitInTeam() 中文释义:队伍中有单位 返回类型:bool<br>

`self.hasUnitInTeam()`与`self.numberOfUnitsInTeam()`格式完全相同，区别在于前者仅查询队伍中有无符合条件的单位，并返回`boolean`类型。

#### self.noUnitInTeam()
代码:self.noUnitInTeam() 中文释义:队伍中无单位 返回类型:bool<br>

`self.noUnitInTeam()`与`self.numberOfUnitsInTeam()`格式完全相同，区别在于前者仅查询队伍中是否无符合条件的单位，并返回`boolean`类型。

#### self.readUnitMemory()
代码:self.readUnitMemory() 中文释义:读取单位内存 返回类型:跟随memory类型<br>

`self.readUnitMemory()`用于获取指定单位内存，格式为`self.readUnitMemory("内存名",type="类型",index=下标(仅当类型是数组时可选填写))`。

> [!NOTE] 在<font color=orange>跨单位读取数组</font>时，如果下标使用了逻辑，无论逻辑值都会返回第零项，<font color=orange>为游戏bug</font>，解决方法可以参考<br>https://www.bilibili.com/video/BV17v4y1r7dV (感谢十山月)<br>

<div class="alert callout tip">
<p>演示例子:</p>
</div>

```ini
if parent.readUnitMemory("boostTarget", type="unit") == self
#如果 父单位内存boostTarget的值等于自己
```




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