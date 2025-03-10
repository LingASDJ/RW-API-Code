---
outline: deep
---

# **QuickStart**

## 一.安装RW-Engine

### 下载RW-Engine
蓝奏云:

### 安装RW-Engine
解压下载的ZIP，将里面的RW_Engine这个文件夹整个复制到你的mod的目录下。

    文件结构：
    ---units
        ---你的mod1
            ---RW_Engine
            ---mod-info.txt
            ---.........
        ---你的mod2

## 二.使用RW-Engine

::: tip
如没特殊注明，函数均支持commonCallBack
:::

### LineTextView-函数列表
::: info
函数列表：
1.setText \
Data:   ("text",type="string") \
设置显示的文本 \
2.setTextMax \
Data:   ("textMax",type="number") \
设置一行所能显示的最大文本数量 \
3.setTextColor \
Data:   ("commonHeadLength",type="number")  ("indexStart",type="number")    ("indexEnd",type="number")  ("color",type="number") \
设置文本的颜色 \
4.setTextScale \
Data:   ("textScale",type="number") \
设置文本的缩放
:::


### LineTextView-使用
LineTextView作为RW-Engine最基本的组件
<br>
默认以ini被铁锈加载。
<br>
所以使用LineTextView有俩种方式
<br>
第一种是spawnUnits，生成一个LineTextView
<br>
或者在附属添加LineTextView
<br>
第二种是copyForm这个ini
<br>
::: info
第一种方式
:::
<br>

```ini
[core]
@memory LTVSystem:unit

[hiddenAction_created]
autoTriggerOnEvent:created
resetCustomTimer:true

#创建文本框
spawnUnits:LineTextViewSystem

#文本框会自动发送tag为addLTVSystemToEpoll给该单位
[hiddenAction_addLTVSystemToEpoll]
autoTriggerOnEvent:newMessage(withTag="addLTVSystemToEpoll")
setUnitMemory:LTVSystem = eventSource

[action_setTextTest]
text:setText
isVisible:true
sendMessageTo:memory.LTVSystem
sendMessageWithTags:setText
sendMessageWithData:text="B站关注学画画的十山月"
```
