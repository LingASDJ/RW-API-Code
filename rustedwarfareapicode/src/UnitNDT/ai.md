# ai
## useAsBuilder
translation:用作建造者
<br>type:bool
<br>作为建造者。如果单位可以建造或维修建筑物，则设置为true。 默认为[core] isBuilder。
## useAsTransport
translation:用作运输
<br>type:bool
<br>作为载具。如果单位可以运输单位，则默认为true.如果您的单位可以运输又能攻击，则AI可能囤积起来而不攻击，则需要设置false.
## useAsAttacker
translation:用作攻击者
<br>type:bool
<br>是否作为攻击者。
## useAsHarvester
translation:用作采集
<br>type:bool
<br>作为采集者。如果单位可以回收资源，则默认为true
## disableUse
translation:禁用
<br>type:bool
<br>禁止AI建立这个单位或建筑物
## ai_upgradePriority
translation:AI升级优先级
<br>type:float
<br>升级优先级。默认值为0.06。 设置在0-1之间，越高，表示AI更有可能先于其他升级该单位。
## buildPriority
translation:建造优先级
<br>type:float
<br>建造优先级，填0-1。 越大越AI越可能造。Luke的的第一座土地工厂使用0.8，空中工厂使用0.48，第一炮塔使用0.47。
## noneInBaseExtraPriority
translation:基地内没有时优先级
<br>type:float
<br>如果AI基地中不存在此单位，则增加其优先级。
## noneGlobalExtraPriority
translation:全图没有时优先级
<br>type:float
<br>如果此单位在地图上的任何位置都不存在，则增加其优先级。
## nonInBaseExtraPriority
translation:基地内没有时的优先级
<br>type:float
<br>基地内没有时的优先级
## nonGlobalExtraPriority
translation:全图没有时的优先级
<br>type:float
<br>如果此单位在地图上的任何位置都不存在，则增加其优先级。
## recommendedInEachBaseNum
translation:推荐在每个基地的数量
<br>type:integer
<br>推荐在每个基地中的数量。
## recommendedInEachBasePriorityIfUnmet
translation:推荐条件不满足时优先级
<br>type:float
<br>如果未满足，推荐在基地中的优先级。
## upgradedFrom
translation:升级自
<br>type:string
<br>创建到另一个单位的链接，用于保留同一单位已升级和未升级的计数。
## maxGlobal
translation:全图最大数量
<br>type:integer
<br>全图最多拥有的数量。
## maxEachBase
translation:每个基地最大数量
<br>type:integer
<br>每个基地最多拥有的数量。
## notPassivelyTargetedByOtherUnits
translation:不被动地被其他单位瞄准
<br>type:bool
<br>允许更好的墙壁建筑物，默认情况下，这些建筑物不会瞄准目标。用于围墙（当canAttack=true时使用这条代码会报错）
## lowPriorityTargetForOtherUnits
translation:低优先级目标
<br>type:bool
<br>其它单位不优先考虑此单位。用于围墙
## aiTags
translation:ai标签
<br>type:string
<br>采集
## whenUsingAsHarvester_recommendedInEachBase
translation:每个基地此采集者数量
<br>type:integer
<br>当此单位用作采集者时，每个基地推荐的采集者数量。
## whenUsingAsHarvester_recommendedGlobal
translation:全地图推荐采集者数量
<br>type:integer
<br>当此单位用作采集者时，全图推荐的采集者数量。
## whenUsingAsHarvester_includeOtherHarvesterCounts
translation:是否算在采集者计数中
<br>type:bool
<br>当此单位用作采集者时，是否算在其它采集者统计中。
## onlyUseAsHarvester_ifBaseHasUnitTagged
translation:有此标签才作为采集者
<br>type:string
<br>只有当基地有单位标记时才可以作为采集者使用.
