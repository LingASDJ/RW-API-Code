# animation
## onActions
translation:动画条件
<br>type:string
<br>动画触发条件：移动、攻击、闲置、在建造中、建造中并将动画拉伸至建造时长、生产中、未知、修复、回收、创建时
move, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits、Unknown, repair, reclaim, created
## onActionsQueuedUnitPlayAt
translation:在队列中有单位播放
<br>type:float
<br>当使用onAction:queueedUnits时，动画开始之前需要达到值，设置为0-1之间
## blendIn
translation:融入时间
<br>type:time
<br>与上一个动画融合时间。
## blendOut
translation:融出时间
<br>type:time
<br>与下一个动画融合时间。
## pingPong
translation:缩放效果
<br>type:bool
<br>结束后反向播放动画，它一般用来做生物的呼吸效果。
## playbackRate
translation:重复播放频率
<br>type:integer
<br>重复播放该动画的频率
## KeyframeTimeScale
translation:帧时长缩放
<br>type:float
<br>缩放所有关键帧时间，这有助于在不更改所有内容的情况下更快/更慢地制作动画
## arm#_[time]
translation:胳膊关键帧
<br>type:list
<br>添加一个关键帧。用来创建多个动作的动画。
## leg#_[time]
translation:腿关键帧
<br>type:list
<br>添加一个关键帧。用来创建多个动作的动画。
## body_[time]
translation:主体关键帧
<br>type:list
<br>随时为主体添加关键帧。身体仅允许使用frame和scale
## effect_[time]
translation:效果关键帧
<br>type:list
<br>在播放动画时产生效果
## turret#_[time]
translation:炮塔关键帧
<br>type:list
<br>添加一个关键帧。用来创建多个动作的动画。（没有明显效果）
## direction_useMainTurret
translation:多向动画使用主炮塔
<br>type:bool
<br>覆盖[graphics] animation_direction_useMainTurret，多向动画的执行将以单位主炮塔的角度为基准
## direction_units
translation:多向动画度数
<br>type:float
<br>播放此动画时，覆盖[graphics] animation_direction_units。多向动画度数	45个代表8个方向，90个代表4个方向的动画。
## direction_strideX
translation:多向动画x向
<br>type:integer
<br>覆盖[graphics] animation_direction_strideX，动画帧取值在方向改变时偏移。一般填0
## direction_strideY
translation:多向动画y向
<br>type:integer
<br>覆盖[graphics] animation_direction_strideY，动画帧在方向改变Y轴偏移偏移。与frame_height一起使用。一般填1
## direction_starting
translation:多向动画朝向
<br>type:float
<br>覆盖[graphics] animation_direction_starting，第一帧的方向，取决于您的素材。
## start
translation:开始
<br>type:integer
<br>开始图像框。不推荐使用，用于类似此形式的动画。animation_TYPE_pingPong
## end
translation:结束
<br>type:integer
<br>结束图像帧。不推荐使用
## scale_start
translation:缩放开始
<br>type:float
<br>开始规模。不推荐使用，而是使用主体关键帧。
## scale_end
translation:缩放结束
<br>type:float
<br>最终规模。不推荐使用，而是使用主体关键帧。
## speed
translation:速度
<br>type:float
<br>速度越小越快。仅效果开始，结束，scale_start，scale_end
