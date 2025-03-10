---
outline: deep
---

# map

- 现代化工具，已经能很好的帮助我们编辑地块，tiles与layer等将不再说明。

- 在阅读本文之前，请确保你理解&lt;xml&gt;格式。

## Trigger

 ```
 <map>
 …
 <objectgroup name="Triggers">
 …
 </objectgroup>
 </map>
 ```

&lt;map&gt;中包含了一个&lt;objectgroup&gt;组，它的“name”是“Triggers”（不区分大小写），我们称之它为宾语（触发）。

```
<object name="map_info" x="0" y="0" width="20" height="20">
 <properties>
 <property name="type" value="skirmish" />
 </properties>
</object>
```

这是其中一个元素，它符合文档中“●map_info”（●选项表示值为“name”，否则是“type”）特征。

在使用Trigger前，必须定义“map_info”以及“type”。

这样是为了方便描述，文档不需要太复杂，参考此处出现的特征符合文档部分相信你能自己理解格式。

```
<object type="unitAdd" x="-Infinity" y="-Infinity">
 <properties>
  <property name="spawnUnits" value="tree*1000" />
  <property name="team" value="3" />
  <property name="resetActivationAfter" value="0" />
 </properties>
</object>
```

这是一个“unitAdd”组，到这里格式介绍就完成了，详细请见文档。

当你熟练Trigger后，可以试试[rwtmxJava](https://github.com/n9tank/rwtmxJava)可以重用组件同时还有语法提示。