# movement
## movementType
translation:运动类型
<br>type:string
<br>定义单位将能够通过的地形以及与单位类型相关的其他属性。类型：无、陆地、建筑、空中、水面、两栖、跨悬崖、跨水和悬崖
NONE、LAND、BUILDING、AIR、WATER、HOVER、OVER_CLIFF、OVER_CLIFF_WATER
## moveSpeed
translation:移动速度
<br>type:float
<br>单位的最大移动速度。
## moveAccelerationSpeed
translation:加速度
<br>type:float
<br>定义单位加速到最大速度的加速度。
## moveDecelerationSpeed
translation:减速度
<br>type:float
<br>与加速度相对应得减速度。不要设的太小。
## reverseSpeedPercentage
translation:倒车速度比率
<br>type:float
<br>0.6默认值。超过0.4会在短距离（以40％的速度）时反转。 如果设置为1前进后退则不转弯。 填0时禁止倒退，必须旋转。
## landOnGround
translation:降落到地面
<br>type:bool/onlyIdle
<br>闲置时使飞行器降落。可以填true/flase/onlyIdle
## targetHeight
translation:到达高度
<br>type:float
<br>默认为0，但如果运动类型为空军则默认为35。
## targetHeightDrift
translation:高度浮动
<br>type:float
<br>默认0，空军1.5.单位高度上下浮动高度。
## startingHeightOffset
translation:创建时高度偏移
<br>type:float
<br>单位在创建时高度。负数上升比较慢。
## maxTurnSpeed
translation:转弯速度
<br>type:float
<br>最大转弯速度。
## turnAcceleration
translation:转弯加速度
<br>type:float
<br>转弯加速度。
## moveSlidingMode
translation:移动后滑动
<br>type:bool
<br>移动后滑动，相当于惯性。和单位的速度，加速度，转弯速度有关。True时受推力影响
## moveIgnoringBody
translation:移动忽略转向
<br>type:bool
<br>true效果即不必转弯便能运动，false效果即原地转弯完成才能运动
## moveSlidingDir
translation:移动滑动角度
<br>type:integer
<br>移动滑动角度。无明显效果。
## joinsGroupFormations
translation:加入队形
<br>type:bool
<br>将单位组成小队。铁锈调集大量部队时将其组成方阵以降低运算压力，但队形可能影响速度或浪费时间。禁用后则不参与组队。
## ignoreMoveOrders
translation:忽略移动指令
<br>type:bool
<br>忽略移动指令,此代码强制要求移动速度为0，适用例子：红警中单位部署忽略移动指令。
## moveYAxisScaling
translation:Y轴速度比例
<br>type:float
<br>垂直方向单位移动速度乘数，适用于2.5D，也就是用铁锈模拟3D。典型如红警。
## slowDeathFall
translation:死亡缓慢降落
<br>type:bool
<br>为"true"时，被击毁时降落速度减慢，并且向前滑行一段距离。注意，必须设置死亡图像，不然坠落后会显示生前图像，而不是直接炸掉。
## slowDeathFallSmoke
translation:死亡降落烟
<br>type:bool
<br>在死亡坠落的时候添加烟作为尾迹
## heightChangeRate
translation:高度改变速率
<br>type:float
<br>单位改变高度的频率，无论是转换还是浮动
## fallingAcceleration
translation:降落加速度
<br>type:float
<br>单位降落时的加速度
## fallingAccelerationDead
translation:坠毁加速度
<br>type:float
<br>单位被摧毁时降落的加速度
