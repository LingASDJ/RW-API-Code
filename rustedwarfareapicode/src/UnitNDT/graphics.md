# graphics
## image
translation:主体图像
<br>type:image
<br>填图片名称，格式为png。
## image_back
translation:背景图像
<br>type:image
<br>可选的在单位后面绘制图像，不随单位转动。可用于工厂底图，单位角标等。
## image_back_always_use_full_image
translation:图像背景总是使用完整的图像
<br>type:bool
<br>默认会裁剪或拉伸或平铺到和主体图像一致.
## image_wreak
translation:死亡图像
<br>type:image
<br>可选的单位死亡时使用的图像。
## image_shield
translation:护盾图像
<br>type:image
<br>自定义护盾所使用的图像。
## image_offsetX
translation:图像X轴偏移
<br>type:integer
<br>图像在X轴偏移，用于不对称图像，比如您的单位有个吊臂，这样中心不在正中间。
## image_offsetY
translation:图像Y轴偏移
<br>type:integer
<br>图像在Y轴偏移,用于比较高的单位。
## image_offsetH
translation:图像高度偏移
<br>type:float
<br>图像在高度上的偏移
## isVisible
translation:可见
<br>type:logicBoolean
<br>默认为true,如果为false将隐藏单位。
## isVisibleToEnemies
translation:对敌人可见
<br>type:bool
<br>与showOnMinimapToEnemies,canOnlyBeAttackedByUnitsWithTags一起使用时，可以创建隐形系统。
## teamColorsUseHue
translation:阵营色色相
<br>type:bool
<br>luke不建议使用。单位上的绿色像素转换为团队颜色。 若为true整个单位都带有团队色彩。 默认为false，挺难看的。
## teamColoringMode
translation:阵营色模式
<br>type:string
<br>设置单位着色逻辑，默认是纯绿。有四个值disabled,hueShift,hueAdd,pureGreen。(禁用，色相偏移，色相添加，纯绿)
## scaleImagesTo
translation:缩放图像到
<br>type:float
<br>单位像素。调整图像大小以使其适合像素值。同时影响腿部和阴影图像。
## imageScale
translation:图像缩放比例
<br>type:float
<br>调整图像大小。默认值为1。也可以影响腿部和阴影图像。
## drawLayer
translation:绘制图层
<br>type:string
<br>陆上单位通常默认为ground或ground2。运输船为ground2。wreaks, underwater, bottom, ground, ground2, experimentals, air, top
## whenBeingBuiltMakeTransparentTill
translation:建造时透明度
<br>type:float
<br>设为0则一开始便完全不透明，设为1则直到建造完成时才不透明。
## icon_zoomed_out
translation:缩放图标
<br>type:image
<br>缩放时显示的图标
## icon_zoomed_out_neverShow
translation:缩放图标永不显示
<br>type:bool
<br>缩放图标永不显示。
## icon_build
translation:建造图标
<br>type:image
<br>填文件名,指定图像作为单位在列表中显示的图像.
## image_floatingPointSize
translation:对奇数大小的图像进行一个像素的调整
<br>type:bool
<br>(填写0/1,无直观区别,有说法是把x-1来改变单位坐标系使其更方便使用)--Fixes off by 1 pixel sizing for odd sized images -
## showSelectionIndicator
translation:显示选择指示
<br>type:bool
<br>(单位的选择框)
## image_turret
translation:炮塔图像
<br>type:image
<br>所有炮塔的默认图像，也可以为每个炮塔设置专用图像。
## turretImageScale
translation:炮塔图像缩放
<br>type:float
<br>按比例缩放炮塔图像
## teamColorsOnTurret
translation:炮塔使用队伍色
<br>type:bool
<br>默认为false。在转塔上也应用团队颜色。
## scaleTurretImagesTo
translation:炮塔图像缩放
<br>type:float
<br>单位像素。缩放炮塔图像至指定像素，只用填宽度
## lock_body_rotation_with_main_turret
translation:锁定主体旋转随主炮塔
<br>type:bool
<br>锁定主体图像旋转追随主炮塔
## lock_leg_rotation_with_main_turret
translation:锁定腿脚旋转随主炮塔
<br>type:bool
<br>锁定腿脚图像旋转追随主炮塔
## image_shadow
translation:阴影图像
<br>type:image
<br>填NONE或AUTO又或者是AUTO_ANIMATED，图像文件。
## shadowOffsetX
translation:阴影图像偏移X轴
<br>type:float
<br>阴影x轴偏移值，正数往右
## shadowOffsetY
translation:阴影图像偏移Y轴
<br>type:float
<br>阴影y轴偏移值，正数往下
## image_shadow_frames
translation:阴影图像指定
<br>type:bool
<br>true时阴影不随单位移动而改变方向。
## lock_shadow_rotation_with_main_turret
translation:阴影锁定为主炮塔方向
<br>type:bool
<br>将身体图像阴影锁定到主炮塔的方向
## total_frames
translation:图像帧数
<br>type:integer
<br>默认值为1。将图像分割为指定分数，用于动画。第一帧编号为0
## default_frame
translation:默认帧
<br>type:integer
<br>指定默认显示为第几帧,默认为0即第一帧
## frame_width
translation:图像宽度
<br>type:integer
<br>设置单帧宽度，自动计算并覆盖总帧数。
## frame_height
translation:图像高度
<br>type:integer
<br>默认为图像高度
## splastEffect
translation:水波效果
<br>type:bool
<br>在水上时创建水波效果。默认为false
## dustEffect
translation:灰尘效果
<br>type:bool
<br>在地面上产生灰尘效果。默认为false
## splastEffectReverse
translation:逆向水波效果
<br>type:bool
<br>填true时，在倒车时也能产生效果
## dustEffectReverse
translation:逆向灰尘效果
<br>type:bool
<br>填true时，在倒车时也能产生效果
## movementEffect
translation:运动效果
<br>type:effect
<br>自定义运动效果，可以是内置的或者自定义的。
## movementEffectReverse
translation:逆向运动效果
<br>type:effect
<br>自定义倒车效果。
## movementEffectRate
translation:运动效果频率
<br>type:float
<br>自定义效果产生频率，每隔多少帧一次。
## movementEffectReverseFlipEffects
translation:逆向时反转运动效果
<br>type:bool
<br>倒车时反转效果
## repairEffect
translation:维修效果
<br>type:effect
<br>自定义维修效果，可以是任何东西。替换构建时的默认效果
## repairEffectAtTarget
translation:维修目标效果
<br>type:effect
<br>维修目标上产生的效果。
## repairEffectRate
translation:维修效果频率
<br>type:float
<br>维修效果每隔多少帧产生一次。
## reclaimEffect
translation:回收效果
<br>type:effect
<br>自定义回收效果，可以是任何东西。替换回收时的默认效果
## reclaimEffectAtTarget
translation:回收目标效果
<br>type:effect
<br>回收目标上产生的效果。
## reclaimEffectRate
translation:回收效果频率
<br>type:float
<br>回收效果每隔多少帧产生一次。
## rotate_with_direction
translation:随角度旋转
<br>type:bool
<br>默认为true。设置为false时将单位图像锁定为0度。通常与animation_direction_ *一起用作多向视图。
## animation_direction_useMainTurret
translation:多向动画使用主炮塔
<br>type:bool
<br>多向动画的执行将以单位主炮塔的角度为基准
## animation_direction_units
translation:多向动画度数
<br>type:float
<br>每隔多少度切换一次素材,比如填45代表8个方向，90个代表4个方向的动画。与rotate_with_direction一起使用。
## animation_direction_strideX
translation:多向动画x向
<br>type:integer
<br>动画帧取值在X方向改变时偏移。一般填0
## animation_direction_strideY
translation:多向动画y向
<br>type:integer
<br>动画帧在方向改变Y轴偏移偏移。与frame_height一起使用。一般填1
## animation_direction_starting
translation:多向动画朝向
<br>type:float
<br>第一帧的方向，取决于您的素材。您要考虑转向后避免正负数交替现象，否则会导致素材朝向异常。
## disableLowHpFire
translation:禁用低生命冒火
<br>type:bool
<br>禁用低生命值时冒火的视觉效果
## disableLowHpSmoke
translation:禁用低生命冒烟
<br>type:bool
<br>禁用低生命值时冒烟的视觉效果
## showTransportBar
translation:显示运输条
<br>type:bool
<br>填true时显示运输条,false禁用。默认为true.
## showHealthBar
translation:显示生命条
<br>type:bool
<br>填true时显示生命条,false禁用。默认为true.
## showHealthBarChanges
translation:显示生命条变动
<br>type:bool
<br>填true时显示生命条的生命变动条（黄条）
## showEnergyBar
translation:显示能量条
<br>type:bool
<br>填true时显示能量条,false禁用。默认为true.
## showShieldBar
translation:显示护盾条
<br>type:bool
<br>填true时显示护盾条,false禁用。默认为true.
## showQueueBar
translation:显示队列条
<br>type:bool
<br>填true时显示操作、生成的队列条,false禁用。默认为true.
## showShotDelayBar
translation:显示开火后的冷却条
<br>type:bool
<br>(默认为true) - 用于显示开火速度慢的炮塔的冷却指示条(译者注:原文calldown似乎有误，应为cooldown)
## animation_TYPE_[animationKey]
translation:动画_类型_[动画节代码]
<br>type:special value
<br>大部分建议改用[animation]部分
