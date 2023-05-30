# Stream 使用指南

Java 8 中新增了一个 Stream （流）的概念，可以更加方便、高效地处理集合数据。Stream
和传统的集合操作非常不同，它提供了一种基于声明式表达式的编程模型，可以让我们轻松地完成复杂的集合操作。

简单来说，Stream 就是一组支持特定聚合操作的元素序列。Stream 以某种形式存在于各种集合类库中，它可以用来代替传统的 for
循环遍历集合，并且可以对集合中的元素进行过滤、映射、排序等操作，最后将结果聚合成一个值。

## Stream 特点

- 转换：在 Stream 中，可以很方便地将一个集合转换为另一个集合，并且转换过程不会修改原有数据。
- 过滤：可以根据特定条件过滤集合中的元素。
- 映射：可以通过某个函数对集合中的元素进行映射，生成新的集合。
- 排序：可以根据集合中元素的某个属性进行排序。
- 归约：可以将集合中的所有元素归约成一个值。

## Stream 常见操作

- 创建流（CreateStream）

  ```java
  //从集合创建流
  Stream<String> stream1 = Arrays.asList("hello", "world", "from", "Java").stream();
    
  //从数组创建流
  Stream<Integer> stream2 = Arrays.stream(new Integer[] { 1, 2, 3, 4, 5 });
  
  //使用Stream.of()创建流
  Stream<Double> stream3 = Stream.of(1.0, 2.0, 3.0, 4.0, 5.0);
    
  //使用Stream.iterate()创建无限流
  Stream<Integer> stream4 = Stream.iterate(1, n -> n + 1);
    
  //使用Stream.generate()创建无限流
  Stream<Long> stream5 = Stream.generate(System::currentTimeMillis);
  
  //过滤偶数并加以输出
  stream2.filter(n -> n % 2 == 0).forEach(System.out::println);
  ```

- 转换（Transformation）

  使用 `map()` 方法将一个集合中的元素转换为另一个元素，并生成一个新的集合。

  ```java
  // map() 函数将字符串列表中的每个元素转换成该字符串的长度，生成一个整数列表。
  List<String> list = Arrays.asList("apple", "banana", "orange");
  List<Integer> lengths = list.stream()
            .map(String::length)
            .collect(Collectors.toList());
  ```

- 过滤（Filtering）

  使用 `filter()` 方法可以根据特定的条件过滤集合中的元素，只保留符合条件的元素。

  ```java
  // filter() 函数保留了集合中包含字母 "a" 的字符串，生成一个新的字符串列表
  List<String> list = Arrays.asList("apple", "banana", "orange", "peach");
  List<String> filtered = list.stream()
            .filter(str -> str.contains("a"))
            .collect(Collectors.toList());
  ```

- 映射（Mapping）

  使用 `flatMap()` 方法对集合中的元素进行映射，生成一个新的集合。

  ```java
  // flatMap() 函数将嵌套的集合拆分成一维数组，并生成一个整数列表
  List<List<Integer>> numbers = Arrays.asList(
          Arrays.asList(1, 2),
          Arrays.asList(3, 4, 5),
          Arrays.asList(6, 7, 8, 9));
  List<Integer> flattened = numbers.stream()
            .flatMap(Collection::stream)
            .collect(Collectors.toList());
  ```

- 排序（Sorting）

  使用 `sorted()` 方法可以根据集合中元素的某个属性进行排序。

  ```java
  // sorted() 函数根据字符串的自然顺序对字符串列表中的元素进行排序，并生成一个新的字符串列表
  List<String> list = Arrays.asList("orange", "banana", "apple");
  List<String> sorted = list.stream()
            .sorted()
            .collect(Collectors.toList());
  ```

- 归约（Reduction）

  使用 reduce() 方法可以将集合中的所有元素归约成一个值。

  ```java
  // reduce() 函数将整数列表中的所有元素求和，生成一个 Optional 类型的结果
  List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
  Optional<Integer> sum = list.stream()
          .reduce(Integer::sum);
  ```

## 中间操作和收集操作

| 操作                                       | 返回值类型         | 操作描述                          |
|------------------------------------------|---------------|-------------------------------|
| `filter(Predicate<T> predicate)`         | `Stream<T>`   | 过滤流中不符合条件的元素                  |
| `map(Function<T, R> mapper)`             | `Stream<R>`   | 将流中的元素映射为另一个类型                |
| `flatMap(Function<T, Stream<R>> mapper)` | `Stream<R>`   | 将每个流元素映射为一个流，再将所有流合并成一个流      |
| `distinct()`                             | `Stream<T>`   | 去除流中重复的元素                     |
| `sorted()`                               | `Stream<T>`   | 按升序排序流中的元素                    |
| `peek(Consumer<T> action)`               | `Stream<T>`   | 对流中的元素执行操作而不改变流本身             |
| `limit(long maxSize)`                    | `Stream<T>`   | 限制最大的元素个数                     |
| `skip(long n)`                           | `Stream<T>`   | 跳过前 n 个元素                     |
| `concat(Stream<T> a, Stream<T> b)`       | `Stream<T>`   | 合并两个流                         |
| `collect(Collector<T, A, R> collector)`  | `R`           | 将流中的元素收集到一个容器中，然后返回经过容器转换后的结果 |
| `count()`                                | `long`        | 返回流中元素的数量                     |
| `max(Comparator<T> comparator)`          | `Optional<T>` | 根据指定的比较器返回流中的最大元素             |
| `min(Comparator<T> comparator)`          | `Optional<T>` | 根据指定的比较器返回流中的最小元素             |
| `findFirst()`                            | `Optional<T>` | 返回流中的第一个元素                    |
| `findAny()`                              | `Optional<T>` | 返回流中的任意一个元素                   |


## Collectors 类的静态工厂方法

| 方法                                                                                                          | 返回类型                                  | 描述                                                                       |
|-------------------------------------------------------------------------------------------------------------|---------------------------------------|--------------------------------------------------------------------------|
| `toList()`                                                                                                  | `Collector<T, ?, List<T>>`            | 将流中元素收集到一个List集合中                                                        |
| `toSet()`                                                                                                   | `Collector<T, ?, Set<T>>`             | 将流中元素收集到一个Set集合中                                                         |
| `toMap(Function<? super T, ? extends K> keyMapper, Function<? super T, ? extends U> valueMapper)`           | `Collector<T, ?, Map<K,U>>`           | 根据指定的键值映射函数将流中元素收集到一个Map集合中，如果有重复的键，则抛出IllegalStateException异常           |
| `toConcurrentMap(Function<? super T, ? extends K> keyMapper, Function<? super T, ? extends U> valueMapper)` | `Collector<T, ?, ConcurrentMap<K,U>>` | 根据指定的键值映射函数将流中元素收集到一个ConcurrentMap集合中，如果有重复的键，则抛出IllegalStateException异常 |
| `joining()`                                                                                                 | `Collector<CharSequence, ?, String>`  | 将流中元素拼接成一个字符串                                                            |
| `joining(CharSequence delimiter)`                                                                           | `Collector<CharSequence, ?, String>`  | 将流中元素以指定的分隔符拼接成一个字符串                                                     |
| `joining(CharSequence delimiter, CharSequence prefix, CharSequence suffix)`                                 | `Collector<CharSequence, ?, String>`  | 将流中元素以指定的分隔符、前缀和后缀拼接成一个字符串                                               |
| `counting()`                                                                                                | `Collector<T, ?, Long>`               | 返回流中元素的数量                                                                |
| `summingInt(ToIntFunction<? super T> mapper)`                                                               | `Collector<T, ?, Integer>`            | 将流中元素经过指定函数转换后的结果求和                                                      |
| `averagingInt(ToIntFunction<? super T> mapper)`                                                             | `Collector<T, ?, Double>`             | 将流中元素经过指定函数转换后的结果求平均数                                                    |
| `maxBy(Comparator<? super T> comparator)`                                                                   | `Collector<T, ?, Optional<T>>`        | 根据指定的比较器返回流中的最大元素                                                        |
| `minBy(Comparator<? super T> comparator)`                                                                   | `Collector<T, ?, Optional<T>>`        | 根据指定的比较器返回流中的最小元素                                                        |