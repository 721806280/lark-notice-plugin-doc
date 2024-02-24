# 查看环境变量

## 1. 内置的环境变量

- [${YOUR_JENKINS_HOST}/jenkins/env-vars.html](http://127.0.0.1/jenkins/env-vars.html)

## 2. 自定义环境变量

| 名称              | 说明         |
|-----------------|------------|
| EXECUTOR_NAME   | 构建人姓名      |
| EXECUTOR_MOBILE | 构建人手机号码    |
| EXECUTOR_OPENID | 构建人OPENID  |

## 3. 用户属性扩展

> [!WARNING]
> 为了实现 **执行人** 字段带 @ 效果，需要为 Jenkins 用户补充相关信息。依次打开路径： <br/> Dashboard > Manage Jenkins > Users > 用户设置

![](../img/feq-user-attribute.png)