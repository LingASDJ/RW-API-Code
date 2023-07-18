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

### LineTextView
::: info
函数列表：\
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
设置文本的缩放 \
:::