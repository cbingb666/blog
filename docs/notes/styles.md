# 常用样式

## 重置样式

## 初始化样式

### 字体

```
/* 移动端 */
body {
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
}
```

## 功能样式

### 清除浮动

```
@mixin clearfix() {
  &::after {
    display: block;
    content: "";
    clear: both;
  }
}

// 作为 mixin 使用
.element {
  @include clearfix;
}
```

### 三角形

[生成工具](https://www.jiangweishan.com/tool/sanjx/index.html)

### 文本移除省略

```
// $clamp 移除行数
@mixin textElip($clamp) {
    display:-webkit-box;
    overflow:hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp:$clamp;
    -webkit-box-orient:vertical;
}

```

### nth-child
参考 [https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child)

### 文本竖排
>使用`writing-mode`属性

- vertical-rl：垂直方向自右而左的书写方式。 即top-bottom-right-left.
- vertical-lr：垂直方向内内容从上到下，水平方向从左到右
- lr-tb：从左向右，从上往下；
- tb-rl：从上往下，从右向左。


## 兼容样式

### 全面屏兼容
```
// 原本没有padding-bottom
.box1 {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}
// 已有padding-bottom
.box2 {
    padding-bottom: 3px
    padding-bottom: constant(calc(3px + safe-area-inset-bottom));
    padding-bottom: env(calc(3px + safe-area-inset-bottom));
}
```

###
