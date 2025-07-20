# MyBatisCodeHelperPro Crack

## 准备工作
- [Jar反编译](https://www.decompiler.com)  [Jadx](https://github.com/skylot/jadx) [Cfr](https://github.com/leibnitz27/cfr)
- [MyBatisCodeHelperPro 插件包](https://plugins.jetbrains.com/plugin/9837-mybatiscodehelperpro/versions/stable)

## 开始处理

### 1. 反编译

> 1. 反编译Jar包
> 2. 使用IDEA编辑器打开编译包
> 3. 全局检索关键词 TUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FDZzUyUjExV0h1MysvNUV2WnhkS0l2a3ovekpnS2VNUUhNLytMVkxSZS9zWUpFQlUxbUUrODc3MmJJckk4UThscldqSHc5cmVjQ1RWVVhXUnhWYXBndk1HYTZ3KzU4STZwYXdSaFhwZDBrRkhUY2xxeUZGWFpoS3ZiQUtoblphRGNuZkJtSkhObTQwR0JFTGpCTmx5MXpha2FIblFmUzF0QlhaSGQwOUV0c2VRSURBUUFC
> 4. 正式版类名以及方法名称都会被混淆，反编译后细心查找，示例如下:

```java
package com.ccnode.codegenerator.validate.utils;

import com.ccnode.codegenerator.validate.response.ValidateNewResultData;
import com.google.gson.Gson;
import java.io.UnsupportedEncodingException;
import java.security.interfaces.RSAPublicKey;
import java.util.Base64;
import kotlin.text.Charsets;

public class RsaUtils {
    private static Gson gson = new Gson();

    public static ValidateNewResultData fromEncrptData(String encrptString) {
        Object var1 = null;

        byte[] res;
        try {
            res = RSAEncrypt.decrypt(RSAEncrypt.loadPublicKeyByStr(new String(Base64.getDecoder().decode("TUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FDZzUyUjExV0h1MysvNUV2WnhkS0l2a3ovekpnS2VNUUhNLytMVkxSZS9zWUpFQlUxbUUrODc3MmJJckk4UThscldqSHc5cmVjQ1RWVVhXUnhWYXBndk1HYTZ3KzU4STZwYXdSaFhwZDBrRkhUY2xxeUZGWFpoS3ZiQUtoblphRGNuZkJtSkhObTQwR0JFTGpCTmx5MXpha2FIblFmUzF0QlhaSGQwOUV0c2VRSURBUUFC"), Charsets.UTF_8)), Base64.getDecoder().decode(encrptString));
        } catch (MyException var7) {
            res = RSAEncrypt.decrypt((RSAPublicKey)(new MyPublicKey()), Base64.getDecoder().decode(encrptString));
        }

        ValidateNewResultData data = null;

        String json;
        try {
            json = new String(res, "UTF-8");
        } catch (UnsupportedEncodingException var6) {
            throw new RuntimeException(var6);
        }

        try {
            data = (ValidateNewResultData)gson.fromJson(json, ValidateNewResultData.class);
            return data;
        } catch (Exception var5) {
            throw new RuntimeException("gson catch exception, the json string is" + json, var5);
        }
    }
}
```

### 2. 添加依赖

```xml
<!-- https://mvnrepository.com/artifact/org.javassist/javassist -->
<dependency>
    <groupId>org.javassist</groupId>
    <artifactId>javassist</artifactId>
    <version>3.30.2-GA</version>
</dependency>
```

> 注: 反编译后找到实际的全限定类名，以及方法名称后替换。

```java
import javassist.*;
import org.springframework.lang.NonNull;

import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.stream.Stream;

/**
 * MyBatisCodeHelperProCrack
 *
 * @author xm.z
 */
public class MyBatisCodeHelperProCrack {

    /**
     * 插件名称，用于构建查找路径。
     * 通常对应插件存放的主目录名。
     */
    private static final String TARGET_CLASS = "com.ccnode.codegenerator.validate.utils.RsaUtils";

    /**
     * 要修改的方法名。
     * 该方法将被替换为自定义逻辑。
     */
    private static final String METHOD_NAME = "fromEncrptData";

    /**
     * 替换后的方法体内容。
     * 使用 Javassist 语法，返回伪造的授权信息。
     */
    private static final String METHOD_BODY = "return (com.ccnode.codegenerator.validate.response.ValidateNewResultData)gson.fromJson($1,com.ccnode.codegenerator.validate.response.ValidateNewResultData.class);";

    public static void main(String[] args) throws FileNotFoundException {
        try {
            File jarFile = findMatchingJar();
            File modifiedClassFile = modifyTargetClass(jarFile);
            updateJarFile(jarFile, modifiedClassFile);
            cleanupTempDirectory(jarFile);
        } catch (Exception e) {
            System.err.println("❌ 程序异常: " + e.getMessage());
        }
    }

    /**
     * 查找匹配的 JAR 文件
     */
    private static File findMatchingJar() throws Exception {
        String userHome = System.getProperty("user.home");
        Path basePath = Paths.get(userHome, "Downloads", PLUGIN_NAME, "lib");
        if (!Files.exists(basePath) || !Files.isDirectory(basePath)) {
            throw new FileNotFoundException("目录不存在: " + basePath);
        }

        try (Stream<Path> stream = Files.list(basePath)) {
            return stream
                    .filter(path -> path.getFileName().toString().contains(PLUGIN_NAME) && path.toString().endsWith(".jar"))
                    .findFirst()
                    .map(Path::toFile)
                    .orElseThrow(() -> new FileNotFoundException("未找到匹配的 JAR 文件"));
        }
    }

    /**
     * 修改目标类的方法
     */
    private static File modifyTargetClass(File jarFile) throws Exception {
        String outputDirPath = Paths.get(jarFile.getParent()).toString();
        Path outputDir = Paths.get(outputDirPath);

        if (Files.exists(outputDir)) {
            deleteDirectoryRecursively(outputDir.toFile());
        }

        if (!Files.exists(outputDir) && !Files.createDirectory(outputDir).isAbsolute()) {
            throw new IOException("❌ 创建目录失败: " + outputDir);
        }

        ClassPool pool = ClassPool.getDefault();
        pool.appendClassPath(jarFile.getAbsolutePath());

        CtClass ctClass = null;
        try {
            ctClass = pool.get(TARGET_CLASS);
            CtMethod method = ctClass.getDeclaredMethod(METHOD_NAME, new CtClass[]{pool.get("java.lang.String")});
            method.setBody(METHOD_BODY);
            ctClass.writeFile(outputDirPath);

            String modifiedClassPath = outputDirPath + File.separator + TARGET_CLASS.replace('.', File.separatorChar) + ".class";
            File modifiedClassFile = new File(modifiedClassPath);

            if (!modifiedClassFile.exists()) {
                throw new FileNotFoundException("❌ 修改后的类文件未生成: " + modifiedClassPath);
            }

            System.out.println("✅ 类文件已修改并保存至: " + modifiedClassPath);
            return modifiedClassFile;
        } finally {
            // 释放 CtClass 资源
            if (ctClass != null) {
                ctClass.detach();
            }
        }
    }

    /**
     * 更新 JAR 文件
     */
    private static void updateJarFile(File jarFile, File modifiedClassFile) throws Exception {
        File directory = jarFile.getParentFile();
        String classPath = directory.toPath().relativize(modifiedClassFile.toPath()).toString();

        ProcessBuilder pb = new ProcessBuilder("jar", "uvf", jarFile.getName(), classPath);
        pb.redirectErrorStream(true);
        pb.directory(directory);

        System.out.println("🔧 正在更新 JAR 文件...");
        Process process = pb.start();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(" | " + line);
            }
        }

        int exitCode = process.waitFor();
        if (exitCode == 0) {
            System.out.println("✅ JAR 文件更新成功！");
        } else {
            System.err.println("❌ JAR 文件更新失败，退出码: " + exitCode);
        }
    }

    /**
     * 清理临时目录
     */
    private static void cleanupTempDirectory(File jarFile) throws IOException {
        File tempDir = new File(Paths.get(jarFile.getParent()).toAbsolutePath().toString());

        if (tempDir.exists()) {
            deleteDirectoryRecursively(tempDir);
        }
    }

    /**
     * 递归删除目录
     */
    private static void deleteDirectoryRecursively(@NonNull File directory) throws IOException {
        // 构建 com 目录路径
        Path comDir = directory.toPath().resolve("com");
        if (Files.isDirectory(comDir)) {
            System.out.println("🔧 正在删除 com 目录: " + comDir);

            // 使用 try-with-resources 包裹 Files.walk() 生成的 Stream
            try (Stream<Path> walkStream = Files.walk(comDir)) {
                walkStream.sorted(Comparator.reverseOrder()).forEach(path -> {
                    try {
                        Files.delete(path);
                        System.out.println("🗑️ 删除: " + path);
                    } catch (IOException e) {
                        System.err.println("❌ 删除失败: " + path + "，原因: " + e.getMessage());
                    }
                });
            }
        }
    }
}
```

### 3. 打包安装
> 1. 将最终修改后的目录压缩为ZIP插件包
> 2. 将修改后的插件包安装到IDEA编辑器

### 4. 离线激活

- [Download](https://pan.baidu.com/s/1GLvphvvWUhsAY5OPvqLd5g?pwd=0918) ⚠️ 仅供个人学习使用

```text
{
    "paidKey": "xm.z",
    "valid": true,
    "userMac": "${your unique code}",
    "validTo": 4859711999000
}
```