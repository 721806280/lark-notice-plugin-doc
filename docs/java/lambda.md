# Lambda 使用指南

`Lambda` 表达式是 Java 8 引入的语法特性，用于以更简洁的方式表示函数式接口的实现。它本质上是一种匿名函数写法，常用于替代匿名内部类。

## 命令式和函数式

- 命令式编程：关注“如何实现（how）”，明确给出执行步骤。
- 声明式编程：关注“要得到什么（what）”，由框架或运行时决定具体执行方式。

## 什么是函数式编程？

函数式编程强调通过函数组合、不可变数据和表达式求值完成计算过程。

## 函数描述符

函数式接口中抽象方法的签名可以用于描述 `Lambda` 表达式的参数和返回值形式，该签名称为函数描述符。

## 函数式接口，类型推断

函数式接口有且仅有一个抽象方法。编译器可根据上下文对 `Lambda` 表达式进行类型推断，因此通常不需要显式声明完整类型信息。

## Java 8 中的常用函数式接口

| 函数式接口               | 函数描述符            | 原始类型特化                                                                                                                                                                                                   |
|---------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Predicate<T>`      | `T->boolean`     | `IntPredicate`  `LongPredicate`  `DoublePredicate`                                                                                                                                                       |
| `Consumer<T>`       | `T->void`        | `IntConsumer` `LongConsumer` `DoubleConsumer`                                                                                                                                                            |
| `Function<T,R>`     | `T->R`           | `IntFunction<R>` `IntToDoubleFunction` `IntToLongFunction` `LongFunction<R>` `LongToDoubleFunction` `LongToIntFunction` `DoubleFunction<R>` `ToIntFunction<T>` `ToDoubleFunction<T>` `ToLongFunction<T>` |
| `Supplier<T>`       | `()->T`          | `BooleanSupplier` `IntSupplier` `LongSupplier` `DoubleSupplier`                                                                                                                                          |
| `UnaryOperator<T>`  | `T->T`           | `IntUnaryOperator` `LongUnaryOperator` `DoubleUnaryOperator`                                                                                                                                             |
| `BinaryOperator<T>` | `(T,T)->T`       | `IntBinaryOperator` `LongBinaryOperator` `DoubleBinaryOperator`                                                                                                                                          |
| `BiPredicate<L,R>`  | `(L,R)->boolean` |                                                                                                                                                                                                          |
| `BiConsumer<T,U>`   | `(T,U)->void`    | `ObjIntConsumer<T>` `ObjLongConsumer<T>` `ObjDoubleConsumer<T>`                                                                                                                                          |
| `BiFunction<T,U,R>` | `(T,U)->R`       | `ToIntBiFunction<T,U>` `ToLongBiFunction<T,U>` `ToDoubleBiFunction<T,U>`                                                                                                                                 |

## Lambda 与函数式接口示例

| 使用示例        | Lambda 的例子                                                           | 对应的函数式接口                                                                                          |
|-------------|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| 布尔表达式       | `(List<String> list) -> list.isEmpty()`                              | `Predicate<List<String>>`                                                                         |
| 创建对象        | `() -> new Project()`                                                | `Supplier<Project>`                                                                               |
| 消费一个对象      | `(Project p) -> System.out.println(p.getStars())`                    | `Consumer<Project>`                                                                               |
| 从一个对象中选择/提取 | `(int a, int b) -> a * b`                                            | `IntBinaryOperator`                                                                               |
| 比较两个对象      | `(Project p1, Project p2) -> p1.getStars().compareTo(p2.getStars())` | `Comparator<Project>` `BiFunction<Project,Project, Integer>`  `ToIntBiFunction<Project, Project>` |
