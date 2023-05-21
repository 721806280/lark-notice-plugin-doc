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

### 2. Jenkins 停止&重启&重载

```shell
# 格式 https://[jenkins-server-address][:port]/[command]
 
# 退出
https://[jenkins-server-address][:port]/exit
 
# 重启
https://[jenkins-server-address][:port]/restart
 
# 重载
https://[jenkins-server-address][:port]/reload
```