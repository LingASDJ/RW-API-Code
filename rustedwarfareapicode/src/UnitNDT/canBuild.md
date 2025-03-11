# canBuild
## name
translation:名字
<br>type:string(s)
<br>该单位可以创建的单位名列表。可以是建筑物或单位。
## pos
translation:排序
<br>type:float
<br>此单位在用户界面中排序，越小越靠上。
## tech
translation:科技
<br>type:integer
<br>没啥用。科技等级。通常只会影响此单位界面中的颜色。默认为1，只能填1、2、3。
## forceNano
translation:建造方式
<br>type:bool
<br>如果为true，则将目标当作是建筑物建造。 （即使是一个单位）
## isVisible
translation:可见条件
<br>type:LogicBoolean
<br>如果满足条件，则从界面中显示此单位。比如用于科技树。
## isLocked
translation:锁定
<br>type:LogicBoolean
<br>如果满足条件，则从界面中锁定此单位。比如用于科技树，或是限造单位。
## isLockedMessage
translation:锁定原因描述
<br>type:string
<br>告知玩家单位为何被锁定。
## isLockedMessage_[Language]
translation:锁定文本多语言
<br>type:string
<br>设置锁定文本在不同语言下显示的内容。语言代码点击此处。
## isLockedAlt
translation:更多锁定原因
<br>type:LogicBoolean
<br>另一个被锁定原因。只是允许显示不同的消息。
## isLockedAltMessage
translation:锁定原因描述
<br>type:string
<br>另一个被锁定原因描述。
## isLockedAlt2
translation:更多锁定原因2
<br>type:LogicBoolean
<br>更多的锁定原因…
## isLockedAlt2Message
translation:锁定文本2描述
<br>type:string
<br>更多的锁定描述…
## addResources
translation:增加资源
<br>type:price(s)
<br>在放置建筑物或生产单位时，将这些资源添加到自身中。
## price
translation:价格
<br>type:price(s)
<br>覆盖单位/建筑物的价格。 默认为单位内置的价格。
用处如建造一个建筑时候附送一个单位。此代码可用设定为两者价钱之和,矿场600,送矿车1400,而建造时花2000,送1400,卖600,可避免玩家生成钱。
## isGuiBlinking
translation:界面闪烁
<br>type:LogicBoolean
<br>如果为true，则在UI中生成闪烁效果。
## extraLagHidingInUI
translation:消除ui额外延迟
<br>type:bool
<br>用于联机，在UI中立即更新而不需要从服务器确认的等待时间。
## type
translation:显示类型
<br>type:string
<br>与行动节的displayType用法相同
