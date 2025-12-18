# attachment
## x
translation:X坐标
<br>type:float
<br>example:x:10
<br>子单位x轴位置
## y
translation:Y坐标
<br>type:float
<br>example:y:15
<br>子单位Y轴位置
## height
translation:高度
<br>type:float
<br>example:height:3
<br>子单位高度。
## lockDir
translation:锁定角度
<br>type:boolean
<br>example:lockDir:true
<br>是否锁定角度
## idleDir
translation:闲置方向
<br>type:integer
<br>example:idleDir:45
<br>闲置时角度。
## idleDirReversing
translation:闲置方向反转
<br>type:float
<br>example:idleDirReversing:1
<br>允许朝向反转，比如重坦倒退移动时炮塔反转，而不需要整个单位转向。
## isVisible
translation:是可见
<br>type:boolean
<br>example:isVisible:true
<br>是可见的。
## onCreateSpawnUnitOf
translation:创建时生成单位
<br>type:unit name
<br>example:onCreateSpawnUnitOf:flydog
<br>此创造时也产生此子单位。
## canBeAttackedAndDamaged
translation:可被攻击或损坏
<br>type:boolean
<br>example:canBeAttackedAndDamaged:true
<br>可以被攻击或受到伤害。
## isUnselectable
translation:不可选择
<br>type:boolean
<br>example:isUnselectable:true
<br>是不可选择的。
## isUnselectableAsTarget
translation:禁止选择和作为目标
<br>type:boolean
<br>example:isUnselectableAsTarget:true
<br>默认效果为isUnselectable。可以用来创造不能被选择但是可以被攻击，回收的单位
## lockLegMovement
translation:锁定腿脚运动
<br>type:boolean
<br>example:lockLegMovement:true
<br>锁定腿脚防止乱动。
## freezeLegMovement
translation:冻结腿脚运动
<br>type:boolean
<br>example:freezeLegMovement:true
<br>冻结腿脚防止乱动。
## showMiniHp
translation:显示迷你血条
<br>type:boolean
<br>example:showMiniHp:false
<br>指附属单位下面那个又小又细的血条栏
## hideHp
translation:隐藏血量
<br>type:boolean
<br>example:hideHp:true
<br>隐藏单位的血量并不显示
## hidden
translation:隐藏
<br>type:boolean
<br>example:hidden:true
<br>隐藏整个单位
## keepAliveWhenParentDies
translation:保持子存活
<br>type:boolean
<br>example:keepAliveWhenParentDies:true
<br>当此单位死亡时，子单位保持存活。
## setDrawLayerOnTop
translation:绘制于顶层
<br>type:boolean
<br>example:setDrawLayerOnTop:true
<br>此子单位绘制于顶层。
## setDrawLayerOnBottom
translation:绘制于底层
<br>type:boolean
<br>example:setDrawLayerOnBottom:true
<br>此子单位绘制于底层。
## addTransportedUnits
translation:增加被运输单位
<br>type:boolean
<br>example:addTransportedUnits:true
<br>添加到运输单位槽中。
## lockRotation
translation:锁定旋转
<br>type:boolean
<br>example:lockRotation:true
<br>锁定方向，禁止旋转。
## rotateWithParent
translation:子单位一同旋转
<br>type:boolean
<br>example:rotateWithParent:true
<br>旋转时子单位是否一同旋转。
## resetRotationWhenNotAttacking
translation:不攻击时重置角度
<br>type:boolean
<br>example:resetRotationWhenNotAttacking:true
<br>不攻击时恢复到自身默认角度
## deattachIfWantingToMove
translation:移动时脱离
<br>type:boolean
<br>example:deattachIfWantingToMove:true
<br>若收到移动命令，子单位将自动分离。这包括来自action的路径点。可以用来制作机场。
## unloadInCurrentPosition
translation:卸载于此位置
<br>type:boolean
<br>example:unloadInCurrentPosition:true
<br>卸载单位时在这个位置进行卸载
## prioritizeParentsMainTarget
translation:优先考虑父单位的主要目标
<br>type:boolean
<br>example:prioritizeParentsMainTarget:true
<br>子单位优先考虑父单位当前的目标。
## alwaysAllowedToAttackParentsMainTarget
translation:总是攻击父单位的主要目标
<br>type:boolean
<br>example:alwaysAllowedToAttackParentsMainTarget:true
<br>子单位总是跟随攻击父单位的主要目标。
## onlyAttackParentsMainTarget
translation:只攻击父单位的主要目标
<br>type:boolean
<br>example:onlyAttackParentsMainTarget:true
<br>子单位只会攻击父单位的攻击目标。
## canAttack
translation:可攻击
<br>type:boolean
<br>example:canAttack:true
<br>默认值为true。设置为false以阻止子单位自动攻击。
## onParentTeamChangeKeepCurrentTeam
translation:改变队伍时子单位保持原队伍
<br>type:boolean
<br>example:onParentTeamChangeKeepCurrentTeam:true
<br>默认值为false。如果为true则父单位改变队伍时子单位不改变队伍。
## smoothlyBlendPositionWhenExistingUnitAdded
translation:补充时平滑移动
<br>type:boolean
<br>example:smoothlyBlendPositionWhenExistingUnitAdded:true
<br>补充所装载单位至槽位时平滑移动。
## keepWaypointsNeedingMovement
translation:保持需要移动路径点
<br>type:boolean
<br>example:keepWaypointsNeedingMovement:false
<br>默认值为false。当为false时，队列中任何需要移动才能完成的队列路径点都会被移除。
## showAllActionsFrom
translation:显示所有操作来源
<br>type:Logicbooleanean
<br>example:showAllActionsFrom:if self.hasFlag(id=1)
<br>当被选中时，在父单元列表中显示所有附加单位的动作
## createIncompleteIfParentIs
translation:创建随父单位
<br>type:boolean
<br>example:createIncompleteIfParentIs:false
<br>如果父节单位不完整，则创建子单位不完整
## onConvertKeepExistingUnitInSameSlot
translation:转换时附属仍然在同一槽位中
<br>type:boolean
<br>example:onConvertKeepExistingUnitInSameSlot:true
<br>转换单位时如果有相同ID的附属槽位则子单位就会在那个槽位中
## redirectDamageToParent
translation:重定向伤害到父单位
<br>type:boolean
<br>example:redirectDamageToParent:true
<br>将对附属造成的伤害重定向到父单位，而不是伤害子单位自身。
## redirectDamageToParent_shieldOnly
translation:重定向伤害到父单位护盾
<br>type:boolean
<br>example:redirectDamageToParent_shieldOnly:true
<br>只将对附属造成的伤害重定向到父单位的护盾，而不是伤害子单位自身。如果盾没了那就伤害自身，如模块蜘蛛。
