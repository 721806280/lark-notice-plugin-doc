import{_ as t,c as e,a2 as s,o as r}from"./chunks/framework.CcQpwaw8.js";const o="/lark-notice-plugin-doc/assets/create-test-class.RbPGFboI.gif",i="/lark-notice-plugin-doc/assets/create-test-methods.B6wzqc_G.gif",n="/lark-notice-plugin-doc/assets/create-test-method.VHVmJt8x.gif",q=JSON.parse('{"title":"Squaretest Java 单元测试生成器","description":"","frontmatter":{"version":"2.0.0"},"headers":[],"relativePath":"java/square-test.md","filePath":"java/square-test.md","lastUpdated":1733794425000}'),l={name:"java/square-test.md"};function c(p,a,d,u,h,m){return r(),e("div",null,a[0]||(a[0]=[s('<h1 id="squaretest-java-单元测试生成器" tabindex="-1">Squaretest Java 单元测试生成器 <a class="header-anchor" href="#squaretest-java-单元测试生成器" aria-label="Permalink to &quot;Squaretest Java 单元测试生成器&quot;">​</a></h1><p>IntelliJ IDEA 的 Squaretest 插件允许您自动为 Java 源类生成单元测试。 生成的测试类包含构造源类实例（如果需要）和初始化 依赖于模拟或合理的默认值。 测试类包括调用相应源方法的测试方法 并将返回值与预期值进行比较。 测试还包括 Mockito 存根； 即 when()、doAnswer() 语句和 verify() 语句。</p><h2 id="为-java-类创建测试类" tabindex="-1">为 Java 类创建测试类 <a class="header-anchor" href="#为-java-类创建测试类" aria-label="Permalink to &quot;为 Java 类创建测试类&quot;">​</a></h2><ul><li><p>选择 <strong>Squaretest | Generate Test - Ask to Confirm Mocks</strong> (Alt+Insert+Generate Test - Ask to Confirm Mocks) 为您的 Java 源类创建一个测试类。 <img src="'+o+'" alt="生成测试动图"></p></li><li><p>使用可配置的键盘快捷键：Windows 和 Linux 上的“ctrl+alt+K”或 OS X 上的“cmd+shift+L”以 Java (1.7+) 或 Groovy 生成测试类。</p></li></ul><h2 id="创建默认的测试方法" tabindex="-1">创建默认的测试方法 <a class="header-anchor" href="#创建默认的测试方法" aria-label="Permalink to &quot;创建默认的测试方法&quot;">​</a></h2><p>选择 <strong>Squaretest | 生成测试方法</strong>（Alt+Insert+生成测试方法）以查看要添加到测试类的测试方法列表。 该列表包括对每个源方法的替代流程的测试； 例如 如果源方法调用 foo.bar()，并且 bar() 可以抛出 IOException，Squaretest 将建议一个名为 testMethodName_FooThrowsIOException() 的方法； 生成的测试方法将存根 foo 以在调用 bar() 时抛出 IOException。</p><p><img src="'+i+'" alt="生成测试方法 Gif"></p><h2 id="根据建议创建测试方法" tabindex="-1">根据建议创建测试方法 <a class="header-anchor" href="#根据建议创建测试方法" aria-label="Permalink to &quot;根据建议创建测试方法&quot;">​</a></h2><p>开始输入要创建的测试方法的名称，以查看基于源类中方法的代码完成建议； 然后选择一种建议的方法来创建它。</p><p><img src="'+n+'" alt="生成测试方法 Gif"></p>',10)]))}const v=t(l,[["render",c]]);export{q as __pageData,v as default};