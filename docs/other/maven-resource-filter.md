# Maven 资源文件占位符使用

Maven 官方文档：

https://maven.apache.org/plugins/maven-resources-plugin/examples/filter.html

## 简介

Maven 支持在处理资源文件时替换文件中的占位符。常见形式包括文本文件中的 `${...}`，以及部分 `yml` 文件中使用的 `@...@`。

这些占位符对应的值可以来自系统属性、项目属性、过滤器资源或命令行参数。

## 使用方法

使用前，需要先开启 `resources` 过滤。例如，以下配置会对 `src/main/resources` 路径下的文件启用过滤：

```xml
<project>
    ...
    <build>
        <!-- 如果未配置 resource，application.yaml 中的 @@ 占位符将无法读取 pom 中的属性 -->
        <resources>
            <resource>
                <filtering>true</filtering>
                <directory>src/main/resources</directory>
            </resource>
        </resources>
        ...
    </build>
    ...
</project>

```

## 注意事项

资源过滤可能会破坏二进制文件。如果目标目录中包含二进制文件，可通过以下两种方式规避。`jpg`、`jpeg`、`gif`、`bmp` 和 `png` 类型文件默认会被忽略，通常无需额外处理。

### 第一种方法

在 `maven-resources-plugin` 中配置需要排除的文件后缀名：

  ```xml
  <project>
      ...
      <build>
          <plugins>
              <plugin>
                  <groupId>org.apache.maven.plugins</groupId>
                  <artifactId>maven-resources-plugin</artifactId>
                  <version>3.3.0</version>
                  <configuration>
                      ...
                      <nonFilteredFileExtensions>
                          <nonFilteredFileExtension>pdf</nonFilteredFileExtension>
                          <nonFilteredFileExtension>swf</nonFilteredFileExtension>
                      </nonFilteredFileExtensions>
                      ...
                  </configuration>
              </plugin>
          </plugins>
          ...
      </build>
      ...
  </project>
  ```

### 第二种方法

在 `build.resources` 中配置多个 `resource`。在开启 `filtering` 的 `resource` 中仅处理文本资源，在关闭 `filtering` 的 `resource` 中包含需要原样复制的文件：

  ```xml
  <project>
      ...
      <build>
          <!-- 如果未配置 resource，application.yaml 中的 @@ 占位符将无法读取 pom 中的属性 -->
          <resources>
              <resource>
                  <filtering>true</filtering>
                  <directory>src/main/resources</directory>
                  <includes>
                      <include>**/*.yml</include>
                      <include>**/*.yaml</include>
                  </includes>
              </resource>
              <resource>
                  <filtering>false</filtering>
                  <directory>src/main/resources</directory>
                  <excludes>
                      <exclude>**/*.yml</exclude>
                      <exclude>**/*.yaml</exclude>
                  </excludes>
              </resource>
          </resources>
          ...
      </build>
      ...
  </project>
  ```
