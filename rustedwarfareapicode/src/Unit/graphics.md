---
outline: deep
---

# **[graphics]图像组**

### image
#### image-代码简介
代码:image 中文释义:图像 类型:字符型
::: danger
如果需要隐藏单位的图像请使用空白透明的图像替代。<br>
请勿直接忽略此项，会直接报错导致此单位代码无法加载。
:::
::: warning
铁锈战争支持多种图片格式，如：jpg,png,bmp...等，但也有一部分的格式并不支持，如webp这种的。<br>
尽量使用png格式的图片也许不失为一个好的选择。
:::

#### image-用法
填写图片文件或图片文件的路径，图片文件将作为单位的主体图像。

::: tip
路径可使用相对路径或绝对路径。<br>
绝对路径中的根目录是以模组包内的首层目录为根目录的。<br>
相对路径则是以ini代码文件的目录为起始目录。<br>
图片和代码在同一目录下直接填写路径的用法相当于使用了相对路径。<br>
此方法基本适用于[graphics]组内所以需要引用图像文件的地方。
:::

#### image-示例
```ini
[graphics]
image: ROOT:\124\255\tank.png # 绝对路径

[graphics]
image: \124\255\tank.png # 相对路径

```

### image_back
#### image_back-代码简介
代码:image_back 中文释义:背景图像 类型:字符型

#### image_back-用法
填写图片文件或图片文件的路径，图片文件将作为单位的背景图像。

::: tip
在单位后面后面绘制的图像，不随单位转动。<br>
如无需要可以选择不填，可以作为单位角标和工厂底图使用。
:::

#### image_back-示例
```ini
[graphics]
image_back: ROOT:\124\255\background.png # 绝对路径

[graphics]
image_back: \124\255\background.png # 相对路径
```

### image_wreak
#### image_wreak-代码简介
代码:image_wreak 中文释义:死亡图像 类型:字符型

#### image_wreak-用法
填写图片文件或图片文件的路径，图片文件将作为单位的死亡图像。

::: tip
作为在单位后面死亡后绘制的图像。<br>
不填写此项不会影响代码的运行，同时可以使用NONE作为路径名将表示没有任何图像。
:::

::: info
如果不填死亡图像，默认将以单位的主体图像作为死亡图像使用。
:::

#### image_wreak-示例
```ini
[graphics]
image_wreak: ROOT:\124\255\image_wreak.png # 绝对路径

[graphics]
image_wreak: \124\255\image_wreak.png # 相对路径

[graphics]
image_wreak: NONE
```

### image_shield
#### image_shield-代码简介
代码:image_shield 中文释义:护盾图像 类型:字符型

#### image_shield-用法
填写图片文件或图片文件的路径，图片文件将作为单位的护盾图像。

::: tip
作为在单位的护盾所绘制的图像。<br>
本项仅作为自定义护盾图像使用，如设置护盾且未填此项时将使用默认护盾。<br>
不填写此项不会影响代码的运行，同时可以使用NONE作为路径名将表示没有任何图像。
:::

#### image_shield-示例
```ini
[graphics]
image_shield: ROOT:\124\255\image_shield.png # 绝对路径

[graphics]
image_shield: \124\255\image_shield.png # 相对路径

[graphics]
image_shield: NONE
```

