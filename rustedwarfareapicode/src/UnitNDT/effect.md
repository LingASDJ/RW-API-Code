# effect
## life
translation:效果存在时间
<br>type:float
<br>默认值为200。到时间效果消失。 设置得尽可能低以减少效果开销。
## lifeRandom
translation:效果存在时间随机值
<br>type:float
<br>效果存在时间的随机范围。
## alsoEmitEffectsOnDeath
translation:死亡时创建效果
<br>type:effect ref
<br>在生命耗尽的时候创造这些效果。
## alsoEmitEffects
translation:也创造效果
<br>type:effect ref
<br>创建时创建更多效果，对于多效果很有用。 注意：创建的效果上的其他“ alsoEmitEffects”将被忽略，禁止套娃。
## ifSpawnFailsEmitEffects
translation:如果失败则创建效果
<br>type:effect ref
<br>如果此效果的“spawnChance”失败，则产生这些效果。
## alsoPlaySound
translation:也播放音效
<br>type:file(s) (ogg/wav)
<br>播放音效，填文件名或内置。
## createWhenOffscreen
translation:可创建于画面之外
<br>type:bool
<br>允许在画面之外产生此效果，默认为false。
## createWhenZoomedOut
translation:缩小时可产生效果
<br>type:bool
<br>允许缩小时产生此效果，默认值为true
## createWhenOverLiquid
translation:创建于液体上
<br>type:bool
<br>允许在液体上方产生此效果，默认值为true
## createWhenOverLand
translation:创建于陆地上
<br>type:bool
<br>允许在陆地上方产生此效果，默认值为true
## spawnChance
translation:产生几率
<br>type:float
<br>默认值1.如果小于1，则效果随机被创建
## showInFog
translation:在雾中显示
<br>type:bool
<br>默认为false
## delayedStartTimer
translation:延迟创建
<br>type:float
<br>等待这么久再播放此动画，单位为帧。
## delayedStartTimerRandom
translation:延迟创建随机时间
<br>type:float
<br>等待时间随机变化
## liveAfterAttachedDies
translation:目标死后存活
<br>type:bool
<br>目标死后动画继续存活,使用AttachedToUnit时默认为false.
## priority
translation:优先级
<br>type:string
<br>默认为high，填不同的值对应不同的效果数量上限，并且通用。verylow/low/high/veryhigh/critical(很低，低，高，很高，至关重要)（上限分别是311，321，331，341，350）
## attachedToUnit
translation:附着在单位上
<br>type:bool
<br>此效果产生时吸附到目标单位或抛射体。将与之一起移动。
## alwayStartDirAtZero
translation:初始角度总是为零
<br>type:bool
<br>忽略附属单位或者产者的角度。
## atmospheric
translation:空气效果
<br>type:bool
<br>添加阻力使此效果减慢速度，并添加随机移动。用于模拟尾焰。
## physics
translation:物理效果
<br>type:bool
<br>撞击地面时反抛射体。需要高度才能生效。
## physicsGravity
translation:物理重力
<br>type:float
<br>默认为1。physics:true时的垂直方向加速度。
## xOffsetRelative
translation:X相对偏移量
<br>type:float
<br>效果起始时相对于炮塔，抛射体，单位的偏移的方向位置。正数向右，负数向左。
## yOffsetRelative
translation:Y相对偏移量
<br>type:float
<br>效果起始时相对于炮塔，抛射体，单位的偏移的方向位置。正数向前，负数向后。
## xOffsetRelativeRandom
translation:X相对随机偏移量
<br>type:float
<br>X相对目标随机偏移量。随机增加或减少此值，用于偏移像素。
## yOffsetRelativeRandom
translation:Y相对随机偏移量
<br>type:float
<br>Y相对目标随机偏移量。随机增加或减少此值，用于偏移像素。
## xOffsetAbsolute
translation:X绝对偏移量
<br>type:float
<br>Absolute类为绝对偏移，它不像Relative那样考虑单位的方向。比如设置x向速度为1，绝对偏移则始终向右移动，相对偏移可以向任意方向移动。
## yOffsetAbsolute
translation:Y绝对偏移量
<br>type:float
<br>按位置偏移起动效果，忽略附加炮塔单位等的方向。
## xOffsetAbsoluteRandom
translation:X绝对随机偏移量
<br>type:float
<br>随机增加或减少此值，用于偏移像素。
## yOffsetAbsoluteRandom
translation:Y绝对随机偏移量
<br>type:float
<br>随机增加或减少此值，用于偏移像素。
## xSpeedRelative
translation:X相对速度
<br>type:float
<br>X轴相对于目标的移动速度。，正数向右，负数向左。
## ySpeedRelative
translation:Y相对速度
<br>type:float
<br>Y轴相对于目标的移动速度。正数向前，负数向后。
## xSpeedRelativeRandom
translation:X随机相对速度
<br>type:float
<br>随机增加或减少此值，用于偏移像素。
## ySpeedRelativeRandom
translation:Y随机相对速度
<br>type:float
<br>随机增加或减少此值，用于偏移像素。
## xSpeedAbsolute
translation:X绝对速度
<br>type:float
<br>X轴相对于起点的绝对移动速度。
## ySpeedAbsolute
translation:Y绝对速度
<br>type:float
<br>Y轴相对于起点的绝对移动速度。
## xSpeedAbsoluteRandom
translation:X随机绝对速度
<br>type:float
<br>按此值随机更改初始值。
## ySpeedAbsoluteRandom
translation:Y随机绝对速度
<br>type:float
<br>按此值随机更改初始值。
## hOffset
translation:高度偏移
<br>type:float
<br>距目标的高度偏移。正数向上，负数向下。
## hOffsetRandom
translation:随机高度偏移
<br>type:float
<br>按此值随机更改初始值。
## hSpeed
translation:高度速度
<br>type:float
<br>高度移动速度。正数向上，负数向下。
## hSpeedRandom
translation:随机高度速度偏移
<br>type:float
<br>按此值随机更改初始值。
## dirOffset
translation:角度偏移
<br>type:float
<br>角度偏移，修改初始朝向。注意,0度可能存在朝向问题。
## dirOffsetRandom
translation:随机角度偏移量
<br>type:float
<br>按此值随机更改偏移角度。
## dirSpeed
translation:转速
<br>type:float
<br>修改效果的旋转速度。
## dirSpeedRandom
translation:随机转速
<br>type:float
<br>按此值随机更改旋转速度。
## pivotOffset
translation:枢轴偏移
<br>type:float
<br>整个效果的朝向偏移
## pivotOffsetRandom
translation:枢轴偏移随机
<br>type:float
<br>按此值随机更改朝向。
## frameIndex
translation:帧索引
<br>type:integer
<br>使用内置效果时所取用的帧编号，0取第一帧。
## frameIndexRandom
translation:帧随机
<br>type:integer
<br>随机增减索引值，用于随机使用同组内不同的图像。
## stripIndex
translation:图像集
<br>type:integer/string
<br>要使用的内置图像集。不能与自定义图像一起使用。如effects 效果1对应res内文件effects.png，以此类推。
explode_big爆炸效果图、light_50闪光贴花、flame开火图火焰、dust灰尘贴花、smoke_black黑烟、smoke_white白烟、shockwave冲击波、fire火焰图、lava_bubble岩浆泡、effects2效果2、plasma_shot等离子、shockwave2冲击波2、shockwave_large大冲击波、explode_bits碎片、explode_big2大爆炸、explode_bits_bug虫碎片、projectiles抛射体、projectiles2抛射体2、effects3效果3
## image
translation:图像
<br>type:image
<br>要使用的自定义图像文件。不能与stripIndex一起使用。
## imageShadow
translation:阴影图像
<br>type:image
<br>用于自定义阴影的图像
## scaleTo
translation:结束缩放倍数
<br>type:float
<br>效果结束时缩放倍数。
## scaleFrom
translation:初始缩放倍数
<br>type:float
<br>效果初始时缩放倍数，用于效果从小到大缩放，或者反向缩放。
## color
translation:颜色
<br>type:color
<br>填16进制颜色值，给图像上叠加颜色。一般建议图像使用灰度图，然后叠加颜色。注意彩色图是无法叠加白色变白的。
## teamColorRatio
translation:队伍色相
<br>type:float
<br>填0-1在图像上叠加阵营色，1为完全为阵营色。
## drawType
translation:绘制类型
<br>type:draw type
<br>效果的绘制类型
## drawUnderUnits
translation:绘制在单位下方
<br>type:bool
<br>将此效果绘制在单位下方。
## fadeInTime
translation:淡入时间
<br>type:float
<br>设置淡入效果时间，从透明到不透明。透明度值从0%到100%。
## fadeOut
translation:淡出
<br>type:bool
<br>设置淡入效果时间，透明度从100%淡出到%0。把alpha设置为高于1可以延长淡出。
## alpha
translation:不透明度
<br>type:float
<br>介于0-1之间。可以设置为大于1以延迟淡出效果
## trailEffect
translation:尾焰效果
<br>type:effect ref
<br>类似于抛射体的尾焰
## trailEffectRate
translation:尾焰效果频率
<br>type:float
<br>产生频率
## shadow
translation:阴影
<br>type:bool
<br>true时绘制阴影。如果使用imageShadow则强制为true
## frame_width
translation:单帧宽度
<br>type:integer
<br>规定单帧的宽度像素，如果值小于图像本体宽度则选取帧时采用换列方式进行处理。
## frame_height
translation:单帧高度
<br>type:integer
<br>规定单帧的高度像素，如果值小于图像本体高度则选取帧时采用换行方式进行处理。
## total_frames
translation:动画总帧数
<br>type:integer
<br>动画的总帧数，与图像(image)或frameIndex一起使用。
## animateFrameStart
translation:动画开始帧
<br>type:integer
<br>动画从哪一帧开始,第一帧编号为0
## animateFrameEnd
translation:动画结束帧
<br>type:integer
<br>动画在哪一帧结束。
## animateFramePingPong
translation:动画帧重放
<br>type:bool
<br>动画正序播放完毕后再倒序播放一次。
## animateFrameSpeed
translation:动画帧速度
<br>type:time
<br>动画播放速度，单位位游戏帧，一般动画帧数也不高，所以设置一般为0.x
## animateFrameSpeedRandom
translation:动画帧随机速度
<br>type:time
<br>按此值随机更改动画速度。
## animateFrameLooping
translation:动画帧循环
<br>type:bool
<br>默认false。当为false时,效果被移除时，动画结束
## animateFrameStartRandomAdd
translation:动画帧随机开始添加
<br>type:integer
<br>以动画起始帧为基准，按照+/-所填数字内随机选取数字进行帧随机偏移（似乎无用）
