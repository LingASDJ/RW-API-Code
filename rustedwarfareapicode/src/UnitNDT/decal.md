# decal
## layer
translation:绘制图层
<br>type:layer type
<br>可以填入的值：shadow(阴影), beforeBody(在主体之下), afterBody(在主体之上), onTop(在最顶端), beforeUI(在显示界面之上)，inactive(无效)
## order
translation:排序(默认为0并且按照ini里的顺序)
<br>type:float
<br>Order with other decals, defaults 0 and uses order it appears in ini（使用其他贴花排序，默认为0，并使用其在ini中显示的顺序）
## onlyWhenSelectedByOwnPlayer
translation:仅在被拥有者选中时绘制
<br>type:bool
<br>Only draw if the viewing player is the same as this unit.（只有当玩家查看本单位时，才可绘制贴花。）
## onlyWhenSelectedByEnemyPlayer
translation:被敌方玩家选中时绘制
<br>type:bool
<br>被敌方玩家选中时绘制
## onlyWhenSelectedByAllyNotOwnPlayer
translation:非自身队伍的盟友选中时绘制
<br>type:bool
<br>非自身队伍的盟友选中时绘制
## onlyWhenSelectedByAnyPlayer
translation:被任意玩家选中时绘制
<br>type:bool
<br>Show when any player selects this unit.（在任何玩家选中本单位值绘制贴花）
## includeParentsSelection
translation:包括被父单位选中
<br>type:bool
<br>onlyWhenSelected*also check parents selection（仅当选定时*还检查父项选择）
## onlyPlayersWithUnitControl
translation:仅在查看者能够控制此单位时绘制
<br>type:bool
<br>Only draw if viewing player could control this unit（仅当观看者可以控制此单元时才绘制贴花）
## onlyTeam
translation:仅在查看者为特定队伍时显示
<br>type:TeamRelation
<br>Only draw when this relation between unit and viewing player，Can be filled in:own|notOwn|neutral|allyNotOwn|ally|enemy|any         (仅当单位和查看玩家之间的关系时绘制，可以填写：己方|非己方|中立方|除自己外盟友|盟友|敌方|任意)
## onlyWithZoomLevelOrMore
translation:仅当缩放到当前大小或更大时绘制
<br>type:float
<br>onscreen. Recommended to be set on decals for 3d voxel style units, small details or small shadows.Would hide decal when zoomed out a bit. Useful to reduce draw calls for performance when a lot of units might be
（屏幕上。建议设置在三维立体体积元素样式单位、小细节或小阴影的贴花上。缩小一点时会隐藏贴花。当许多单元可能需要时，有助于减少性能的调用）
## onlyWhileActive
translation:仅在单位建造完成时绘制
<br>type:bool
<br>Only draw when unit has been completed（仅在单位完成时绘制，比如建造者建造一般的建筑就不算)
## onlyOnBodyFrameOf
translation:只在主体关键帧时绘制
<br>type:integer
<br>只有在主体到某个关键帧时绘制
## onlyWhileAlive
translation:仅在存活时绘制
<br>type:bool
<br>(If beforeUI layer default true, else default false)(如果图层(layer)为beforeUI默认为true,否则false，为ture死后消失)
## onlyInPreview
translation:仅在侧边栏和建筑放置预览中显示
<br>type:bool
<br>Only show in sidebar, and building placement preview（仅在侧边栏中显示，以及建筑布局预览）
## onlyOnNonPreview
translation:仅在非预览中显示(与上一条相反)
<br>type:bool
<br>Only show on real unit, not action sidebar, etc（仅在真实单元上显示，而不是动作侧边栏等）
## imageScale
translation:图像缩放(倍数)
<br>type:LogicFloat
<br>图像缩放(倍数)
## imageScaleX
translation:图像X缩放
<br>type:LogicFloat
<br>图像X缩放
## imageScaleY
translation:图像Y缩放
<br>type:LogicFloat
<br>图像Y缩放
## image
translation:图像
<br>type:file(image)
<br>图像
## teamColors
translation:阵营色
<br>type:bool
<br>bool. Enable team coloring on image and imageStack（布尔值。在图像和图像堆栈上启用队伍色）
## imageStack
translation:图像列表
<br>type:file(image)
<br>list of images recommended for 3d voxel style units as images can be batch drawn when using the same sprite sheet.（推荐用于三维立体体积元素样式单位的图像列表，因为当使用相同的子画面时，可以批量绘制图像。）(目前没有实例所以不清楚,但确定是用于3d单位)
## stack_hOffset
translation:列表图像高度偏移
<br>type:float
<br>for 3d voxel style units.（用于三维立体体积元素样式单位。）
## stack_frameOffset
translation:列表图像帧偏移
<br>type:integer
<br>for 3d voxel style units.（用于三维立体体积元素样式单位。）
## stack_drawInReverseOrder
translation:列表图像绘图顺序
<br>type:integer
<br>列表图像绘图顺序
## stack_indexStart
translation:列表图像起始图像
<br>type:logic integer
<br>logic int (Starting image of the image stack)（动态整数（图像堆栈的起始图像））
## stack_indexCount
translation:列表图像数量
<br>type:logic integer
<br>logic int (Number of images to draw. Could be set to 1 to use stack_indexStart as an image picker)（动态整数（要绘制的图像数。可以设置为1以使用堆栈索引开始作为图像选择器））
## total_frames
translation:总帧数(跟后面两个二选一使用)
<br>type:integer
<br>Use total_frames or frame_width/frame_height（使用 总帧数 或者 帧宽度/帧高度）
## frame_verticalOrdering
translation:帧清单
<br>type:bool
<br>是否列出帧清单
## frame_width
translation:帧宽度
<br>type:integer
<br>帧宽度（不可与总帧数一起设置）
## frame_height
translation:帧高度
<br>type:integer
<br>帧高度
## frame
translation:帧
<br>type:logic integer
<br>(与total_frames相比,frame是动值,可以改变内存来修改第几帧)
## addBodyFrameMultipliedBy
translation:添加主体帧乘数
<br>type:float
<br>添加主体帧时的乘数
## isVisible
translation:可见
<br>type:LogicBoolean
<br>表明该帖花是否可以被我们看见(可以使用逻辑)
## xOffsetRelative
translation:X相对偏移
<br>type:float
<br>(note use basePosition with createMarker/etc for logic use)（请注意，动态使用base Position（基本位置）和create Marker（创建标记）/ect（等））
## yOffsetRelative
translation:Y相对偏移
<br>type:float
<br>(note use basePosition with createMarker/etc for logic use)（请注意，动态使用base Position（基本位置）和create Marker（创建标记）/ect（等））
## xOffsetAbsolute
translation:X绝对偏移
<br>type:LogicFloat
<br>(note use basePosition with createMarker/etc for logic use)（请注意，动态使用base Position（基本位置）和create Marker（创建标记）/ect（等））
## yOffsetAbsolute
translation:Y绝对偏移
<br>type:LogicFloat
<br>(note use basePosition with createMarker/etc for logic use)（请注意，动态使用base Position（基本位置）和create Marker（创建标记）/ect（等））
## hOffset
translation:高度偏移
<br>type:float
<br>height offset（高度偏移）
## dirOffset
translation:角度偏移
<br>type:float
<br>角度偏移
## pivotOffset
translation:坐标系旋转
<br>type:float (180>X>-180)
<br>(相当于把单位定位的直角坐标系旋转该角度,然后重新确定xy) 只影响X/Y相对偏移,不旋转图像-----only effects xOffsetRelative/yOffsetRelative without rotating image
## alwaysStartDirAtZero
translation:总是固定角度为零(总是朝上)
<br>type:bool
<br>Useful for UI(对UI有用)
## alwayStartDirAtZero
translation:总是角度为零(总是朝上)
<br>type:bool
<br>Useful for UI(对UI有用)
## alwaysStartHeightAtZero
translation:总是固定高度为零
<br>type:bool
<br>Useful for UI on air and hover units（对空中和两栖单位的UI有用）
## basePosition
translation:中心位置(填单位参考)
<br>type:unit ref
<br>unit or marker to draw from as the base（作为基础绘制的单位或标记）
## basePositionFromLeg
translation:以脚为中心位置
<br>type:leg ref
<br>Use a leg/arm position instead of unit body as base（使用 腿/脚 位置而不是单位身体作为基础）
## basePositionFromTurret
translation:以炮塔为中心位置
<br>type:turret ref
<br>Use a turret position instead of unit body as base（使用炮塔位置而不是单元主体作为底座）
## basePositionFromLegEnd
translation:以腿为中心位置
<br>type:leg/arm ref
<br>填腿脚/胳膊节
## drawLineTo
translation:绘制线条到(受到颜色和宽度影响)
<br>type:unit or marker
<br>Draws a line to this location affected by color and width（在此位置绘制一条受颜色和宽度影响的线）
## image_shadow
translation:阴影图像
<br>type:image
<br>阴影图像
## shadowOffsetX
translation:阴影偏移X
<br>type:float
<br>阴影偏移X
## shadowOffsetY
translation:阴影偏移Y
<br>type:float
<br>阴影偏移Y
## color
translation:颜色(影像图像和线条)
<br>type:color
<br>affects image and line.（影响图像和线条。）
## alpha
translation:不透明度(影像颜色和线条)
<br>type:LogicFloat (0-1)
<br>LogicFloat (0-1). Stacks with alpha in color. affects image and line.（动态浮点值（0-1）。以颜色堆叠透明度。影响图像和线条。）
## lineWidth
translation:线宽度
<br>type:float
<br>表明这条线的宽度
