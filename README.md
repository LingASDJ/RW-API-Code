# RW-API-Code

[English Docs](README_en.md)

简单的代码，简单的学习。  
基于VitePress框架的铁锈战争API代码。  
在这里，你可以研究RTS单元代码，以及地图代码，调试代码或更多，  
你准备好了吗？让我们开始吧

# 项目规则与说明
* 此代码仅供参考。如果有任何错误或遗漏，请随时提及Github问题
* RW API Code是一个非官方的第三方RustedWarfare代码网站，提供高效和高度学习的服务态度。
* 如果您想合作开发，请Fork我们的主要分支机构并申请PullRecust

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
# Netlify部署
当您提交PR时，它会自动为您处理。

# 项目使用的许可证
[Apache许可证-2.0](https://github.com/LingASDJ/RW-API-Code/blob/main/LICENSE)