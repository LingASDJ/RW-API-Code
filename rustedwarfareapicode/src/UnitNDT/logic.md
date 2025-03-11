# logic
## true
translation:是
<br>type:boolean
<br>满足/是/对/为真/1，不建议使用1或0，不是所有代码都支持。
## false
translation:非
<br>type:boolean
<br>不满足/非/错/假/0
## if
translation:如果
<br>type:IfEvent
<br>所有逻辑布尔值使用if开始，除非仅使用true/false
## and
translation:和
<br>type:connect
<br>需要and两边条件都满足执行。
## or
translation:或者
<br>type:connect
<br>or两边条件满足一个即可执行。
## not
translation:非
<br>type:connect
<br>将逻辑结果取反。
## self.isUnderwater()
translation:自身在水下
<br>type:bool
<br>单位在水下，深水单位如潜艇。
## self.underwater()
translation:自身在水下
<br>type:string
<br>同上
## self.gound()
translation:自身在地上
<br>type:string
<br>单位在陆地上
## self.ground()
translation:自身在地上
<br>type:string
<br>同上
## self.isAtGroundHeight()
translation:自身在地面高度
<br>type:bool/float
<br>单位在地面,触发范围是-1~4，如果您单位高度在不断变化时超过此值的话，此条不一定触发，因为铁锈执行频率默认是1s.
等同于self.gound()或self.ground()
## self.flying()
translation:自身在天上
<br>type:string
<br>同下
## self.isFlying()
translation:自身在天上
<br>type:bool
<br>如果单位在天上飞行，则执行。
## self.isMoving()
translation:自身在移动
<br>type:bool
<br>如果自身在移动则执行。
## self.isAtTopSpeed()
translation:自身到最高速度
<br>type:bool
<br>如果到达最高速度则执行。等同self.maxspeed()
## self.isInWater()
translation:自身在水中
<br>type:bool
<br>如果自身在水中则执行。等同于self.inwater()。
## self.inWater()
translation:自身在水中
<br>type:bool
<br>如果自身在水中则执行。等同于self.isinwater()。
## self.isOverwater()
translation:自身在水上
<br>type:bool
<br>如果自身投影在水面这种地形则执行。
## self.overWater()
translation:自身在水上
<br>type:bool
<br>同上
## self.isOverLiquid()
translation:自身在液体上
<br>type:bool
<br>如果自身在液体则执行。岩浆算为液体。
## self.isOverClift()
translation:自身在悬崖上
<br>type:bool
<br>如果自身在悬崖上则执行。等同self.isOverCliff()
## self.isOverPassableTile()
translation:自身在地块类型上
<br>type:bool
<br>如果自身在这类通行地块上则执行，类型：无、陆地、建筑、空中、水面、两栖、跨悬崖、跨水和悬崖
NONE、LAND、BUILDING、AIR、WATER、HOVER、OVER_CLIFF、OVER_CLIFF_WATER
## self.isOverOpenLand()
translation:自身在开阔地带
<br>type:bool
<br>如果自身在开阔地带则执行。self.isOverPassableTile（type ='LAND'）的快捷方式
## self.height()
translation:自身高度
<br>type:bool/float
<br>如果自身在特定高度则执行。参数:greaterThan,lessThan,equalTo,empty,full(参数，超过，少于，等于，空，满))
## self.hasResources()
translation:自身有资源
<br>type:bool/resource ref
<br>可以检查多种资源（所有价格参数）
## self.resource()
translation:自身资源
<br>type:bool/resource ref
<br>检查单个资源条件。（参数：greaterThan,lessThan,equalTo）参数，超过，少于，等于
## self.resource.RESOURCE_TYPE
translation:自身资源类型
<br>type:bool/resource ref
<br>此为快捷方式，可直接使用，原代码为self.resource(type='RESOURCE_TYPE')
## self.isResourceLargerThan()
translation:自身资源大于
<br>type:bool/compare
<br>比较两个资源，注意，multiplyTargetBy不造成资源改变。(参数：来源，比较目标，超过，乘数 source=x, compareTarget=x, byMoreThan=x, multiplyTargetBy=x)
## self.maxHp()
translation:自身最大血量
<br>type:bool/integer
<br>自身最大血量条件。
## self.hp()
translation:自身血量
<br>type:bool/float
<br>自身血量条件。参数:greaterThan,lessThan,equalTo,empty,full(超过，少于，等于，空，满)
## self.ammo()
translation:自身弹药
<br>type:bool/integer
<br>自身弹药条件。参数:greaterThan,lessThan,equalTo,empty,full(参数，超过，少于，等于，空，满)
## self.maxShield()
translation:自身最大护盾
<br>type:bool/integer
<br>自身最大护盾
## self.maxEnergy()
translation:自身最大能量
<br>type:bool/integer
<br>自身最大能量
## self.isEnergyRecharging()
translation:自身正在充能
<br>type:bool
<br>自身正在充能
## self.isAmmoEmpty()
translation:自身弹药空
<br>type:bool
<br>自身弹药为空。self.ammo(empty=true)的快捷方式
## self.ammoIncludingQueued()
translation:自身弹药包括队列
<br>type:bool/integer
<br>自身弹药数量，包括还在队列中的。参数:greaterThan,lessThan,equalTo,empty,full(参数：大于，小于，等于，空，满)
## self.energy()
translation:自身能量
<br>type:bool/float
<br>自身能量数值。参数:greaterThan,lessThan,equalTo,empty,full(参数，超过，少于，等于，空，满)
## self.energyIncludingQueued()
translation:自身能量包括队列
<br>type:bool/float
<br>自身能量数值，包括还在队列中的。(参数:greaterThan,lessThan,equalTo,empty,full)参数：大于，小于，等于，空，满
## self.isEnergyFull()
translation:自身能量满
<br>type:bool
<br>自身能量为满。self.energy(full=true)的快捷方式
## self.isEnergyEmpty()
translation:自身能量空
<br>type:bool
<br>自身能量为空。self.energy(empty=true)的快捷方式。
## self.shield()
translation:自身护盾
<br>type:bool/float
<br>自身护盾数值。(参数:greaterThan,lessThan,equalTo,empty,full)参数：大于，小于，等于，空，满
## self.kills()
translation:自身杀敌数
<br>type:bool/integer
<br>自身杀敌数量。(参数:greaterThan,lessThan,equalTo)（参数：大于，小于，等于）
## self.queueSize()
translation:自身队列量
<br>type:bool/integer
<br>自身队列数量。(参数:greaterThan,lessThan,equalTo,empty,full,withActionTag)参数：大于，小于，等于，空，满，有行动标签
## self.id()
translation:自身id
<br>type:bool/integer
<br>返回自身的单位id，每个单位的id都不一样，如果id小的死了，后面生成的单位就会占用那个id
## self.teamId()
translation:自身队伍id
<br>type:bool/team id
<br>返回单位或标记的团队 ID。 从0开始。
## self.playerName()
translation:玩家名称
<br>type:bool/string
<br>返回游戏中玩家的昵称，类型为字符串
## self.teamName()
translation:队伍名称
<br>type:bool/string
<br>返回自身队伍的名称，一般情况下，铁锈默认的都是ABCDEF
## self.x(), self.y(), self.z()
translation:自身坐标分量
<br>type:bool/float
<br>返回单位的坐标分量
## self.dir()
translation:自身角度
<br>type:bool/float
<br>返回单位的方向
## self.priceCredits()
translation:自身资源价格
<br>type:bool/integer
<br>返回单位的资源价格
## self.hasFlag()
translation:自身有标志
<br>type:bool
<br>自身拥有标志。可用通过增加资源和价格修改。（参数：id = 0-31/[logicNumber]），使用addResources在action中更改此vaule
## self.tags()
translation:自身有标签
<br>type:bool
<br>自身拥有标签。等同self.hasTags()
## self.hasTags()
translation:自身有标签
<br>type:bool
<br>自身拥有标签。等同self.tags()
## self.globalTeamTags()
translation:有全局标签
<br>type:bool
<br>有全局标签，(parameters: includes)参数:包括
## self.transportingCount()
translation:自身运输数量
<br>type:bool/integer
<br>载具运输单位数量(parameters: greaterThan, lessThan,equalTo,empty)（参数：大于，小于，等于，为空）
## self.numberOfAttachedUnits()
translation:自身子单位数量
<br>type:bool
<br>自身有子单位数量。（withTag,greaterThan,lessThan,equalTo）参数:标签，大于、小于、等于
## self.isAttacking()
translation:自身在攻击
<br>type:bool
<br>单位正在攻击。
## self.hasActiveWaypoint()
translation:自身有活动的路径点
<br>type:bool
<br>单位当前活动的路径点为此类型。类型=路径点类型。（[type = WAYPOINT_TYPE]）
## self.transportingUnitWithTags()
translation:自身运输单位有标签
<br>type:bool
<br>自身运输单位有标签(parameters: includes)参数:包括
## self.isTransportUnloading()
translation:自身在卸载单位
<br>type:bool
<br>卸载单位时
## self.hasParent()
translation:自身有父单位
<br>type:bool
<br>用于子单位和载员逻辑。有父单位时执行。可选参数:需要标签。withTag ="unit"
## self.hasTakenDamage()
translation:受到伤害
<br>type:bool
<br>单位受到伤害。参数：几秒内，几秒后。(parameters:withinSeconds=X,laterThanSeconds=X)
## self.timeAlive()
translation:存活时间
<br>type:bool/time(s)
<br>单位存活时间。参数：几秒内，几秒后。(parameters:withinSeconds=X,laterThanSeconds=X)
## self.lastConverted()
translation:最后转换时间
<br>type:bool/time(s)
<br>单位最后转换时间。参数：几秒内，几秒后。(parameters:withinSeconds=X,laterThanSeconds=X)
## self.customTimer()
translation:自身自定义计时器
<br>type:bool/time(s)
<br>自身自定义计时器。参数：几秒内，几秒后。(parameters:withinSeconds=X,laterThanSeconds=X)
## self.isOnNeutralTeam()
translation:自身在中立队伍
<br>type:bool
<br>自身在中立队伍。
## numberOfUnitsInTeam()
translation:队伍中此单位数量
<br>type:bool/integer
<br>玩家自身拥有单位数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue)
参数：标签，超过，少于，范围，建造中，队列中
## self.numberOfUnitsInAllyTeam()
translation:我方有单位数量
<br>type:bool/integer
<br>我方拥有此单位的数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue)
## self.numberOfUnitsInAllyNotOwnTeam()
translation:盟友有单位数量
<br>type:bool/integer
<br>盟友拥有此单位的数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue)
## numberOfUnitsInEnemyTeam()
translation:敌人有单位数量
<br>type:bool/integer
<br>敌人拥有此单位的数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue)
## numberOfUnitsInNeutralTeam()
translation:中立有单位数量
<br>type:bool/integer
<br>中立队伍拥有单位数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue)
## numberOfUnitsInAggressiveTeam()
translation:敌对中立拥有单位数量
<br>type:bool/integer
<br>特殊的“对所有人都有侵略性”的队伍,这与numberOfUnitsInEnemyTeam不同.(参数:withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue
## numberOfUnitsInAllTeams()
translation:所有队伍拥有单位数量
<br>type:bool/integer
<br>所有队伍拥有单位数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue)
## self.hasUnitInTeam()
translation:自身队伍有单位
<br>type:bool
<br>自身队伍拥有单位数量。(参数:withTag，withinRange，incompleteBuildings，factoryQueue)numberOfUnitsInTeam的别名
## self.noUnitInTeam()
translation:自身队伍无单位
<br>type:bool
<br>自身队伍单位数量不满足。(参数:withTag，withinRange，incompleteBuildings，factoryQueue)numberOfUnitsInTeam的别名
## self.isInMap()
translation:自身在地图内
<br>type:bool
<br>判断自身是否在地图内：地图外指那些黑色的边缘外面
## game.mapWidth()
translation:正在游戏的地图宽度
<br>type:bool/float
<br>检测正在游戏的地图宽度
## game.mapHeight()
translation:正在游戏的地图高度
<br>type:bool/float
<br>检测正在游戏的地图高度
## self.isReversing()
translation:自我正在反转
<br>type:bool
<br>逻辑布尔值
## self.isControlledByAI()
translation:自身属于AI控制
<br>type:bool
<br>单位归属于AI所属方控制。
## self.readUnitMemory()
translation:读取单位内存
<br>type:bool/memory type
<br>(name:string, type:string{boolean,unit,float,string}, [default])
注：从1.15p11更新了数组后，更新三个数组的引用方式，以及数组条件判断
数组引用方式一：self.readUnitMemory('numArray', type='number', index=<value:number>)
数组引用方式二：self.readUnitMemory('numArray', type='float[]')[<value:number>]
数组引用方式三：self.readUnitMemory('numArray', type='float[]').get(self.hp)
关于数组其他函数：
self.readUnitMemory('numArray', type='float[]').size()
self.readUnitMemory('numArray', type='float[]').length()
self.readUnitMemory('numArray', type='float[]').contains(self.hp)
## self.eventData()
translation:事件数据
<br>type:bool/message data type
<br>与sendMessageWithData连用，从严格意义上来讲，这个key并不属于内存(name:string, type:string{boolean,unit,float,string}, [default])
## memory.NAME
translation:内存
<br>type:bool/memory type
<br>使用当前defineUnitMemory以及@memory类型读取自身的快捷方式。 不能在其他单元上使用，为此使用 readUnitMemory。 不要调用自身。
## memory.NAME[<Array_Lower_Limit>]
translation:返回内存数组
<br>type:bool/memory array type
<br>使用当前defineUnitMemory以及@memory类型读取自身的快捷方式。 不能在其他单元上使用，为此使用 readUnitMemory。 不要调用自身。
## memory.MEMORY_NAME.size()
translation:数组内存大小
<br>type:bool/integer
<br>对于类型是数组的内存使用，告诉你当前数组有几个不同的值
## memory.MEMORY_NAME.length()
translation:数组内存长度
<br>type:bool/integer
<br>对于类型是数组的内存使用，告诉你当前数组有几个不同的值
## memory.MEMORY_NAME.get()
translation:数组内存获取
<br>type:bool/index
<br>括号里填logic或者integer，返回该索引所代表的值
## memory.MEMORY_NAME.contains()
translation:数组内存目录监测
<br>type:bool/logic
<br>填与内存类型相应的值，也可以填logic，用于检测数组里面有没有该值，如果有则返回TRUE，否则返回FALSE
## self.numberOfQueuedWaypoints()
translation:自身某种路径点的队列数量
<br>type:bool/integer
<br>小括号里写路径点种类(parameters: greaterThan, lessThan,equalTo,empty,full)（参数：大于，小于，等于，为空，为满）
## self.speed()
translation:自身速度
<br>type:bool/float
<br>Current unit speed（目前的单位速度）
## self.maxspeed()
translation:自身达到最大速度
<br>type:bool
<br>单位已经到达单位所能到达的最大速度
## self.isAtTopSpeed()
translation:自身到达最大速度
<br>type:bool
<br>单位已经到达单位所能到达的最大速度
## self.builtAmount()
translation:自身建造数量
<br>type:bool/integer
<br>(似乎不包括使用autoTrigger建造的数量)How much this unit is built.  1  when complete. Note only events trigger on incomplete units, not autoTrigger（这个单位建造了多少。  1  完成后。仅注意不完整单位触发的事件，）
## self.completed()
translation:自身建造完成
<br>type:bool/integer/bool
<br>(比如建造者造了一半的建筑就是0,建造完成就是1)Shortcut for checking built is（是检查已建成的快捷方式）
## self.maxMoveSpeed()
translation:自身最大移动速度
<br>type:bool/float
<br>自身最大移动速度
## self.teamDefeatedTech()
translation:队伍失败
<br>type:bool
<br>队伍失败
## self.teamWipedOut()
translation:队伍无单位
<br>type:bool
<br>(ps:都没单位了哪个单位检测队伍没单位?所以应该是只能由禁止受到攻击的单位(此单位不计入总数)来判断)
## self.numberOfConnections
translation:自身连接数
<br>type:bool/integer
<br>括号里填写行动名称
## self.teamVictory()
translation:队伍获胜
<br>type:bool
<br>队伍获胜
## thisActionTarget
translation:当前动作目标
<br>type:unit / marker
<br>当前目标或定位的位置。
    • alsoTriggerAction: x (thisActionTarget==Same as original action(与原动作相同))
    • [turret]onShoot_triggerActions: x  (thisActionTarget==Target that was shot at(被击中的目标))
    • takeResources_triggerActionIfAnyCollected: x (thisActionTarget==Target with resources(带有资源的目标))
    • addWaypoint_triggerActionIfMatched: x (thisActionTarget == Marker for move/Target for attack, etc.  Note: use addWaypoint_maxTime:0 if you want to search only
    • 移动动作的标记/攻击的目标等。
注：如果只是想搜索，请使用addWaypoint_maxTime: 0
## eventSource
translation:事件来源
<br>type:unit / marker
<br>来自 autoTriggerOnEvent 的当前触发器，否则为 null
autoTriggerOnEvent: tookDamage (thisActionTarget==Unit that caused damage（使单位受到伤害的单位）)
autoTriggerOnEvent: killedAnyUnit (thisActionTarget==Unit that was killed（使单位击杀了任意一个其他单位的单位）)
autoTriggerOnEvent: transportingNewUnit (thisActionTarget==Unit that was transported（使单位被运输的单位）)
autoTriggerOnEvent: transportUnloadedOrRemovedUnit (thisActionTarget==Unit unloaded（使单位转载其他单位的单位）)
autoTriggerOnEvent: queuedUnitFinished (thisActionTarget==New unit made（使新的单位制造的单位）)
autoTriggerOnEvent: touchTargetSuccess (thisActionTarget==Target touched（是碰撞到了目标单位的单位）)
•所有的事件均可以以此类推
## attachment
translation:附件
<br>type:unit
<br>（参数：[slot(槽位)]、[withTag(带有标签)]）
self.attachment(withTag='x').lastDamagedBy.getAsMarker()
## transporting
translation:运输
<br>type:unit
<br>（参数：[slot]）
if self.transporting(slot=0).hasResources(gold=100)
## attacking
translation:攻击
<br>type:unit
<br>当前正在攻击的目标，可能不是当前的路径点目标。
if attacking.tags(includes='bug') and attacking.hp < 20
## lastDamagedBy
translation:最后伤害源
<br>type:unit
<br>最后一个攻击这个的单位。
## parent
translation:父单位
<br>type:unit
<br>传输器或附件父级。 （注：单元在无连接槽位时运输时处于暂停状态）
Eg autoTrigger: if parent.energy > 100
## activeWaypointTarget
translation:活动路径点目标
<br>type:unit
<br>当前活动航路点目标。 包括攻击、运输、修理等。
if distanceBetween(self, activeWaypointTarget) < 100
## customTarget1
translation:自定义目标1
<br>type:unit
<br>自定义内存，默认为创建该单位的单位。
if parent.customTarget1 == self
## customTarget2
translation:自定义目标2
<br>type:unit
<br>自定义内存，默认为空
## nearestUnit
translation:距离自己最近的单位
<br>type:unit
<br>(withinRange=500, withTag='x',relation='any',incompleteBuildings=true,withoutTag="xg") 搜索一个距离自己最近的单位（不推荐在 autoTrigger 中进行检查）
## globalSearchForFirstUnit
translation:全局检查第一个单位
<br>type:unit
<br>(withTag=x,relation=any,incompleteBuildings=true) - 返回找到的与过滤器匹配的第一个（也是最旧的）单元。 慢，避免在 autoTrigger 检查中使用
## nullUnit
translation:空单位
<br>type:compare value
<br>返回一个空单位引用，用于比较
## null
translation:空
<br>type:compare value
<br>返回一个零值，可以用来检测单位引用为空
## getAsMarker()
translation:获取为标记
<br>type:marker
<br>在一个单位现在所在的位置创建一个临时标记。 标记的创建速度非常快，不再需要时会自动删除。 不链接到任何单位并且在单位死亡时仍然存在，并且在源移动时保持不变。
## getOffsetAbsolute()
translation:获取绝对偏移
<br>type:marker
<br>([x],[y],[height]) 返回具有绝对偏移量的标记（-y 是北，+x 是东）
## getOffsetRelative()
translation:获取相对偏移
<br>type:marker
<br>([x],[y],[height],[dirOffset]) 返回具有相对偏移量的标记。 (y+ 是向前)
self.getOffsetRelative(y=100).nearestUnit(withinRange=70, withTag='mouse') != null
## createMarker()
translation:创造记号
<br>type:marker
<br>([x],[y],[height],[dir],[teamId]) 返回地图标记。 (y+是向下)
createMarker(teamId=self.teamId).nearestUnit(withinRange=70, withTag='mouse') != null
## distance(x1, y1, x2, y2)
translation:点距离
<br>type:float
<br>计算两点之间的距离
## distanceSquared(x1, y1, x2, y2)
translation:点距离方差
<br>type:float
<br>返回两点之距离差的平方。 比distance快，因为少了开方这一步。
## distanceBetween(unit1, unit2)
translation:单位距离
<br>type:float
<br>返回两个单位之间的距离
## distanceBetweenSquared(unit1, unit2)
translation:单位距离方差
<br>type:float
<br>返回两个单位之间的平方距离。 比 distanceBetween 快一点
## game.nukesEnabled()
translation:核武启用
<br>type:bool
<br>如果在此游戏的设置中启用了核武器，则返回 true。
## int([float])
translation:取整
<br>type:float
<br>从数字中删除小数位。（可以在${x}中使用）
## select(LogicBoolean, logicA, logicB)
translation:选择
<br>type:condition string
<br>如果布尔值为真则返回 textA 否则返回 textB
## debug(LogicBoolean)
translation:调试
<br>type:logic
<br>返回一个文本，显示该单位有关于这个逻辑的数据
## debugPassthrough(LogicBoolean)
translation:调试通行
<br>type:logic / message
<br>显示这个逻辑在该单位上的值，并在调试模式中发送单位本身关于这个逻辑的调试消息，请打开调试模式选中单位后查看
## str(x)
translation:转为字符串
<br>type:string
<br>将数字、单位、布尔值、逻辑显示值等转换为字符串
## substring(string,logicNumber(start),logicNumber(end))
translation:子字符串
<br>type:string
<br>提取指定字符串长度内的字符串，例如 substring('hello',0,2) == 'he'
## length(string)
translation:字符串长度
<br>type:integer
<br>以数字形式返回字符串或者值类型是字符串的逻辑长度
## squareRoot(num)
translation:开方
<br>type:float
<br>返回一个数的平方根
## sqrt(num)
translation:开方
<br>type:float
<br>返回一个数的平方根（只能在${x}中使用）
## min(num1, min2)
translation:最小值
<br>type:float
<br>返回最小的数字
## max(num1, min2)
translation:最大值
<br>type:float
<br>返回最大的数字
## cos([float])
translation:算余弦
<br>type:float
<br>返回填入的值的余弦（可以在${x}中使用）
## sin([float])
translation:算正弦
<br>type:float
<br>返回填入的值的正弦（可以在${x}中使用）
## thisActionIndex/index
translation:行动索引/索引
<br>type:integer
<br>由alsoTriggerActionRepeat和alsoTriggerAction连用来改变该logic的值（通俗点来讲，就是被also触发的顺序位）
## uppercase(string)
translation:字符大写
<br>type:string
<br>给字符串中的所有小写字母进行大写处理
## lowercase(string)
translation:字符小写
<br>type:string
<br>给字符串中的所有大写字母进行小写处理
## direction(x1,y1,x2,y2)
translation:点朝向
<br>type:float
<br>给出两个点之间的直线相对于前者的点朝向的角度
## directionBetween(unit1,unit2)
translation:单位朝向
<br>type:float
<br>给出两个单位参考之间的直线相对于前者单位朝向的角度
## true()
translation:真()
<br>type:true
<br>if语句里套一个true()......
## false()
translation:假()
<br>type:false
<br>if语句里套一个false()......
## rnd(min[float],max[float])
translation:范围内随机取数
<br>type:random float
<br>可能会是浮点值，可以使用int()取整数部分
