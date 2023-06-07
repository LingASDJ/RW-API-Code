import{_ as n,H as c,o as i,c as d,J as t,E as s,a as e,C as o,V as l}from"./chunks/framework.ba757cb9.js";const Fe=JSON.parse('{"title":"[LogicBoolean] 逻辑序列组","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/Unit/loginboolean.md","filePath":"src/Unit/loginboolean.md"}'),r={name:"src/Unit/loginboolean.md"},p=l("",4),u=o("code",null,"boolean",-1),h=l("",22),f={class:"tip custom-block"},b=o("p",{class:"custom-block-title"},"TIP",-1),_=l("",6),m={class:"tip custom-block"},g=o("p",{class:"custom-block-title"},"TIP",-1),T=o("br",null,null,-1),y=l("",4),A={class:"tip custom-block"},v=o("p",{class:"custom-block-title"},"TIP",-1),C=o("h4",{id:"非",tabindex:"-1"},[e("非 "),o("a",{class:"header-anchor",href:"#非","aria-label":'Permalink to "非"'},"​")],-1),D=o("p",null,[e("代码:not 中文释义:非"),o("br")],-1),k={class:"tip custom-block"},q=o("p",{class:"custom-block-title"},"TIP",-1),F=o("code",null,"true",-1),I=o("code",null,"false",-1),O=o("code",null,"false",-1),P=o("code",null,"true",-1),U={class:"info custom-block"},S=o("p",{class:"custom-block-title"},"INFO",-1),x=o("code",null,"not>and>or",-1),E=o("br",null,null,-1),R=l("",7),N={class:"info custom-block"},V=o("p",{class:"custom-block-title"},"INFO",-1),w=l("",5),M={class:"info custom-block"},W=o("p",{class:"custom-block-title"},"INFO",-1),B=o("br",null,null,-1),L=l("",22),G={class:"info custom-block"},Q=o("p",{class:"custom-block-title"},"INFO",-1),H=l("",14),z={class:"info custom-block"},J=o("p",{class:"custom-block-title"},"INFO",-1),$=l("",13),Y=o("code",null,"self.hasFlag()",-1),X=o("code",null,"self.hasFlag(id=数字)",-1),j={class:"info custom-block"},K=o("p",{class:"custom-block-title"},"INFO",-1),Z=o("br",null,null,-1),ee=l("",10),oe={class:"info custom-block"},ae=o("p",{class:"custom-block-title"},"INFO",-1),te=l("",24),se={class:"danger custom-block"},le=o("p",{class:"custom-block-title"},"DANGER",-1),ne=o("p",null,[o("a",{href:"https://www.bilibili.com/video/BV17v4y1r7dV",target:"_blank",rel:"noreferrer"},"https://www.bilibili.com/video/BV17v4y1r7dV"),e(" (感谢十山月)")],-1),ce=o("iframe",{src:"//player.bilibili.com/player.html?aid=566144438&bvid=BV17v4y1r7dV&cid=988997369&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"100%",height:"400"},`
`,-1),ie=l("",1),de=l("",24),re={class:"warning custom-block"},pe=o("p",{class:"custom-block-title"},"WARNING",-1),ue=l("",3),he=o("br",null,null,-1),fe=o("code",null,"customTarget1",-1),be=l("",9),_e={class:"tip custom-block"},me=o("p",{class:"custom-block-title"},"TIP",-1),ge=o("p",null,[e("eventSource 代码:eventSource 中文释义:事件源 返回类型:event"),o("br"),o("code",null,"eventSource"),e("用于获取"),o("code",null,"autoTriggerOnEvent"),e("当前触发器,没有则返回"),o("code",null,"null"),e("，可以看作对于事件的"),o("code",null,"autoTriggerOnEvent"),e("。")],-1);function Te(ye,Ae,ve,Ce,De,ke){const a=c("font");return i(),d("div",null,[p,t(a,{color:"orange"},{default:s(()=>[e("布尔值")]),_:1}),e("表达“真(true)”或“假(false)”的一个状态。在铁锈中，布尔值("),u,e(")被运用于逻辑判断。"),h,o("div",f,[b,o("p",null,[e("请注意，铁锈中等于的符号为"),t(a,{color:"orange"},{default:s(()=>[e("==")]),_:1}),e("，"),t(a,{color:"orange"},{default:s(()=>[e("=")]),_:1}),e("在铁锈中用于赋值或参数。")])]),_,o("div",m,[g,t(a,{color:"orange"},{default:s(()=>[e("and")]),_:1}),e("用于连接两个逻辑判断，只有在这两个逻辑判断的值都为"),t(a,{color:"orange"},{default:s(()=>[e("true")]),_:1}),e("时，"),t(a,{color:"orange"},{default:s(()=>[e("and")]),_:1}),e("的值才为true。"),T]),y,o("div",A,[v,t(a,{color:"orange"},{default:s(()=>[e("or")]),_:1}),e("用于连接两个逻辑判断，只要这两个逻辑判断的值有一个为"),t(a,{color:"orange"},{default:s(()=>[e("true")]),_:1}),e("时，"),t(a,{color:"orange"},{default:s(()=>[e("or")]),_:1}),e("的值就为true。")]),C,D,o("div",k,[q,t(a,{color:"orange"},{default:s(()=>[e("not")]),_:1}),e("用于将某个逻辑判断的值取反，即"),F,e("变"),I,e("，"),O,e("变"),P,e("。")]),o("div",U,[S,o("p",null,[e("多个逻辑运算符同时使用时，优先级为"),x,e("，同时"),t(a,{color:"orange"},{default:s(()=>[e("支持使用括号改变运算优先级")]),_:1}),e("。 "),E,e("推荐"),t(a,{color:"orange"},{default:s(()=>[e("在不确定优先级时打括号")]),_:1}),e("。")])]),R,o("div",N,[V,o("p",null,[e("不同数据类型通常"),t(a,{color:"orange"},{default:s(()=>[e("不能直接进行算数运算")]),_:1}),e("，但在部分情况下，"),t(a,{color:"orange"},{default:s(()=>[e("number")]),_:1}),e("和"),t(a,{color:"orange"},{default:s(()=>[e("float")]),_:1}),e("类型可以混用（建议"),t(a,{color:"orange"},{default:s(()=>[e("所有数值全部使用float")]),_:1}),e("来避免混淆）。")])]),w,o("div",M,[W,o("p",null,[e("对于"),t(a,{color:"orange"},{default:s(()=>[e("不满足交换律的运算符")]),_:1}),e("，需要注意"),t(a,{color:"orange"},{default:s(()=>[e("运算优先级")]),_:1}),e("是否正确。由于铁锈本身bug，"),t(a,{color:"orange"},{default:s(()=>[e("在数学上正确的优先级不一定在铁锈中正确")]),_:1}),e("，因此可能出现减法顺序混乱等问题。 "),B,e("为了避免可能的问题，请尽量在任何"),t(a,{color:"orange"},{default:s(()=>[e("不满足交换律的运算符")]),_:1}),e("两边打上括号。")])]),L,o("div",G,[Q,o("p",null,[e("引用资源时，请确保"),t(a,{color:"orange"},{default:s(()=>[e("这个资源在这个单位定义过")]),_:1}),e("，否则会报错。")])]),H,o("div",z,[J,o("p",null,[e("单位计时部分能返回到最小时间精度为"),t(a,{color:"orange"},{default:s(()=>[e("0.1秒")]),_:1}),e("。")])]),$,o("p",null,[Y,e("用于获取自身是否有"),t(a,{color:"orange"},{default:s(()=>[e("标志")]),_:1}),e("，格式为"),X,e("。")]),o("div",j,[K,o("p",null,[e("不同于"),t(a,{color:"orange"},{default:s(()=>[e("标签（tag）")]),_:1}),e("，"),t(a,{color:"orange"},{default:s(()=>[e("标志（flag）")]),_:1}),e("是内置的一些"),t(a,{color:"orange"},{default:s(()=>[e("布尔值")]),_:1}),e("，无需定义即可直接使用。"),Z]),o("blockquote",null,[o("p",null,[e("标签的添加方法为"),t(a,{color:"orange"},{default:s(()=>[e("[action]addResource:flag=1,3-7,13")]),_:1}),e("，且只支持"),t(a,{color:"orange"},{default:s(()=>[e("0-31")]),_:1}),e("，标签的移除方法与之相反。")])])]),ee,o("div",oe,[ae,o("p",null,[e("路径点类型可以是"),t(a,{color:"orange"},{default:s(()=>[e("move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget")]),_:1}),e("。")])]),te,o("div",se,[le,o("p",null,[e("在"),t(a,{color:"orange"},{default:s(()=>[e("跨单位读取数组")]),_:1}),e("时，如果下标使用了逻辑，无论逻辑值都会返回第零项，")]),t(a,{color:"orange"},{default:s(()=>[e("为游戏bug")]),_:1}),e("，解决方法可以参考："),ne,ce,ie]),de,o("div",re,[pe,o("p",null,[e("attacking不一定是正在攻击的目标，"),t(a,{color:"orange"},{default:s(()=>[e("只要是设定了攻击目标都会存在")]),_:1}),e("。")])]),ue,o("p",null,[e("customTarget1 代码:self.customTarget1() 中文释义:自定义目标1 返回类型:unit/marker"),he,fe,e("是铁锈内置的unit类型内存，"),t(a,{color:"orange"},{default:s(()=>[e("默认值为创建该单位的单位")]),_:1}),e("。")]),be,o("div",_e,[me,o("p",null,[e("相对偏移可以理解为"),t(a,{color:"orange"},{default:s(()=>[e("在单位自己位置以自己的方向建立一个平面直角坐标系")]),_:1}),e("，然后计算在这个坐标系内的便宜，并返回地图中大坐标系的单位参考。")])]),ge])}const Ie=n(r,[["render",Te]]);export{Fe as __pageData,Ie as default};
