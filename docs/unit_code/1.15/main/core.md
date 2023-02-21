
# 1.15-代码表-核心组

!> 以下的代码为通用代码,多半是必要的代码，如果不包括这些，可能在绝大多数情况下导致错误。

?> 代码:name 中文释义:名字 类型:字符型 隶属于:通用代码组

!> name代码的要点指示：  
定义单位原始名称，可以是中文。  
游戏使用它区分其它单位。如果没有在displayText或者语言文件设置显示名称，那么它也将作为单位的显示名称。  
<br>
具体描述文件位置(内部):    
1.assets/translationsStrings_zh.properties格式:units.单位名称.name=写单位显示的名称  
units.单位名称.description= [[填单位显示的描述]]   
<br>
ini文件的单独定义(外部-推荐):  
2.displayText: 单位的标题  
&nbsp;&nbsp;&nbsp;displayDescription: -单位的描述  
<br>
特别提醒:displayText支持本地化，例如如果要写一个多语言的单位描述，可以通过以下例子：
```ini
### 演示例子
[core]
name: Ling
displayText: English Title Text
displayText_zh:中文标题

displayDescription: -English Description
displayDescription_zh:-中文描述

```

