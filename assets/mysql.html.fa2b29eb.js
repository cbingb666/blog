import{d as s}from"./app.74cb0f5c.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},e=s(`<h1 id="mysql-\u5B89\u88C5\u4E0E\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#mysql-\u5B89\u88C5\u4E0E\u914D\u7F6E" aria-hidden="true">#</a> mysql \u5B89\u88C5\u4E0E\u914D\u7F6E</h1><h2 id="\u901A\u8FC7-docker-\u5B89\u88C5-mysql8" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-docker-\u5B89\u88C5-mysql8" aria-hidden="true">#</a> \u901A\u8FC7 docker \u5B89\u88C5 mysql8</h2><ol><li>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u4ECE docker Hub \u53BB\u4E0B\u8F7D MySQL \u5B98\u65B9\u63D0\u4F9B\u7684 docker \u955C\u50CF\u3002\u9ED8\u8BA4 tag \u662F latest\u3002</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker pull mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u542F\u52A8\u5BB9\u5668</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run --name<span class="token operator">=</span><span class="token string">&#39;sky-mysql&#39;</span> -e <span class="token string">&#39;MYSQL_ROOT_PASSWORD=abcd2019&#39;</span> -e <span class="token assign-left variable">MYSQL_ROOT_HOST</span><span class="token operator">=</span>% -p <span class="token number">3306</span>:3306 -d mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u8FDB\u5165\u5BB9\u5668</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> docker <span class="token builtin class-name">exec</span> -it sky-mysql <span class="token function">bash</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u767B\u9646</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql -uroot -p
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="arm-\u67B6\u6784\u901A\u8FC7-docker-\u5B89\u88C5-mysql" tabindex="-1"><a class="header-anchor" href="#arm-\u67B6\u6784\u901A\u8FC7-docker-\u5B89\u88C5-mysql" aria-hidden="true">#</a> ARM \u67B6\u6784\u901A\u8FC7 docker \u5B89\u88C5 mysql</h2><p>\u62C9\u53D6\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker pull mysql/mysql-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u521B\u5EFA\u5E76\u542F\u52A8MySQL\u670D\u52A1\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run --name mysql -p <span class="token number">3306</span>:3306 -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> -d mysql/mysql-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u65F6\u4F7F\u7528\u5BBF\u4E3B\u673A\u8FDE\u63A5\u6CA1\u6709\u6388\u6743\u8BBF\u95EE\uFF0C\u9700\u8981\u8FDB\u5165mysql\u4FEE\u6539mysql\u8BBF\u95EE\u6743\u9650\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it mysql <span class="token function">bash</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash-4.2<span class="token comment"># mysql -u root -p 123456</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6388\u6743</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span>CREATE <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span>GRANT ALL ON *.* TO <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5237\u65B0\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539root\u7528\u6237\u5BC6\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5237\u65B0\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,27);function l(r,p){return e}var i=a(n,[["render",l]]);export{i as default};
