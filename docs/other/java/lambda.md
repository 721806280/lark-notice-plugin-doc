# Lambda 使用指南

Lambda 表达式是 Java 8 引入的一个新特性，它是一种函数式编程的方式，可以将函数作为方法的参数传递。Lambda 表达式本质上是一个匿名方法，它可以代替 Java 中的匿名内部类的用法，使得代码更加简洁、清晰。

## 命令式和函数式

- 命令式编程：命令 “机器” 如何去做事情(how)，这样不管你想要的是什么(what)，它都会按照你的命令实现。
- 声明式编程：告诉 “机器” 你想要的是什么(what)，让机器想出如何去做(how)。

## 什么是函数式编程？

在完成一个编程任务时，通过使用不可变的值或函数，对其进行处理，然后得到另一个值的过程。

## 函数描述符

函数式接口的抽象方法的签名基本上就是Lambda表达式的签名，这种抽象方法叫作函数描述符。

## 函数式接口，类型推断

函数式接口定义且只定义了一个抽象方法，因为抽象方法的签名可以描述Lambda表达式的签名。 函数式接口的抽象方法的签名称为函数描述符。

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

## Lambdas及函数式接口的例子

| 使用示例        | Lambda 的例子                                                           | 对应的函数式接口                                                                                          |
|-------------|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| 布尔表达式       | `(List<String> list) -> list.isEmpty()`                              | `Predicate<List<String>>`                                                                         |
| 创建对象        | `() -> new Project()`                                                | `Supplier<Project>`                                                                               |
| 消费一个对象      | `(Project p) -> System.out.println(p.getStars())`                    | `Consumer<Project>`                                                                               |
| 从一个对象中选择/提取 | `(int a, int b) -> a * b`                                            | `IntBinaryOperator`                                                                               |
| 比较两个对象      | `(Project p1, Project p2) -> p1.getStars().compareTo(p2.getStars())` | `Comparator<Project>` `BiFunction<Project,Project, Integer>`  `ToIntBiFunction<Project, Project>` |

