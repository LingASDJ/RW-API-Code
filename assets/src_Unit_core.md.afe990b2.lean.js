import{_ as t,o,c as r,z as e,a,E as n,B as l,O as i,G as c}from"./chunks/framework.755b50bd.js";const E=JSON.parse('{"title":"[core]组","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/Unit/core.md"}'),p={name:"src/Unit/core.md"},d=i("",51),h=e("br",null,null,-1),u=i("",20),b={class:"tip custom-block"},g=e("p",{class:"custom-block-title"},"TIP",-1),m=e("br",null,null,-1),y=e("br",null,null,-1),C=i("",13),k={class:"tip custom-block"},f=e("p",{class:"custom-block-title"},"TIP",-1),q=e("br",null,null,-1),v=e("br",null,null,-1),x=i("",77),D={class:"tip custom-block"},A=e("p",{class:"custom-block-title"},"TIP",-1),F=i("",183);function P(_,T,R,w,B,I){const s=c("font");return o(),r("div",null,[d,e("p",null,[a("主要在"),n(s,{color:"orange"},{default:l(()=>[a("启用多个自定义Mod")]),_:1}),a("进行优先级定义"),h,a(" 以逗号分隔的名称列表。像"),n(s,{color:"orange"},{default:l(()=>[a("名称一样，但优先级较低")]),_:1}),a("，对于"),n(s,{color:"orange"},{default:l(()=>[a("启用多个自定义mod")]),_:1}),a("有用。")]),u,e("div",b,[g,e("p",null,[a("早期是用于在"),n(s,{color:"orange"},{default:l(()=>[a("builtFrom")]),_:1}),a("的代码,并结合科技等级使用。如果工厂的等级低于单位的目标科技等级，则会在工厂里面隐藏该单位。"),m,a("自铁锈1.09后出现"),n(s,{color:"orange"},{default:l(()=>[a("overrideAndReplace")]),_:1}),a("后，该方法则不建议使用。有关于新策略，请参考"),n(s,{color:"orange"},{default:l(()=>[a("overrideAndReplace")]),_:1}),a("代码文档指南。"),y,a(" 设置单位的科技等级，共有3个级别，1级GUI显示为绿色，2、3级显示为黄色。超过3报错。")])]),C,e("div",k,[f,e("p",null,[a("若设置成true,则会在单位死亡时产生血迹,"),q,a(" 图像在"),n(s,{color:"orange"},{default:l(()=>[a("drawable/blood_mark.png"),v,a("当hideScorchMark:true")]),_:1}),a("时可以隐藏非生物则为黑色爆炸效果。")])]),x,e("div",D,[A,e("p",null,[a("能量恢复是持续的，如果你设置了"),n(s,{color:"orange"},{default:l(()=>[a("energyNeedsToRechargeToFull")]),_:1}),a("， 那么攻击时按energyRegen恢复，耗尽时的灰条按此处设定值恢复。")])]),F])}const M=t(p,[["render",P]]);export{E as __pageData,M as default};
