# placementRule
## anyRuleInGroup
translation:放置规则组
<br>type:string
<br>example:anyRuleInGroup:DogFoodPlace
<br>放置规则组名。（仅需要通过此组规则中的1条，而不是全部通过。在其他放置规则中可使用相同的组名称来创建组。）
## searchTags
translation:检索标签
<br>type:string(s)
<br>example:searchTags:redFox
<br>搜索至少包含这些标签之一的任何单位
## searchTeam
translation:检索队伍
<br>type:enum
<br>example:searchTeam:own
<br>要搜索的团队可以是：自身|中立|盟友非自身|盟友|敌人|任何。  own|neutral|allyNotOwn|ally|enemy|any
## searchOffsetX
translation:检索偏移
<br>type:float
<br>example:searchOffsetX:0
<br>检索偏移，默认为0
## searchOffsetY
translation:检索偏移
<br>type:float
<br>example:searchOffsetY:0
<br>检索偏移，默认为0
## searchDistance
translation:搜索距离
<br>type:float
<br>example:searchDistance:99
<br>搜索距离
## excludeIncompleteBuildings
translation:排除不完整建筑
<br>type:boolean
<br>example:excludeIncompleteBuildings:true
<br>排除不完整的建筑
## excludeNonBuildings
translation:排除非建筑
<br>type:boolean
<br>example:excludeNonBuildings:true
<br>排除非建筑
## minCount
translation:最小数量
<br>type:integer
<br>example:minCount:1
<br>设定需要在搜索中找到的单位的最小数量。(如需要靠近某物)。默认值为0
## maxCount
translation:最大数量
<br>type:integer
<br>example:maxCount:1
<br>在匹配失败前设置最大单位数量(例如不能接近某个值)。默认为无限的
## blocksPlacement
translation:禁止放置
<br>type:boolean
<br>example:blocksPlacement:true
<br>锁定放置。默认为true。
## cannotPlaceMessage
translation:失败信息
<br>type:string
<br>example:cannotPlaceMessage:您不能睡觉，因为附近有chemms在游荡~
<br>如果此放置规则失败，则会向玩家显示消息（将成为mergedRuleGroup中的第一个失败规则）
## cannotPlaceMessage_[Language]
translation:失败信息(多语言)
<br>type:string
<br>example:cannotPlaceMessage_zh:您不能睡觉，因为附近有chemms在游荡~
<br>如果此放置规则失败，则会向玩家显示消息（将成为mergedRuleGroup中的第一个失败规则）（支持多种语言显示）
## checkEachTile
translation:检查每个地块
<br>type:boolean
<br>example:checkEachTile:true
<br>[true / false]默认为true（仅对测试单元中心设置为false，true会检查显示在放置网格上的单元下方的每个图块）
## aiSuggestionOnly
translation:仅限ai建议
<br>type:boolean
<br>example:aiSuggestionOnly:true
<br>不能与blocksPlacement一起使用，仅仅只是建议AI这么做
