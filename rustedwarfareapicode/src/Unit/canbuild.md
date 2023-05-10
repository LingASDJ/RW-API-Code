---
outline: deep
---

# **[canBuild]建造组**

### [canBuild_NAME]
#### [canBuild_NAME]-代码简介
代码: [canBuild_NAME] 中文释义:可建造_名字 类型:字符型 
canBuild_NAME = 组名 如果不填写此组名 将默认拥有一个命名为空格的组名。

::: tip
建议将NAME命名为此组的描述或可建造单位的昵称。<br>
以便于阅读代码。
:::

::: code-group
```bash [allureluoli]
[canBuild_造小坦]
[canBuild_SmallTank]
[canBuild_建造科技]
```
:::

::: danger
[canBuild_NAME] 中的NAME命名禁止重复，否则会引发报错。<br>
其中下划线作为分隔符也是重要的，如果没有将引发报错。
:::

#### [canBuild_NAME]-演示例子
```ini
[canBuild_SmallTank]    #英文命名
[canBuild_小坦克]   #中文命名
[canBuild_%TK]  #符号命名
[canBuild_P P] #字母与空格的组合也会被视为单独的组名
[canBuild_/(ㄒoㄒ)/~~] #多种字符
[canBuild_🆒] #甚至是emoji
[canBuild_ ] #仅用一个空格作为组名 但是多个空格会被视为和一个空格相同
```

### name

#### name-代码简介
代码:name 中文释义:名字 类型:字符型
::: danger
如果没有name而填入其他代码将引发报错，且name:不能不填<br>
需要为空可以填写 name:NONE
:::
#### name-用法
name应填写单位[core]内中 name属性的名称,
它决定了需要建造哪个单位。

::: tip
注意！
如果你填了两个相同的name，建造栏会自动合并，建造栏中不会出现两个相同的单位。<br>
其中根据代码自上而下的先后顺序判断优先级。
:::

#### name-示例
```ini
[canBuild_SmallTank]    
name: SmallTank

[canBuild_小坦克]   
name: 小坦克
```

### pos
#### pos-代码简介
代码:pos 英文全称:position 中文释义:名次 类型:浮点数
#### pos-用法
pos:属性数值表示排序的序号，其中越小的越靠前。
::: info
如果没有填写pos，将默认为1，并按照代码顺序依次递增。<br>
其中数值可以为小数，可以为负，也可以为整数。
:::
::: warning
小数点后位数过长将会影响判断，建议用整数。
:::

#### pos-演示例子
```ini
[canBuild_SmallTank]  
pos:0.1

[canBuild_小坦克]   
pos:-2
```

### tech
#### tech-代码简介
代码:tech 英文全称:technology 中文释义:科技 类型:整数
#### tech-用法
填写数字设置单位的科技等级，共有3个级别，1级GUI显示为绿色，2、3级显示为黄色。
::: info
与[core]中的科技等级不同的是，超过3或者为负也不会报错。<br>
而且会受到原单位科技等级的影响，优先级低于原单位设置的科技等级。
:::
#### tech-演示例子
```ini
[canBuild_SmallTank]    
tech: -1

[canBuild_小坦克]   
tech: 2
```

### forceNano
#### forceNano-代码简介
代码:forceNano 中文释义: 建造方式 类型: 布尔值
#### forceNano-用法
当属性设置为true时，则将目标当作是建筑物建造。 （即使是一个单位）
::: tip
默认为 false。<br>
对于没有建筑能力的单位将会在地图上凭空生成一个虚影而不会继续建造。
:::
#### forceNano-演示例子
```ini
[canBuild_SmallTank]    
forceNano: true
```

### isVisible
#### isVisible-代码简介
代码:isVisible 中文释义: 可见条件 类型: 逻辑布尔值
#### isVisible-用法
当属性设置为true时，则使单位建造可见。
::: tip
其中可以将属性设置为条件判断语句。<br>
如果满足条件，则从界面中显示此单位。<br>
默认为true。
:::
#### isVisible-演示例子
```ini
[canBuild_SmallTank]    
isVisible: if self.hp() > 50
```

### isLocked
#### isLocked-代码简介
代码:isLocked 中文释义: 锁定 类型: 逻辑布尔值
#### isLocked-用法
当属性设置为true时，则使单位锁定。
::: tip
其中可以将属性设置为条件判断语句。<br>
如果满足条件，则使单位锁定。<br>
默认为false。
:::
#### isLocked-演示例子
```ini
[canBuild_SmallTank]    
isLocked: if self.hp() < 50
```

### isLockedMessage
#### isLockedMessage-代码简介
代码:isLockedMessage 中文释义: 锁定消息 类型: 字符串
#### isLockedMessage-用法
填写被锁定时显示的文本。
::: tip
可以用来告知玩家被锁定原因。<br>
能够通过转义字符 <font color=red>\n</font> 实现文本换行。
:::
#### isLockedMessage-演示例子
```ini
[canBuild_SmallTank]    
isLockedMessage: 因为你太菜这个单位不给你用嗷。\n 想用的话就努力变强吧！
```

### isLockedMessage_{LANG} <br>
#### isLockedMessage-{LANG}代码简介
代码:isLockedMessage 中文释义: 锁定消息 类型: 字符串
是isLockedMessage的多语言版本，用于设置在不同语言下显示的锁定内容，用法一致。

::: tip
将{LANG}替换为语言文字的缩写即可，例如：<br>
zh 代表简体中文，es，代表英文。
:::
```ini
[canBuild_SmallTank]    
isLockedMessage_es: You are BAKA! \n if think use it ,go get stronger.
```

### isLockedAlt
#### isLockedAlt-代码简介
代码:isLockedAlt 中文释义: 另外的锁定 类型: 逻辑布尔值
#### isLockedAlt-用法
和isLocked完全一样，只是为了多一个锁定的条件。
#### isLockedAlt-演示例子
```ini
[canBuild_SmallTank]
isLockedAlt: if self.energy(greaterThan=90)
```

### isLockedAltMessage
#### isLockedAltMessage-代码简介
代码:isLockedAltMessage 中文释义: 另外的锁定消息 类型: 字符串
#### isLockedAltMessage-用法
和isLockedMessage的完全一样，只是为了表达另一个的原因。
用来描述isLockedAlt。
#### isLockedAltMessage-演示例子
```ini
[canBuild_SmallTank]    
isLockedAltMessage: 还有因为这个单位丑拒。
```

### isLockedAlt2
#### isLockedAlt2-代码简介
代码:isLockedAlt2 中文释义: 另外的锁定2 类型: 逻辑布尔值
#### isLockedAlt2-用法
和isLocked完全一样，评价就是梅开二度。
#### isLockedAlt2-演示例子
```ini
[canBuild_SmallTank]
isLockedAlt2: if self.energy() < 100
```

### isLockedAlt2Message
#### isLockedAlt2Message-代码简介
代码:isLockedAlt2Message 中文释义: 另外的锁定消息2 类型: 字符串
#### isLockedAlt2Message-用法
和isLockedMessage的完全一样。
用来描述isLockedAlt2。
#### isLockedAlt2Message-演示例子
```ini
[canBuild_SmallTank]    
isLockedAlt2Message: 第三个原因是我觉得你应该把雪糕分我一半吃。
```

### addResources
#### addResources-代码简介
代码:addResources 中文释义: 增加资源 类型: 资源
#### addResources-用法
填写所需的资源名和数量，在放置建筑物或生产单位时，将这些资源添加到自身中。
::: tip
使用逗号分隔，可以添加多种资源。
:::
#### addResources-演示例子
```ini
[canBuild_SmallTank]    
addResources: ammo=5, setFlag=1
```

### price
#### price-代码简介
代码:price 中文释义: 价格 类型: 资源
#### price-用法
填写所需的资源名和数量，会覆盖默认需要的资源和价格。
::: tip
用处如建造一个建筑时候附送一个单位。此代码可用设定为两者价钱之和,矿场600,送矿车1400,而建造时花2000,送1400,卖600,可避免玩家刷钱。（抄自HX代码表）
:::
#### price-演示例子
```ini
[canBuild_SmallTank]    
price: 5000,ammo=5
```

### isGuiBlinking
#### isGuiBlinking-代码简介
代码:isGuiBlinking 中文释义: 界面闪烁 类型: 逻辑布尔值
#### isGuiBlinking-用法
为true时在UI中拥有闪烁效果。
::: tip
可以添加条件判断语句。<br>
满足某些条件时闪烁此UI，用来提示某些单位可以建造了。
:::
#### isGuiBlinking-演示例子
```ini
[canBuild_SmallTank]    
isGuiBlinking:true
```

