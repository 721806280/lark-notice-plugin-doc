import{_ as d,c as e,a2 as o,o as a}from"./chunks/framework.CcQpwaw8.js";const h=JSON.parse('{"title":"Lambda 使用指南","description":"","frontmatter":{"version":"2.0.0"},"headers":[],"relativePath":"java/lambda.md","filePath":"java/lambda.md","lastUpdated":1733794425000}'),c={name:"java/lambda.md"};function r(n,t,l,i,u,g){return a(),e("div",null,t[0]||(t[0]=[o('<h1 id="lambda-使用指南" tabindex="-1">Lambda 使用指南 <a class="header-anchor" href="#lambda-使用指南" aria-label="Permalink to &quot;Lambda 使用指南&quot;">​</a></h1><p>Lambda 表达式是 Java 8 引入的一个新特性，它是一种函数式编程的方式，可以将函数作为方法的参数传递。Lambda 表达式本质上是一个匿名方法，它可以代替 Java 中的匿名内部类的用法，使得代码更加简洁、清晰。</p><h2 id="命令式和函数式" tabindex="-1">命令式和函数式 <a class="header-anchor" href="#命令式和函数式" aria-label="Permalink to &quot;命令式和函数式&quot;">​</a></h2><ul><li>命令式编程：命令 “机器” 如何去做事情(how)，这样不管你想要的是什么(what)，它都会按照你的命令实现。</li><li>声明式编程：告诉 “机器” 你想要的是什么(what)，让机器想出如何去做(how)。</li></ul><h2 id="什么是函数式编程" tabindex="-1">什么是函数式编程？ <a class="header-anchor" href="#什么是函数式编程" aria-label="Permalink to &quot;什么是函数式编程？&quot;">​</a></h2><p>在完成一个编程任务时，通过使用不可变的值或函数，对其进行处理，然后得到另一个值的过程。</p><h2 id="函数描述符" tabindex="-1">函数描述符 <a class="header-anchor" href="#函数描述符" aria-label="Permalink to &quot;函数描述符&quot;">​</a></h2><p>函数式接口的抽象方法的签名基本上就是Lambda表达式的签名，这种抽象方法叫作函数描述符。</p><h2 id="函数式接口-类型推断" tabindex="-1">函数式接口，类型推断 <a class="header-anchor" href="#函数式接口-类型推断" aria-label="Permalink to &quot;函数式接口，类型推断&quot;">​</a></h2><p>函数式接口定义且只定义了一个抽象方法，因为抽象方法的签名可以描述Lambda表达式的签名。 函数式接口的抽象方法的签名称为函数描述符。</p><h2 id="java-8-中的常用函数式接口" tabindex="-1">Java 8 中的常用函数式接口 <a class="header-anchor" href="#java-8-中的常用函数式接口" aria-label="Permalink to &quot;Java 8 中的常用函数式接口&quot;">​</a></h2><table tabindex="0"><thead><tr><th>函数式接口</th><th>函数描述符</th><th>原始类型特化</th></tr></thead><tbody><tr><td><code>Predicate&lt;T&gt;</code></td><td><code>T-&gt;boolean</code></td><td><code>IntPredicate</code> <code>LongPredicate</code> <code>DoublePredicate</code></td></tr><tr><td><code>Consumer&lt;T&gt;</code></td><td><code>T-&gt;void</code></td><td><code>IntConsumer</code> <code>LongConsumer</code> <code>DoubleConsumer</code></td></tr><tr><td><code>Function&lt;T,R&gt;</code></td><td><code>T-&gt;R</code></td><td><code>IntFunction&lt;R&gt;</code> <code>IntToDoubleFunction</code> <code>IntToLongFunction</code> <code>LongFunction&lt;R&gt;</code> <code>LongToDoubleFunction</code> <code>LongToIntFunction</code> <code>DoubleFunction&lt;R&gt;</code> <code>ToIntFunction&lt;T&gt;</code> <code>ToDoubleFunction&lt;T&gt;</code> <code>ToLongFunction&lt;T&gt;</code></td></tr><tr><td><code>Supplier&lt;T&gt;</code></td><td><code>()-&gt;T</code></td><td><code>BooleanSupplier</code> <code>IntSupplier</code> <code>LongSupplier</code> <code>DoubleSupplier</code></td></tr><tr><td><code>UnaryOperator&lt;T&gt;</code></td><td><code>T-&gt;T</code></td><td><code>IntUnaryOperator</code> <code>LongUnaryOperator</code> <code>DoubleUnaryOperator</code></td></tr><tr><td><code>BinaryOperator&lt;T&gt;</code></td><td><code>(T,T)-&gt;T</code></td><td><code>IntBinaryOperator</code> <code>LongBinaryOperator</code> <code>DoubleBinaryOperator</code></td></tr><tr><td><code>BiPredicate&lt;L,R&gt;</code></td><td><code>(L,R)-&gt;boolean</code></td><td></td></tr><tr><td><code>BiConsumer&lt;T,U&gt;</code></td><td><code>(T,U)-&gt;void</code></td><td><code>ObjIntConsumer&lt;T&gt;</code> <code>ObjLongConsumer&lt;T&gt;</code> <code>ObjDoubleConsumer&lt;T&gt;</code></td></tr><tr><td><code>BiFunction&lt;T,U,R&gt;</code></td><td><code>(T,U)-&gt;R</code></td><td><code>ToIntBiFunction&lt;T,U&gt;</code> <code>ToLongBiFunction&lt;T,U&gt;</code> <code>ToDoubleBiFunction&lt;T,U&gt;</code></td></tr></tbody></table><h2 id="lambdas及函数式接口的例子" tabindex="-1">Lambdas及函数式接口的例子 <a class="header-anchor" href="#lambdas及函数式接口的例子" aria-label="Permalink to &quot;Lambdas及函数式接口的例子&quot;">​</a></h2><table tabindex="0"><thead><tr><th>使用示例</th><th>Lambda 的例子</th><th>对应的函数式接口</th></tr></thead><tbody><tr><td>布尔表达式</td><td><code>(List&lt;String&gt; list) -&gt; list.isEmpty()</code></td><td><code>Predicate&lt;List&lt;String&gt;&gt;</code></td></tr><tr><td>创建对象</td><td><code>() -&gt; new Project()</code></td><td><code>Supplier&lt;Project&gt;</code></td></tr><tr><td>消费一个对象</td><td><code>(Project p) -&gt; System.out.println(p.getStars())</code></td><td><code>Consumer&lt;Project&gt;</code></td></tr><tr><td>从一个对象中选择/提取</td><td><code>(int a, int b) -&gt; a * b</code></td><td><code>IntBinaryOperator</code></td></tr><tr><td>比较两个对象</td><td><code>(Project p1, Project p2) -&gt; p1.getStars().compareTo(p2.getStars())</code></td><td><code>Comparator&lt;Project&gt;</code> <code>BiFunction&lt;Project,Project, Integer&gt;</code> <code>ToIntBiFunction&lt;Project, Project&gt;</code></td></tr></tbody></table>',14)]))}const s=d(c,[["render",r]]);export{h as __pageData,s as default};