import{d as s}from"./app.74cb0f5c.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=s(`<h1 id="git-ssh-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#git-ssh-\u914D\u7F6E" aria-hidden="true">#</a> git ssh \u914D\u7F6E</h1><h2 id="git-\u591A\u8D26\u53F7\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#git-\u591A\u8D26\u53F7\u914D\u7F6E" aria-hidden="true">#</a> git \u591A\u8D26\u53F7\u914D\u7F6E</h2><blockquote><p>\u6211\u4EEC\u901A\u5E38\u4F1A\u6709\u4E2A\u4EBA and \u516C\u53F8\u5404\u7528\u4E00\u4E2A git \u8D26\u53F7\uFF0C\u5728 ssh \u8FDE\u63A5\u4E2D\u6211\u4EEC\u9700\u8981\u591A\u4E24\u4E2A\u8D26\u53F7\u914D\u7F6E\u4E24\u4EFD ssh \u5BC6\u94A5\uFF0C\u5E76\u4E14\u914D\u7F6E\u4E24\u4EFD<code>user.name</code>and<code>user.email</code></p></blockquote><h3 id="\u751F\u6210-ssh-\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210-ssh-\u5BC6\u94A5" aria-hidden="true">#</a> \u751F\u6210 ssh \u5BC6\u94A5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t ed25519 -C <span class="token string">&quot;email@example.com&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol><li><p>\u63D0\u793A<code>Enter file in which to save the key</code>\u65F6\uFF0C\u8BF7\u8F93\u5165\u4F60\u7684\u5BC6\u94A5\u6587\u4EF6\u547D\u540D\uFF0C\u5982: <code>github_self</code> or <code>gitlab_company</code></p></li><li><p>\u63A5\u4E0B\u6765\u4E00\u8DEF<code>enter</code>\u5C31\u53EF\u4EE5\u4E86</p></li><li><p>\u590D\u5236\u4F60\u516C\u94A5\u53BB git \u4ED3\u5E93\u914D\u7F6E</p></li></ol><h3 id="\u914D\u7F6E-ssh-config" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-ssh-config" aria-hidden="true">#</a> \u914D\u7F6E.ssh/config</h3><blockquote><p>\u914D\u7F6E\u6B64\u6587\u4EF6\u662F\u4E3A\u4E86\u8BA9 ssh \u80FD\u591F\u6839\u636E\u4E0D\u540C hosts \u53BB\u4F7F\u7528\u4E0D\u540C\u7684\u5BC6\u94A5</p></blockquote><div class="language-config ext-config line-numbers-mode"><pre class="language-config"><code># \u57DF\u540D\u522B\u540D
Host github.com
# \u57DF\u540D
HostName github.com
User github
# \u9996\u9009\u8BA4\u8BC1\u65B9\u5F0F \u516C\u94A5
Preferredauthentications publickey
# \u8EAB\u4EFD\u6587\u4EF6
IdentityFile ~/.ssh/github_self

# \u57DF\u540D\u522B\u540D
Host gitlab.company.com
# \u57DF\u540D
HostName gitlab.company.com
User gitlab
# \u9996\u9009\u8BA4\u8BC1\u65B9\u5F0F \u516C\u94A5
Preferredauthentications publickey
# \u8EAB\u4EFD\u6587\u4EF6
IdentityFile ~/.ssh/gitlab_company
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,9);function i(r,c){return a}var p=n(e,[["render",i]]);export{p as default};
