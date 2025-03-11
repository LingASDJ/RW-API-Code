# projectile
## life
translation:存在时间
<br>type:integer
<br>开火后抛射体在没命中时的存活时间，单位为帧。60为1s。多少合适取决于速度与射程。
## delayedStartTimer
translation:延迟时间
<br>type:time
<br>抛射体发射延迟时间。
## interceptProjectile_removeTargetLifeOnly
translation:拦截抛射体移除目标存活时间
<br>type:bool
<br>默认值为false，当为false时射抛射体移除。true时使被击中的抛射体爆炸或分裂。用于设定命中抛射体时是否执行分裂逻辑。
## deflectionPower
translation:激光拦截耗能
<br>type:float
<br>默认值为1。此抛射体被激光防御摧毁所需的能量。 -1为禁止拦截。（对特殊武器如火焰）
## explodeOnEndOfLife
translation:寿终爆炸
<br>type:bool
<br>默认为false。True则会在寿命终结时爆炸，并产生其命中时该有的效果。而不是直接消失。
## autoTargetingOnDeadTarget
translation:自动切换目标
<br>type:bool
<br>如果目标死亡则自动切换单位。填true时如果有代码"targetGround:true"抛射体将会追踪距离它最近的单位。如果没有"targetGround"时将会在单位死亡后再改变目标。
## autoTargetingOnDeadTargetRange
translation:自动切换目标检索范围
<br>type:float
<br>当旧目标死亡时选择新目标的范围
## autoTargetingOnDeadTargetLead
translation:自动切换目标预判
<br>type:float
<br>尝试新的目标时的预判
## unloadUpToXUnitsFromSource
translation:卸载单位至命中地
<br>type:integer
<br>将指定个数单位卸载到抛射体爆炸位置。
## teleportSource
translation:传送
<br>type:bool
<br>将单位移动到抛射体爆炸的位置，用于传送自身。
## spawnUnit
translation:产生单位
<br>type:units
<br>在抛射体丸爆炸位置产生这种单位
## convertHitToSourceTeam
translation:命中时更改所属
<br>type:bool
<br>将更改被命中的单位转换队伍为自身所属。
## tags
translation:标签
<br>type:tags
<br>用于抛射体拦截功能。
## flameWeapon
translation:火焰武器
<br>type:bool
<br>命中时产生小火焰（仅用于装饰）
## spawnProjectilesOnEndOfLife
translation:在寿命结束时生成抛射体
<br>type:projectile ref
<br>填抛射体名。在寿命(life)结束时生成抛射体。生成抛射体逻辑具体参数参考后面生成抛射体大项。这简化了过去许多需要多炮塔(如贯穿攻击)或是生成辅助单位才能实现的操作。
## spawnProjectilesOnExplode
translation:在爆炸时生成抛射体
<br>type:projectile ref
<br>填抛射体名。只在爆炸时生成抛射体，如果耗光life则不会生成。
## spawnProjectilesOnCreate
translation:在创建时生成抛射体
<br>type:projectile ref
<br>填抛射体名。抛射体创建时生成抛射体。
## directDamage
translation:直接伤害
<br>type:integer
<br>击中对目标单位造成伤害。不适用于targetGround:true。
## areaDamage
translation:范围伤害
<br>type:integer
<br>范围伤害值，此区域内敌方单位都将受到损伤，默认向边缘递减。
## areaRadius
translation:范围半径
<br>type:float
<br>范围伤害区域大小，此区域内敌方单位都将受到损伤，默认向边缘递减。数值类型为像素，大小算法为半径，铁锈内地块一格长为20像素。
## areaDamageNoFalloff
translation:范围伤害不衰减
<br>type:bool
<br>默认false.为true时范围伤害不再向边缘递减。
## areaRadiusFromEdge
translation:范围伤害从边缘计算
<br>type:bool
<br>范围伤害将从单位的边缘计算，而不是默认的中心计算。主要用于攻击大型单位。
## areaExpandTime
translation:范围扩展时间
<br>type:float
<br>将区域伤害变为爆炸波向边缘扩散。效果如核抛射体。
## areaHitAirAndLandAtSameTime
translation:范围武器同时攻击空中和地面
<br>type:bool
<br>范围武器将同时打击空中和地面。
## areaHitUnderwaterAlways
translation:范围武器可攻击深海
<br>type:bool
<br>范围武器将可以打击深海单位如潜艇。
## areaIgnoreUnitsCloserThan
translation:范围伤害忽略区域
<br>type:integer
<br>小于此范围的单位不会受到攻击影响。需要比areaRadius小，否则造不成伤害。
## buildingDamageMultiplier
translation:建筑伤害乘数
<br>type:float
<br>默认为1。对建筑物伤害乘上此数值，用于伤害修正。比如闪电对建筑物伤害低，火焰对建筑物伤害高。
## shieldDamageMultiplier
translation:护盾伤害乘数
<br>type:float
<br>默认为1。对护盾伤害乘数。如0对护盾不造成伤害，2对护盾造成双倍伤害
## shieldDefectionMultiplier
translation:护盾阻挡乘数
<br>type:float
<br>护盾阻挡乘数，填0则可无视护盾，同时对单位和盾造成伤害。
在此代码所填的值为负数时，公式如下：默认伤害+对盾造成的伤害*护盾阻挡乘数的相反数=实际伤害
## hullDamageMultiplier
translation:护盾损伤乘数
<br>type:float
<br>可以用来制造只影响护盾的电磁脉冲武器。0忽略单位，只伤害护盾
## ignoreParentShootDamageMultiplier
translation:忽略父单位射击伤害乘数
<br>type:bool
<br>忽略父单位射击伤害乘数
## armourIgnoreAmount
translation:无视装甲数量
<br>type:integer
<br>无视目标装甲数量并造成伤害。
## friendlyFire
translation:友伤
<br>type:bool/string
<br>范围武器有友伤，可以伤害自己单位。铁锈限制不能对盟友有伤害。负数友伤可以用于范围维修，如果修盟友则需要用中立单位实现。参数（false，true，only-ignoreEnemy）（假，真，忽略敌人的友伤）
## mutatorX_ifUnitWithTags
translation:修正需要标签
<br>type:float
<br>伤害修正所需标签，仅对携带标签单位有效。否则为原始伤害。
## mutatorX_ifUnitWithoutTags
translation:修正除此标签
<br>type:float
<br>伤害修正除此标签外有效。
## mutatorX_directDamageMultiplier
translation:修正直接伤害
<br>type:float
<br>伤害修正,直接伤害(directDamage)乘数。比如直接伤害100，这里填2，对目标就造成200伤害。
## mutatorX_areaDamageMultiplier
translation:修正范围伤害
<br>type:float
<br>伤害修正,范围伤害(areaDamage)乘数。比如直接伤害100，这里填2，对目标就造成200伤害。
## mutatorX_changedExplodeEffect
translation:修正命中效果
<br>type:effect
<br>如果此修正处于有效状态，则更改爆炸效果。
## mutatorX_addResourcesDirectHit
translation:修正直接添加资源
<br>type:resource
<br>伤害修正,用于直接伤害(directDamage)，给目标添加指定资源。用途如给目标资源后，目标检测自身资源然后禁止移动。
## mutatorX_addResourcesAreaHit
translation:修正区域添加资源
<br>type:resource
<br>伤害修正,用于范围伤害(areaDamage)，给目标添加指定资源。
## targetGround
translation:目标为地面
<br>type:bool
<br>抛射体瞄准并攻击目标所在的地面，而不是追踪目标。直接伤害(directDamage)将会失效，需要使用areaDamage和areaRadius。
## targetGroundSpread
translation:目标为地面散布
<br>type:float
<br>填数值，用于目标为地面时随机造成偏差效果
## targetGround_includeTargetHeight
translation:目标为地面包括目标高度
<br>type:bool
<br>区域影响AA武器
## targetGroundHeightOffset
translation:目标为地面高度偏移
<br>type:float
<br>在目标上方或下方射击。可能对分裂和落下的抛射体有用。
## speed
translation:速度
<br>type:float
<br>抛射体飞行速度，单位是每帧飞行像素。铁锈地块1格20像素，填1则每秒飞行3格。
## targetSpeed
translation:到达速度
<br>type:float
<br>加速到这个速度
## targetSpeedAcceleration
translation:加速度
<br>type:float
<br>加速度，控制targetSpeed的速度提升
## ballistic
translation:弹道
<br>type:bool
<br>弹道导抛射体效果，使抛射体先飞向空中并向下飞，而不是走直线。
## ballistic_delaymove_height
translation:弹道垂直飞行高度
<br>type:float
<br>弹道导抛射体发射初期效果，决定弹道一开始先升高多少，再斜向爬升到最高过度。
## ballistic_height
translation:弹道高度
<br>type:float
<br>弹道最终高度。
## speedSpread
translation:速度散布
<br>type:float
<br>随机改变抛射体初始速度
## instant
translation:瞬间命中
<br>type:bool
<br>开火时立即击中目标,用于激光、闪电、波束。
## instantReuseLast
translation:瞬间命中回收最后抛射体
<br>type:bool
<br>用于激光和闪电。激光或闪电命中后还会存在一段时间，当此抛射体命中后，清除上一个抛射体效果。使得只有一个抛射体存在。如使用高频射速变成光束武器，而不是瞎眼叠加。
## instantReuseLast_alsoChangeTurretAim
translation:命中回收抛射体且改变瞄准
<br>type:bool
<br>使炮塔瞄准受到命中目标扫描效果的影响，对光束武器有用
## instantReuseLast_keepAreaDamageList
translation:命中回收抛射体区域伤害列表
<br>type:bool
<br>瞬间命中并回收最后的抛射体并且保持区域伤害列表，默认false,保持列表是1.13的正常行为，造成区域伤害不会第二次生效，但不是很有用。只有当您想要旧的行为时才使用这个。
## disableLeadTargeting
translation:禁用预判
<br>type:bool
<br>瞄准移动目标时，禁用预判计算。默认为false。
## leadTargetingSpeedCalculation
translation:预判计算
<br>type:float
<br>用于使用targetGround时预判计算。目标计算的预期速度。默认为“targetSpeed”。如果设置则基于speed.
## initialUnguidedSpeedHeight
translation:初始非制导垂直速度
<br>type:float
<br>设置抛射体和地面间的垂直速度，利用gravity制造出平滑的抛物线。比较迷，填1左右，重力可以不填。
## initialUnguidedSpeedX
translation:初始非相对制导速度X
<br>type:float
<br>让抛射体以弧线形式移动,负数向左，正数向右。
## initialUnguidedSpeedY
translation:初始非相对制导速度Y
<br>type:float
<br>修改抛射体的高度，正数向下，负数向上。
## gravity
translation:重力
<br>type:float
<br>控制地面的抛射体丸的拉力。与initialUnguidedSpeedHeight一起使用。
## trueGravity
translation:绝对向重力
<br>type:float
<br>抛射体在靠近单位时因为有该key会低空飞行一段距离，但注意不要填的太大，否则会直接往屏幕下方飞走。
## turnSpeed
translation:转弯速度
<br>type:float
<br>限制抛射体的转弯速度，更好的做出弹道效果。
## turnSpeedWhenNear
translation:靠近时转弯速度
<br>type:float
<br>用于当射抛射体非常接近目标时，默认禁用转弯速度以使其能够命中。
## wobbleAmplitude
translation:摆动幅度
<br>type:float
<br>抛射体飞行中摆动的剧烈程度。
## wobbleFrequency
translation:摆动频率
<br>type:float
<br>抛射体飞行中摆动的频率。
## pushForce
translation:推动力量
<br>type:float
<br>抛射体丸所携带的“重量”,质量越大，推力越大。推动（或以负值拉动）被击中的单位。除以目标质量
## pushVelocity
translation:推进速度
<br>type:float
<br>抛射体爆炸后可用推动单位,推力相对于方向的速度，推动（或以负值拉动）被击中的单位。忽略目标质量
## moveWithParent
translation:随父物体移动
<br>type:bool
<br>当父单位移动时也移动抛射体。对光束效果武器很有用。
## sweepOffset
translation:扫描偏移
<br>type:float
<br>扫描偏移，用于制作类似于两栖护盾坦克的激光武器。对光束效果很有用。
## sweepSpeed
translation:扫描速度
<br>type:float
<br>扫描速度，用于制作类似于两栖护盾坦克的激光武器。对光束效果很有用。
## sweepOffsetFromTargetRadius
translation:扫描偏移目标半径
<br>type:float
<br>以目标半径作为扫描偏移量乘数，用于制作类似于两栖护盾坦克的激光武器。对光束效果很有用。
## retargetingInFlight
translation:重新瞄准在飞行时
<br>type:bool
<br>在飞行过程中重新瞄准一个新的目标，非常适合投掷式武器和相互碰撞的抛射体
## retargetingInFlightSearchDelay
translation:重新瞄准在飞行时搜索延迟
<br>type:float/time
<br>寻找新目标之间的时间。默认5
## retargetingInFlightSearchRange
translation:重新瞄准在飞行时搜索范围
<br>type:float
<br>重新选择目标的范围。默认值120
## retargetingInFlightSearchLead
translation:重新瞄准在飞行时预判
<br>type:float
<br>引导射抛射体试图击中目标。默认15
## retargetingInFlightSearchOnlyTags
translation:重新瞄准在飞行时针对标签
<br>type:tag ref
<br>只针对具有这些标签的单位进行重定向。
## color
translation:颜色
<br>type:color
<br>使用十六进制值对该抛射体重新着色，它也决定了激光颜色，颜色格式为#AARRGGBB。
## teamColorRatio
translation:阵营色色相
<br>type:float
<br>将团队颜色混合到抛射体颜色中，填0-1。
## teamColorRatio_sourceRatio
translation:阵营色色相比例
<br>type:float
<br>将团队颜色混合到抛射体颜色中与原色比例，默认为(1-teamColorRatio)
## invisible
translation:隐藏
<br>type:bool
<br>隐藏抛射体图像。
## image
translation:图像
<br>type:image
<br>使用自定义图片。覆盖drawType和frame
## shadowFrame
translation:阴影帧
<br>type:integer
<br>定义哪一帧是单位的阴影
## shadowImage
translation:阴影图像
<br>type:image
<br>使用自定义图片给抛射体加阴影。
## drawType
translation:绘制类型
<br>type:integer
<br>使用内置抛射体图像。 0:projectiles.png 1:projectiles_large.png 2:projectiles2.png
## drawSize
translation:绘制大小
<br>type:float
<br>缩放抛射体大小。默认为1
## frame
translation:帧
<br>type:integer
<br>使用的内置图像帧，编号从零开始。和drawType结合使用。
## hitSound
translation:打击音效
<br>type:bool
<br>启用命中音效，默认true
## explodeEffect
translation:爆炸效果
<br>type:effect ref list
<br>抛射体爆炸效果
## explodeEffectOnShield
translation:护盾上爆炸效果
<br>type:effect ref list
<br>如果目标上有护盾，则使用此效果
## drawUnderUnits
translation:绘制与单位下
<br>type:bool
<br>绘制于单位下方。
## effectOnCreate
translation:创建时效果
<br>type:effect ref list
<br>创建时效果，会追随抛射体。
## shouldRevealFog
translation:揭开迷雾
<br>type:bool
<br>抛射体在爆炸时向玩家揭开迷雾。
## alwaysVisibleInFog
translation:迷雾中显示
<br>type:bool
<br>抛射体总是在迷雾中显示。
## nukeWeapon
translation:核武器
<br>type:bool
<br>发射时在迷您地图上显示。还有其他一些效果。
## trailEffect
translation:尾焰
<br>type:bool/effect
<br>设置为true时为默认的尾焰。但也可以指向任何自定义效果，或使用内置效果。
## trailEffectRate
translation:尾焰频率
<br>type:float
<br>尾焰产生频率，默认为3
## lightSize
translation:闪光大小
<br>type:float
<br>抛射体光照大小,单位半径是地块格子
## lightColor
translation:闪光颜色
<br>type:color
<br>抛射体光照颜色,不决定激光颜色，激光由color决定。
## lightCastOnGround
translation:闪光映射到地面
<br>type:bool
<br>将闪光效果映射到地面，如火炮的光和抛射体是分离的。
## largeHitEffect
translation:大的打击效果
<br>type:bool
<br>为true时会产生大的爆炸效果和声音（仅用于装饰），设为false时会禁用范围武器的冲击波效果。
## lightingEffect
translation:闪电效果
<br>type:bool
<br>将抛射体图像修改为闪电，一般需要instant(瞬间命中)搭配.
## laserEffect
translation:激光效果
<br>type:bool
<br>将抛射体图像修改为激光。
## beamImage
translation:波束图像
<br>type:image
<br>用于激光效果的主体图像，图像会被复制为多份显示。例如可用于做红警中的正弦波状辐射武器。因为本质是图像拼接,所以长度限制不能小于20
## beamImageOffsetRate
translation:波束偏移频率
<br>type:float
<br>波束图像的移动频率。
## beamImageStart
translation:波束开始图像
<br>type:image
<br>光束动画开火端效果图像
## beamImageEnd
translation:波束命中图像
<br>type:image
<br>光束动画命中端效果图像
## beamImageStartRotated
translation:波束始端旋转
<br>type:bool
<br>光束动画开火端效果图像是否以炮塔角度旋转旋转,默认false,不旋转.
## beamImageEndRotated
translation:波束末端旋转
<br>type:bool
<br>光束动画命中端效果图像是否旋转,默认false.
