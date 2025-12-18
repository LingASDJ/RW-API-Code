# template
## @copyFromSection
translation:复制节
<br>type:string
<br>example:@copyFromSection:projectile_1
<br>在任何节中使用，以引用节或模板的代码。如@copyFromSection template_name/action_name/projectile_name
## @copyFrom_skipThisSection
translation:复制但跳过节
<br>type:string
<br>example:[action_test]
@copyFrom_skipThisSection:true
<br>在任何节中使用，例如，在引用时候不复制某个action.
## @define X
translation:局部变量
<br>type:string
<br>example:@define targetEffect: boom
<br>在一个节中定义一个局部变量(最好在模板外部)
## @global X
translation:全局变量
<br>type:string
<br>example:@global targetEffect: pop
<br>定义在所有节中使用的全局变量。注意：局部变量具有更高的优先级
## IGNORE
translation:忽略（必须大写）
<br>type:string
<br>example:[hiddenAction_ok]
spawnUnits:IGNORE
requireConditional:IGNORE
autoTrigger:IGNORE
<br>一个特殊的值，所有代码均可填写，填写后什么都不会发生，一般用于section之间的复制，即忽略该代码的复制
