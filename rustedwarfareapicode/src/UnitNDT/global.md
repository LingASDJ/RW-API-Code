# global_resource
## stackHorizontal
translation:堆叠水平
<br>type:bool
<br>定义与玩家所有单位共享的新资源，其工作方式类似于内置的资金。添加到"all-units.template"（位于mod根目录）
## displayName
translation:显示名称
<br>type:string
<br>用户界面中此资源的名称
## displayNameShort
translation:显示短名称
<br>type:string
<br>在较小的UI上显示的文本（如action的悬浮文本）默认为displayName
## hidden
translation:隐藏
<br>type:bool
<br>向玩家隐藏此资源
## priority
translation:优先级
<br>type:float
<br>如果多个mod单元中定义了同名的资源，则使用具有最高优先级的displayName/displayColor
## displayColor
translation:显示颜色
<br>type:color
<br>颜色，可以是十六进制，带有可选的alpha
## displayRoundedDown
translation:显示为整数
<br>type:bool
<br>对资源进行舍入显示为整数。
## displayWhenZero
translation:为零时显示
<br>type:bool
<br>资源为零时也显示。
## iconImageUseInText
translation:在动作(action)的描述中显示资源图标
<br>type:bool
<br>默认为true
## iconImage
translation:图标
<br>type:image
<br>自定义该资源的象征图像
## displayNameHideWhenIconShownInText
translation:显示名称在文本中显示图标时隐藏
<br>type:bool
<br>(默认为false) - 有助于缩短说明文本
## displayNameHideWhenIconShownInHUD
translation:文本显示名称在HUD中显示图标时隐藏
<br>type:bool
<br>默认为false
## displayColorUseInText
translation:在动作(action)的描述中显示资源颜色
<br>type:bool
<br>默认为true
## appendResourceInHUD
translation:在HUD中追加资源
<br>type:resource ref
<br>使用后，在游戏界面中这个资源值将会叠在目标资源值的后面，并且继承目标资源的颜色和图标。这个资源值后面也能继续叠加其它资源值
## displayPrefixInHUD
translation:在HUD中显示前缀
<br>type:string
<br>在资源数值前显示的文本，会替换掉资源原本的名称以及冒号，和appendResourceInHUD一同使用时可以用来显示资源限制之类的内容
## displayPostfixInHUD
translation:在HUD中显示后缀
<br>type:string
<br>在资源数值之后显示的文本
## displayTextAppendResourceWithGap
translation:显示具有间隙的附加资源文本
<br>type:bool
<br>默认为false。将不相关的资源放在同一行时，在资源之间添加空格。
## appendResourceInHUD_whenThisZero
translation:在此为零时在HUD中追加资源
<br>type:bool
<br>默认为true。为false时附加资源（如用于显示最大值的资源）与父资源一起隐藏。
## includeInStats
translation:包括值
<br>type:bool
<br>包括该资源，与valueInStats类似
## valueInStats
translation:统计值
<br>type:bool/integer
<br>(如果全局且未隐藏，则默认为 1(true)，否则默认为 0(false)） - 用于游戏后的统计和回放的排行榜
## displayInHud
translation:在HUD里显示
<br>type:bool
<br>- 用于 appendResourceInHUD（在HUD中追加资源） 中的资源，而不会隐藏它们，这有其他副作用
## displayDigitGrouping
translation:资源数字分组
<br>type:display type
<br>none/comma/space--(空,逗号,空格)(例如资源数量10000,空格分组就是10 000)
## displayTextAppendResource
translation:显示文本里添加资源
<br>type:resource ref
<br>往文本里添加一个资源
## displayPos
translation:显示排序
<br>type:integer
<br>显示优先级，越小越居上
## displayWithRounding
translation:四舍五入取整
<br>type:bool
<br>将资源的小数部分用四舍五入法变成整数，此代码为真后，该资源数字一定是整数
## displayTextPrefix
translation:显示文本前缀
<br>type:string
<br>与displayPrefixInHUD有着相同的作用，而且它俩不能共存
## displayTextPostfix
translation:显示文本后缀
<br>type:string
<br>与displayPostfixInHUD有着相同的作用，而且它俩不能共存
