# 常见问题

### 1. 无法发送消息通知

**情况一：安装完插件后，没有重启jenkins**  
    重新启动Jenkins即可。

**情况二：没有勾选通知时机**  
    按图勾选对应的 `通知时机` 并重新 启动Jenkins。
    ![](./img/faq-notification-timing.png)

**情况三：没有正确配置加密密钥**  
    检查在飞书控制台是否开启对应的 `签名校验` 配置，如已经配置请在机器人配置中配置 `加密密钥` 信息。
    ![](./img/faq-signature.png)

### 2. 点击消息按钮无法正常跳转

**情况一：未配置 Jenkins Location URL**

点击 `Manage Jenkins` 后打开 `Configure System`， 找到 `Jenkins Location` 配置项目， 配置 `Jenkins URL` 后重启即可;

### 3. 如何获取图片资源

可通过 `消息卡片搭建平台` 上传图片，应用选择:  `开发者小助手` 或 `Open Platform Assistant`， 上传后获得图片资源key;

- [飞书消息卡片搭建平台](https://open.feishu.cn/tool/cardbuilder)
- [Lark消息卡片搭建平台](https://open.larksuite.com/tool/cardbuilder)

![](./img/faq-upload-image.png)

### 4. 无法正常加载图片

1. 检查消息中是否使用了超链接(官网平台不支持), 请参考 `3. 如何获取图片资源` 替换为图片资源Key;

2. 检查图片资源Key是否为机器人所属的平台, `飞书` 与 `Lark` 平台的图片资源Key不能公用;

### 5. Jenkins 停止&重启&重载

```shell
# 格式 https://[jenkins-server-address][:port]/[command]
 
# 退出
https://[jenkins-server-address][:port]/exit
 
# 重启
https://[jenkins-server-address][:port]/restart
 
# 重载
https://[jenkins-server-address][:port]/reload
```
