import{r as e,c as p,a as n,e as l,F as r,b as s,d as c,o as t}from"./app.74cb0f5c.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";const o={},b=n("h1",{id:"pm2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pm2","aria-hidden":"true"},"#"),s(" pm2")],-1),i={href:"https://pm2.keymetrics.io/",target:"_blank",rel:"noopener noreferrer"},u=s("\u5B98\u7F51"),d=c(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pm2 -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8app.js\u5E94\u7528\u7A0B\u5E8F</span>
<span class="token comment"># -watch \u76D1\u542C\u5E94\u7528\u76EE\u5F55\u7684\u53D8\u5316\uFF0C\u4E00\u65E6\u53D1\u751F\u53D8\u5316\uFF0C\u81EA\u52A8\u91CD\u542F\u3002\u5982\u679C\u8981\u7CBE\u786E\u76D1\u542C\u3001\u4E0D\u89C1\u542C\u7684\u76EE\u5F55\uFF0C\u6700\u597D\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u3002</span>
<span class="token comment"># --name \u547D\u540D</span>
pm2 start app.js

<span class="token comment"># \u542F\u52A8\u7684\u6240\u6709\u7684\u5E94\u7528\u7A0B\u5E8F\u5217\u8868</span>
pm2 list

<span class="token comment"># \u663E\u793A\u5E94\u7528\u7A0B\u5E8F\u7684\u6240\u6709\u4FE1\u606F</span>
pm2 show <span class="token punctuation">[</span>app-name<span class="token punctuation">]</span>

<span class="token comment"># \u505C\u6B62\u6240\u6709\u7684\u5E94\u7528\u7A0B\u5E8F</span>
pm2 stop all

<span class="token comment"># \u505C\u6B62 id\u4E3A 0\u7684\u6307\u5B9A\u5E94\u7528\u7A0B\u5E8F</span>
pm2 stop <span class="token punctuation">[</span>app-id<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u542F\u6240\u6709\u5E94\u7528</span>
pm2 restart all

<span class="token comment"># \u5173\u95ED\u5E76\u5220\u9664\u6240\u6709\u5E94\u7528</span>
pm2 delete all

<span class="token comment"># \u5220\u9664\u6307\u5B9A\u5E94\u7528 id 0</span>
pm2 delete <span class="token punctuation">[</span>app-id<span class="token punctuation">]</span>

<span class="token comment"># \u521B\u5EFA\u5F00\u673A\u81EA\u542F\u52A8\u547D\u4EE4</span>
pm2 startup

<span class="token comment"># \u4FDD\u5B58\u5F53\u524D\u5E94\u7528\u5217\u8868</span>
<span class="token comment"># \u4FDD\u5B58\u540E\u7684\u76EE\u5F55 Successfully saved in /root/.pm2/dump.pm2</span>
pm2 save

<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D\u4FDD\u5B58\u7684\u5E94\u7528\u5217\u8868</span>
pm2 resurrect

<span class="token comment"># \u67E5\u770B\u65E5\u5FD7</span>
pm2 logs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,4);function h(k,_){const a=e("OutboundLink");return t(),p(r,null,[b,n("blockquote",null,[n("p",null,[n("a",i,[u,l(a)])])]),d],64)}var v=m(o,[["render",h]]);export{v as default};
