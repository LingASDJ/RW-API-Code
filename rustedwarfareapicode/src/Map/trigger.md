---
outline: deep
---

# 触发代码参考文档

## 特殊触发（不存在通用触发代码）

### ●map_info

- **type**
  - 地图类型
    - `survival`：生存。触发刷新波机制，指挥中心全部失去后判定失败。需设置 `winCondition` 和 `attack_point`。
    - `challenge`：挑战。触发队友视野不共享机制。需设置 `winCondition`。
    - `skirmish`：遭遇战。基础类型，无需设置其他属性。
    - `mission`：任务。基础类型，需设置 `winCondition`。

- **fog**
  - 雾类型
    - `map`：基础雾
    - `los`：重雾
    - `none`：无雾
  - 注：此设置会被房间里的游戏设置覆盖。

- **introText**
  - 开局弹出的消息，可使用 `\n` 换行。
    - `string`

- **winCondition/loseCondition**
  - 胜利/失败条件
    - `mainBuildings`：可进行生产的建筑物。
    - `allUnitsAndBuildings`：所有的单位和建筑物。
    - `allBuildings`：所有的建筑物。
    - `commandCenter`：指挥中心。
    - `requiredObjectives`：地图所有的 `objective` 都被触发。
    - `none`
  - 注：`loseCondition` 在 1.15 版本被删除。

- **shareFogWithAllies**
  - 与盟友共享雾，优先级最高。
    - `bool`
  - 注：目前在多人游戏中无效。

- **survivalWavesClassic**
  - 1.14 之前的老式刷兵机制。
    - `bool`

- **startWithMusic**
  - 开局播放的音乐。
    - `Your music name`
    - 例：`startWithMusic:My music`

- **survivalWaves**
  - 自定义生存波。
    - `time string - int unitName string`
    - 生存波具体写法：
      ```
      +1:00 [时间]
      第一波 [悬浮文本]
      - [出的单位所需的]
      3 [单位数量]
      builder [需要派出的单位]
      ```
    - 特殊指令：
      - `[win]`：视为本局结束。
      - `[paused]`：暂停游戏。
      - `[noTimer]`：没有计时器。
      - `[lockSpawn]`：锁定生成器。
      - `[unlockSpawn]`：解锁生成器。
    - 例：
      ```xml
      <property name="survivalWaves">
      +1:00 第一波 - 3 builder
      +1:50 第二波 - 3 builder, 5 fireBee
      </property>
      ```

### team_info

- **credits**
  - 开始时该队伍所拥有的资金。
    - `int`
  - 注：此代码会被房间设置覆盖。

- **shareFogWithAllies**
  - 与盟友共享雾，优先级最高。
    - `bool`
  - 注：目前在多人游戏中无效。

- **team**
  - 所指定的队伍。
    - `int`

- **disabledAI**
  - AI 无法控制这个队伍的单位。
    - `bool`
  - 注：此代码优先级最高，但在多人游戏中无效。

- **lockAiDifficulty**
  - 锁定该队的 AI 难度，数值大小会影响 AI 的经济增长。
    - `int`
  - 注：
    - `-2`：Very Easy
    - `-1`：Easy
    - `0`：Medium
    - `1`：Hard
    - `2`：Very Hard
    - `3`：Impossible
    - 其他数值：Unknown
  - 注：此代码会被房间设置覆盖。

- **allyGroup**
  - 指定这个队伍所属的阵营。
    - `int`
  - 注：此代码会被房间设置覆盖。

- **ai**
  - 让 AI 更主动地送兵。
    - `survival`
  - 注：建造者等也会被拿去送兵，且对面没有对应攻击单位时不会移动。

- **basicAI**
  - 让 AI 不建造建筑物，但保持出兵。
    - `bool`
  - 注：此代码在多人游戏中无效。

### rotate

- **dir**
  - 单位旋转角度。
    - `float`

### fall

- 在开局时在该处生成的单位从天上降落。
  - 注：对一些单位无效。

### point
 - 结合 `move` 中的 `target` 使用。

### ●camera_start

- **zoomTo**
  - 开局视角所在地，`zoomTo` 可选填，用于缩放开局视野。
    - `int`（`int≥1, int∈R*`）

### camera_pan

- **index**
  - 只在 `menu_background` 中有效。
    - `int`（`int≥0, int∈R*`）

### ai_allow_full_use

- 让 AI 更主动地使用这里的单位（类似于 `ai:survival` 的效果）。
  - 注：此代码在多人游戏中无效。

### ●attack_point

- 生存模式下的出兵点。

### set_team

- **team**
  - 设置这个区域里的单位所属队伍。
    - `int`

## 一般触发（可使用通用触发代码）

### move

- **target**
  - 对应目标 `point` 的数值。
    - `string`
- **unload**
  - 如果是载具，移动到目标点后卸载载具中的单位。
    - `bool`

### unitRemove

- 移除这个区域内的指定队伍的单位。
- **onlyIfEmpty**
  - 只移除未搭载单位的单位。
    - `bool`
  - 注：可能是 bug 导致的，或 1.16 的更新动向。

### unitDetect

- **onlyOnResourcePool**
  - 检测在资源坑上的建筑（如矿坑上的资源抽取器）。
    - `bool`
- **onlyMainBuildings**
  - 检测可生产单位的建筑物（如陆军工厂）。
    - `bool`
- **onlyBuildings**
  - 检测建筑物（如陆军工厂）。
    - `bool`
- **onlyBuilders**
  - 检测 `ini` 中拥有 `isBuilder:true` 的单位。
    - `bool`
- **onlyIdle**
  - 检测闲置中的单位（无下达指令的单位）。
    - `bool`
- **onlyEmptyQueue**
  - 检测排列队列为空的单位（如当前一个单位建设/升级排列是闲置的）。
    - `bool`
- **onlyIfEmpty**
  - 检测除了搭载了单位的单位之外的单位。
    - `bool`
- **onlyTechLevel**
  - 检测科技等级符合的单位。
    - `int`
- **onlyAttack**
  - 检测有攻击性的单位（如炮塔）。
    - `bool`
- **onlyAttackAir**
  - 检测只攻击空中的单位（如防空炮塔）。
    - `bool`
- **onlyWithTag**
  - 检测具有特定标签的单位。
    - `string`（单位的 `tags`）
- **includeIncomplete**
  - 检测包括未被完全建造的单位。
    - `bool`
- **unitType**
  - 检测一个特定名称的单位。
    - `unit name`
- **minUnits**
  - 该宾语触发所满足的最小单位，如果达到则触发。
    - `int`
    - 例：设置为 `minUnits:3`，则区域内单位 ≥3 时触发。
    - 注：可与 `maxUnits` 同时使用。
- **maxUnits**
  - 该宾语触发所满足的最大单位，如果达到则触发。
    - `int`
    - 例：设置为 `maxUnits:3`，则区域内单位 ≤3 时触发。
    - 注：可与 `minUnits` 同时使用。

### unitAdd

- **spawnUnits**
  - 生成单位。
    - `string`（`unit name`）
    - 例：`spawnUnits:tank*2,builder*1`

### teamTagDetect

- **teamTag**
  - 检测队伍标签。
    - `string`（你的队伍标签）

### teamTags

- **addTeamTags**
  - 添加队伍标签。
    - `string`（你的队伍标签）
- **removeTeamTags**
  - 移除队伍标签。
    - `string`（你的队伍标签）

### basic

- 自身没有作用，但可用作链接激活的占位符。

### info

- 自身不会被 RW 读取，可在 `Triggers` 层作注释。

### objective

- 自身没有作用，可用作 `winCondition` 为 `requiredObjectives` 时的胜利条件。

### mapText

- **text**
  - 文本内容。
    - `string`
- **text_lang**
  - 设置针对不同语言显示的文本（需要有 `text` 前提）。
    - `string`
    - 例：`text_en`
- **style**
  - 文本样式。
    - `arrow/`
- **textColor**
  - 文本颜色。
    - `green/red/blue/yellow/cyan/white/black/purple/#00000000~FFFFFFFF`
    - 例：`textColor:#5CA362CC`
    - 注：前两位是透明度。
- **textOffsetX**
  - 文本横向偏移量。
    - `float`
- **textOffsetY**
  - 文本纵向偏移量。
    - `float`
- **textSize**
  - 文本大小，数字越大字符越大。
    - `int`

### changeCredits

- **add**
  - 添加资金，可为负数，数值过大无效。
    - `int`
- **set**
  - 将资金设置在一定数量，数值过大无效。
    - `int`

### moveCamera

- 将视野强制移动到指定位置。

## 通用触发代码

- **team**
  - 队伍。
    - `string`（`-2/none/-1/0/1/2/3/4/5/6/7/8/9`）
  - 注：通常情况下必须填写，否则游戏会闪退。

- **debugMessage**
  - 在沙盒模式中开启 `debug` 模式后显示的信息。
    - `string`

- **globalMessage**
  - 全局消息。
    - `string`

- **globalMessage_lang**
  - 设置针对不同语言显示的全局消息（需要有 `globalMessage` 前提）。
    - `string`
    - 例：`globalMessage_en`

- **globalMessage_delayPerChar**
  - 全局消息弹出速度。
    - `string`（`slow`）/ `time`

- **globalMessage_textColor**
  - 全局消息颜色。
    - `string`（`green/red/blue/yellow/cyan/white/black/purple/#00000000~FFFFFFFF`）
    - 例：`globalMessage_textColor:#5CA362CC`
    - 注：前两位是透明度。

- **id**
  - 可被用来检测。
    - `string`

- **warmup**
  - 当宾语符合触发条件时，效果将根据设定时间延迟，延迟耗尽时激活。
    - `time`
  - 注：在没有激活源的情况下，`warmup` 和 `delay` 没有太大差别。

- **delay**
  - 开局或重置后触发宾语的时间。
    - `time`

- **activatedBy**
  - 检测所连接宾语的名称或 `id`，如果连接来源符合则触发。（此语句为瞬发）
    - `string`（`object name/id`）
    - 例：`activatedBy:1,2`

- **allToActivate**
  - 必须连接的所有触发条件都被激活才会触发。
    - `bool`
    - 例：
      ```yaml
      unitAdd:
        activatedBy:1,2
        allToActivate:true
        team:0
        spawnUnits:tank
      ```

- **repeatDelay**
  - 重复延迟。宾语被触发后，再次执行效果的时间（不会检查`activatedBy`，会被 `deactivatedBy` 终止）。
    - `time`

- **deactivatedBy** 
  - 检测所连接宾语的名称或 `id`，如果连接来源是激活状态，则禁止触发。（此语句为时钟检查）
    - `string`（`object name/id`）

- **alsoActivate**
  - 在宾语被触发后，触发所连接的宾语。（该语句是一次性的，建议改用 `activatedBy` 或 `deactivatedBy`）
    - `string`（`object name/id`）
    - 例：`alsoActivate:3,4`

- **resetActivationAfter**
  - 重置宾语的时间间隔。重置后，所有已触发的属性将被清除并等待下一次触发。
    - `time`

- **activateIds**
  - 同 `alsoActivate`。
    - `string`（`object name/id`）

- **whenActivatedIds**
  - 同 `activatedBy`。
    - `string`（`object name/id`）

- **showOnMap**
  - 宾语被激活后在小地图上产生标记提示。
    - `bool`

- **comment**
  - 不会被读取，充当注释作用。
    - `string`

## 单位属性附加代码

- **neutralTeam**
  - 生成中立队伍。
    - `bool`（`true/false`）

- **aggressiveTeam**
  - 生成全局敌对队伍。
    - `bool`（`true/false`）

- **spawnChance**
  - 单位生成概率。
    - `float`（`0-1`）

- **maxSpawnLimit**
  - 单位最大生成数量。
    - `int`

- **techLevel**
  - 单位的科技等级，数值超出最大等级则生成等级为一的单位。
    - `int`
    - 注：在 `damagingBorder` 和 `zoneMarker` 中代表圈的范围大小（一个科技等级为五格）。

- **gridAlign**
  - 网格对齐。
    - `bool`（`true/false`）
    - 注：对齐碰撞箱。

- **skipIfOverlapping**
  - 如果单位不属于这个地形则跳过生成。
    - `bool`（`true/false`）
    - 例：`seaFactory` 不能放在陆地或岩浆上。

- **falling**
  - 单位从空中掉下来的效果。
    - `bool`（`true/false`）
    - 注：对大多数单位生效，极少部分无效。

- **offsetX**
  - 单位生成地点偏移度（横轴）。
    - `float`

- **offsetY**
  - 单位生成地点偏移度（纵轴）。
    - `float`

- **offsetRandomXY**
  - 单位生成地点随机偏移度（横纵轴随机偏移）。
    - `float`
    - 注：目前铁锈战争沙盒模式的随机系统有严重问题，建议在普通模式下测试代码效果。

- **offsetRandomX**
  - 单位生成地点随机偏移度（横轴偏移）。
    - `float`
    - 注：目前铁锈战争沙盒模式的随机系统有严重问题，建议在普通模式下测试代码效果。

- **offsetRandomY**
  - 单位生成地点随机偏移度（纵轴偏移）。
    - `float`
    - 注：目前铁锈战争沙盒模式的随机系统有严重问题，建议在普通模式下测试代码效果。

- **offsetHeight**
  - 单位生成高度。
    - `float`

- **offsetRandomDir**
  - 单位生成方向范围随机度。
    - `float`

- **offsetDir**
  - 单位生成方向。
    - `float`