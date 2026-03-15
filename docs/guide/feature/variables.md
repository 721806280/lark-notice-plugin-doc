# 查看环境变量

## 1. Jenkins 内置环境变量

Jenkins 提供了内置环境变量页面，可用于查看当前实例支持的变量列表：

- `https://[your-jenkins-host]/env-vars.html`

## 2. 自定义环境变量

| 名称              | 说明         |
|-----------------|------------|
| `EXECUTOR_NAME`   | 构建执行人姓名   |
| `EXECUTOR_MOBILE` | 构建执行人手机号 |
| `EXECUTOR_OPENID` | 构建执行人 OpenID |

## 3. 用户属性扩展

> [!WARNING]
> 如需在 **执行人** 字段中实现 `@` 提醒效果，需要为 Jenkins 用户补充相关属性信息。可按以下路径进入用户设置页面：`Dashboard` -> `Manage Jenkins` -> `Users` -> `用户设置`

![](../img/feq-user-attribute.png)
