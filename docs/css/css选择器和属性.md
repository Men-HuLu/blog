---
title: css选择器和属性
date: "2019-6-19"
---

#### css顶层样式表由两种规则组成
1. at规则(at rule)
1. 普通规则(qualified rule)

#### at规则
##### [@charset](https://www.w3.org/TR/css-syntax-3/)

@charset 用于提示 CSS 文件使用的字符编码方式
```
@charset "utf-8";
```

##### [@import](https://www.w3.org/TR/css-cascade-4/)
除@charset不会引入
```
@import "mystyle.css";
@import url("mystyle.css");
```

##### [@media](https://www.w3.org/TR/css3-conditional/)
media query 使用规则，它能够对设备的类型进行一些判断
```
@media print {
    body { font-size: 10pt }
}

@media screen and (min-width: 35em){
  div{
    float: left;
    width: 10em;
  }
}
```

[@page](https://www.w3.org/TR/css-page-3/)
page 用于分页媒体访问网页时的表现设置，页面是一种特殊的的盒模型结构，除了页面本身，还可以设置它周围的盒。(分页媒体（例如，纸张，透明胶片，相册页面，作为打印输出模拟在计算机屏幕上显示的页面）与连续媒体的不同之处在于文档的内容被分成一个或多个离散的静态显示表面。)
```
@page {
  size: 8.5in 11in;
  margin: 10%;

  @top-left {
    content: "Hamlet";
  }
  @top-right {
    content: "Page " counter(page);
  }
}
```

[@counter-style](https://www.w3.org/TR/css-counter-styles-3/)
自定义计数器

```
@counter-style triangle {
  system: cyclic;
  symbols: ‣;
  suffix: " ";
}
```

[@key-frames](https://www.w3.org/TR/css-animations-1/)
动画关键帧
```
@keyframes diagonal-slide {
  from {
    left: 0;
    top: 0;
  }

  to {
    left: 100px;
    top: 100px;
  }
}
```

[@fontface](https://www.w3.org/TR/css-fonts-3/)
```
@font-face {
  font-family: Gentium;
  src: url(http://example.com/fonts/Gentium.woff);
}

p { font-family: Gentium, serif; }
```

[@support](https://www.w3.org/TR/css3-conditional/)
support 检查环境的特性，它与 media 比较类似。

[@namespace](https://www.w3.org/TR/css-namespaces-3/)
用于跟 XML 命名空间配合的一个规则，表示内部的 CSS选择器全都带上特定命名空间。

[@viewport](https://note.youdao.com/)
用于设置视口的一些特性，不过兼容性目前不是很好，多数时候被html 的 meta 代替。

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### 普通规则
[标准](https://www.w3.org/TR/selectors-4/)

标签类型选择器，id、class、属性和伪类，它们中只要出现一个，就构成了选择器。
![image](https://yuminjun-1257115713.cos.ap-shanghai.myqcloud.com/blog/css%E8%AF%AD%E6%B3%95.png)

![image](https://yuminjun-1257115713.cos.ap-shanghai.myqcloud.com/blog/css%E8%AF%AD%E6%B3%95%E4%BE%8B%E5%AD%90.png)

属性是由中划线、下划线、字母等组成的标识符
- CSS 范围的关键字：initial，unset，inherit，任何属性都可以的关键字。
- 字符串：比如 content 属性。
- URL：使用 url() 函数的 URL 值。
- 整数 / 实数：比如 flex 属性。
- 百分比：大部分维度都支持。
- 维度：单位的整数 / 实数，比如 width 属性。
- 颜色：比如 background-color 属性。
- 图片：比如 background-image 属性。
- 2D 位置：比如 background-position 属性。
- 函数：来自函数的值，比如 transform 属性。

css计算型函数：
1. calc()
1. max() 
1. min() 
1. clam() 
1. toggle() 
1. attr()

**参考文档:**
1. [css相关标准](https://www.w3.org/TR/?title=css)
2. [css例子](https://30-seconds.github.io/30-seconds-of-css/) 
