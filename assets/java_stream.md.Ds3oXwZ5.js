import{_ as i,c as a,a2 as t,o as h}from"./chunks/framework.CcQpwaw8.js";const g=JSON.parse('{"title":"Stream 使用指南","description":"","frontmatter":{"version":"2.0.0"},"headers":[],"relativePath":"java/stream.md","filePath":"java/stream.md","lastUpdated":1733794425000}'),n={name:"java/stream.md"};function l(k,s,e,p,d,r){return h(),a("div",null,s[0]||(s[0]=[t(`<h1 id="stream-使用指南" tabindex="-1">Stream 使用指南 <a class="header-anchor" href="#stream-使用指南" aria-label="Permalink to &quot;Stream 使用指南&quot;">​</a></h1><p>Java 8 中新增了一个 Stream （流）的概念，可以更加方便、高效地处理集合数据。Stream 和传统的集合操作非常不同，它提供了一种基于声明式表达式的编程模型，可以让我们轻松地完成复杂的集合操作。</p><p>简单来说，Stream 就是一组支持特定聚合操作的元素序列。Stream 以某种形式存在于各种集合类库中，它可以用来代替传统的 for 循环遍历集合，并且可以对集合中的元素进行过滤、映射、排序等操作，最后将结果聚合成一个值。</p><h2 id="stream-特点" tabindex="-1">Stream 特点 <a class="header-anchor" href="#stream-特点" aria-label="Permalink to &quot;Stream 特点&quot;">​</a></h2><ul><li>转换：在 Stream 中，可以很方便地将一个集合转换为另一个集合，并且转换过程不会修改原有数据。</li><li>过滤：可以根据特定条件过滤集合中的元素。</li><li>映射：可以通过某个函数对集合中的元素进行映射，生成新的集合。</li><li>排序：可以根据集合中元素的某个属性进行排序。</li><li>归约：可以将集合中的所有元素归约成一个值。</li></ul><h2 id="stream-常见操作" tabindex="-1">Stream 常见操作 <a class="header-anchor" href="#stream-常见操作" aria-label="Permalink to &quot;Stream 常见操作&quot;">​</a></h2><ul><li><p>创建流（CreateStream）</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//从集合创建流</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Stream&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; stream1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Arrays.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;from&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Java&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//从数组创建流</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Stream&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; stream2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Arrays.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//使用Stream.of()创建流</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Stream&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; stream3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Stream.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//使用Stream.iterate()创建无限流</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Stream&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; stream4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Stream.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iterate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//使用Stream.generate()创建无限流</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Stream&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; stream5 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Stream.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(System</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">currentTimeMillis);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//过滤偶数并加以输出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stream2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(System.out</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">println);</span></span></code></pre></div></li><li><p>转换（Transformation）</p><p>使用 <code>map()</code> 方法将一个集合中的元素转换为另一个元素，并生成一个新的集合。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// map() 函数将字符串列表中的每个元素转换成该字符串的长度，生成一个整数列表。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Arrays.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;apple&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;banana&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;orange&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; lengths </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">length)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">collect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Collectors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div></li><li><p>过滤（Filtering）</p><p>使用 <code>filter()</code> 方法可以根据特定的条件过滤集合中的元素，只保留符合条件的元素。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// filter() 函数保留了集合中包含字母 &quot;a&quot; 的字符串，生成一个新的字符串列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Arrays.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;apple&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;banana&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;orange&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;peach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; filtered </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contains</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">collect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Collectors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div></li><li><p>映射（Mapping）</p><p>使用 <code>flatMap()</code> 方法对集合中的元素进行映射，生成一个新的集合。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// flatMap() 函数将嵌套的集合拆分成一维数组，并生成一个整数列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List&lt;List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt; numbers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Arrays.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Arrays.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Arrays.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Arrays.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; flattened </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> numbers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flatMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Collection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stream)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">collect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Collectors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div></li><li><p>排序（Sorting）</p><p>使用 <code>sorted()</code> 方法可以根据集合中元素的某个属性进行排序。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// sorted() 函数根据字符串的自然顺序对字符串列表中的元素进行排序，并生成一个新的字符串列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Arrays.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;orange&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;banana&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;apple&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; sorted </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sorted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">collect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Collectors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div></li><li><p>归约（Reduction）</p><p>使用 reduce() 方法可以将集合中的所有元素归约成一个值。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// reduce() 函数将整数列表中的所有元素求和，生成一个 Optional 类型的结果</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Arrays.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Optional&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; sum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Integer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sum);</span></span></code></pre></div></li></ul><h2 id="中间操作和收集操作" tabindex="-1">中间操作和收集操作 <a class="header-anchor" href="#中间操作和收集操作" aria-label="Permalink to &quot;中间操作和收集操作&quot;">​</a></h2><table tabindex="0"><thead><tr><th>操作</th><th>返回值类型</th><th>操作描述</th></tr></thead><tbody><tr><td><code>filter(Predicate&lt;T&gt; predicate)</code></td><td><code>Stream&lt;T&gt;</code></td><td>过滤流中不符合条件的元素</td></tr><tr><td><code>map(Function&lt;T, R&gt; mapper)</code></td><td><code>Stream&lt;R&gt;</code></td><td>将流中的元素映射为另一个类型</td></tr><tr><td><code>flatMap(Function&lt;T, Stream&lt;R&gt;&gt; mapper)</code></td><td><code>Stream&lt;R&gt;</code></td><td>将每个流元素映射为一个流，再将所有流合并成一个流</td></tr><tr><td><code>distinct()</code></td><td><code>Stream&lt;T&gt;</code></td><td>去除流中重复的元素</td></tr><tr><td><code>sorted()</code></td><td><code>Stream&lt;T&gt;</code></td><td>按升序排序流中的元素</td></tr><tr><td><code>peek(Consumer&lt;T&gt; action)</code></td><td><code>Stream&lt;T&gt;</code></td><td>对流中的元素执行操作而不改变流本身</td></tr><tr><td><code>limit(long maxSize)</code></td><td><code>Stream&lt;T&gt;</code></td><td>限制最大的元素个数</td></tr><tr><td><code>skip(long n)</code></td><td><code>Stream&lt;T&gt;</code></td><td>跳过前 n 个元素</td></tr><tr><td><code>concat(Stream&lt;T&gt; a, Stream&lt;T&gt; b)</code></td><td><code>Stream&lt;T&gt;</code></td><td>合并两个流</td></tr><tr><td><code>collect(Collector&lt;T, A, R&gt; collector)</code></td><td><code>R</code></td><td>将流中的元素收集到一个容器中，然后返回经过容器转换后的结果</td></tr><tr><td><code>count()</code></td><td><code>long</code></td><td>返回流中元素的数量</td></tr><tr><td><code>max(Comparator&lt;T&gt; comparator)</code></td><td><code>Optional&lt;T&gt;</code></td><td>根据指定的比较器返回流中的最大元素</td></tr><tr><td><code>min(Comparator&lt;T&gt; comparator)</code></td><td><code>Optional&lt;T&gt;</code></td><td>根据指定的比较器返回流中的最小元素</td></tr><tr><td><code>findFirst()</code></td><td><code>Optional&lt;T&gt;</code></td><td>返回流中的第一个元素</td></tr><tr><td><code>findAny()</code></td><td><code>Optional&lt;T&gt;</code></td><td>返回流中的任意一个元素</td></tr></tbody></table><h2 id="collectors-类的静态工厂方法" tabindex="-1">Collectors 类的静态工厂方法 <a class="header-anchor" href="#collectors-类的静态工厂方法" aria-label="Permalink to &quot;Collectors 类的静态工厂方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>返回类型</th><th>描述</th></tr></thead><tbody><tr><td><code>toList()</code></td><td><code>Collector&lt;T, ?, List&lt;T&gt;&gt;</code></td><td>将流中元素收集到一个List集合中</td></tr><tr><td><code>toSet()</code></td><td><code>Collector&lt;T, ?, Set&lt;T&gt;&gt;</code></td><td>将流中元素收集到一个Set集合中</td></tr><tr><td><code>toMap(Function&lt;? super T, ? extends K&gt; keyMapper, Function&lt;? super T, ? extends U&gt; valueMapper)</code></td><td><code>Collector&lt;T, ?, Map&lt;K,U&gt;&gt;</code></td><td>根据指定的键值映射函数将流中元素收集到一个Map集合中，如果有重复的键，则抛出IllegalStateException异常</td></tr><tr><td><code>toConcurrentMap(Function&lt;? super T, ? extends K&gt; keyMapper, Function&lt;? super T, ? extends U&gt; valueMapper)</code></td><td><code>Collector&lt;T, ?, ConcurrentMap&lt;K,U&gt;&gt;</code></td><td>根据指定的键值映射函数将流中元素收集到一个ConcurrentMap集合中，如果有重复的键，则抛出IllegalStateException异常</td></tr><tr><td><code>joining()</code></td><td><code>Collector&lt;CharSequence, ?, String&gt;</code></td><td>将流中元素拼接成一个字符串</td></tr><tr><td><code>joining(CharSequence delimiter)</code></td><td><code>Collector&lt;CharSequence, ?, String&gt;</code></td><td>将流中元素以指定的分隔符拼接成一个字符串</td></tr><tr><td><code>joining(CharSequence delimiter, CharSequence prefix, CharSequence suffix)</code></td><td><code>Collector&lt;CharSequence, ?, String&gt;</code></td><td>将流中元素以指定的分隔符、前缀和后缀拼接成一个字符串</td></tr><tr><td><code>counting()</code></td><td><code>Collector&lt;T, ?, Long&gt;</code></td><td>返回流中元素的数量</td></tr><tr><td><code>summingInt(ToIntFunction&lt;? super T&gt; mapper)</code></td><td><code>Collector&lt;T, ?, Integer&gt;</code></td><td>将流中元素经过指定函数转换后的结果求和</td></tr><tr><td><code>averagingInt(ToIntFunction&lt;? super T&gt; mapper)</code></td><td><code>Collector&lt;T, ?, Double&gt;</code></td><td>将流中元素经过指定函数转换后的结果求平均数</td></tr><tr><td><code>maxBy(Comparator&lt;? super T&gt; comparator)</code></td><td><code>Collector&lt;T, ?, Optional&lt;T&gt;&gt;</code></td><td>根据指定的比较器返回流中的最大元素</td></tr><tr><td><code>minBy(Comparator&lt;? super T&gt; comparator)</code></td><td><code>Collector&lt;T, ?, Optional&lt;T&gt;&gt;</code></td><td>根据指定的比较器返回流中的最小元素</td></tr></tbody></table>`,11)]))}const o=i(n,[["render",l]]);export{g as __pageData,o as default};