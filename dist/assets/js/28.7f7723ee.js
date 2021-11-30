(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{425:function(t,a,e){"use strict";e.r(a);var s=e(54),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"常用样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用样式"}},[t._v("#")]),t._v(" 常用样式")]),t._v(" "),e("h2",{attrs:{id:"重置样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重置样式"}},[t._v("#")]),t._v(" 重置样式")]),t._v(" "),e("h2",{attrs:{id:"初始化样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化样式"}},[t._v("#")]),t._v(" 初始化样式")]),t._v(" "),e("h3",{attrs:{id:"字体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字体"}},[t._v("#")]),t._v(" 字体")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('/* 移动端 */\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;\n}\n')])])]),e("h2",{attrs:{id:"功能样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能样式"}},[t._v("#")]),t._v(" 功能样式")]),t._v(" "),e("h3",{attrs:{id:"清除浮动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@mixin clearfix() {\n  &::after {\n    display: block;\n    content: "";\n    clear: both;\n  }\n}\n\n// 作为 mixin 使用\n.element {\n  @include clearfix;\n}\n')])])]),e("h3",{attrs:{id:"三角形"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三角形"}},[t._v("#")]),t._v(" 三角形")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.jiangweishan.com/tool/sanjx/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("生成工具"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"文本移除省略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文本移除省略"}},[t._v("#")]),t._v(" 文本移除省略")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// $clamp 移除行数\n@mixin textElip($clamp) {\n    display:-webkit-box;\n    overflow:hidden;\n    text-overflow:ellipsis;\n    -webkit-line-clamp:$clamp;\n    -webkit-box-orient:vertical;\n}\n\n")])])]),e("h3",{attrs:{id:"nth-child"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nth-child"}},[t._v("#")]),t._v(" nth-child")]),t._v(" "),e("p",[t._v("参考 "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"文本竖排"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文本竖排"}},[t._v("#")]),t._v(" 文本竖排")]),t._v(" "),e("blockquote",[e("p",[t._v("使用"),e("code",[t._v("writing-mode")]),t._v("属性")])]),t._v(" "),e("ul",[e("li",[t._v("vertical-rl：垂直方向自右而左的书写方式。 即top-bottom-right-left.")]),t._v(" "),e("li",[t._v("vertical-lr：垂直方向内内容从上到下，水平方向从左到右")]),t._v(" "),e("li",[t._v("lr-tb：从左向右，从上往下；")]),t._v(" "),e("li",[t._v("tb-rl：从上往下，从右向左。")])]),t._v(" "),e("h2",{attrs:{id:"兼容样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#兼容样式"}},[t._v("#")]),t._v(" 兼容样式")]),t._v(" "),e("h3",{attrs:{id:"全面屏兼容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全面屏兼容"}},[t._v("#")]),t._v(" 全面屏兼容")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 原本没有padding-bottom\n.box1 {\n    padding-bottom: constant(safe-area-inset-bottom);\n    padding-bottom: env(safe-area-inset-bottom);\n}\n// 已有padding-bottom\n.box2 {\n    padding-bottom: 3px\n    padding-bottom: constant(calc(3px + safe-area-inset-bottom));\n    padding-bottom: env(calc(3px + safe-area-inset-bottom));\n}\n")])])]),e("h3",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);a.default=r.exports}}]);