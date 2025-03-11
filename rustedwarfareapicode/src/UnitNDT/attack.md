# attack
## maxAttackRange
translation:攻击距离
<br>type:float
<br>最大攻击距离。（会乘以globalScale，但不建议使用globalScale）
## canAttack
translation:可以攻击
<br>type:bool
<br>如果设置为false，则不能攻击任何单位。其他canAttack选项将无效。
## canAttackFlyingUnits
translation:可攻击空中单位
<br>type:LogicBoolean
<br>可以攻击空中单位，下面的攻击条件代码可于任意炮塔单独设置。
## canAttackLandUnits
translation:可攻击表面单位
<br>type:LogicBoolean
<br>可以攻击表面单位（包括陆地和水面）
## canAttackUnderwaterUnits
translation:可攻击水下单位
<br>type:LogicBoolean
<br>可以攻击水下单位
## canAttackNotTouchingWaterUnits
translation:可以攻击非接触水单位
<br>type:LogicBoolean
<br>可以攻击非接触水单位，默认为true。如果是false，则只能攻击与水接触的单位，不能攻击岸上。用于鱼雷逻辑。也可以根据炮塔需要设置。
## canOnlyAttackUnitsWithTags
translation:只攻击带特定标签单位
<br>type:tags
<br>只能攻击带特定标签的单位
## canOnlyAttackUnitsWithoutTags
translation:不攻击带特定标签单位
<br>type:tags
<br>不能攻击带特定标签的单位
## setMainTurretAs
translation:设置主炮塔
<br>type:turret ref
<br>设置主炮塔，有些代码要锁定主炮塔，对其有用。
## turretMultiTargeting
translation:每个炮塔向不同目标射击
<br>type:bool
<br>允许每个炮塔同时向不同的目标射击。如果使用[turretlimitingAngle(限制角度)非常有用
## isMelee
translation:近战
<br>type:bool
<br>近战单位。与低攻击范围配合使用（例如maxAttackRange：9）可使自身和目标半径添加到范围内，并影响AI。
## meleeEngangementDistance
translation:近战索敌距离
<br>type:integer
<br>使部队游猎，自动移动以攻击附近的敌方部队。近战默认为250，非近战默认为0（即使非近战也可以使用。）
## turretRotateWithBody
translation:炮塔随主体旋转
<br>type:bool
<br>炮塔随主体旋转。默认true
## attackMovement
translation:攻击移动类型
<br>type:string
<br>移动攻击类型。实际上，这条代码内可以任意填写值，但enum值例如normal/bomber。能量耗尽时，轰炸机攻击运动将后退。可填moveaway，strafing但无效。
## dieOnAttack
translation:自杀攻击
<br>type:bool
<br>攻击时自毁。
## removeOnAttack
translation:移除攻击
<br>type:bool
<br>攻击时移除自身.
## isFixedFiring
translation:固定射击
<br>type:bool
<br>必须将身体对准目标射击。通常会使得部队需要停下来才能瞄准和射击。比如火炮。
## aimOffsetSpread
translation:瞄准偏移
<br>type:float
<br>将每次攻击时的偏移量乘以目标半径。默认为0.6。设为0则不偏移，对范围武器影响较大。
## stopTargetingAfterFiring
translation:自动停火
<br>type:bool
<br>单位射击后停止瞄准。很少使用或需要。如用于您不希望胡乱攻击浪费弹药的单位。
## disablePassiveTargeting
translation:不能主动攻击
<br>type:bool
<br>单位只攻击手动选择的目标。很少使用或需要。如用于自爆卡车守家，如果自动攻击敌人就太蠢了。
## showRangeUIGuide
translation:显示范围UI
<br>type:bool
<br>显示攻击范围的白圈。默认true.
## shootDelayMultiplier
translation:开火间隔乘数
<br>type:float
<br>默认为1。可以在setUnitStats动态改变
## shootDamageMultiplier
translation:开火伤害乘数
<br>type:float
<br>默认为1。可以在setUnitStats动态改变
## turretSize
translation:炮塔大小
<br>type:float
<br>设置所有炮塔大小。填数值，按像素计算，不决定素材大小，而是以此为半径的开火位置。
## turretTurnSpeed
translation:炮塔转速
<br>type:float
<br>炮塔转速，单位是每帧旋转角度。
## shootDelay
translation:攻击间隔
<br>type:float
<br>开火间隔，也可以在每个转塔上使用延迟
