---
outline: deep
---

<div style="display:flex;align-content: flex-start;flex-wrap: nowrap;flex-direction: row;justify-content: center;">
<h1>RTS-Code-API---开发规范</h1>
</div>
<div style="display:flex;align-content: flex-start;flex-wrap: nowrap;flex-direction: row;justify-content: center;">
 <img src="https://jdsalingzx.top/wp-content/uploads/2025/03/logo.png">
 </div>

::: tip
0.如果你确定你想<font color=orange>帮忙开发此站点</font>,<br>
就可以点击右上角的Github按钮，<font color=orange>Clone我们的库</font>，<br>
编写代码并进行PR申请，我非常感谢你的帮忙，感谢各位的支持与帮助。<br>
> 1.确保代码的解释通俗易懂，能让新手迅速入门<br>2.编写的代码应该以以下格式进行：
> <h3>代码的格式编写规范：</h3>1.代码的英文名和附属信息(参考站点已添加的代码例子)<br>
2.代码的简介<br>
3.代码的要点指示<br>
4.代码的演示例子<br>
5.代码的扩展例子(可选)<br>
6.GIF演示/视频演示(可选)
:::

::: tip
使用外部资源时，请使用支持HTTPS协议的资源地址传输。<br>
否则在<font color=orange>Google Chrome等一系列以CEF的内核</font>上会因为强制替换HTTPS导致资源无法打开。
:::

::: warning
不能使用过于高深的说明，严禁出现谜语人话语，无用话语，任何玩梗，
夹带私货等一系列与本站无关的东西，违者将不能通过<font color=green>PR审核</font>
:::

::: warning
有一些代码或许有一些新的写法，或该写法可能已经废弃，如果遇到这些代码，编写者需要注明，并提供推荐代码。
:::

::: info
为了更好的方便一起编写站点的贡献者，本站点提供了以下的<font color=green>扩展MD格式供各位书写</font>
:::

#### 其他说明：
有关于MarkDown的其他书写格式，请参考MD书写规范  
[MD文档参考--点我立刻学习](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

#### 附加说明：
```txt
由于插件众多，为避免MD格式冲突，换行建议最好使用<br>进行换行，
如果要在一些扩展格式渲染演示，请使用<font>标签,
```

#### 部署策略：

::: info
1.本地部署
:::

::: tip
如果要本地测试，请确保设备有<font color=green>Node.js</font>
并在项目根目录使用以下命令：<br>
> npm i docsify-cli -g<br>docsify serve docs
:::

::: info
2.Netlify部署
:::

::: tip
如果你已经发送了PR请求，可以通过我的Netlify预览站点进行预览，<br>
Netlify会在你的PR请求下面显示你的预览页面地址。<br>
点击<b><font color=orange>😎 Deploy Preview后面的链接</font></b>即可看见效果<br>
由于某些原因，TX会拦截Netlify的站点，请使用浏览器预览。
:::

#### 1.MD扩展格式：

```

::: info
信息文本
:::

::: tip
小提示文本
:::

::: warning
警告文本
:::

::: danger
危险文本
:::

::: details
这是一个折叠框
:::

#### 代码突出显示
::: code-group
```ini{2} [演示例子]
[action_copyArry]
RTS-APICODE

可以通过1-4来让1到4行突出显示，
也可以通过1,4,5来指定行数突出显示
```

#### 实际格式演示：
::: tip
注意文本
:::

::: info
信息文本
:::

::: tip
小提示文本
:::

::: warning
警告文本
:::

::: danger
危险文本
:::

::: details
这是一个折叠框
:::


```ini{2} [演示例子]
[action_copyArry]
RTS-APICODE
//代码突出演示
可以通过1-4来让1到4行突出显示，
也可以通过1,4,5来指定行数突出显示

```

### 2.媒体插入

#### 1.视频演示---(可选)
<iframe src="https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="400">
</iframe>

```html
<iframe src="视频地址" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="400">
</iframe>
```

#### 3.插入表格

### 代码演示：
|A|B|C|  
|-|-|-
|1|2|3|

### 代码例子：

```markdown
|A|B|C|  
|-|-|-
|1|2|3|
```

如果你仍然不会Markdown表格写法，这里给你一个链接：
<h3><a href="https://tableconvert.com/zh-cn/markdown-to-markdown" target="_blank">TableConvert-MD-点击进入</a></h3>

### 4.扩展写法(高级)

有一些时候，我们可能需要在已经标记的后面再添加东西，
但Markdown解析方式在标签后面再有一个标签就不会识别了。  
所以这里我们必须直接使用原生Html的代码，
通过浏览器的检查元素，你应该能迅速找到模块框架，
将它的模块元素区域复制下来，并调用。

<!-- MarkDown表格必须有上方的分割线以告诉浏览器是表格 -->

::: tip
该文档可能还有很多缺陷，如果你有更好的建议，请发送Issues或者PR给我。
:::

::: info
编写于2023-5-9 RTS-Code-API[第3版-第3次修订]
:::