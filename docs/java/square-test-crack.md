# SquareTest Crack

## 准备工作
- [Jar包在线反编译](https://www.decompiler.com)
- [JClassLib 字节码编辑器](https://github.com/ingokegel/jclasslib)
- [SquareTest 插件包](https://plugins.jetbrains.com/plugin/10405-squaretest/versions)

## 开始处理

### 1. 反编译

> 1. 反编译Jar包
> 2. 使用IDEA编辑器打开编译包
> 3. 全局检索关键词 Validate and Save

```java
package com.squaretest.c;

import com.intellij.openapi.ui.DialogWrapper.OkAction;

public class m extends OkAction {
    // $FF: synthetic field
    final k a;
    
    m(k var1) {
        super(var1);
        this.a = var1;
        this.putValue("Name", "Validate and Save");
        this.putValue("DefaultAction", Boolean.TRUE);
    }
}
```

> 1. 通过 m 类引用关联到 k 类的 createActions 方法
> 2. 找到 doOKAction 方法 (点击确定的回调方法)
> 3. 主要验证许可证方法为: r var2 = this.a.b(var1);

```java
package com.squaretest.c;

import com.intellij.openapi.project.Project;
import com.intellij.openapi.ui.DialogWrapper;
import com.intellij.openapi.ui.Messages;
import com.intellij.uiDesigner.core.GridConstraints;
import com.intellij.uiDesigner.core.GridLayoutManager;
import java.awt.Dimension;
import java.awt.Insets;
import javax.swing.Action;
import javax.swing.Icon;
import javax.swing.JComponent;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class k extends DialogWrapper {
    private final i a;
    private final Project b;
    private JTextArea c;
    private JPanel d;
    private final boolean e;

    public k(@Nullable Project var1, i var2) {
        super(var1);
        this.b = var1;
        this.a = var2;
        i var10001 = this.a;
        this.a();
        this.e = var10001.d() || this.a.c();
        this.init();
        this.setTitle("License Manager");
    }

    @Nullable
    protected JComponent createCenterPanel() {
        String var1 = this.a.a();
        if (var1 != null) {
            this.c.setText(var1);
        }

        return this.d;
    }

    @NotNull
    protected Action[] createActions() {
        Action[] var10000;
        if (this.e) {
            var10000 = new Action[]{new l(this), new m(this)};
            if (var10000 == null) {
                a(0);
            }

            return var10000;
        } else {
            var10000 = new Action[]{new m(this)};
            if (var10000 == null) {
                a(1);
            }

            return var10000;
        }
    }

    protected void doOKAction() {
        String var1 = this.c.getText().trim();
        r var2 = this.a.b(var1);
        if (!var2.a()) {
            Messages.showErrorDialog(this.b, "The provided license is invalid. Please ensure the license matches the following format:\n\n--- BEGIN SQUARETEST LICENSE ---\nName\nLicense Type\nSQT1-edfa8aa1-9b85-4b25-8ee8-de3fb9906e6d\n4FmXe7wH0qKOtYhJQpKaKwnV7dA1tMhX1NNK39XLDKXwdny70PpG6dhpPOFL7pAVapDjTi8zEJS0irBFeOndVx0VYkLOZDI7\n--- END SQUARETEST LICENSE ---", "Invalid License");
        } else {
            this.a.a(var2.b());
            Messages.showDialog("Thank you for purchasing!", "Squaretest", new String[]{"OK"}, 0, (Icon)null);
            super.doOKAction();
        }
    }

    // $FF: synthetic method
    private void a() {
        JPanel var1 = new JPanel();
        this.d = var1;
        var1.setLayout(new GridLayoutManager(2, 1, new Insets(0, 0, 0, 0), -1, -1, false, false));
        JTextArea var2 = new JTextArea();
        this.c = var2;
        var2.setColumns(97);
        var2.setRows(6);
        var1.add(var2, new GridConstraints(1, 0, 1, 1, 0, 3, 6, 6, (Dimension)null, (Dimension)null, (Dimension)null));
        JLabel var3 = new JLabel();
        var3.setText("Please copy/paste your license into the text area below. Then click \"Validate and Save\".");
        var1.add(var3, new GridConstraints(0, 0, 1, 1, 8, 0, 0, 0, (Dimension)null, (Dimension)null, (Dimension)null));
    }

    // $FF: synthetic method
    private static void a(int var0) {
        throw new IllegalStateException(String.format("@NotNull method %s.%s must not return null", "com/squaretest/c/k", "createActions"));
    }
}
```

> 1. 通过 b 方法引用关联到 com.squaretest.c.q 类;
> 2. 通过 List var2 = this.b(var1); 会把输入的许可证解析为一个列表;
> 3. 通过 this.b(var2) 主要用于验证输入的许可证格式等是否正确;
> 4. 针对格式通过校验的许可证进行验证数字签名(DSA非对称加密算法);

```java
package com.squaretest.c;

import com.intellij.openapi.diagnostic.Logger;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.PublicKey;
import java.security.Signature;
import java.security.SignatureException;
import java.security.spec.X509EncodedKeySpec;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.jetbrains.annotations.NotNull;

class q {
   private static final Logger a = Logger.getInstance("SquaretestLicenseVerifier");
   private static final Pattern b = Pattern.compile("(-{0,3})?(\\s*BEGIN\\s+SQUARETEST\\s+LICENSE\\s*)(-{0,3})?");
   private static final Pattern c = Pattern.compile("(-{0,3})?(\\s*END\\s+SQUARETEST\\s+LICENSE\\s*)(-{0,3})?");
   private static final Pattern d = Pattern.compile("(.*)(\\s+\\d+\\s+User\\s+License|\\s+Single\\s+User\\s+License)\\s*(SQT1-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})\\s*([a-zA-Z0-9\\+\\/\\=\\s]+)", 32);
   private static final PublicKey e;

   r a(String var1) {
      if (var1 == null) {
         a.info("Validation failed. The license text is null.");
         return r.a;
      } else {
         List var2 = this.b(var1);
         if (!this.b(var2)) {
            return r.a;
         } else {
            String var10000 = (String)var2.get(1);
            String var3 = var10000 + "\n" + (String)var2.get(2) + "\n" + (String)var2.get(3) + "\n";
            String var4 = (String)var2.get(4);

            try {
               Signature var5 = Signature.getInstance("SHA256withDSA", "SUN");
               var5.initVerify(e);
               var5.update(var3.getBytes(StandardCharsets.UTF_8));
               byte[] var6 = Base64.getDecoder().decode(var4);
               boolean var7 = var5.verify(var6);
               if (var7) {
                  a.info("Validation succeeded.");
                  String var8 = this.a(var2);
                  return new r(true, var8);
               } else {
                  a.info("Validation failed. Signature did not match.");
                  return r.a;
               }
            } catch (NoSuchAlgorithmException var9) {
               a.info("Validation failed. Received NoSuchAlgorithmException: ", var9);
               return r.a;
            } catch (SignatureException var10) {
               a.info("Validation failed. Invalid Signature: ", var10);
               return r.a;
            } catch (NoSuchProviderException var11) {
               a.info("Validation failed. Received NoSuchProviderException: ", var11);
               return r.a;
            } catch (InvalidKeyException var12) {
               a.info("Validation failed. Received InvalidKeyException: ", var12);
               return r.a;
            } catch (Throwable var13) {
               a.info("Validation failed. Received Exception: ", var13);
               return r.a;
            }
         }
      }
   }

   private String a(List<String> var1) {
      StringBuilder var2 = new StringBuilder();

      for(int var3 = 0; var3 < var1.size(); ++var3) {
         String var4 = (String)var1.get(var3);
         var2.append(var4);
         if (var3 != var1.size() - 1) {
            var2.append("\n");
         }
      }

      return var2.toString();
   }

   private boolean b(List<String> var1) {
      if (var1.size() != 6) {
         a.info(String.format("Validation failed: Number of lines in corrected license should be: %d, but was: %d", 6, var1.size()));
         return false;
      } else if (!"--- BEGIN SQUARETEST LICENSE ---".equals(var1.get(0))) {
         a.info(String.format("Validation failed: corrected license first line should be %s, but was %s", "--- BEGIN SQUARETEST LICENSE ---", var1.get(0)));
         return false;
      } else if (!"--- END SQUARETEST LICENSE ---".equals(var1.get(5))) {
         a.info(String.format("Validation failed: corrected license last line should be %s, but was %s", "--- END SQUARETEST LICENSE ---", var1.get(5)));
         return false;
      } else {
         for(int var2 = 0; var2 < var1.size(); ++var2) {
            String var3 = (String)var1.get(var2);
            if (var3.trim().isEmpty()) {
               a.info(String.format("Validation failed: corrected license line number %d is empty", var2 + 1));
               return false;
            }
         }

         if (!((String)var1.get(3)).startsWith("SQT1-")) {
            a.info("Validation failed: License line 4 should start with: SQT1-");
            return false;
         } else if (((String)var1.get(3)).length() != 41) {
            a.info("Validation failed: License line 4 should be 41 characters long");
            return false;
         } else {
            a.info("License format is valid");
            return true;
         }
      }
   }

   private List<String> b(@NotNull String var1) {
      if (var1 == null) {
         a(0);
      }

      String var2 = this.c(var1);
      ArrayList var3 = new ArrayList();
      Matcher var4 = d.matcher(var2);
      if (!var4.matches()) {
         a.info("License did not match expected format");
         return var3;
      } else {
         String var5 = ((String)Objects.requireNonNullElse(var4.group(1), "")).trim().replaceAll("\\R", "");
         String var6 = ((String)Objects.requireNonNullElse(var4.group(2), "")).replaceAll("\\R", " ").replaceAll("\\s{2,}", " ");
         String var7 = (String)Objects.requireNonNullElse(var4.group(3), "");
         String var8 = ((String)Objects.requireNonNullElse(var4.group(4), "")).trim().replaceAll("\\s", "");
         var3.add("--- BEGIN SQUARETEST LICENSE ---");
         var3.add(var5);
         var3.add(var6.trim());
         var3.add(var7.trim());
         var3.add(var8);
         var3.add("--- END SQUARETEST LICENSE ---");
         return var3;
      }
   }

   private String c(String var1) {
      String var2 = var1.trim().replace("\r\n", "\n");
      Matcher var3 = b.matcher(var2);
      boolean var4 = var3.find();
      int var5 = 0;
      if (var4) {
         var5 = var3.end();
      }

      int var6 = var2.length();
      Matcher var7 = c.matcher(var2);
      boolean var8 = var7.find();
      if (var8) {
         var6 = var7.start();
      }

      return var2.substring(var5, var6).trim();
   }

   static {
      try {
         KeyFactory var0 = KeyFactory.getInstance("DSA");
         byte[] var1 = Base64.getDecoder().decode("MIIDQjCCAjUGByqGSM44BAEwggIoAoIBAQCPeTXZuarpv6vtiHrPSVG28y7FnjuvNxjo6sSWHz79NgbnQ1GpxBgzObgJ58KuHFObp0dbhdARrbi0eYd1SYRpXKwOjxSzNggooi/6JxEKPWKpk0U0CaD+aWxGWPhL3SCBnDcJoBBXsZWtzQAjPbpUhLYpH51kjviDRIZ3l5zsBLQ0pqwudemYXeI9sCkvwRGMn/qdgYHnM423krcw17njSVkvaAmYchU5Feo9a4tGU8YzRY+AOzKkwuDycpAlbk4/ijsIOKHEUOThjBopo33fXqFD3ktm/wSQPtXPFiPhWNSHxgjpfyEc2B3KI8tuOAdl+CLjQr5ITAV2OTlgHNZnAh0AuvaWpoV499/e5/pnyXfHhe8ysjO65YDAvNVpXQKCAQAWplxYIEhQcE51AqOXVwQNNNo6NHjBVNTkpcAtJC7gT5bmHkvQkEq9rI837rHgnzGC0jyQQ8tkL4gAQWDt+coJsyB2p5wypifyRz6Rh5uixOdEvSCBVEy1W4AsNo0fqD7UielOD6BojjJCilx4xHjGjQUntxyaOrsLC+EsRGiWOefTznTbEBplqiuH9kxoJts+xy9LVZmDS7TtsC98kOmkltOlXVNb6/xF1PYZ9j897buHOSXC8iTgdzEpbaiH7B5HSPh++1/et1SEMWsiMt7lU92vAhErDR8C2jCXMiT+J67ai51LKSLZuovjntnhA6Y8UoELxoi34u1DFuHvF9veA4IBBQACggEAZPLRcAEgEyCfrUDN0zg3ZmN1hIkudDrpjNrtuUnO/A+lbuRlPWc16hch912+oLDpVvI9OHjlTu7nhJ4CVrA+1lTv9JG/BVzPZcMImQAXPsz3nYCv2CeoF3Vtw/JFtS7/H7aW/77G5r+e08y/yqEEn6FxqEsDZro8FZRSfWb0jTAh2Tjxhh8hQOWQM2Mx5FjYlZY9zHJETcNrllCnuLeWBQ+cuK091GBAkh/5ZdMMJDfrQwDna9vKglh3jTQmety3PkH52pCFGqvE670N/+EcVj1GkpbpWYZhQ1XNjgXYid0oLfj5hdzsXe/uxsVUqrsCWOY6U9EvaAfVvNCpaVFkeg==".getBytes(StandardCharsets.UTF_8));
         X509EncodedKeySpec var2 = new X509EncodedKeySpec(var1);
         e = var0.generatePublic(var2);
      } catch (Throwable var3) {
         a.error("Exception parsing Squaretest public key.", var3);
         throw new RuntimeException(var3);
      }
   }

   // $FF: synthetic method
   private static void a(int var0) {
      throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", "licenseText", "com/squaretest/c/q", "getLicenseParts"));
   }
}
```


### 2. 生成秘钥

```java
import java.nio.charset.StandardCharsets;
import java.security.*;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * GenerateLicenseSign
 *
 * @author xm.z
 */
public class GenerateLicenseSign {
    private static final String USER_LICENSE_STR = "XmInc 200 User License SQT1-20240425-0000-4000-89ab-abc123456789 MDwCHGoLrRftstAxrTT7l/vdPRcnE5UxMzd0e+EeixsCHD6NMZybdq0zLypOFzqSaeowWn6l46iK3gOvQcY=";
    private static final byte[] USER_LICENSE_BYTE = USER_LICENSE_STR.getBytes(StandardCharsets.UTF_8);
    private static final Pattern PATTERN = Pattern.compile("(.*)(\\s+\\d+\\s+User\\s+License|\\s+Single\\s+User\\s+License)\\s*(SQT1-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})\\s*([a-zA-Z0-9\\+\\/\\=\\s]+)", 32);

    public static void test() throws Exception {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("DSA");
        KeyPair keys = keyPairGenerator.generateKeyPair();
        PublicKey publicKey = keys.getPublic();
        String base64PublicKey = Base64.getEncoder().encodeToString(publicKey.getEncoded());
        System.out.printf("公钥:" + base64PublicKey);

        PrivateKey privateKey = keys.getPrivate();
        String base64PrivateKey = Base64.getEncoder().encodeToString(privateKey.getEncoded());
        System.out.println("私钥:" + base64PrivateKey);

        Signature sig = Signature.getInstance("SHA256withDSA", "SUN");
        sig.initSign(privateKey);
        sig.update(USER_LICENSE_BYTE);
        byte[] signature = sig.sign();
        System.out.println("签名:" + Base64.getEncoder().encodeToString(signature));

        sig.initVerify(publicKey);
        sig.update(USER_LICENSE_BYTE);
        boolean verify = sig.verify(signature);
        System.out.println("验签:" + verify);
    }

    public static void test1(String base64PublicKey, String base64PrivateKey) throws Exception {
        // 之前生成的公钥和私钥
        byte[] publicKeyBytes = Base64.getDecoder().decode(base64PublicKey);
        X509EncodedKeySpec publicKeySpec = new X509EncodedKeySpec(publicKeyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("DSA");
        PublicKey publicKey = keyFactory.generatePublic(publicKeySpec);

        byte[] privateKeyBytes = Base64.getDecoder().decode(base64PrivateKey);
        PKCS8EncodedKeySpec privateKeySpec = new PKCS8EncodedKeySpec(privateKeyBytes);
        PrivateKey privateKey = keyFactory.generatePrivate(privateKeySpec);

        Signature sig = Signature.getInstance("SHA256withDSA", "SUN");
        sig.initSign(privateKey);
        sig.update(USER_LICENSE_BYTE);
        byte[] signature = sig.sign();
        System.out.println("新签名值:" + Base64.getEncoder().encodeToString(signature));

        sig.initVerify(publicKey);
        sig.update(USER_LICENSE_BYTE);
        boolean verify = sig.verify(signature);
        System.out.println("新验签结果:" + verify);
    }

    public static void main(String[] args) {
        Matcher matcher = PATTERN.matcher(USER_LICENSE_STR);
        if (matcher.find()) {
            System.out.println("Found match:");
            System.out.println("Group 1: " + matcher.group(1).trim());
            System.out.println("Group 2: " + matcher.group(2).trim());
            System.out.println("Group 3: " + matcher.group(3).trim());
            System.out.println("Group 4: " + matcher.group(4).trim());
        } else {
            System.out.println("No match found");
        }
    }

}
```

### 3. 替换公钥

> 1. 使用 JClassLib 打开 com.squaretest.c.q 类
> 2. 找到公钥常量并修改为上述签名中生成的公钥

### 4. 打包安装

> 1. 将修改后的插件包离线安装

## 激活插件

- [Download](https://pan.baidu.com/s/1sbmLPTyBJgtkPoQehK7MdA?pwd=0918) ⚠️ 仅供个人学习使用

```text
--- BEGIN SQUARETEST LICENSE ---
XmInc
200 User License
SQT1-20240425-0000-4000-89ab-abc123456789
MDwCHGoLrRftstAxrTT7l/vdPRcnE5UxMzd0e+EeixsCHD6NMZybdq0zLypOFzqSaeowWn6l46iK3gOvQcY=
--- END SQUARETEST LICENSE ---
```