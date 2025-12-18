# resources
## credits
translation:资金
<br>type:Resources
<br>example:credits:600
<br>铁锈中默认用于全局的资金。
## energy
translation:能量
<br>type:Resources
<br>example:energy=50
<br>单位使用的能量，如可用于开火限制。
## hp
translation:血量
<br>type:Resources
<br>example:hp:40
<br>单位血量，一般血量归零时就会销毁单位。
## shield
translation:护盾
<br>type:Resources
<br>example:price: hp=-100, shield=100
<br>单位护盾，一般用于抵挡敌人攻击。
## ammo
translation:弹药
<br>type:integer
<br>example:ammo=1
<br>弹药，每个单位的隐藏值，供mod使用。
## setFlag
translation:设置标志
<br>type:integer
<br>example:setFlag:1，setFlag=1,3
<br>设置标志，标志存储在每个单元中，与addResources，resourceUsage或price等一起使用。
1.15之前范围是0-31
1.15改为无限制
## unsetFlag
translation:取消标志
<br>type:integer
<br>example:unsetFlag=1 , unsetFlag:1-5
<br>取消已经设置的标志
1.15之前范围是0-31
1.15改为无限制
## hasFlag
translation:拥有标志
<br>type:integer
<br>example:hasFlag:1，hasFlag=1|2
<br>拥有标志。
1.15之前范围是0-31
1.15改为无限制
## hasMissingFlag
translation:没有标志
<br>type:integer
<br>example:hasMissingFlag:1，hasMissingFlag=1|13
<br>没有标志。
1.15之前范围是0-31
1.15改为无限制
