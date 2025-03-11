# template
## @copyFromSection
translation:复制节
<br>type:string
<br>在任何节中使用，以引用节或模板的代码。如@copyFromSection template_name/action_name/projectile_name
## @copyFrom_skipThisSection
translation:复制但跳过节
<br>type:string
<br>在任何节中使用，例如，在引用时候不复制某个action.
## @define X
translation:局部变量
<br>type:string
<br>在一个节中定义一个局部变量(最好在模板外部)
## @global X
translation:全局变量
<br>type:string
<br>定义在所有节中使用的全局变量。注意：局部变量具有更高的优先级
