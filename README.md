# RW-API-Code-V2

[English Docs](README_en.md)

简单的代码，简单的学习。  
基于VitePress框架的铁锈战争API代码。  
在这里，你可以研究RTS单元代码，以及地图代码，调试代码或更多，  
你准备好了吗？让我们开始吧

# 项目规则与说明
* 此代码仅供参考。如果有任何错误或遗漏，请随时提及Github问题
* RW API Code是一个非官方的第三方RustedWarfare代码网站，提供高效和高度学习的服务态度。
* 如果您想合作开发，请Fork我们的主要分支机构并申请PullRecust

### 贡献者

<!-- readme: collaborators,contributors -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/shishanyue">
                    <img src="https://avatars.githubusercontent.com/u/62888460?v=4" width="100;" alt="shishanyue"/>
                    <br />
                    <sub><b>Shishanyue</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/LingASDJ">
                    <img src="https://avatars.githubusercontent.com/u/70191651?v=4" width="100;" alt="LingASDJ"/>
                    <br />
                    <sub><b>JDSA Ling</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/tobby3600">
                    <img src="https://avatars.githubusercontent.com/u/79432329?v=4" width="100;" alt="tobby3600"/>
                    <br />
                    <sub><b>Tobby</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/mason369">
                    <img src="https://avatars.githubusercontent.com/u/93964390?v=4" width="100;" alt="mason369"/>
                    <br />
                    <sub><b>Mason</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/liusxs">
                    <img src="https://avatars.githubusercontent.com/u/101164913?v=4" width="100;" alt="liusxs"/>
                    <br />
                    <sub><b>Liuliu</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/allureluoli">
                    <img src="https://avatars.githubusercontent.com/u/106828088?v=4" width="100;" alt="allureluoli"/>
                    <br />
                    <sub><b>二月</b></sub>
                </a>
            </td>
		</tr>
		<tr>
            <td align="center">
                <a href="https://github.com/WisenextTime">
                    <img src="https://avatars.githubusercontent.com/u/141509640?v=4" width="100;" alt="WisenextTime"/>
                    <br />
                    <sub><b>Null</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Thisisafox">
                    <img src="https://avatars.githubusercontent.com/u/141534430?v=4" width="100;" alt="Thisisafox"/>
                    <br />
                    <sub><b>屑狐狸</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Mitpoppy">
                    <img src="https://avatars.githubusercontent.com/u/89001400?v=4" width="100;" alt="Mitpoppy"/>
                    <br />
                    <sub><b>Mitpoppy</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/n9tank">
                    <img src="https://avatars.githubusercontent.com/u/118785835?v=4" width="100;" alt="n9tank"/>
                    <br />
                    <sub><b>n9tank</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: collaborators,contributors -end -->

# 开发说明
## 1.前提条件：Node.js 18或以上
```文本
如果你没有Node.js，你可以从下面的链接下载。
什么，我不确定Node.js是什么？  
我建议立即关闭这个页面。
```
Node.js链接：[Node.js](https://nodejs.org/zh-cn)
## 2.安装Vite Press
```bash
npm i vitepress -D
```
## 3.Package.json框架结构
```json
{
  "scripts": {
    "docs:dev": "vitepress dev rustedwarfareapicode",    
    "docs:build": "vitepress build rustedwarfareapicode",
    "docs:preview": "vitepress preview rustedwarfareapicode"
  },
  "devDependencies": {
    "vitepress": "^1.0.0-alpha.65"
  }
}
```
## 4.本地部署
开发测试:
```bash
npm run docs:dev
```

构建测试:
```bash
npm run docs:build
```

预览测试:
```bash
npm run docs:preview
```

## 5.线上测试
先申请贡献者名单来，之后直接修改主分支并提交。
警告：严禁恶意使用权限，主分支有备份，若乱改结构，一经查出，直接取消贡献者权限和剔除名单。

# 项目使用的许可证
[Apache许可证-2.0](https://github.com/LingASDJ/RW-API-Code/blob/main/LICENSE)
