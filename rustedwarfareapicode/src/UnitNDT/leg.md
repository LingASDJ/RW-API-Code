# leg/arm
## x
translation:x
<br>type:float
<br>设置脚在X轴上的位置。
## y
translation:y
<br>type:float
<br>设置脚在Y轴上的位置。
## alpha
translation:不透明度
<br>type:float
<br>设置腿脚的透明度(建议0-1)
## copyFrom
translation:复制与
<br>type:integer
<br>从另一条腿复制。仅需设置一次腿部值时有用
## attach_x
translation:x轴链接位置
<br>type:float
<br>在X轴上设置腿部的附着点。
## attach_y
translation:Y轴链接位置
<br>type:float
<br>在Y轴上设置腿部的附着点。
## rotateSpeed
translation:旋转速度
<br>type:float
<br>设置脚旋转速度，非对称情况下很明显。
## endDirOffset
translation:末端角度偏移值
<br>type:integer
<br>目标脚/末端相对于身体的旋转角度。
## lockMovement
translation:锁定运动
<br>type:bool
<br>禁止使用腿脚，将其锁定到主体。用于将行走单位转换为飞行单。
## heightSpeed
translation:高度速度
<br>type:float
<br>移动时脚抬高速度和高度。
## moveSpeed
translation:移动速度
<br>type:float
<br>腿脚移动速度。
## moveWarmUp
translation:移动延迟
<br>type:float
<br>腿脚移动延迟
## holdDisMin
translation:最小移动距离
<br>type:float
<br>默认值为7。如果相邻的腿还没有重新移动，则至少移动此距离。
## holdDisMax
translation:最大移动距离
<br>type:float
<br>默认值为16。如果已经移动超过此距离则强制重新放置腿。
## holdDisMin_maxMovingLegs
translation:最大移动腿数目
<br>type:integer
<br>最多移动腿数目
## hold_moveOnlyIfFurthest
translation:只在最远时保持移动
<br>type:bool
<br>保持移动仅在最远时候。
## holdDisMin_checkNeighbours
translation:最小移动距离检查相邻
<br>type:bool
<br>移动最小距离时检查相邻的腿脚。
## hardLimit
translation:硬性限制
<br>type:float
<br>默认值为50。强制腿部不要走的超过此数值。最好不要用到。
## estimatingPositionMultiplier
translation:预测位置乘数
<br>type:float
<br>默认值为1。根据单位速度预测单位可用的腿脚放置位置。
## hidden
translation:隐藏
<br>type:LogicBoolean
<br>隐藏
## image_end
translation:末端图像
<br>type:image
<br>末端图像，相当于脚。
## image_end_shadow
translation:末端图像阴影
<br>type:image
<br>末端图像阴影。
## image_end_teamColors
translation:末端图像队伍色
<br>type:bool
<br>末端图像使用阵营色。
## image_foot
translation:脚图像
<br>type:image
<br>脚图像，与image_end相同
## image_foot_shadow
translation:脚图像阴影
<br>type:image
<br>脚图像阴影。
## image_middle
translation:中部图像
<br>type:image
<br>中部图像，相当于腿。
## image_leg
translation:腿图像
<br>type:image
<br>腿图像，与image_middle相同
## liftingHeightOffset
translation:离开高度偏移
<br>type:float
<br>离开时的脚的高度
## targetHeight
translation:目标高度
<br>type:float
<br>最终高度
## targetHeightRelative
translation:相对目标高度
<br>type:float
<br>相对自身的最终高度
## image_middle_teamColors
translation:腿图像阵营色
<br>type:bool
<br>给腿也用上队伍色
## draw_foot_on_top
translation:绘制脚在顶层
<br>type:bool
<br>绘制脚在顶层。
## drawOverBody
translation:绘制主体之上
<br>type:bool
<br>绘制在主体之上。
## drawUnderAllUnits
translation:绘制所有单位之下
<br>type:bool
<br>绘制所有单位之下。
## drawDirOffset
translation:绘制角度偏移
<br>type:float
<br>绘制角度偏移。
## dust_effect
translation:灰尘效果
<br>type:bool
<br>脚落地时产生灰尘。
## spinRate
translation:自身自动旋转速度
<br>type:float
<br>使手臂/腿脚一直旋转，像转塔的idleSpin。用处如直升机的螺旋桨。
## favourOppositeSideNeighbours
translation:偏向于临近一侧
<br>type:bool
<br>填true时，使得左右的腿脚拉开时间差，这样更好看。否则看起来顺拐。计算相邻的X比接近的Y查10倍时间。
## drawLegWhenZoomedOut
translation:缩小时绘制腿
<br>type:bool
<br>在缩小显示倍数(看到东西更多)后绘制腿。False时不绘制。为了提高绘制腿性能，默认值根据单位大小而变化。
## drawFootWhenZoomedOut
translation:缩小时绘制脚
<br>type:bool
<br>在缩小显示倍数(看到东西更多)后绘制脚。False时不绘制。为了提高绘制腿性能，默认值根据单位大小而变化。如果单独设置阴影则可能比较怪异。
## explodeOnDeath
translation:死亡时爆炸
<br>type:bool
<br>单位死亡爆炸时腿脚跟着一起爆炸
## resetAngle
translation:复位角度
<br>type:float
<br>复位角度。
