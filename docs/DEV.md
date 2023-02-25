<div style="display:flex;align-content: flex-start;flex-wrap: nowrap;flex-direction: row;justify-content: center;">
<h1>RTS-Code-API---开发规范</h1>
</div>
<div style="display:flex;align-content: flex-start;flex-wrap: nowrap;flex-direction: row;justify-content: center;">
 <img src="https://rwapi-code.netlify.app/images/title.png">
 </div>

> [!TIP] 0.如果你确定你想<font color=orange>帮忙开发此站点</font>,<br>
就可以点击右上角的Github按钮，<font color=orange>Clone我们的库</font>，<br>
编写代码并进行PR申请，我非常感谢你的帮忙，感谢各位的支持与帮助。<br>
> 1.确保代码的解释通俗易懂，能让新手迅速入门<br>2.编写的代码应该以以下格式进行：
> <h3>代码的格式编写规范：</h3>1.代码的英文名和附属信息(参考站点已添加的代码例子)<br>
2.代码的简介<br>
3.代码的要点指示<br>
4.代码的演示例子<br>
5.代码的扩展例子(可选)<br>
6.GIF演示/视频演示(可选)

> [!TIP] 使用外部资源时，请使用支持HTTPS协议的资源地址传输。<br>
否则在<font color=orange>Google Chrome等一系列以CEF的内核</font>上会因为强制替换HTTPS导致资源无法打开。

> [!WARNING] 不能使用过于高深的说明，严禁出现谜语人话语，无用话语，任何玩梗，
夹带私货等一系列与本站无关的东西，违者将不能通过<font color=green>PR审核</font>

> [!WARNING] 有一些代码或许有一些新的写法，或该写法可能已经废弃，如果遇到这些代码，编写者需要注明，并提供推荐代码。

!> 为了更好的方便编写者，本站点提供了以下的<font color=green>扩展MD格式供各位书写</font>

#### MD扩展格式：
```bash
!> 注意文本
?> 小提示文本
> [!WARNING] 警告文本
> [!NOTE] 笔记文本
> [!TIP] 重要提示文本
> [!ATTENTION] 不推荐文本

注意：以下必须在START-END内进行使用才能生效：

#### **tobby3600**
我是第二个消息文本
#### **JDSALing**
我是第二个消息文本

实际生成代码：
<!-- chat:start -->
#### **tobby3600**
我是第二个消息文本
#### **JDSALing**
我是第二个消息文本
<!-- chat:end -->
```
#### 其他说明：
有关于MarkDown的其他书写格式，请参考MD书写规范  
[MD文档参考--点我立刻学习](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

#### 附加说明：
```txt
由于插件众多，为避免MD格式冲突，换行建议最好使用<br>进行换行，
如果要在一些扩展格式渲染演示，请使用<font>标签,
```
如果要本地测试，请确保设备有<font color=green>Node.js</font>

并在项目根目录使用以下命令：
> [!NOTE] npm i docsify-cli -g<br>docsify serve docs


#### 实际格式演示：
!> 注意文本

?> 小提示文本

> [!WARNING] 警告文本

> [!NOTE] 笔记文本

> [!TIP] 重要提示文本

> [!ATTENTION] 不推荐文本

<!-- chat:start -->
#### **tobby3600**
我是第二个消息文本
#### **JDSALing**
我是第二个消息文本
<!-- chat:end -->

> [!TIP] 如果要添加你的聊天MD头像和名字，请发送Issues给我

!> 该文档可能还有很多缺陷，如果你有更好的建议，请发送Issues或者PR给我。

?> 编写于2023-2-25 RTS-Code-API[第一版]