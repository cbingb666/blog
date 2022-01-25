import{r as i,c as l,a as e,e as r,F as t,d as n,b as a,o as c}from"./app.74cb0f5c.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const o={},b=n(`<h1 id="\u5E38\u7528\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u6837\u5F0F" aria-hidden="true">#</a> \u5E38\u7528\u6837\u5F0F</h1><h2 id="\u91CD\u7F6E\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7F6E\u6837\u5F0F" aria-hidden="true">#</a> \u91CD\u7F6E\u6837\u5F0F</h2><h2 id="\u521D\u59CB\u5316\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u6837\u5F0F" aria-hidden="true">#</a> \u521D\u59CB\u5316\u6837\u5F0F</h2><h3 id="\u5B57\u4F53" tabindex="-1"><a class="header-anchor" href="#\u5B57\u4F53" aria-hidden="true">#</a> \u5B57\u4F53</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* \u79FB\u52A8\u7AEF */
body {
    font-family: -apple-system, BlinkMacSystemFont, &quot;PingFang SC&quot;,&quot;Helvetica Neue&quot;,STHeiti,&quot;Microsoft Yahei&quot;,Tahoma,Simsun,sans-serif;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u529F\u80FD\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u6837\u5F0F" aria-hidden="true">#</a> \u529F\u80FD\u6837\u5F0F</h2><h3 id="\u6E05\u9664\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u6D6E\u52A8" aria-hidden="true">#</a> \u6E05\u9664\u6D6E\u52A8</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@mixin clearfix() {
  &amp;::after {
    display: block;
    content: &quot;&quot;;
    clear: both;
  }
}

// \u4F5C\u4E3A mixin \u4F7F\u7528
.element {
  @include clearfix;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u4E09\u89D2\u5F62" tabindex="-1"><a class="header-anchor" href="#\u4E09\u89D2\u5F62" aria-hidden="true">#</a> \u4E09\u89D2\u5F62</h3>`,9),p={href:"https://www.jiangweishan.com/tool/sanjx/index.html",target:"_blank",rel:"noopener noreferrer"},h=a("\u751F\u6210\u5DE5\u5177"),u=n(`<h3 id="\u6587\u672C\u79FB\u9664\u7701\u7565" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u79FB\u9664\u7701\u7565" aria-hidden="true">#</a> \u6587\u672C\u79FB\u9664\u7701\u7565</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// $clamp \u79FB\u9664\u884C\u6570
@mixin textElip($clamp) {
    display:-webkit-box;
    overflow:hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp:$clamp;
    -webkit-box-orient:vertical;
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="nth-child" tabindex="-1"><a class="header-anchor" href="#nth-child" aria-hidden="true">#</a> nth-child</h3>`,3),m=a("\u53C2\u8003 "),x={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child",target:"_blank",rel:"noopener noreferrer"},f=a("https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child"),g=n(`<h3 id="\u6587\u672C\u7AD6\u6392" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u7AD6\u6392" aria-hidden="true">#</a> \u6587\u672C\u7AD6\u6392</h3><blockquote><p>\u4F7F\u7528<code>writing-mode</code>\u5C5E\u6027</p></blockquote><ul><li>vertical-rl\uFF1A\u5782\u76F4\u65B9\u5411\u81EA\u53F3\u800C\u5DE6\u7684\u4E66\u5199\u65B9\u5F0F\u3002 \u5373top-bottom-right-left.</li><li>vertical-lr\uFF1A\u5782\u76F4\u65B9\u5411\u5185\u5185\u5BB9\u4ECE\u4E0A\u5230\u4E0B\uFF0C\u6C34\u5E73\u65B9\u5411\u4ECE\u5DE6\u5230\u53F3</li><li>lr-tb\uFF1A\u4ECE\u5DE6\u5411\u53F3\uFF0C\u4ECE\u4E0A\u5F80\u4E0B\uFF1B</li><li>tb-rl\uFF1A\u4ECE\u4E0A\u5F80\u4E0B\uFF0C\u4ECE\u53F3\u5411\u5DE6\u3002</li></ul><h2 id="\u517C\u5BB9\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6837\u5F0F" aria-hidden="true">#</a> \u517C\u5BB9\u6837\u5F0F</h2><h3 id="\u5168\u9762\u5C4F\u517C\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5168\u9762\u5C4F\u517C\u5BB9" aria-hidden="true">#</a> \u5168\u9762\u5C4F\u517C\u5BB9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u539F\u672C\u6CA1\u6709padding-bottom
.box1 {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}
// \u5DF2\u6709padding-bottom
.box2 {
    padding-bottom: 3px
    padding-bottom: constant(calc(3px + safe-area-inset-bottom));
    padding-bottom: env(calc(3px + safe-area-inset-bottom));
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,7);function _(v,k){const s=i("OutboundLink");return c(),l(t,null,[b,e("p",null,[e("a",p,[h,r(s)])]),u,e("p",null,[m,e("a",x,[f,r(s)])]),g],64)}var S=d(o,[["render",_]]);export{S as default};
