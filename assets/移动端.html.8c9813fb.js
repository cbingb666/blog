import{d as n}from"./app.74cb0f5c.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=n(`<h1 id="\u79FB\u52A8\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u7AEF" aria-hidden="true">#</a> \u79FB\u52A8\u7AEF</h1><h3 id="\u7981\u6B62\u7528\u6237\u7F29\u653E\u7A97\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62\u7528\u6237\u7F29\u653E\u7A97\u53E3" aria-hidden="true">#</a> \u7981\u6B62\u7528\u6237\u7F29\u653E\u7A97\u53E3</h3><p>\u901A\u7528</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u517C\u5BB9ios10+, \u672C\u8D28\u662F\u7981\u6B62\u624B\u52BF\u53EF\u80FD\u4F1A\u5F71\u54CD\u5176\u4ED6\u529F\u80FD\uFF0C\u9020\u6210bug</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;gesturestart&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,6);function e(p,c){return t}var l=a(s,[["render",e]]);export{l as default};
