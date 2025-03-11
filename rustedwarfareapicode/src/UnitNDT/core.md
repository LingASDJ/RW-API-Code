# core
## name
translation:名字
<br>type:string
<br>定义单位原始名称，可以是中文。游戏使用它区分其它单位。如果没有在displayText或者语言文件设置显示名称，那么它也将作为单位的显示名称。
具体描述文件位置:assets/translationsStrings_zh.properties格式:units.单位名称.name=写单位显示的名称
units.单位名称.description= [[填单位显示的描述]]
## altNames
translation:别名
<br>type:string(s)
<br>以逗号分隔的名称列表。像名称一样，但优先级较低，对于启用多个自定义mod有用。
## class
translation:类
<br>type:string
<br>无实际用处，可以删除。Luke说：保留供将来使用，默认情况下最好为CustomUnitMetadata。
## strictLevel
translation:严格级别
<br>type:float
<br>默认值为0，忽略代码重复。设为1时如果当前单位内有重复代码，则报错。建议添加到"all-units.template"以应用于所有单位,进行统一查错。
## price
translation:价格
<br>type:integer(price)
<br>设定单位造价，可以是负数，负数时提直接供资金。
## mass
translation:质量
<br>type:integer
<br>单位的“重量”定义了它与其他单位的碰撞方式，值越大，推动就越困难。
## techLevel
translation:科技等级
<br>type:integer
<br>设置单位的科技等级，共有3个级别，1级GUI显示为绿色，2、3级显示为黄色。
## buildSpeed
translation:建造速度
<br>type:time
<br>建造此单位需要的时间，填秒。以前的计算方式为：此处所填时间=1÷(60x您需要的秒)如果定义了工厂速率则需要乘以建造乘数。
## radius
translation:半径
<br>type:integer
<br>单位的实际碰擦体积，也是实际的可选择范围。其光圈在displayRadius覆盖时真实体积不变。
## isBio
translation:是生物
<br>type:bool
<br>此单位是否为生物，为生物则影响死亡声音和血迹（图像在drawable/blood_mark.png，hideScorchMark：true时可以隐藏）非生物则为黑色爆炸效果。
## isBug
translation:是虫子
<br>type:bool
<br>是否为虫子，用于沙盒中的单独分类。
## isBuilder
translation:是建造者
<br>type:bool
<br>若需要此单位建造建筑物，则通常需要此代码。并且默认设为[ai] useAsBuilder。
## streamingCost
translation:流式造价
<br>type:integer(price)
<br>就像价格，但在建造时逐渐消耗资金，如果在构建过程中资源耗尽，建造或生产队列将暂停。就像是红警中那样。铁锈默认是预先扣除资金。
## switchPriceWithStreamingCost
translation:切换价格为流式造价
<br>type:bool
<br>快捷设置为默认资金消耗方式或为流式建造方式。建议使用模板快速将一个模组为所有单位切换流资源。
## maxHp
translation:生命值
<br>type:integer
<br>单位最大生命值，默认生成时即为此值。
## selfRegenRate
translation:生命恢复速度
<br>type:float
<br>此数值决定每帧增加血量。游戏内默认速度下，一秒为60逻辑帧，而您看到的FPS帧数为渲染帧，所以电脑上几百帧和手机上60帧和省电模式下30帧并不影响计算。所以不要写太大。可以写负值用于自毁。
## maxShield
translation:护盾值
<br>type:integer
<br>单位最大护盾值，默认生成时即为此值。如果设置了startShieldAtZero:true，则初始为0.
## startShieldAtZero
translation:护盾初始为0
<br>type:bool
<br>如果为true，则单位护盾值从0开始增加。
## shieldRegen
translation:护盾恢复速度
<br>type:float
<br>此数值决定每帧增加护盾值，游戏内一秒为60帧，所以不要写太大。可以写负值。（默认值为0.25）
## energyMax
translation:能量值
<br>type:float
<br>默认值为0。可以用作炮塔，激光防御和行动的弹药的能量。
## startEnergyAtZero
translation:能量初始为0
<br>type:bool
<br>如果为true，则单位能量值从0开始增加。
## energyRegen
translation:能量恢复速度
<br>type:float
<br>能量每帧恢复速度，游戏内一秒为60帧，所以不要写太大。可以写负值。
## energyRegenWhenRecharging
translation:充能时能量恢复速度
<br>type:float
<br>能量恢复是持续的，如果您设置了energyNeedsToRechargeToFull，那么攻击时按energyRegen恢复，耗尽时的灰条按此处设定值恢复。
## energyStartingPercentage
translation:能量初始百分比
<br>type:float
<br>单位生成时所携带的能量百分比。
## energyNeedsToRechargeToFull
translation:能量需要充满
<br>type:bool
<br>若果能量耗尽，则需要完全充能才能进行攻击。
## energyDisplayName
translation:能量显示名称
<br>type:string
<br>能量显示名称,目前似乎无效.1.15
## armour
translation:装甲
<br>type:integer
<br>抵消敌方攻击所造成的伤害。
## armourMinDamageToKeep
translation:装甲最低伤害
<br>type:integer
<br>至少造成多少点伤害，默认为1.防止护甲太高完全打不动。
## borrowResourcesWhileAlive
translation:资源活着时借用
<br>type:price
<br>创建时获取这些资源，删除或销毁时将其返回。例如用于电力逻辑，负数供电和正数耗电。
## borrowResourcesWhileBuilt
translation:资源在单位建成后借用
<br>type:price
<br>类似于[core]borrowResourcesWhileAlive但在单位建成后才会生效。主要对房屋之类的建筑有用，这些建筑有负的资源，可以加到单位上限等
## generation_resources
translation:资源获取
<br>type:price
<br>单位定时获得的资源，可自定义资源。
## generation_active
translation:资源取得条件
<br>type:logicBoolean
<br>获取资源条件。可用于受损时无法产出。
## generation_credits
translation:资金获取
<br>type:integer
<br>生成资源，仅用于默认的资金，也就是铁锈默认的金钱。
## generation_delay
translation:资金获取时间
<br>type:integer
<br>多久帧添加添加一次资源(generation_creditsvi指定数值)。默认值为40，一秒为60帧。Luke不建议使用。
## showInEditor
translation:显示在沙盒中
<br>type:bool
<br>设置为false可在沙箱编辑器中隐藏此单位。 （默认为true）
## displayText
translation:界面显示名称
<br>type:LocaleString
<br>默认单位显示给玩家的单位名称。不填则显示core下的单位name。此条目依据语言设定不同会被下一条覆盖。
## displayText_[Language]
translation:界面显示文本多语言
<br>type:string
<br>为单位名称添加多语言支持。此方法并不方便，不如设置游戏内部语言文件，建议催luke改。zh(中文通用) zh-cn(简体) zh-tw(台湾) zh-hk中文(香港) en(英语通用) ru(俄语) 其它自查(此列表并不全)，不过您应该不会闲着支持这么多语言。西班牙语（西班牙）es-ES、葡萄牙语（葡萄牙）pt-PT、日语ja、阿姆哈拉语am、爱沙尼亚语et、保加利亚语bg、冰岛语is、波兰语pl、丹麦语da、德语de、法语（法国）fr-FR、法语（加拿大）fr-CA、菲律宾语fil、芬兰语fi、韩语ko、荷兰语nl、加泰罗尼亚语ca、捷克语cs、克罗地亚语hr、拉脱维亚语lv、立陶宛语lt、罗马尼亚语ro、马来语ms、南非荷兰语af、挪威语no、葡萄牙语（巴西）pt-BR、瑞典语sv、塞尔维亚语sr、斯洛伐克语sk、斯洛文尼亚语sl、斯瓦希里语sw、泰语th、土耳其语tr、乌克兰语uk、西班牙语（拉丁美洲）es-419、希伯来语he、希腊语el、匈牙利语hu、意大利语it、印地语hi、印度尼西亚语id in、英语（美国）en-US、英语（英国）en-GB、越南语vi、祖鲁语zu
## displayDescription
translation:界面显示描述
<br>type:LocaleString
<br>单位显示给玩家的单位描述。
## displayDescription_[Language]
translation:界面显示描述_其它语言
<br>type:string
<br>为单位描述添加多语言支持。此方法并不方便，不如设置游戏内部语言文件，建议催luke改。地区码见上。
## displayLocaleKey
translation:界面显示内部调用
<br>type:string
<br>调用内部语言文件的单位名称和说明的翻译文件。
## displayRadius
translation:单位选择时显示圆圈
<br>type:integer
<br>修改选择单位时显示的绿色圆圈，不更改实际碰撞(radius)和可选择范围。
## uiTargetRadius
translation:单位选择半径
<br>type:integer
<br>单位的被选择半径，在此范围内选择这个单位
## shieldRenderRadius
translation:单位护盾显示半径
<br>type:integer
<br>护盾绘制半径，默认值比半径大一点。可以设置在单位上显示更大或更小的护盾圈。
## shieldDisplayOnlyDeflection
translation:护盾只在受攻击时显示
<br>type:bool
<br>隐藏护盾，只在受到攻击时显示。
## shieldDeflectionDisplayRate
translation:护盾消失速度
<br>type:float
<br>默认值为4。数值越大消失越快。
## showOnMinimap
translation:显示在小地图上
<br>type:bool
<br>默认为true。如果为false，则在小地图上不显示此单位。
## showOnMinimapToEnemies
translation:显示于敌人小地图
<br>type:bool
<br>是否在敌人小地图上显示。目前不支持逻辑。
## showActionsWithMixedSelectionIfOtherUnitsHaveTag
translation:混合所选单位所显示的行为(标签)
<br>type:tags
<br>如果选择的单位都包含此处使用的标签，则合并“行为(action)”。比如您的步单位通过部署转化成另一个单位，在混合时可以当作同一个单位处理，不再是默认的谁都无法执行操作。例子如红警的盟军大单位在混合选中后依旧可执行部署或解除。
## isBuilding
translation:是建筑
<br>type:bool
<br>定义单位是否为建筑物。
## footprint
translation:建筑碰撞范围
<br>type:integers
<br>填四个数值(左，上，右，下)，单位是格子，建筑默认占一格，向左和向上需要填负数，填整数在选择时有偏移。
四个数值可以完全颠倒，这样不会阻碍单位移动。
决定建筑单位碰撞体积，此区域内单位不能通过，如果在单位运动途中单位则会绕过。单位实际可选择面积使用的是radius。
## constructionFootprint
translation:建筑覆盖范围
<br>type:integers
<br>基础规则同上，这个区域内不能建造建筑，但是单位可以通过。一般需要设定比上一个面积大。好处是即使建造的密密麻麻，单位也有路可走
## displayFootprint
translation:建筑选择UI
<br>type:integers
<br>基础规则同上，用于选择单位时UI显示。不设定则默认为建筑覆盖区域。
## buildingSelectionOffset
translation:建筑UI调整
<br>type:integer
<br>默认值为0。以像素为单位对选框额外设定。
## buildingToFootprintOffsetX
translation:建筑X轴偏移
<br>type:float
<br>设置X轴位置偏移，默认10.若设置非对称的建筑，单位会根据覆盖范围会挤在角上，这时如果要准确显示就需要额外偏移。与直接使用图像偏移的区别:
由于铁锈判断选中单位是根据单位体积(radius),因此图像偏移实际上单位的位置不变，会容易造成点击时的误差。而当前代码实际上是移动单位，则不会造成这个问题。
## buildingToFootprintOffsetY
translation:建筑Y轴偏移
<br>type:float
<br>设置Y轴位置偏移，默认10.其它参上条
## placeOnlyOnResPool
translation:建筑只能建造在资源池上
<br>type:bool
<br>通常用于提取器，会强制在资源池中进行建筑物构造。可以用于在自定义战役中限制某单位只能在某地建造。
## selfBuildRate
translation:自动建造速度
<br>type:float
<br>此单位自动构造所需要的时间，目前用于虫族。计算方式为：此处所填时间=1÷(60x您需要的秒)。
## ignoreInUnitCapCalculation
translation:不计入单位数量统计
<br>type:bool
<br>铁锈中有单位数量上限设定，填true时不计入统计，多用于辅助单位，建筑物的默认值为true。
## copyFrom
translation:复制数据自
<br>type:file(s) (ini)
<br>加载其它文件的单位数据作为该单位的默认值，支持多个文件。无后缀名限制，可不写dont_load，用于模块化。
## dont_load
translation:禁止加载
<br>type:bool
<br>不加载此单位，缺失数据时不会出错。与copyFrom一起使用时很有用。
## overrideAndReplace
translation:覆盖单位
<br>type:string(s)
<br>用此单位覆盖另一个单位，地图上所有单位也将被替换，可以用来替换dex内无法修改的单位。
## overrideResourceLoadPath
translation:覆盖资源加载路径
<br>type:bool
<br>覆盖掉该单位的资源加载路径
## logIfCreditResourceUsed
translation:记录是否使用资源
<br>type:bool
<br>记录该单位是否使用了资源
## onNewMapSpawn
translation:地图位置产生指定单位
<br>type:string
<br>在地图上添加此单位。可以用于覆盖铁锈默认的资源逻辑。参数：
emptyResourcePools_asNeutral  产生位置于空资源池，并且为中立所属
emptyOrOccupiedResourcePools_asNeutral 空的或者已经占用的资源池，并且为中立所属
mapCenter_asNeutral 地图中心，且为中立所属
mapCenter_eachActiveTeam 地图中心，且给与每个玩家
spawnPoint_eachActiveTeam 玩家初始位置，给与每个玩家
## globalScale
translation:全局缩放
<br>type:float
<br>废弃代码，不要用。将一个单位按比例放大，但不放大攻击力。默认值为1。不建议更改。
## isLocked
translation:锁定
<br>type:bool
<br>禁止建造该单位。可以与overrideAndReplace一起使用，以限制玩家可以建造的单位。
## isLockedIfGameModeNoNuke
translation:禁核模式锁定
<br>type:bool
<br>如果在游戏开始前选择了禁用核武器，禁止建造此单位。
## experimental
translation:实验单位标志
<br>type:bool
<br>标记单位为实验单位。影响缩小图标和游戏结束统计。
## stayNeutral
translation:保持中立
<br>type:bool
<br>设置为true时，单位处于中立队伍情况下，禁止靠近时更改为玩家所属。仍然有其它方式获得。
## createNeutral
translation:创建时中立
<br>type:bool
<br>设置为true时，产生该单位总是自动转变为中立队伍。创建时中立，但不妨碍玩家捕获。
## createOnAggressiveTeam
translation:创建为敌对中立
<br>type:bool
<br>设置为true时，此中立单位对所有玩家有敌意。
## tags
translation:标签
<br>type:string(s)
<br>标签，用于对单位进行分类，用于实现各种各样的特殊作。比如单位数量限制，伤害修正，增益损益，触发条件等等
## defineUnitMemory
translation:定义单位内存
<br>type:memories
<br>为每个单元创建唯一的自定义存储变量。允许的类型:boolean, float/number, unit, string
格式:defineUnitMemory:类型 变量名称
"defineUnitMemory: boolean nukeActive,boolean laserReady, float experience, unit nextTarget, unit homeBase, string customText
"
## @memory
translation:@定义内存
<br>type:string
<br>定义单个内存，但可以打多行此代码，与上方代码相反
## updateUnitMemory
translation:更新单位内存
<br>type:memories
<br>(类似[action]setUnitMemory但是性能更好)works like [action]setUnitMemory but with better performance and easier timing than triggering an action
## updateUnitMemoryRate
translation:更新单位内存频率
<br>type:memories
<br>(默认1s,填写0则为每帧)How often to call updateUnitMemory, defaults to 1s. At zero would trigger every frame.
## fogOfWarSightRange
translation:视野
<br>type:integer
<br>设置单位视野，在战争迷雾中可以看到的瓷砖数量。默认为15。
## fogOfWarSightRangeWhileNotBuilt
translation:未完成时视野
<br>type:integer
<br>填数值，当建筑或单位没有建造完成时，它的视野范围
## softCollisionOnAll
translation:碰撞体积软化
<br>type:integer
<br>与其他单位碰撞时产生柔和的碰撞效果，填负数会导致单位相互吸引。
## disableAllUnitCollisions
translation:禁用碰撞
<br>type:bool
<br>如果为true，则该单位无视与其它单位碰撞。无碰撞体积单位可以用于固定位置制造效果，或是用于一些不影响单位通行的场景。
## availableInDemo
translation:在演示版中可用
<br>type:bool
<br>是否能在演示中使用
## isUnrepairableUnit
translation:禁止被修复
<br>type:bool
<br>如果为true，则任何单位都无法修复此单位。但负伤害仍然可以维修。
## isUnselectable
translation:禁止选择
<br>type:bool
<br>如果为true，则无法选择单位。 （包括AI）可用于效果单位，禁止被玩家选择。
## isUnselectableAsTarget
translation:禁止选择和作为目标
<br>type:bool
<br>默认效果为isUnselectable。可以用来创造不能被选择但是可以被攻击，回收的单位
## isPickableStartingUnit
translation:为可选初始单位
<br>type:bool
<br>如果为true，则将单位添加到游戏高级设置菜单中，用于可选初始单位菜单。
## startFallingWhenStartingUnit
translation:为可选单位开局后从天而降
<br>type:bool
<br>如果为true，则游戏开始时，此单位会从从天而降。
## soundOnAttackOrder
translation:攻击指令音效
<br>type:audios
<br>填音效名称列表。用,隔开。每次下达攻击指令时只播放其中一个。仅支持.ogg和.wav格式，注意如果您mod用于pc端，则不要直接修改后缀名，要转换格式。
## soundOnMoveOrder
translation:移动指令音效
<br>type:audios
<br>填声音名称列表。用,隔开。每次下达移动指令时只播放其中一个。仅支持.ogg和.wav格式，注意不要直接修改后缀名，要转换格式。
## soundOnNewSelection
translation:选择指令音效
<br>type:audios
<br>填声音名称列表。用,隔开。每次下达选择指令时只播放其中一个。仅支持.ogg和.wav格式，注意不要直接修改后缀名，要转换格式。
## canNotBeDirectlyAttacked
translation:禁止直接攻击
<br>type:bool
<br>无敌，如果为true，任何单位都不能直接瞄准此单位，也不会受到范围武器伤害。则还将在胜利/失败检查中跳过检查。
注：如果初始单位有这个属性且可能会导致游戏开局就秒输时，Mod作者会看到警告消息
## canNotBeDamaged
translation:禁止受到伤害
<br>type:bool
<br>无敌，可被敌方攻击，但不造成实质伤害。如果canNotBeDirectlyAttacked为true,此语句为false,则不可被直接攻击但受到范围伤害。
## canNotBeGivenOrdersByPlayer
translation:禁止接受指令
<br>type:bool
<br>如果为true，则单位不会接受玩家或AI的命令。可以选中查看信息。
## canOnlyBeAttackedByUnitsWithTags
translation:仅许带此标签单位攻击
<br>type:strings(s)
<br>填标签，只有带有这些标签的单位才能直接定位到该单位。
## allowCaptureWhenNeutralByAI
translation:允许中立时被AI俘虏
<br>type:bool
<br>(推测,以前人机不能捕获中立单位)
## transportSlotsNeeded
translation:运输占用位置
<br>type:integer
<br>默认值为1。此单位在运输载具中占据的格子数。
## maxTransportingUnits
translation:运输槽位数量
<br>type:integer
<br>该单位载员格子数量。
## transportUnitsRequireTag
translation:被运输单位需要标签
<br>type:string(s)
<br>仅允许运输具有这些标签之一的单位。可以用于运输类型分类，如人运物资，步单位车运人，气垫船运车辆。或是子机限制，如航母飞机只能降落到航母。
## transportUnitsRequireMovementType
translation:被运输单位类型限制
<br>type:movementTypes
<br>仅允许运输具有这些移动类型之一的单位。默认陆地。比如可以设定某单位可以运输空军以实现停机坪，只运输海军等。
## transportUnitsBlockAirAndWaterUnits
translation:禁止运输空军和海军
<br>type:bool
<br>禁止运输空军和海军，默认为true。如果为true，则此单位只能运输LAND单位。
## transportUnitsKeepBuiltUnits
translation:单位建造完成时保留在载具内
<br>type:LogicBoolean
<br>使建造的单位留在运输者中，而不是造完直接从载具中出来。
## transportUnitsCanUnloadUnits
translation:载具可以卸载单位
<br>type:LogicBoolean
<br>载具卸载单位需要满足条件，默认为“ if not self.isOverLiquid() and not self.isMoving()”(不在液体上且没有移动)
## transportUnitsAddUnloadOption
translation:载具显示卸载按钮
<br>type:LogicBoolean
<br>是否显示卸载按钮
## transportUnitsUnloadDelayBetweenEachUnit
translation:载具卸载时间间隔
<br>type:time
<br>卸载单位之间的延迟时间。
## transportUnitsKillOnDeath
translation:载具内单位和载具一同死亡
<br>type:LogicBoolean
<br>默认为true。如果载具死亡，则其中单位也死亡。
## transportUnitsHealBy
translation:载具治疗内部单位速度
<br>type:float
<br>填数值，以帧为单位。自动治疗载具内部单位。
## transportUnitsBlockOtherTransports
translation:载具禁止装载其它载具
<br>type:bool
<br>默认值为true，如果为false，则此载具可以装载其它载具。比如步单位装物资，载具装步单位，运输船装载具。
## whileNeutralTransportAnyTeam
translation:中立时可装载任意所属单位
<br>type:bool
<br>如果是中立的，则这个部队可以装载任何队伍的部队。可用于占领中立单位，比如坦克需要驾驶员，步单位建筑平民建筑。
## whileNeutralConvertToTransportedTeam
translation:中立时转换为载员队伍
<br>type:bool
<br>中立时将其转换为载员队伍。与whileNeutralTransportAnyTeam一起使用，用于占领中立单位。
## convertToNeutralIfNotTransporting
translation:卸载所有单位时恢复为中立
<br>type:bool
<br>卸载单位时将其恢复为中立队伍。与whileNeutralTransportAnyTeam一起使用。
## transportUnitsOnTeamChangeKeepCurrentTeam
translation:转换所属时保留内部单位所属
<br>type:bool
<br>如果为true，则单位转换阵营时仍然将运输的单位保留在其原始队伍中。
## transportUnitsEachUnitAlwaysUsesSingleSlot
translation:载员只占用一个槽位
<br>type:bool
<br>所有载员无论体积只占用一个运输槽。但体积大于载员数时仍然不能进入。
## transportUnitsKeepWaypoints
translation:载员保持路径点
<br>type:bool
<br>目前无效
## resourceRate
translation:回收速率
<br>type:float
<br>回收速度。每帧回收血量。与canReclaimResources一起使用。允许其他队伍回收该单位。通常与中立队伍配合使用。使用价格来设置获取哪些资源。
## similarResourcesHaveTag
translation:像用于此标签的单位
<br>type:string(s)
<br>有这些标签时，资源采集单位将视为同一种资源
## resourceMaxConcurrentReclaimingThis
translation:可同时被此数目单位回收
<br>type:integer
<br>默认为无限制。限制有多少单位可以同时回收此资源。
## reclaimPrice
translation:回收价格
<br>type:integer
<br>自定义资源，类似价格。对于自定义资源很有用。
## canReclaimResources
translation:可以回收资源
<br>type:bool
<br>如果为true，则此单位可以收集资源，这对于resourceRate很有用。
## canReclaimResourcesNextSearchRange
translation:搜寻资源范围
<br>type:integer
<br>当一处资源采集完后，搜寻更多资源的范围。
## canReclaimResourcesOnlyWithTags
translation:仅允许回收特定标签资源
<br>type:string(s)
<br>仅允许回收有此标签的单位。
## resourceReclaimMultiplier
translation:建造单位回收资源的乘数
<br>type:float
<br>默认为1
## nanoUnbuildSpeed
translation:建造单位回收未完成单位速度
<br>type:float
<br>(俗称"蓝影"，默认为1)
## canRepairBuildings
translation:可以修建筑
<br>type:bool
<br>如果为true，该单位可以修复建筑。 （isBuilder：true是必需的）
## canRepairUnits
translation:可以修单位
<br>type:bool
<br>如果为true，此单位可以修复单位。 （isBuilder：true是必需的）
## autoRepair
translation:可以自动修
<br>type:bool
<br>自动维修附近单位，范围为nanoRange。 （isBuilder：true是必需的）
## canReclaimUnitsOnlyWithTags
translation:仅允许回收特定标签单位
<br>type:tags
<br>仅允许此单位回收具有特定标签单位。
## canRepairUnitsOnlyWithTags
translation:仅允许维修特定标签单位
<br>type:tags
<br>仅允许此单位维修具有特定标签单位。
## nanoRange
translation:维修或建造范围
<br>type:integer
<br>默认值为85。定义单位的构建/修复/回收范围。
## nanoRepairSpeed
translation:维修速度
<br>type:float
<br>默认值为0.2。定义单位修复速度。
## nanoBuildSpeed
translation:建造速度
<br>type:float
<br>默认值为1。定义单位建造速度。 （可能与目标的buildSpeed相乘）
## nanoReclaimSpeed
translation:回收速度
<br>type:float
<br>默认为nanoRepairSpeed*5.1)以符合旧版本的行为
## nanoRangeForRepairIsMelee
translation:维修范围按近战逻辑
<br>type:bool
<br>定义此单位维修时是否为近战算法，默认计算是从自身中心到目标中心，如果单位过大运动又受到阻碍，则虽然看起来很近，然而实际太远无法建造。
近战类算法则是算上其半径，由中心计算改为从边缘计算。
## nanoRangeForReclaimIsMelee
translation:回收范围按近战逻辑
<br>type:bool
<br>与上条类似，本条定义其回收范围是否为近战算法。
## nanoRangeForRepair
translation:维修距离
<br>type:integer
<br>此单位维修距离。
## nanoRangeForReclaim
translation:回收距离
<br>type:integer
<br>此单位回收距离。
## nanoFactorySpeed
translation:工厂速度乘数
<br>type:float
<br>默认值为1。如果此单位是工厂，则乘以创建单位的buildSpeed值。用于加速或者减速建造。
## extraBuildRangeWhenBuildingThis
translation:额外建造距离
<br>type:integer
<br>此单位额外的建造距离，可以使建造者在更远的地方建造它，多用于水上建筑。
## builtFrom_#_name
translation:从此单位建造
<br>type:string(s)
<br>除非您向原版工厂添加单位，否则不建议使用。将该单位添加到目标建筑物中。
## builtFrom_#_pos
translation:从此单位建造排序
<br>type:float
<br>在列表中的排序，越小越靠前。
## builtFrom_#_forceNano
translation:从此单位像建筑一样建造
<br>type:bool
<br>如果为true，则像构建建筑一样造此单位。 （即使是一个单位）
## builtFrom_#_isLocked
translation:从此单位建造条件
<br>type:LogicBoolean
<br>如果为true，则无法在目标中构建此单位。 （逻辑布尔值，设置建造条件）
## builtFrom_#_isLockedMessage
translation:从此单位建造锁定信息
<br>type:LocaleString
<br>无法建造时显示的信息。
## exit_x
translation:离开x轴
<br>type:float
<br>从载具卸载或者工厂生产完成时，单位出现的位置，默认为0
## exit_y
translation:离开y轴
<br>type:float
<br>从载具卸载或者工厂生产完成时，单位出现的位置，默认为5，正数向下。
## exit_dirOffset
translation:离开旋转角度
<br>type:float
<br>单位默认为180(朝下)，建筑物默认为0(朝右)。定义已创建或卸载单位的退出方向。
## exit_heightOffset
translation:离开高度
<br>type:float
<br>默认值为0。定义创建或卸载的单位出现的高度。
## exit_moveAwayAmount
translation:离开距离
<br>type:float
<br>默认值为70。定义创建或卸载的单位与该单位的距离。
## exitHeightIgnoreParent
translation:离开高度忽略父单位
<br>type:bool
<br>离开时的高度不考虑父高度;用于与父单位一起建造时分离附件
## dieOnConstruct
translation:构建时死亡
<br>type:bool
<br>如果为true，则创建建筑时删除自身。（目标建筑物/单位需要selfBuildRate以自动建造完成）
## dieOnZeroEnergy
translation:无能量时死亡
<br>type:bool
<br>如果能量值为零，该单位死亡。
## numBitsOnDeath
translation:死亡产生碎片
<br>type:integer
<br>定义该单位死亡时散落的碎片的数量。
## fireOnDeath
translation:死亡产生火焰
<br>type:bool
<br>填写布尔值，单位死亡后是否有火焰残留
## nukeOnDeath
translation:死亡核爆
<br>type:bool
<br>不推荐使用。建议使用死亡武器代替，其拥有更丰富的设定选项。如果为true，单位死亡时会生成一个内置的核抛射体爆炸效果。
## nukeOnDeathRange
translation:死亡核爆范围
<br>type:float
<br>不推荐使用。定义使用nukeOnDeath时的核抛射体效果范围。
## nukeOnDeathDamage
translation:死亡核爆伤害
<br>type:float
<br>不推荐使用。定义使用nukeOnDeath时的核武器效果区域伤害。
## nukeOnDeathDisableWhenNoNuke
translation:死亡核爆条件
<br>type:bool
<br>不推荐使用。默认为false。如果为true，则禁用核武器时，该单位死亡时不会产生核爆炸。
## fireTurretXAtSelfOnDeath
translation:死亡武器
<br>type:turret ref
<br>死亡武器。单位死后，使用指定炮塔攻击自身所在位置。
## explodeOnDeath
translation:死亡爆炸
<br>type:bool
<br>默认为true。如果为false，则禁用单位死亡时的内置爆炸效果。
## explodeOnDeathGroundCollision
translation:死亡撞击地面爆炸
<br>type:bool
<br>默认为true。如果为false，则禁用接触地面时内置爆炸效果。
## effectOnDeath
translation:死亡效果
<br>type:effect(s) ref
<br>单位死亡时产生内置或自定义效果。
## effectOnDeathGroundCollision
translation:死亡撞击地面效果
<br>type:effect(s) ref
<br>类似于effectOnDeath，但当单位接触地面时。对飞行单位有用。
## explodeOnDeathGroundCollosion
translation:死亡撞击未地面爆炸
<br>type:bool
<br>默认为true。如果为false，则使用接触地面时内置爆炸效果。
## effectOnDeathGroundCollosion
translation:死亡未撞击地面效果
<br>type:effect(s) ref
<br>类似于effectOnDeath，但当未单位接触地面时。对飞行单位有用。
## unitsSpawnedOnDeath
translation:死亡产生单位
<br>type:string(s)
<br>死亡时产生这些单位。逗号分隔的单位标识符。
## unitsSpawnedOnDeath_setToTeamOfLastAttacker
translation:死亡产生单位所属
<br>type:bool
<br>如果为true，死亡时产生的单位将更改归属为最后一个攻击者的队伍。
## hideScorchMark
translation:死亡痕迹
<br>type:bool
<br>如果为true，则禁止单位死亡时留下焦痕。
## soundOnDeath
translation:死亡音效
<br>type:audios
<br>为该单位设置自定义死亡声音。
## explodeTypeOnDeath
translation:死亡时爆炸类型
<br>type:preset effects
<br>options: verysmall, small, normal, large, largeUnit, building, buildingNoShockwaveOrSmoke, verylargeBuilding
添加内置死亡效果关键字，选项：非常小，很小，正常，大，大单位，建筑物，没有冲击波和烟雾的建筑物，非常大建筑
## effectOnDeathIfUnbuilt
translation:没建造完成时死亡效果
<br>type:effect(s) ref
<br>如果这个单位没建造完成就被毁了，则播放此效果
## disableDeathOnZeroHp
translation:禁用零血死亡
<br>type:bool
<br>如果为true，允许单位在0血量的情况下仍然存活，单位不会自然死亡。对自定义“死亡”动作很有用
## autoTriggerCooldownTime
translation:自动触发间隔
<br>type:time 
<br>设置自动触发动作间隔。默认为1s。警告：对于许多设备，将此值设置得太低可能会影响性能，具体取决于操作效果。
## autoTriggerCooldownTime_allowDangerousHighCPU
translation:允许超高频触发
<br>type:bool
<br>自动触发冷却时间，允许高CPU占用，也就是可以使用非常高频的触发，但不建议这么做。
## autoTriggerCheckWhileNotBuilt
translation:在未建造完成时依然自动触发
<br>type:bool
<br>- 默认为 false - 当 true 时，即使单位未完成建造，所有自动触发器仍在运行
## autoTriggerCheckRate
translation:自动触发检查率
<br>type:enum
<br>选项:everyFrame(默认)，every4Frames, every8Frames。
注意:所有触发器无论检查率都是在第一次创建和自动触发冷却之后检查的。
注:使用模板添加[core]autoTriggerCheckRate:every8Frames到所有单位。可以使使用了复杂autoTriggers的mod有巨大的性能提升。
## action_#_[actionKey]
translation:action_#_[actionKey]
<br>type:special value
<br>不建议使用，请改用[action_x]节
## canBuild_#_[canBuildKey]
translation:canBuild_#_name/pos/isLocked
<br>type:special value
<br>请改用canBuild部分。
