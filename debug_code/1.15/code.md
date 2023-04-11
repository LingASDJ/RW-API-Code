<div style="display:flex;align-content: flex-start;flex-wrap: nowrap;flex-direction: row;justify-content: center;">
<h1>RW_1.15-Debug代码表</h1>
</div>

## &nbsp; Zero.前言:
本教程仅适合 Moder 使用，当然一般人也可以看看，  
不过别乱调试就行。否则出问题自行重置设置或后果自负。<br>
<font color="red">注:指令不区分大小写！</font>

## &nbsp; One.什么是高级调试Debug?

铁锈战争是一个多语言，有很多元素的一款游戏。  
但我们可爱的开发者Luke,设置里面远远没有包含全部游戏设置。  
在 1.14 开始，卢克偷偷加了一个 Debug 按钮并且不做任何说明与
提示。   
我通过筛查Dex我发现了这个东西，并将资料整理出来。

## &nbsp; Two.高级调试的Debug位置:

<img src="https://rwapi-code.netlify.app/images/debug.png">

那么，这里就是高级调试指令按钮了。   
当你点了之后，你会看见一个这种界面。
然后现在来到这个界面你就成功一半了，接下来就是如何使用这
个界面。  
声明:下列指令全部由我 Apk 拆包分析后得出来的。仅供学习交流，切勿滥用。

<!-- tabs:start -->

# **[Debug-Nomal] 常规调试组**

| 1.     | autosave on/off    | 启用/关闭自动保存        |
|:------:|:------------------:|:----------------:|
| 2.     | reset              | 重置所有调试，但是语言不会变回来 |
| 3.     | storage reset      | 恢复铁锈存储出厂设置       |
| 4.     | save logs          | 保存游戏常规日志         |
| 5.     | opengl view        | 启用 opengl 视图     |
| 6.     | showhpchanges on   | 开启动态血条显示     |
| 7.     | showhpchanges off  | 关闭动态血条显示     |

# **[Debug-Extra]  扩展调试组**

# **[Debug-Miscs]   杂项调试组**

<!-- | 1. | old map render | 启用旧版地图渲染     |
|:------:|:------------------:|:----------------:|
| 2.     | surface view2      | 启用多线程曲面视图        |
| 3.     | nonsurface view    | 启用非曲面视图          |
| 4.     | surface view       | 启用表面视图           |

| 6.     | watch memory       | 启用内存监控           | -->



<!-- tabs:end -->
