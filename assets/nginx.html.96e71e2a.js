import{d as n}from"./app.74cb0f5c.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=n(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><h2 id="\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55" aria-hidden="true">#</a> \u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55</h2><p><code>/etc/nginx/nginx.conf</code></p><h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx -s reload            <span class="token comment"># \u91CD\u65B0\u8F7D\u5165\u914D\u7F6E\u6587\u4EF6</span>
nginx -s reopen            <span class="token comment"># \u91CD\u542F Nginx</span>
nginx -s stop              <span class="token comment"># \u505C\u6B62 Nginx</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,5);function r(c,i){return s}var o=e(a,[["render",r]]);export{o as default};