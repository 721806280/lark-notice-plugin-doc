# Thymeleaf 模板引擎

`Spring Boot`中推荐使用`Thymeleaf`作为模板引擎，因为`Thymeleaf`提供了完美的`Spring MVC`支持，它是一个跟`Velocity`、`FreeMarker`类似的模板引擎，它可以完全替代`JSP`。相较与其他的模板引擎，它有如下三个极吸引人的特点

- `Thymeleaf` 在有网络和无网络的环境下皆可运行，支持静态和动态页面效果。
- `Thymeleaf` 提供开箱即用的特性，包括标准和 `Spring` 标准两种方言，可直接套用模板实现 `JSTL`、`OGNL` 表达式效果，并支持扩展和创建自定义方言。
- `Thymeleaf` 提供与 `Spring MVC` 完美集成的可选模块，可以快速实现表单绑定、属性编辑器、国际化等功能。

## 对象使用

### 文本国际化获取

```html
<div th:with="num=5">
    <p>1、普通获取方式：[[#{user.password.not.match}]]</p>
    <p>2、传入索引方式：[[#{user.password.retry.limit.exceed(${num})}]]</p>
</div>
```

### 获取变量方式

```html
<div>
    <p>1、获取对象中的userName属性：[[${user.userName}]]</p>
    <p>2、获取集合中的元素：[[${users[0].userName}]]</p>
    <p>3、获取Map中的元素：[[${userMap['user2'].userName}]]</p>
    <p>4、获取数组中的元素：[[${userArr[0].userName}]]</p>
</div>
```

### 处理转义文本

```html
<div th:with="html='<h3>H3标题</h3>'">
    <p>1、转义字符输出 <p th:text="${html}"></p>
    <p>2、无需字符转义 <p th:utext="${html}"></p>
</div>
```

### 链接表达式

```html
<div>
    <a th:href="@{/user/details(userId=${user.userId})}">设置单个URL参数</a>
    <a th:href="@{/user/details(userId=${user.userId},name=${user.userName})}">设置多个URL参数</a>
    <a th:href="@{/user/{userId}/details(userId=${user.userId})}">设置rest风格参数</a>
</div>
```

### 数字对象

`Thymeleaf` 主要使用 `org.thymeleaf.expression.Numbers` 这个类来处理数字，在模板中使用 `#numbers` 来表示这个对象。

```html
<div th:with="num=1000">
	1、整数格式化 
	<p>[[${#numbers.formatInteger(num,5)}]]</p>
	<p th:each="arrNum : ${#numbers.arrayFormatInteger(arr,5)}">[[${arrNum}]]</p>
	<p>[[${#numbers.listFormatInteger(list,5)}]]</p>
	<p>[[${#numbers.setFormatInteger(set,5)}]]</p>
	
	2、小数格式化
	<p>[[${#numbers.formatDecimal(10.992, 3, 2)}]]</p>
	<p th:each="arrNum : ${#numbers.arrayFormatDecimal(arr, 3, 2)}">[[${arrNum}]]</p>
	<p>[[${#numbers.listFormatDecimal(list, 3, 2)}]]</p>
	<p>[[${#numbers.setFormatDecimal(set, 3, 2)}]]</p>
	
	3、标识千位分隔符
	<p>POINT使用"."作为分隔符：[[${#numbers.formatInteger(num,5,'POINT')}]]</p>
	<p>COMMA使用","作为分隔符：[[${#numbers.formatInteger(num,5,'COMMA')}]]</p>
	<p>WHITESPACE使用" "作为分隔符：[[${#numbers.formatInteger(num,5,'WHITESPACE')}]]</p>
	
	4、货币格式化
	<p>[[${#numbers.formatCurrency(10.99)}]]</p>
	<p>arrayFormatCurrency、listFormatCurrency、setFormatCurrency和上面一样，就不演示了</p>
	
	5、百分比格式化
	<p>[[${#numbers.formatPercent(0.23456, 2, 3)}]]</p>
</div>
```

### 字符串对象

`Thymeleaf` 主要使用 `org.thymeleaf.expression.Strings` 这个类来处理字符串，在模板中使用 `#strings` 来表示这个对象。

```html
<div th:with="html='<h3>字符串对象</h3>'">
    1、toString与length方法
    <p>toString方法：[[${#strings.toString(user)}]]</p>
    <p>length方法：[[${#strings.length(user)}]]</p>

    2、非空判断与默认值处理
    <p>isEmpty方法：[[${#strings.isEmpty(user.userName)}]]</p>
    <p>defaultString方法：[[${#strings.defaultString(user.sex, '无性别')}]]</p>

    3、包含判断
    <p>contains方法：[[${#strings.contains(user.userName, '张三')}]]</p>
    <p>containsIgnoreCase方法：[[${#strings.containsIgnoreCase(user.userName, '张三')}]]</p>
    <p>startsWith方法：[[${#strings.startsWith(user.userName, '张')}]]</p>
    <p>endsWith方法：[[${#strings.endsWith(user.userName, '三')}]]</p>

    4、截取与替换
    <p>indexOf方法：[[${#strings.indexOf('abcde', 'z')}]]</p>
    <p>substring方法：[[${#strings.substring('abcde', 1, 3)}]]</p>
    <p>substringAfter方法：[[${#strings.substringAfter('abcde', 'a')}]]</p>
    <p>substringBefore方法：[[${#strings.substringBefore('abcde', 'c')}]]</p>
    <p>replace方法：[[${#strings.replace('abcde', 'c', '1')}]]</p>

    5、追加与拼接
    <p>prepend方法：[[${#strings.prepend(3, 'e')}]]</p>
    <p>append方法：[[${#strings.append('abcd', 'e')}]]</p>
    <p>concat方法：[[${#strings.concat('abcd', 'e', 'b')}]]</p>
    <p>concatReplaceNulls方法：[[${#strings.concatReplaceNulls('**', '123', null, 'abc')}]]</p>

    6、分割与连接
    <p class="text-left" th:each="array : ${#strings.arraySplit('a-b-c', '-')}">arraySplit方法：[[${array}]]</p>
    <p>listSplit方法：[[${#strings.arrayJoin(new String[]{'a','b','c'}, '-')}]]</p>
    <p>listSplit、setSplit、listJoin、setJoin和上面一样，就不演示了</p>

    7、大小写转换
    <p>toUpperCase：[[${#strings.toUpperCase('spring boot')}]]</p>
    <p>toLowerCase：[[${#strings.toLowerCase('Spring Boot')}]]</p>
    <p>capitalize：[[${#strings.capitalize('spring boot')}]]</p>
    <p>unCapitalize：[[${#strings.unCapitalize('Spring boot')}]]</p>
    <p>capitalizeWords：[[${#strings.capitalizeWords('spring boot')}]]</p>
    <p>capitalizeWords：[[${#strings.capitalizeWords('spring-boot', '-')}]]</p>

    8、其他处理
    <p>trim：[[${#strings.trim(' spring boot ')}]]</p>
    <p>abbreviate：[[${#strings.abbreviate('SpringBooot', 9)}]]</p>
    <p>randomAlphanumeric：[[${#strings.randomAlphanumeric(5)}]]</p>
</div>
```

### 日期对象

`Thymeleaf` 主要使用 `org.thymeleaf.expression.Dates` 这个类来处理日期，在模板中使用 `#dates` 来表示这个对象。

```html
<div th:with="html='<h3>日期对象</h3>'">
    1、格式化日期
    <p>[[${#dates.format(date)}]]</p>
    <p>[[${#dates.formatISO(date)}]]</p>
    <p>[[${#dates.format(date, 'yyyy-MM-dd HH:mm:ss')}]]</p>

    2、获取日期字段
    <p>获取当前的年份：[[${#dates.year(date)}]]</p>
    <p>获取当前的月份：[[${#dates.month(date)}]]</p>
    <p>获取当月的天数：[[${#dates.day(date)}]]</p>
    <p>获取当前的小时：[[${#dates.hour(date)}]]</p>
    <p>获取当前的分钟：[[${#dates.minute(date)}]]</p>
    <p>获取当前的秒数：[[${#dates.second(date)}]]</p>
    <p>获取当前的毫秒：[[${#dates.millisecond(date)}]]</p>
    <p>获取当前的月份名称：[[${#dates.monthName(date)}]]</p>
    <p>获取当前是星期几：[[${#dates.dayOfWeek(date)-1}]]</p>
</div>
```

### 数组与集合对象

更多方法可以去 `org.thymeleaf.expression.xxx` 查询相关源码。

```html
<div th:with="html='<h3>数组与集合对象</h3>'">
    Thymeleaf主要使用
    <p>org.thymeleaf.expression.Arrays</p>
    <p>org.thymeleaf.expression.Lists</p>
    <p>org.thymeleaf.expression.Maps</p>
    <p>org.thymeleaf.expression.Sets</p>
    处理数组与集合对象
</div>
```

## 常用语法

### 表达式常量

```html
<p><strong>字符串常量</strong> - <span th:text="'hello , word'"></span></p>
<p><strong>数字常量</strong> - <span th:text="2019 + 2"></span></p>
<p><strong>布尔值常量</strong> - <span th:text="${result}"></span></p>
<p><strong>空值常量</strong> - <span th:text="${result == null}"></span></p>
```

### 字符串拼接

```html
<p><strong>方法一</strong> - <span th:text="${#strings.append('abc', 'd')}"></span></p>
<p><strong>方法二</strong> - <span th:text="${#strings.concat('abc', 'd')}"></span></p>
<p><strong>方法三</strong> - <span th:text="${'abc' + 'd'}"></span></p>
<p><strong>方法四</strong> - <span th:text="'abc' + 'd'"></span></p>
<p><strong>方法五</strong> - <span th:text="abc + d"></span></p>
<p><strong>方法六</strong> - <span th:text="|abc| + |d|"></span></p>
```

### 算数运算符

```html
<p><strong>3 + 2 = </strong> <span th:text="${3 + 2}"></span></p>
<p><strong>5 - 2 = </strong> <span th:text="${5 - 2}"></span></p>
<p><strong>5 * 2 =</strong> <span th:text="${5* 2}"></span></p>
<p><strong>5 / 2 =</strong> <span th:text="5.0 / 2"></span></p>
<p><strong>5 % 2 =</strong> <span th:text="5 % 2"></span></p>
```

### 关系运算符

```html
<p><strong>1 > 1 = </strong> <span th:text="${1 gt 1}"></span></p>
<p><strong>1 < 1 = </strong> <span th:text="${1 lt 1}"></span></p>
<p><strong>1 >= 1 = </strong> <span th:text="${1 ge 1}"></span></p>
<p><strong>1 <= 1 = </strong> <span th:text="${1 le 1}"></span></p>
<p><strong>1 == 1 = </strong> <span th:text="${1 eq 1}"></span></p>
<p><strong>1 != 1 = </strong> <span th:text="${1 ne 1}"></span></p>
```

### 三目运算符

```html
<p><strong>方法一</strong> <span th:text="${1 != 1} ? |条件成立| : |条件不成立|"></span></p>
<p><strong>方法二</strong> <span th:text="${value == '指定值'} ? ${value} : |默认值|"></span></p>
<p><strong>方法三（不成立返回空）</strong> <span th:text="${1 != 1} ? |条件成立|"></span></p>
```

### 属性设置

```html
<p>1、单个属性值设置：<input type="submit" value="提交" th:attr="value=#{user.login.success}"></input></p>
<p>2、多个属性值设置：<input type="submit" value="提交" th:attr="value=#{user.login.success},class='btn btn-primary'"></input></p>
<p>3、设置单个HTML节点属性：<input type="submit" value="提交" th:value="#{user.login.success}"></input></p>
<p>4、设置多个HTML节点属性：<input type="submit" value="提交" th:value="#{user.login.success}" th:class="'btn btn-primary'"></input></p>
<p>5、属性值后面拼接：<div id="imgDiv" th:attrappend="id='-dataId'"></div></p>
<p>6、属性值前面拼接：<div id="imgDiv" th:attrprepend="id='dataId-'"></div></p>
<p>7、属性添加style样式：<div style="text-align: left;" th:styleappend="'color:red'">style样式</div></p>
<p>8、属性添加class样式：<div class="btn btn-primary btn-xs" th:classappend="'btn-rounded'">class样式</div></p>
```

### 条件判断

```html
<ul>
    <li>
        <p><strong>方法一</strong> - <span th:if="0">数字类型，如果为0，不显示</span></p>
        <p><strong>方法二</strong> - <span th:if="false">false、off、no 不显示</span></p>
        <select th:with="sex=1" th:switch="${sex}">
            <option th:case="0">男</option>
            <option th:case="1">女</option>
        </select>
    </li>
</ul>
```

### list数据迭代

```html
<table>
	<tr th:each="user : ${users}">
		<td th:text="${user.userName}"></td>
	</tr>
</table>
```

### map数据迭代

```html
<table>
    <tr th:each="map : ${userMap}">
        <td th:text="${map.key}"></td>
        <td th:text="${map.value.userName}"></td>
    </tr>
</table>
```

### 数据状态对象（自定义状态对象）

```html
<table class="table">
    <thead>
    <tr>
        <th>用户名</th>
        <th>从0开始的索引</th>
        <th>从1开始的索引</th>
        <th>数据集合大小</th>
        <th>是否第一次迭代</th>
        <th>是否最后一次迭代</th>
        <th>是否偶数次迭代</th>
        <th>是否奇数次迭代</th>
    </tr>
    </thead>
    <tbody>
    <tr th:each="user,state : ${users}">
        <td th:text="${user.userName}"></td>
        <td th:text="${state.index}"></td>
        <td th:text="${state.count}"></td>
        <td th:text="${state.size}"></td>
        <td th:text="${state.first}"></td>
        <td th:text="${state.last}"></td>
        <td th:text="${state.even}"></td>
        <td th:text="${state.odd}"></td>
    </tr>
    </tbody>
</table>
```

### 数据状态对象（默认规则 节点变量名+Stat）

```html
<table class="table">
	<thead>
	<tr>
		<th>用户名</th>
		<th>从0开始的索引</th>
		<th>从1开始的索引</th>
		<th>数据集合大小</th>
		<th>是否第一次迭代</th>
		<th>是否最后一次迭代</th>
		<th>是否偶数次迭代</th>
		<th>是否奇数次迭代</th>
	</tr>
	</thead>
	<tbody>
	<tr th:each="user : ${users}">
		<td th:text="${user.userName}"></td>
		<td th:text="${userStat.index}"></td>
		<td th:text="${userStat.count}"></td>
		<td th:text="${userStat.size}"></td>
		<td th:text="${userStat.first}"></td>
		<td th:text="${userStat.last}"></td>
		<td th:text="${userStat.even}"></td>
		<td th:text="${userStat.odd}"></td>
	</tr>
	</tbody>
</table>
```

### 星号表达式

```html
<table class="table">
    <thead>
    <tr>
        <th>用户ID</th>
        <th>用户名</th>
    </tr>
    </thead>
    <tbody>
    <tr th:each="user : ${users}" th:object="${user}">
        <td th:text="*{userId}"></td>
        <td th:text="*{userName}"></td>
    </tr>
    </tbody>
</table>
```

## 模板片段

### 定义与引用模板片段

```html
<div th:with="year=2024">
    <div th:with="result=true">
        <p class="text-danger">定义与引用模板片段（~{模板名称::选择器}）</p>
        th:insert ：  保留自己的主标签，保留th:fragment的主标签。
        <div th:insert="~{fragment/footer.html :: copy}"></div>
        th:replace ：不要自己的主标签，保留th:fragment的主标签。
        <div th:replace="~{fragment/footer.html :: copy}"></div>
        th:include ：保留自己的主标签，不要th:fragment的主标签。
        <div th:include="~{fragment/footer.html :: copy}"></div>
    </div>
</div>
```

### 选择器的基础语法

```html
<div>
    1、选择直接子节点id为footerA的div
    <p><div th:insert="~{fragment/select.html :: /div[@id='footerA']}"></div></p>
    2、选择全部子节点中id为footerB的div
    <p><div th:insert="~{fragment/select.html :: //div[@id='footerB']}"></div></p>
    3、选择class为content的span节点
    <p><div th:insert="~{fragment/select.html :: span[@class='content']}"></div></p>
    4、选择class为footerG的span（有多个），选出第一个
    <p><div th:insert="~{fragment/select.html :: //span[@class='footerG'][0]}"></div></p>
    5、选择class为footerContent并且id为footerE的span（多级筛选）
    <p><div th:insert="~{fragment/select.html :: //div[@class='footerContent']//span[@id='footerE']}"></div></p>
</div>
```

### 含有变量的片段引用

```html
<div th:with="userName='张三',deptName='技术部'">
    1、使用常量传参
    <div th:replace="~{fragment/param.html :: welcome('张三','技术部')}"></div>
    2、使用变量传参
    <div th:replace="~{fragment/param.html :: welcome(${userName},${deptName})}"></div>
    3、不传入参数情况（不会出现异常）
    <div th:replace="~{fragment/param.html :: welcome_1}"></div>
    4、不显示指定片段参数
    <div th:replace="~{fragment/param.html :: welcome_1(val1='张三', val2='技术部')}"></div>
    5、片断块引用
    <table class="table">
        <thead>
        <tr>
            <th>用户ID</th>
            <th>用户名</th>
        </tr>
        </thead>
        <tbody>
        <th:block th:each="user : ${users}">
            <tr>
                <td th:text="${user.userId}"></td>
                <td th:text="${user.userName}"></td>
            </tr>
        </th:block>
        </tbody>
    </table>
</div>
```

### 删除模板

1. 普通方法

    ```html
       <p><div th:if="false">我是当前节点<div>我是子节点</div></div></p>
    ```

2. remove删除方法（all删除包含标签和所有的子节点）

    ```html
       <table class="table">
        <thead>
        <tr th:remove="all">
            <th>用户ID</th>
            <th>用户名</th>
        </tr>
        </thead>
        <tbody>
        <th:block th:each="user : ${users}">
            <tr>
                <td th:text="${user.userId}"></td>
                <td th:text="${user.userName}"></td>
            </tr>
        </th:block>
        </tbody>
    </table>
    ```

3. remove删除方法（body不包含标记删除,但删除其所有的子节点）
   ```html
   <table class="table">
       <thead>
       <tr th:remove="body">
           <th>用户ID</th>
           <th>用户名</th>
       </tr>
       </thead>
       <tbody>
       <th:block th:each="user : ${users}">
           <tr>
               <td th:text="${user.userId}"></td>
               <td th:text="${user.userName}"></td>
           </tr>
       </th:block>
       </tbody>
   </table>
   ```
4. remove删除方法（tag包含标记的删除,但不删除它的子节点）

   ```html
   <table class="table">
       <thead>
           <tr th:remove="tag">
               <th>用户ID</th>
               <th>用户名</th>
           </tr>
       </thead>
       <tbody>
           <th:block th:each="user : ${users}">
           <tr>
               <td th:text="${user.userId}"></td>
               <td th:text="${user.userName}"></td>
           </tr>
           </th:block>
       </tbody>
   </table>
   ```
   
5. all-but-first（删除所有包含标签的孩子，除了第一个）

   ```html
   <table class="table">
       <thead>
           <tr th:remove="all-but-first">
               <th>用户ID</th>
               <th>用户名</th>
           </tr>
       </thead>
       <tbody>
           <th:block th:each="user : ${users}">
           <tr>
               <td th:text="${user.userId}"></td>
               <td th:text="${user.userName}"></td>
           </tr>
           </th:block>
       </tbody>
   </table>
   ```
   
6. none（什么也不做）

   ```html
   <table class="table">
       <thead>
           <tr th:remove="none">
               <th>用户ID</th>
               <th>用户名</th>
           </tr>
       </thead>
       <tbody>
           <th:block th:each="user : ${users}">
           <tr>
               <td th:text="${user.userId}"></td>
               <td th:text="${user.userName}"></td>
           </tr>
           </th:block>
       </tbody>
   </table>
   ```

### 模板注释

1. 注释可见
   
   ```html
   <!-- 你看的见我 -->
   ```

2. 注释不可见
   ```html
   <!--/* 你看不见我 */-->
   ```
   
## 内联语法

### 使用内联语法显示文本

```html
<div th:with="html='<h3>使用内联语法显示文本</h3>'">
	1、text标签显示
	<p><div th:text="${html}"></div></p>
	2、内联显示
	<p><div>[[${html}]]</div></p>
	3、utext标签显示
	<p><div th:utext="${html}"></div></p>
	4、内联显示
	<p><div>[(${html})]</div></p>
	5、关闭内联语法
	<p><div th:inline="none">[[${html}]]</div></p>
</div>
```

### 在javascript中使用内联语法

```html
<script th:inline="javascript">
   const userName = [[${user.userName}]]
   // alert(userName);
</script>
```

### 在css中使用内联语法

```html
<div th:with="color='red'">
   <style th:inline="css">
      .my-text{
         color: [[${color}]]
      }
   </style>
</div>
```

### 内联语法注释

```html
<script th:inline="javascript">
   <!-- test1
   function test1 {

   }
   !-->
   
   /*[+  test2
   function test2 {
   
   }
   +]*/

   /*[- test3 */
   function test3 {

   }
   /* -]*/
</script>

<style th:inline="css">
   <!-- test1
   .test1{
      color: [[${color}]]
   }
   !-->

   /*[+  test2
   .test2{
       color: [[${color}]]
   }
   +]*/

   /*[- test3 */
   .test3{
      color: [[${color}]]
   }
   /* -]*/
</style>
```

### 内联语法序列化

```html

<script th:inline="javascript">
   // javabean
   const user = {"id": 1, "name": "张三"};
   //alert(user.name);
   // list
   const users = [{"id": 1, "name": "张三"}, {"id": 2, "name": "李四"}];
   //alert(users.length);
   // map
   const map = {"user1": {"id": 1, "name": "张三"}, "user2": {"id": 1, "name": "李四"}};
   //alert(map.user1.name);
</script>
```

## 调用后台

后台代码

```java
@Service("dict")
public class DictService {
    
    @Autowired
    private ISysDictTypeService dictTypeService;

    /**
     * 根据字典类型查询字典数据信息
     * 
     * @param dictType 字典类型
     * @return 参数键值
     */
    public List<SysDictData> getType(String dictType) {
        return dictTypeService.selectDictDataByType(dictType);
    }
    
}
```

### html方式调用后台

```html
<div>
    用户状态：
   <select name="status" th:with="type=${@dict.getType('sys_normal_disable')}">
       <option value="">所有</option>
       <option th:each="dict : ${type}" th:text="${dict.dictLabel}" th:value="${dict.dictValue}"></option>
   </select>
</div>
```

### javascript方式调用后台

注意: `script` 需要添加 `th:inline="javascript"`

```html

<script th:inline="javascript">
   const disables = [[${@dict.getType('sys_normal_disable')}]];
   // alert(disables[0].dictValue);
</script>
```

## 域对象值

### Request

```java
request.setAttribute("requestParam", id);
```

```html
<p th:xxxx="${requestParam}"></p>
```

```js
var requestParam= '[[${requestParam}]]';
```

### Session

```java
session.setAttribute("sessionParam", id);
```

```html
<p th:xxxx="${session.sessionParam}"></p>
```

```js
var sessionParam = '[[${session.sessionParam}]]';
```

### Application

```java
application.setAttribute("applicationParam", id);
```

```html
<p th:xxxx="${application.applicationParam}"></p>
```

```js
var applicationParam = '[[${application.applicationParam}]]';
```

### Spring/Model

```java
modelMap.put("modelParam", id);
```

```html
<p th:xxxx="${modelParam}"></p>
```

```js
var modelParam = '[[${modelParam}]]';
```

>  取值时，推荐使用单引号或双引号包裹，避免当值为null时，前台的语法错误，如：var param = ;
