import{d as s}from"./app.74cb0f5c.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},e=s(`<h1 id="ssh-config" tabindex="-1"><a class="header-anchor" href="#ssh-config" aria-hidden="true">#</a> ssh config</h1><hr><h2 id="\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\uFF5E/.ssh/config
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u914D\u7F6E\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5B9E\u4F8B" aria-hidden="true">#</a> \u914D\u7F6E\u5B9E\u4F8B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Host <span class="token builtin class-name">alias</span>                      <span class="token comment"># Host alias  ssh\u522B\u540D</span>
    HostName xxx.xxx.xxx.xxx

    Port <span class="token number">22</span>

    User root

    IdentityFile ~/.ssh/id_rsa  <span class="token comment"># IdentityFile  \u8BC1\u4E66\u8DEF\u5F84</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,6);function r(i,c){return e}var t=a(n,[["render",r]]);export{t as default};
