import{_ as n,c as i,E as s,B as l,a as e,z as a,O as t,G as c,o as r}from"./chunks/framework.621e5595.js";const ge=JSON.parse('{"title":"[LogicBoolean] 逻辑序列组","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/Unit/loginboolean.md","filePath":"src/Unit/loginboolean.md"}'),d={name:"src/Unit/loginboolean.md"},p=t("",4),u=a("code",null,"boolean",-1),h=t("",22),f={class:"tip custom-block"},m=a("p",{class:"custom-block-title"},"TIP",-1),b=t("",6),_={class:"tip custom-block"},g=a("p",{class:"custom-block-title"},"TIP",-1),y=a("br",null,null,-1),T=t("",4),q={class:"tip custom-block"},A=a("p",{class:"custom-block-title"},"TIP",-1),C=a("h4",{id:"非",tabindex:"-1"},[e("非 "),a("a",{class:"header-anchor",href:"#非","aria-label":'Permalink to "非"'},"​")],-1),v=a("p",null,[e("代码:not 中文释义:非"),a("br")],-1),k={class:"tip custom-block"},D=a("p",{class:"custom-block-title"},"TIP",-1),P=a("code",null,"true",-1),I=a("code",null,"false",-1),x=a("code",null,"false",-1),F=a("code",null,"true",-1),U={class:"info custom-block"},O=a("p",{class:"custom-block-title"},"INFO",-1),S=a("code",null,"not>and>or",-1),E=a("br",null,null,-1),R=t("",7),N={class:"info custom-block"},V=a("p",{class:"custom-block-title"},"INFO",-1),w=t("",5),B={class:"info custom-block"},W=a("p",{class:"custom-block-title"},"INFO",-1),M=a("br",null,null,-1),Q=t("",24),G={class:"info custom-block"},L=a("p",{class:"custom-block-title"},"INFO",-1),J=t("",13),Y={class:"info custom-block"},$=a("p",{class:"custom-block-title"},"INFO",-1),z=t("",18),H=a("code",null,"self.hasFlag()",-1),K=a("code",null,"self.hasFlag(id=数字)",-1),j={class:"info custom-block"},X=a("p",{class:"custom-block-title"},"INFO",-1),Z=a("br",null,null,-1),ee=t("",15),ae={class:"info custom-block"},oe=a("p",{class:"custom-block-title"},"INFO",-1),se=t("",35),le={class:"danger custom-block"},te=a("p",{class:"custom-block-title"},"DANGER",-1),ne=a("p",null,[a("a",{href:"https://www.bilibili.com/video/BV17v4y1r7dV",target:"_blank",rel:"noreferrer"},"https://www.bilibili.com/video/BV17v4y1r7dV"),e(" (感谢十山月)")],-1),ie=a("iframe",{src:"//player.bilibili.com/player.html?aid=566144438&bvid=BV17v4y1r7dV&cid=988997369&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"100%",height:"400"},`
`,-1),ce=t("",1),re=t("",2);function de(pe,ue,he,fe,me,be){const o=c("font");return r(),i("div",null,[p,s(o,{color:"orange"},{default:l(()=>[e("布尔值")]),_:1}),e("表达“真(true)”或“假(false)”的一个状态。在铁锈中，布尔值("),u,e(")被运用于逻辑判断。"),h,a("div",f,[m,a("p",null,[e("请注意，铁锈中等于的符号为"),s(o,{color:"orange"},{default:l(()=>[e("==")]),_:1}),e("，"),s(o,{color:"orange"},{default:l(()=>[e("=")]),_:1}),e("在铁锈中用于赋值或参数。")])]),b,a("div",_,[g,s(o,{color:"orange"},{default:l(()=>[e("and")]),_:1}),e("用于连接两个逻辑判断，只有在这两个逻辑判断的值都为"),s(o,{color:"orange"},{default:l(()=>[e("true")]),_:1}),e("时，"),s(o,{color:"orange"},{default:l(()=>[e("and")]),_:1}),e("的值才为true。"),y]),T,a("div",q,[A,s(o,{color:"orange"},{default:l(()=>[e("or")]),_:1}),e("用于连接两个逻辑判断，只要这两个逻辑判断的值有一个为"),s(o,{color:"orange"},{default:l(()=>[e("true")]),_:1}),e("时，"),s(o,{color:"orange"},{default:l(()=>[e("or")]),_:1}),e("的值就为true。")]),C,v,a("div",k,[D,s(o,{color:"orange"},{default:l(()=>[e("not")]),_:1}),e("用于将某个逻辑判断的值取反，即"),P,e("变"),I,e("，"),x,e("变"),F,e("。")]),a("div",U,[O,a("p",null,[e("多个逻辑运算符同时使用时，优先级为"),S,e("，同时"),s(o,{color:"orange"},{default:l(()=>[e("支持使用括号改变运算优先级")]),_:1}),e("。 "),E,e("推荐"),s(o,{color:"orange"},{default:l(()=>[e("在不确定优先级时打括号")]),_:1}),e("。")])]),R,a("div",N,[V,a("p",null,[e("不同数据类型通常"),s(o,{color:"orange"},{default:l(()=>[e("不能直接进行算数运算")]),_:1}),e("，但在部分情况下，"),s(o,{color:"orange"},{default:l(()=>[e("number")]),_:1}),e("和"),s(o,{color:"orange"},{default:l(()=>[e("float")]),_:1}),e("类型可以混用（建议"),s(o,{color:"orange"},{default:l(()=>[e("所有数值全部使用float")]),_:1}),e("来避免混淆）。")])]),w,a("div",B,[W,a("p",null,[e("对于"),s(o,{color:"orange"},{default:l(()=>[e("不满足交换律的运算符")]),_:1}),e("，需要注意"),s(o,{color:"orange"},{default:l(()=>[e("运算优先级")]),_:1}),e("是否正确。由于铁锈本身bug，"),s(o,{color:"orange"},{default:l(()=>[e("在数学上正确的优先级不一定在铁锈中正确")]),_:1}),e("，因此可能出现减法顺序混乱等问题。 "),M,e("为了避免可能的问题，请尽量在任何"),s(o,{color:"orange"},{default:l(()=>[e("不满足交换律的运算符")]),_:1}),e("两边打上括号。")])]),Q,a("div",G,[L,a("p",null,[e("引用资源时，请确保"),s(o,{color:"orange"},{default:l(()=>[e("这个资源在这个单位定义过")]),_:1}),e("，否则会报错。")])]),J,a("div",Y,[$,a("p",null,[e("单位计时部分能返回到最小时间精度为"),s(o,{color:"orange"},{default:l(()=>[e("0.1秒")]),_:1}),e("。")])]),z,a("p",null,[H,e("用于获取自身是否有"),s(o,{color:"orange"},{default:l(()=>[e("标志")]),_:1}),e("，格式为"),K,e("。")]),a("div",j,[X,a("p",null,[e("不同于"),s(o,{color:"orange"},{default:l(()=>[e("标签（tag）")]),_:1}),e("，"),s(o,{color:"orange"},{default:l(()=>[e("标志（flag）")]),_:1}),e("是内置的一些"),s(o,{color:"orange"},{default:l(()=>[e("布尔值")]),_:1}),e("，无需定义即可直接使用。"),Z]),a("blockquote",null,[a("p",null,[e("标签的添加方法为"),s(o,{color:"orange"},{default:l(()=>[e("[action]addResource:flag=1,3-7,13")]),_:1}),e("，且只支持"),s(o,{color:"orange"},{default:l(()=>[e("0-31")]),_:1}),e("，标签的移除方法与之相反。")])])]),ee,a("div",ae,[oe,a("p",null,[e("路径点类型可以是"),s(o,{color:"orange"},{default:l(()=>[e("move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget")]),_:1}),e("。")])]),se,a("div",le,[te,a("p",null,[e("在"),s(o,{color:"orange"},{default:l(()=>[e("跨单位读取数组")]),_:1}),e("时，如果下标使用了逻辑，无论逻辑值都会返回第零项，")]),s(o,{color:"orange"},{default:l(()=>[e("为游戏bug")]),_:1}),e("，解决方法可以参考："),ne,ie,ce]),re])}const ye=n(d,[["render",de]]);export{ge as __pageData,ye as default};