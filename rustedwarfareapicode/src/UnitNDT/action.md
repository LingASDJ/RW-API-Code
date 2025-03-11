# action/hiddenAction
## text
translation:文本
<br>type:string
<br>界面中显示的文字
## textPostFix
translation:文本后缀
<br>type:string
<br>显示为后缀的文本，与textAddUnitName一起用于创建文本UI
## text_[Language]
translation:文字多语言
<br>type:string
<br>界面中显示的文字，多语言
## description
translation:描述
<br>type:string
<br>选中时显示的文本，用于解释其用途。
## description_[Language]
translation:描述
<br>type:string
<br>描述多语言。
## displayType
translation:显示类型
<br>type:string
<br>行动的显示类型正常模式为无(绿色)、集结(白色R)、升级(蓝色U)、单位队列（绿色）、建筑(绿色)、行为(蓝色)、仅信息(灰色)、无框信息、仅信息库存（灰色）
none, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox,infoOnlyStockpile
## displayRemainingStockpile
translation:显示剩余库存
<br>type:bool
<br>显示剩余库存,显示为根据资源计算可以触发操作的次数。
## pos
translation:位置
<br>type:float
<br>此动作在用户界面排序。
## iconImage
translation:图标
<br>type:image
<br>使用图像作为此动作图标。
## iconExtraImage
translation:额外图标图像
<br>type:image
<br>使用图像作为此动作图标。和上一个一致,但显示更靠上。绘制在图标图像上方。对升级图标等有用
## iconExtraColor
translation:额外图标颜色
<br>type:color
<br>将图标叠加上额外的颜色。默认为#64FFFFFF
## iconExtraIsVisible
translation:额外图标显示条件
<br>type:LogicBoolean
<br>设置图标什么时候可显示。
## unitShownInUI
translation:UI中显示的单位
<br>type:unit
<br>使用此单位作为动作图标。
## setBuilt
translation:设置完成度
<br>type:float
<br>默认为1。填0-1之间的数字，将指定单位建造完成度。比如填0.5，执行完操作后单位自身建造完成度就成了50%
## guiBuildUnit
translation:界面显示单位
<br>type:unit
<br>将action图标和鼠标指针改为指定单位，这就像您用建造者去造建筑，会受地形影响，可为action或路径点提供坐标。
## tags
translation:标签
<br>type:string(s)
<br>(在使用队列大小时可以用withActionTag=x来获取数量)
Used with queueSize(withActionTag=x) and queueItemAdded(withActionTag=x)
## id
translation:编号
<br>type:string
<br>允许在单位之间转换时更容易的连接动作（action的id，应该有对应的引用词）
## aiTags
translation:AI的标签
<br>type:string(s)
<br>随便填一个得了(专门给AI用的)
## textAddUnitName
translation:从单元添加名称
<br>type:unit ref/unit
<br>从指定单位添加名称。
## descriptionAddFromUnit
translation:从单元添加描述
<br>type:unit ref/unit
<br>从指定单位添加单位描述。
## descriptionAddUnitStats
translation:从单元添加属性
<br>type:unit ref/unit
<br>从指定单位添加详细信息描述，比如攻击力，攻击范围。
## unitShownInUIWithHpBar
translation:单元在UI显示Hp条
<br>type:bool
<br>在ui中显示单位血条。默认true,仅当unitShownInUI是unitRef时使用
## unitShownInUIWithProgressBar
translation:单元在UI显示进度条
<br>type:bool
<br>在ui中显示单位进度条。默认true,仅当unitShownInUI是unitRef时使用。如果激活，则替换HP bar
## price
translation:价格
<br>type:resources
<br>此行为需要的价格，可以是多种资源或自定义资源。如果不满足则行为不可用。如果没设定资源类型则默认为资金。如果价格为0，AI可能很少甚至不会使用。
## isActive
translation:可用
<br>type:LogicBoolean
<br>默认为true。如果为false，则会禁用操作，并在用户界面中以红色显示。
## isVisible
translation:可见
<br>type:LogicBoolean
<br>默认为true。如果false则从UI中隐藏并被禁用。
## isLocked
translation:锁定
<br>type:LogicBoolean
<br>默认为false。如果true则禁用操作，则会显示一个锁定文本。可用作禁核或者科技树，或是条件限制。
## isLockedMessage
translation:锁定消息
<br>type:string
<br>显示锁定的原因。
## isLockedAlt
translation:更多锁定
<br>type:LogicBoolean
<br>另一个原因被锁定。用于显示不同的消息。
## isLockedAltMessage
translation:更多锁定消息
<br>type:string
<br>显示更多锁定的原因。
## isLockedAlt2
translation:更多锁定2
<br>type:LogicBoolean
<br>另一个原因被锁定。用于显示更多锁定的原因。
## isLockedAlt2Message
translation:更多锁定消息2
<br>type:string
<br>显示更多锁定的原因。
## allowMultipleInQueue
translation:允许多个队列
<br>type:bool
<br>允许多次点击此行为形成队列，false时则只能点一次，不能累加。
## onlyOneUnitAtATime
translation:一次只有一个单位
<br>type:bool
<br>填true时选中多个同类单位时，只有一个执行此行为。
## isGuiBlinking
translation:界面闪烁
<br>type:LogicBoolean
<br>此行为在界面中闪烁。
## alwaysSinglePress
translation:总是按一次
<br>type:bool
<br>点击就执行，不需要确认。默认false,不需要在手机上确认，使用canPlayerCancel: false和allowMultipleInQueue: false也隐藏队列接口。
## isAlsoViewableByAllies
translation:显示给盟友
<br>type:bool
<br>允许盟友玩家看到这个单位的动作，对显示其他玩家有用(例如导抛射体数量，收集的物品)
## isAlsoViewableByEnemies
translation:显示给敌人
<br>type:bool
<br>允许敌方玩家看到这个单位的动作，对显示其他玩家有用(例如导抛射体数量，收集的物品)
## extraLagHidingInUI
translation:消除ui额外延迟
<br>type:bool
<br>用于联机，在UI中立即更新而不需要从服务器确认的等待时间。
## streamingCost
translation:流式造价
<br>type:integer(price)
<br>就像价格，但在建造时逐渐消耗资金，如果在构建过程中资源耗尽，建造或生产队列将暂停。就像是红警中那样。铁锈默认是预先扣除资金。
## switchPriceWithStreamingCost
translation:切换价格为流造价
<br>type:bool
<br>快捷设置为默认资金消耗方式或为流式建造方式。建议使用模板快速将一个模组为所有单位切换流资源。
## aiUse
translation:AI对该行动的使用方式
<br>type:use type
<br>可填：auto(自动)，launch（发射），launchAmmo（发射弹药），disabled（残缺），upGrade(升级)，movementChange(运动改变)，sameAsBuilding（与建筑物相同）
## ai_isDisabled
translation:AI被禁用
<br>type:LogicBoolean
<br>默认为false。使用此操作停止AI使用此动作。
## ai_isHighPriority
translation:AI高优先级
<br>type:LogicBoolean
<br>AI将优先执行此动作。
## ai_considerSameAsBuilding
translation:AI作为建筑
<br>type:unit
<br>填建筑。考虑动作的优先级将会跟建筑物建优先级一样。
## autoTriggerOnEvent
translation:自动触发事件
<br>type:event type
<br>满足此条件则自动触发。参数表：
创建，完成且激活，销毁，杀死任何单位，队列中单位完成，队列添加项目，队列项目取消，传送，接触目标成功，玩家指定路径，队伍变更，运输新单位，卸载或移除单位，受到伤害[支持可选的(withTag=x)]，进入载具，离开载具，新消息（withTag=x），移除附属，无
created, completeAndActive, destroyed, killedAnyUnit, queuedUnitFinished, queueItemAdded(1,15p9中添加了withActionTag和queueItemCancelled两个参数,用于触发动作时检测标签.), queueItemCancelled, teleported, touchTargetSuccess, newWaypointGivenByPlayer, teamChanged, transportingNewUnit，transportUnloadedOrRemovedUnit，tookDamage[支持可选的(withTag=x)],enteredTransport,leftTransport,newMessage(withTag=x),attachmentRemoved，NONE
## alsoTriggerOrQueueActionWithTarget
translation:也可以使用单位参考触发或队列操作
<br>type:unit ref
<br>更改其他触发动作的目标，默认为当前动作的目标。影响诸如 fireTurretXAtGround、spawnUnits、thisActionTarget()等。
## autoTriggerOnEventRecursionLimit
translation:自动触发事件递归限制(默认为1)
<br>type:integer
<br>自己触发自己的限制次数，默认为1
## autoTrigger
translation:自动触发
<br>type:LogicBoolean
<br>如果为true，则立即触发此操作的效果（忽略价格，isActive，isVisible，buildSpeed等）
## buildSpeed
translation:建造速度
<br>type:time
<br>建造此动作所需要的时间，这个读条过程下面称之为准备以区分建造，机翻或是多个动作称之为队列。完成时的效果称为结果。
## buildSpeed_ignoreFactorySpeedModifiers
translation:建造速度忽略工厂乘数
<br>type:bool
<br>建造此动作所需要的时间忽略[core]的工厂速度乘数以及工厂倍数
## refundAllQueuedItems
translation:取消所有队列项目
<br>type:bool
<br>并返还资源
## removeAllQueuedItemsWithoutRefund
translation:移除所有未建造完成的队列项目
<br>type:bool
<br>不返还资源
## highPriorityQueue
translation:高优先级队列
<br>type:bool
<br>默认为false。如果为true，则此操作将跳过队列中的所有其他低优先级操作。适用于fireTurret类动作。
## canPlayerCancel
translation:玩家可以取消
<br>type:bool
<br>玩家可以取消此动作。
## whenBuilding_cannotMove
translation:建造时无法移动
<br>type:bool
<br>执行操作准备时停止单位移动。适用于类似部署类动作。
## whenBuilding_playAnimation
translation:建造时播放动画
<br>type:animation ref
<br>准备此动作时，播放[animation]中自定义的动画。
## whenBuilding_rotateTo
translation:建造时旋转
<br>type:float
<br>准备此动作时，将单位主体旋转到该方向
## whenBuilding_rotateTo_orBackwards
translation:建造时旋转或反转
<br>type:bool
<br>如果为true，则当角度较小时，允许从whenBuilding_rotateTo旋转180度。
## whenBuilding_rotateTo_waitTillRotated
translation:建造时需等待旋转完成
<br>type:bool
<br>暂停准备的行为，直到旋转完成再继续。
## whenBuilding_temporarilyConvertTo
translation:建造时临时转换为
<br>type:unit ref
<br>准备此操作时临时转换为另一个单位。原始单位的操作将保留。
## whenBuilding_temporarilyConvertTo_keepFields
translation:建造时保留字段
<br>type:fields
<br>不要在使用whenbuilding_temporaryconvertto时更改这些字段(无论是从或到)，这对setUnitStats很有用
## whenBuilding_triggerAction
translation:建造时触发动作
<br>type:action
<br>准备时触发另一个动作
## whenBuilding_rotateTo_aimAtActionTarget
translation:建造时转向直至瞄准目标
<br>type:bool
<br>准备时转向瞄准目标,luke:测试版注意:在某些情况下是坏的
## whenBuilding_rotateTo_rotateTurretX
translation:建造时转向指定炮塔
<br>type:turret ref
<br>准备此操作时转向指定炮塔。
## spawnEffectsOnQueue
translation:队列产生效果
<br>type:effect ref
<br>动作准备开始时产生的效果。
## playSoundToPlayerOnQueue
translation:队列播放声音
<br>type:file(s) (ogg/wav)
<br>动作准备时播放给玩家的声音。
## requireConditional
translation:需要条件
<br>type:LogicBoolean
<br>如果结果为false，则跳过此操作所有结果。
## convertTo
translation:转换成
<br>type:unit
<br>将您的单位转换为另一个单位。许多属性被保留。
## convertTo_keepCurrentTags
translation:转换时保留标签
<br>type:bool
<br>将单位转换为另一个单位。并且保留拥有的标签。
## convertTo_keepCurrentFields
translation:转换时保留字段
<br>type:fields
<br>转换时不要更改这些字段，这在setUnitStats中很有用
## addEnergy
translation:增加能量
<br>type:float
<br>为单位增加能量。需要设置了energyMax，否则不起作用。（与addResources相同：energy = X）
## addResources
translation:添加资源
<br>type:resources
<br>操作完成后，添加这些资源。
## addResourcesScaledByAIHandicaps
translation:根据AI难度添加资源。
<br>type:bool/resource
<br>与addResources类似，但根据AI难度级别增加或减少。比例：最简单40%、简单70%、中等100%、困难140%、很困难180%、不可能370%
## addResourcesWithLogic
translation:用逻辑添加资源
<br>type:LogicOperation
<br>与addResources类似，但允许对资源值使用逻辑
## setResourcesWithLogic
translation:用逻辑设置资源
<br>type:LogicOperation
<br>将目标资源设置为此值，而不是添加。小心对全局资源使用。
## deleteSelf
translation:删除自身
<br>type:bool
<br>删除执行此操作的单位，没有死亡效果，不执行死亡触发。
## resetCustomTimer
translation:重置自定义计时器
<br>type:LogicBoolean
<br>重置自定义计时器，与self.customTimer()
## setBodyRotation
translation:设置躯干旋转
<br>type:LogicNumber
<br>设置单位旋转度数。单位朝右为0度。因为是结果而不是准备过程，所以很突然。（支持动态数字比如memory）
## setHeight
translation:设置高度
<br>type:LogicNumber
<br>新增设置高度，可以使用逻辑
## setUnitStats
translation:设置单位状态
<br>type:fields values
<br>字段值。允许在不转换的情况下动态更改选定的字段数量。支持=/+=/-=，动态数学/逻辑。可以改变的领域:maxHp(血量上限)，hp(血量)，selfRegenRate(自身回血速度)，maxShield(护盾上限)，shield(护盾)，shieldRegen(护盾恢复速度)，maxEnergy(能量上限)，energy(能量)，armour(装甲)，mass(质量)，shootDelayMultiplier(开火间隔倍数)，shootDamageMultiplier(开火伤害倍数)，movespeed(最大移动速度)，maxTurnSpeed(最大转弯速度)，maxAttackRange(最大攻击距离)，nanoRange(修复范围)，fogOfWarSightRange(迷雾视野)，nanoFactorySpeed(工厂制造速度倍数)，targetHeight(单位最终高度)
## resetUnitStats
translation:重置单位状态
<br>type:bool
<br>将setUnitStats所做的更改重置为基本值
## shrinkArrays
translation:简化数组
<br>type:array memory name
<br>去掉null项或死亡单位项还有为零的项，然后向前压缩
## setUnitMemory
translation:设置单位内存
<br>type:key value pairs
<br>键值对。改变此单元的内存，值可以用逻辑设定。内存必须首先用defineUnitMemory或@memory定义。
注：
设置内存时 需要加上数组下标
eg. setUnitMemory: numArray[0]=2
数组下标从0开始
## alsoTriggerAction
translation:也执行动作
<br>type:action ref
<br>触发其他动作的结果。忽略行动的要求。
## alsoTriggerActionRepeat
translation:重复"也触发行动(alsoTriggerAction)"调用
<br>type:logicNumber
<br>logic number (Repeats the alsoTriggerAction call, index changed on each repeat) - Useful to create loops or work with arrays
（动态数字）（每次重复时改变索引 用于创建循环或处理数组）
## alsoQueueAction
translation:也添加进队列
<br>type:action ref
<br>将另一个动作添加到序列中。忽略行动的要求
## alsoTriggerOrQueueActionConditional
translation:也执行队列或需执行条件
<br>type:LogicBoolean
<br>将此操作添加到序列。如果条件不满足(false)则忽略alsoQueueAction。默认true.
## playSoundAtUnit
translation:播放声音至单位
<br>type:file(s) (ogg/wav)
<br>动作结束时在当前位置播放声音。
## playSoundGlobally
translation:播放声音至全图
<br>type:file(s) (ogg/wav)
<br>播放全局声音，所有玩家都能听到。
## playSoundToPlayer
translation:播放声音至玩家
<br>type:file(s) (ogg/wav)
<br>播放声音，只有自己能听到。
## fireTurretXAtGround
translation:指定攻击地面炮塔
<br>type:turret ref
<br>使用此炮塔攻击玩家所指定的地面。
## fireTurretXAtGround_withOffset
translation:指定攻击地面坐标
<br>type:pointeger
<br>攻击指定坐标所在地面，不需要手动选择，
## fireTurretXAtGround_withProjectile
translation:指定攻击地面抛射体
<br>type:projectile ref
<br>设定使用的抛射体，如果不设置则为炮塔默认的抛射体。
## fireTurretXAtGround_showGuideDecals
translation:指定攻击地面时显示贴花
<br>type:decal name(贴花名称)
<br>当选择发射位置时显示贴花(参考核抛射体选择发射地点时长按显示)
## fireTurretXAtGround_withTarget
translation:指定攻击目标
<br>type:unitref
<br>炮塔瞄准指示的单位或标记的位置发射
## fireTurretXAtGround_count
translation:指定攻击地面数量
<br>type:integer
<br>设置发射的抛射体数量，默认为1
## fireTurretXAtGround_onlyOverPassableTileOf
translation:指定攻击地面类型
<br>type:string
<br>设置手动选择的地面需要满足这种运动方式。列表：无，陆地，建筑，空军，水。两栖，跨悬崖，跨悬崖和度水。
NONE LAND BUILDING AIR WATER HOVER OVER_CLIFF OVER_CLIFF_WATER
## spawnUnits
translation:产生单位
<br>type:units
<br>产生指定单位，可用是多种。
## spawnEffects
translation:产生效果
<br>type:effect ref
<br>产生指定效果
## produceUnits
translation:生产单位
<br>type:units
<br>类似spawnUnits，但是单位像正常生产一样，并获得路径的移动。1.13只对非建筑物生成的单位有效。
## offsetSelfAbsolute
translation:自身位置偏移
<br>type:integer list
<br>使用时将修改单位当前位置，以单位为中心的绝对坐标。
## teleportTo
translation:传送到
<br>type:unit ref
<br>传送到(填单位参考)
## transportTargetNow
translation:主动装运目标
<br>type:unit ref
<br>主动装运目标(填单位参考)
## addUnitsIntoTransport
translation:添加单位到载具
<br>type:unit list
<br>将单位添加到运输槽中，在添加之前会检查空间是否够。
## deleteNumUnitsFromTransport
translation:从载具中删除单位数
<br>type:integer
<br>从载具中删除指定数量单位。
## deleteNumUnitsFromTransport_onlyWithTags
translation:从载具删除带标签单位
<br>type:string
<br>从载具中删除具有此标签的指定数量单位。
## startUnloadingTransport
translation:开始卸载单位
<br>type:bool
<br>开始卸载单位
## forceUnloadTransportNow
translation:强制卸载单位
<br>type:bool
<br>立即强制卸载单位
## forceUnloadTransportNow_onlyOnSlot
translation:强制卸载指定槽位单位
<br>type:integer
<br>强制卸载指定槽位单位
## clearAllWaypoints
translation:清除所有路径点
<br>type:bool
<br>清除当前所有路径。
## clearActiveWaypoint
translation:清除当前路径点
<br>type:bool
<br>清除当前路径，也就是停止当前动作，执行下一个路径点。
## addWaypoint_type
translation:添加路径点类型
<br>type:waypostatic type
<br>添加的路径点类型。值列表：移动，移动攻击，防守，进入载具，主动装载，攻击，回收，维修，靠近目标，建造，跟随，设置被动目标，卸载至，巡逻，防守至，触发行动，在范围内时触发行动
move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow，setPassiveTarget，unloadAt，patrol，guardAt，triggerAction，triggerActionWhenInRange
## addWaypoint_unitType
translation:添加路径点所建造的单位类型
<br>type:unit
<br>用于让当前单位去建造指定单位。仅用于addWaypoint_type:build
## addWaypoint_prepend
translation:添加路径点序列位置
<br>type:bool
<br>添加到路径点的开头或结尾
## addWaypoint_triggerActionIfFailed
translation:添加路径点失败触发
<br>type:actions
<br>如果target_nearestUnit找不到匹配项，因此无法添加路径点，则触发此操作
## addWaypoint_triggerActionIfMatched
translation:添加路径点匹配触发
<br>type:actions
<br>如果操作添加的路径点是有效的，则执行指定操作。
## addWaypoint_maxTime
translation:添加路径点检索时间
<br>type:time
<br>如果此路径点这么久还无法执行完成，则取消。
## addWaypoint_target_nearestUnit_tagged
translation:添加路径点检索标签
<br>type:tags
<br>添加的路径点目标为靠近有此标签的单位。
## addWaypoint_target_nearestUnit_team
translation:添加路径点靠近队伍
<br>type:relation
<br>添加的路径点目标需要的所属方：己方|除自己外任何|中立|除自己外盟友|盟友|敌人|任何，own|notOwn|neutral|allyNotOwn|ally|enemy|any
## addWaypoint_target_nearestUnit_maxRange
translation:添加路径点检索范围
<br>type:float
<br>添加的路径点靠近某目标时考虑的最大范围。
## addWaypoint_target_mapMustBeReachable
translation:添加路径点路径可达
<br>type:bool
<br>添加的路径点靠近某目标时必须是有可到达路径的。
## addWaypoint_target_fromReference
translation:添加路径点来自参考
<br>type:unit ref
<br>添加路径点来自单位信息引用。
## addWaypoint_position_offsetFromSelf
translation:添加路径点坐标偏移
<br>type:pointeger
<br>添加的路径点相对于自身偏移的坐标。
## addWaypoint_position_fromAction
translation:添加路径点动作坐标
<br>type:bool
<br>将当前动作指定的坐标添加进路径序列中。
## addWaypoint_position_randomOffsetFromSelf
translation:添加路径点随机偏移
<br>type:integer(s)
<br>添加坐标进路径点时的随机值。
## addWaypoint_position_relativeOffsetFromSelf
translation:添加路径点相对偏移
<br>type:integer(s)
<br>添加路径点位置相对自身偏移量。
## addWaypoint_target_randomUnit_tagged
translation:添加指定标签的随机单位
<br>type:unit
<br>添加路径点单位为指定标签的随机单位
## addWaypoint_target_randomUnit_team
translation:添加指定队伍的随机单位
<br>type:string
<br>添加路径点单位为指定队伍的随机单位
## addWaypoint_target_randomUnit_maxRange
translation:添加指定范围的随机单位
<br>type:integer
<br>添加路径点单位为指定范围的随机单位
## addAllActionCooldownsTime
translation:增加所有动作冷却时间
<br>type:time
<br>增加所有action的冷却时间。
## addAllActionCooldownsFor
translation:对于所有动作而言增加冷却时间
<br>type:time
<br>增加所有action的冷却时间。
## addActionCooldownTime
translation:增加动作冷却时间
<br>type:time
<br>增加动作冷却时间，制作先充能再使用的action更加容易了。
## addActionCooldownFor
translation:对于动作而言增加冷却时间
<br>type:time
<br>增加动作冷却时间，制作先充能再使用的action更加容易了。
## addActionCooldownsFor
translation:对于动作而言增加冷却时间
<br>type:time
<br>增加动作冷却时间，制作先充能再使用的action更加容易了。
## addActionCooldownApplyToActions
translation:添加指定动作冷却时间
<br>type:action ref
<br>action id，设置addActionCooldownTime的目标。默认情况下是当前操作本身。
## clearAllActionCooldowns
translation:清除所有动作冷却时间
<br>type:bool
<br>清除所有动作冷却时间，使其立即可用。
## playAnimation
translation:播放动画
<br>type:animation ref
<br>播放[animation_xx]类型动画。
## playAnimationIfNotPlaying
translation:如果未播放动画则播放动画
<br>type:animation ref
<br>如果没有播放该动画，就播放该动画
## finishPlayingLastAnimation
translation:完成最后一个动画
<br>type:bool
<br>完成最后一个动画，包括融合
## stopLastAnimation
translation:停止最后一个动画
<br>type:bool
<br>停止最后一个动画，跳过融合
## switchToNeutralTeam
translation:切换至中立队伍
<br>type:bool
<br>将队伍更改为中立。该队伍与其他所有队伍结盟。除非使用[core]stayNeutral:true，否则它将被附近的单位捕获。
## switchToAggressiveTeam
translation:切换至侵略性队伍
<br>type:bool
<br>将此单位队伍更改为侵略性的内置队伍。不能被其它单位捕获。
## switchToTeam
translation:切换至特定队伍
<br>type:Logicinteger
<br>切换到小队id。从0开始。(中立-1，敌对中立-2)
## takeResources
translation:提取资源
<br>type:customPrice
<br>提取资源，至少写一种资源。
## takeResources_includeUnitsInTransport
translation:提取资源包括载具内
<br>type:bool
<br>提取资源，包括载具内单位。
## takeResources_includeParent
translation:提取资源包括父单位或载具
<br>type:bool
<br>提取资源，包括父单位和运输载具。
## takeResources_includeReference
translation:提取资源包括引用
<br>type:unit ref
<br>提取资源包括指定单位。
## takeResources_triggerActionForEach
translation:每找到一个提取目标触发行动
<br>type:action name(行动名称)
<br>引用动作(找到带有资源的目标单位并提取时)
## takeResources_includeUnitsWithinRange
translation:提取资源范围
<br>type:float
<br>提取资源，在此范围内。
## takeResources_includeUnitsWithinRange_team
translation:提取资源队伍
<br>type:TeamRelation
<br>提取在此范围内队伍的资源。与“includeUnitsWithinRange”一起使用，默认为own。可以是：
己方|除自己外任何|中立|除自己外盟友|盟友|敌人|任何，own|notOwn|neutral|allyNotOwn|ally|enemy|any
## takeResources_excludeUnitsWithoutTags
translation:提取资源需要标签
<br>type:tags
<br>提取资源，但只提取有此标签的单位
## takeResources_excludeUnitsWithoutCustomTarget1EqualTo
translation:仅提取自定义目标一为
<br>type:unit ref
<br>提取资源，但仅提取自定义目标一为此代码所填值的单位
## takeResources_excludeUnitsWithTheseResources
translation:提取资源排除资源
<br>type:customPrice
<br>提取资源，不包括拥有这些资源的单位。
## takeResources_excludeUnitsWithoutAllResources
translation:提取资源排除不足
<br>type:bool
<br>提取资源，排除缺乏资源者。默认为true.
## takeResources_triggerActionIfAnyCollected
translation:提取资源成功触发
<br>type:action ref
<br>如果有任何收集，则触发动作。
## takeResources_triggerActionIfNoneCollected
translation:提取资源失败触发
<br>type:action ref
<br>如果没有收集，则触发操作。
## takeResources_discardCollected
translation:提取资源删除
<br>type:bool
<br>从目标中获取资源，但不向自身添加也就是删除。
## takeResources_keepResourcesOnTarget
translation:提取资源克隆
<br>type:bool
<br>不从目标添加或删除资源。但克隆资源。与takeResources_discardCollected和takeResources_triggerActionIfAnyCollected一起使用以创建资源检测器。
## takeResources_maxUnits
translation:提取资源目标量
<br>type:integer
<br>最多从多少单位提取资源，默认为1。
## takeResources_directTransferStoppingAtZero
translation:提取资源直接转换至零
<br>type:bool
<br>提取资源直接转换至0,用于完全转换。如果目标上的资源少于转帐金额，则只有剩余的资源将被转帐。不支持使用其他一些takeResources_*代码
## takeResources_searchOnly
translation:获取资源仅供搜索
<br>type:bool
<br>#新增快捷方式 eg. (
takeResources_maxUnits=200
takeResources_discardCollected=true
takeResources_keepResourcesOnTarget=true
)
注意:填写本代码时必须包含至少一下的其中一个代码
takeResources_includeUnitsWithinRange:#
## takeResources_saveFirstUnitToCustomTarget1
translation:提取资源保存第一个单元自定义目标1
<br>type:bool
<br>提取资源保存第一个单元一定是自定义目标1
## takeResources_saveFirstUnitToCustomTarget2
translation:提取资源保存第一个单元自定义目标2
<br>type:bool
<br>提取资源保存第一个单元一定是自定义目标2
## convertResource_from
translation:转换资源来源
<br>type:customResource
<br>将此资源转换资源为别的资源。
## convertResource_to
translation:转换资源至
<br>type:customResource
<br>将资源转后为此资源，要提供的自定义资源的名称
## convertResource_minAmount
translation:转换资源至少
<br>type:integer
<br>如果来源中资源小于该数量，则跳过。默认为0。在大多数情况下可能不需要。
## convertResource_maxAmount
translation:转换资源至多
<br>type:integer
<br>“来源资源”和“转换后资源”之间的最大转化量
## convertResource_multiplyAmountBy
translation:转换资源倍率
<br>type:float
<br>资源转换倍率，不影响提取的数量。默认值为1。
## resourceAmount
translation:资源类型
<br>type:customResource
<br>自定义资源的名称，使用以下3个键进行设置。所有键都是可选的，可以一起使用。
## resourceAmount_setValue
translation:资源类型设置数值
<br>type:float
<br>设置此资源的绝对值，忽略资源的当前值。默认忽略。
## resourceAmount_addOtherResource
translation:资源类型添加至
<br>type:customResource
<br>添加到其中的另一个自定义资源的名称。可以不使用resourceAmount_setValue，只是添加资源。或者使用resourceAmount_setValue:0复制一个资源值。
## resourceAmount_multiplyBy
translation:资源类型乘数
<br>type:float
<br>默认值为1。将当前资源值乘上此值。
## attachments_addNewUnits
translation:附属添加单位
<br>type:unit
<br>添加单位作为其子单位，需要定义附属位置。
## attachments_deleteNumUnits
translation:附属删除单位数
<br>type:integer
<br>删除单位数量
## attachments_onlyOnSlots
translation:附属添加于槽位
<br>type:string
<br>只将附属物添加于特定的槽位
## disconnectFromParent
translation:脱离父单位
<br>type:bool
<br>用于子单位脱离父单位
## attachments_unload
translation:卸载附属
<br>type:bool
<br>卸载所有附属。可以与attachments_onlyonslot一起使用。与运输单位卸载相同
## attachments_disconnect
translation:附属断开连接
<br>type:bool
<br>断开所有现在所在位置的附属。可以与attachments_onlyonslot一起使用。
## temporarilyAddTags
translation:临时标签添加
<br>type:tags
<br>将标签添加到单位，直到转换或重置。
## temporarilyRemoveTags
translation:临时标签删除
<br>type:tags
<br>从单位上删除标签，直到将其转换或重置。
## resetToDefaultTags
translation:标签重置
<br>type:bool
<br>重置为默认标签。
## addGlobalTeamTags
translation:添加全局标签
<br>type:tags
<br>为玩家的团队添加此全局标签。与self.globalTeamTags()一起使用可创建解锁和升级。
## removeGlobalTeamTags
translation:移除全局标签
<br>type:tags
<br>从玩家队伍中删除此全局标签。
## showMessageToPlayer
translation:发送消息至玩家
<br>type:string
<br>向玩家个人发送信息。自己发给自己。
## showMessageToPlayer_[Language]
translation:发送消息至玩家
<br>type:string
<br>向玩家个人发送信息。自己发给自己。多语言版。注意:这种格式是支持几乎所有字符串显示给玩家，即使当引用不显示它
## showMessageToAllPlayers
translation:发送消息至所有
<br>type:string
<br>向所有玩家发送消息。
## showMessageToAllEnemyPlayers
translation:发送消息给所有敌人
<br>type:string
<br>发送消息给所有敌人。
## showQuickWarLogToPlayer
translation:发送战争快报至玩家
<br>type:string
<br>向玩家个人发送战争快报。（在左下角）
## showQuickWarLogToAllPlayers
translation:发送战争快报至所有
<br>type:string
<br>向所有玩家发送战争快报。（在左下角）
## debugMessage
translation:调试信息
<br>type:string
<br>仅在启用调试模式的沙盒模式中显示。
## sendMessageTo
translation:发送信息至
<br>type:unit ref
<br>填单位/单位引用
## sendMessageWithData
translation:发送信息与数据
<br>type:variable List（变量菜单）
<br>填变量=XXX
## sendMessageWithTags
translation:发送标签
<br>type:tag List（标签菜单）
<br>填指定标签
## setCustomTarget1
translation:设置自定义目标1
<br>type:unit ref/unit
<br>建议填单位引用
## setCustomTarget2
translation:设置自定义目标2
<br>type:unit ref/unit
<br>建议填单位引用
## swapCustomTarget1And2
translation:交换自定义目标1和2
<br>type:bool
<br>填布尔值
