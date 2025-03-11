# turret
## x
translation:x
<br>type:float
<br>坐标X
## y
translation:y
<br>type:float
<br>坐标Y
## height
translation:炮塔高度
<br>type:float
<br>(用于3d单位,实测链接的炮塔也会跟着改变高度)to help placement on 3d style units
## copyFrom
translation:复制数据自
<br>type:turret ref
<br>复制指定炮塔的所有值，作为该炮塔的默认值。新写代码重复时则覆盖掉它。
## projectile
translation:抛射体
<br>type:projectile ref
<br>使用此抛射体。默认为第一个抛射体。
## altProjectile
translation:关联抛射体
<br>type:projectile ref
<br>当altProjectileCondition为true时，从此炮塔发射的抛射体。
## altProjectileCondition
translation:关联抛射体条件
<br>type:LogicBoolean
<br>用于altProjectile
## barrelX
translation:抛射体x
<br>type:float
<br>默认值为0。控制抛射体生成的X轴位置。
## barrelY
translation:抛射体y
<br>type:float
<br>默认为大0。注意：size和barrelY含义相同
## barrelHeight
translation:抛射体高度
<br>type:float
<br>高度（用于3d）。影响抛射体产生的高度。
## size
translation:炮塔大小
<br>type:float
<br>控制炮塔中心与抛射体丸产生点之间的距离。
## turnSpeed
translation:炮塔转速
<br>type:float
<br>炮塔最大转动速度。单位度每帧。
## turnSpeedAcceleration
translation:炮塔旋转加速度
<br>type:float
<br>炮塔加速度，默认设置为禁用，并使用全转速度。
## turnSpeedDeceleration
translation:炮塔旋转减速度
<br>type:float
<br>默认为turnSpeedAcceleration。将此值设置为高于转弯加速度可能会允许更快地命中目标
## idleDir
translation:闲时角度
<br>type:float
<br>闲置时角度。
## idleDirReversing
translation:闲时角度反转
<br>type:float
<br>允许闲置时角度反转。除非连接到另一个炮塔（否则连接的炮塔在反转时通常会旋转），否则默认为idleDir + 180。如重坦逆行时炮塔转向。
## shouldResetTurret
translation:空闲自动归位
<br>type:bool
<br>默认为true。 填false时禁止炮塔自动归位。
## idleSweepAngle
translation:空闲扫描角度
<br>type:integer
<br>炮塔闲时扫描角度。这一系列用于设置炮塔闲置时候转圈警戒动作。
## idleSweepDelay
translation:空闲扫描间隔
<br>type:float
<br>炮塔闲时扫描间隔，多久动一次。
## idleSweepSpeed
translation:空闲扫描速度
<br>type:float
<br>炮塔闲时扫描转向的速度。
## idleSweepCondition
translation:空闲扫描条件
<br>type:LogicBoolean
<br>炮塔闲时扫描的条件，比如单位移动但没攻击时炮塔确实是闲置的，但这时可能不该旋转。
## idleSweepAddRandomDelay
translation:空闲扫描随机延迟
<br>type:float
<br>炮塔闲时扫描的随机延迟
## idleSweepAddRandomAngle
translation:空闲扫描随机角度
<br>type:integer
<br>炮塔闲时扫描的随机角度
## attachedTo
translation:链接到
<br>type:turret ref
<br>要连接的另一个炮塔的ID，将相对于它定位，并随其旋转。
## slave
translation:隶属
<br>type:bool
<br>锁定此转塔的方向，并为附加的转塔发射冷却时间。常用于多炮管单位。
## isMainNanoTurret
translation:是主构建炮塔
<br>type:bool
<br>默认为false。用于创建建筑物的炮塔。只能在一个炮塔上为true，并且canShoot设置为false。
## energyUsage
translation:能量需求
<br>type:float
<br>发射武器所需的能量。与resourceUsage相同：energy = X
## resourceUsage
translation:资源需求
<br>type:price
<br>可以使用资金/能源/生命/护盾/弹药等。如果不符合条件则停止攻击。credits/energy/hp/shield/ammo
## delay
translation:开火间隔
<br>type:float
<br>设置攻击间隔，覆盖全局炮塔间隔数据。
## linkDelayWithTurret
translation:链接间隔
<br>type:turret ref
<br>当另一炮塔开火时，该炮塔上的冷却延迟将被重置/删除
## warmup
translation:预热
<br>type:time
<br>射击前延迟。需要准备多长时间才能攻击，可以制作出蓄力效果。
## warmupCallDownRate
translation:预热下降速度
<br>type:float
<br>停止攻击后预热条下降速度
## warmupNoReset
translation:预热不重置
<br>type:bool
<br>默认为false。射击后未重设真正的预热时。与warmupCallDownRate一起使用
## warmupShootDelayTransfer
translation:开火间隔过渡
<br>type:float
<br>默认值为0，这是一个乘数，用于通过预热值减少下一次开火延迟。与warmupNoReset一起使用时，可以使攻击速度越来越快。
## onShoot_freezeBodyMovementFor
translation:射击时冻结主体
<br>type:time
<br>射击时禁止运动。
## barrelOffsetX_onOddShots
translation:奇数射击时抛射体偏移
<br>type:float
<br>默认0。在奇数射击时横向偏移，用于简化双管单位制作。
## yAxisScaling
translation:Y轴比例
<br>type:float
<br>炮塔的x和y坐标会乘以这个代码所填的值
## canShoot
translation:可以开火
<br>type:bool
<br>可以开火，默认为true
## canAttackFlyingUnits
translation:可攻击空中单位
<br>type:LogicBoolean
<br>可以攻击空中单位，覆盖[attack]的设定。
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
## canAttackCondition
translation:攻击条件
<br>type:LogicBoolean
<br>攻击需要满足条件。
## clearTurretTargetAfterFiring
translation:射击后重置炮塔目标
<br>type:bool
<br>射击后重置炮塔目标。
## limitingRange
translation:限制范围
<br>type:float
<br>限制此炮塔的最远攻击范围。不要将此代码应用到所有炮塔，如果需要则设置maxAttackRange。
## limitingAngle
translation:限制角度
<br>type:float
<br>与idleDir配合。炮塔只能以+/-此角度进行攻击。
## limitingMinRange
translation:最小距离
<br>type:float
<br>设置炮塔的最小攻击范围，不能攻击此范围内单位，也就是死角。
## canAttackMaxAngle
translation:可攻击最大角度
<br>type:float
<br>设置炮塔的最大射击角度。如果单位在可攻击角度外则不会开火。默认值为5，不要设置得更低。可以设置为181，即不需要转向就可发射抛射体。
## interceptProjectiles_withTags
translation:拦截抛射体需有标签
<br>type:string
<br>拦截具有此标签的抛射体，目前铁锈用于反核武器。
## interceptProjectiles_andTargetingGroundUnderDistance
translation:拦截抛射体检索范围
<br>type:integer
<br>守护的范围，只有当敌方攻击目标地点落在此圈子内时才考虑拦截。
## interceptProjectiles_andUnderDistance
translation:拦截抛射体攻击范围
<br>type:integer
<br>默认值为2000，当抛射体到达这个距离时才开始发射拦截。
## interceptProjectiles_andOverHeight
translation:拦截抛射体高度
<br>type:integer
<br>需要超过此高度才会拦截。默认值为0.
## laserDefenceEnergyUse
translation:激光防御能量需求
<br>type:float
<br>炮塔启用激光防御拦截敌方抛射体。还应在core中设置energyMax。
## aimOffsetSpread
translation:瞄准偏移
<br>type:float
<br>将每次攻击时的偏移量乘以目标半径。默认为0.6。设为0则不偏移，对范围武器影响较大。
## invisible
translation:隐藏炮塔图像
<br>type:LogicBoolean
<br>即不显示炮塔本身图像，但是攻击什么的还是可以。
## image
translation:图像
<br>type:image
<br>使用自定义图片。覆盖单位的主炮塔图像
## image_applyTeamColors
translation:图像应用队伍颜色
<br>type:bool
<br>炮塔图像使用队伍颜色。默认为false。
## image_drawOffsetX
translation:图像绘制偏移x
<br>type:float
<br>炮塔图像在X轴偏移。
## image_drawOffsetY
translation:图像绘制偏移y
<br>type:float
<br>炮塔图像在Y轴偏移。
## chargeEffectImage
translation:充能效果图像
<br>type:image
<br>预热时的充能效果。默认是由小变大。
## warmupStartEffect
translation:预热效果
<br>type:effects
<br>开火延迟时产生效果。
## shoot_sound
translation:开火音效
<br>type:string
<br>开火音效，填声音文件。有以下内置条目。attack、move、click、missile_fire、missile_hit、unit_explode、buiding_explode、
tank_firing、cannon_firing、gun_fire、lighting_burst、plasma_fire、plasma_fire2、firing3、firing4、large_gun_fire1、
large_gun_fire2、bug_die、bug_attack、interface_error、nuke_explode、nuke_launch、laser_deflect、laser_deflect2
## shoot_sound_vol
translation:开火音效大小
<br>type:float
<br>播放声音大小。
## shoot_flame
translation:开火动画
<br>type:effects
<br>开火动画，内置参考表末尾。Luke推荐为：small, large, smoke, shockwave（小，大，烟，冲击波）。可以自定义。
其余有：medium，largeExplosion，smallExplosion，resourcePoolSmoke，noneExplosion（中等，大爆炸，小爆炸，资源池的绿色烟，没有爆炸）
## shoot_light
translation:开火闪光
<br>type:color
<br>开火时闪光，16进制argb格式。#AARRGGBB,透明度，红，绿，蓝
## idleSpin
translation:闲时转速
<br>type:float
<br>炮塔闲置时的旋转速度,单位度每帧。
## onShoot_playAnimation
translation:开火播放动画
<br>type:animation ref
<br>开火后播放[Animation]中的自定义动画
## onShoot_triggerActions
translation:开火触发行为
<br>type:action ref
<br>每次这个炮塔开火时触发这些动作
## unloadUpToXUnitsAndGiveAttackOrder
translation:卸载单位并赋予攻击目标
<br>type:integer
<br>在炮塔炮筒位置卸下X个单位，并让它们攻击炮塔指定的目标。
## recoilOffset
translation:后坐力大小
<br>type:float
<br>开火后向前或向后推动炮塔，以产生后坐力。填像素。
## recoilOutTime
translation:后坐力速度
<br>type:time
<br>开火后到达偏移位置的时间
## recoilReturnTime
translation:后坐力恢复
<br>type:time
<br>开火后回到默认位置所需时间。
## showRangeUIGuide
translation:显示范围UI
<br>type:bool
<br>显示攻击范围的白圈。默认true.
