# 更新日志

## [2.1.2] 2025-08-09

### ⭐ Features

- ✨ Feishu supports sending structured card messages in JSON 2.0 format
- 💥 Introduce breaking changes. jenkins.version >= 2.504.3

### 🔨 Dependency

- ⬆️ **Bump org.jenkins-ci.plugins:plugin** from 5.17 to 5.18

## [2.1.1] 2025-06-29

### ⭐ Features

- ✨ support multibranch pipeline notifications.
- ♻️ Core modules refactored for better maintainability and scalability.

### 🔨 Dependency

- ⬆️ **Bump org.jenkins-ci.plugins:plugin** from 5.16 to 5.17

## [2.1.0] 2025-05-11

### ⭐ Features

- 💥 Introduce breaking changes. jenkins.version >= 2.492.
- ♻️ Refactor code. 支持配置禁用客户端证书验证.
- ♻️ Refactor plugin for improved maintainability and localization.

### 🔨 Dependency

- ⬆️ **Bump io.jenkins.tools.bom:bom-2.492.x**
- ⬆️ **Bump org.jenkins-ci.plugins:plugin** from 4.78 to 5.16
- ⬆️ **Bump org.projectlombok:lombok** from 1.18.26 to 1.18.38

## [2.0.0] 2024-02-24

### ⭐ Features

- 💥 更新插件名称 `Lark Notice Plugin`
- ✨ 支持 `钉钉机器人` 的构建通知
- ✨ 支持钉钉 `文本`、`链接`、`Markdown`、`卡片` 等消息配置

### 🔨 Dependency

- ⬆️ **org.jenkins-ci.plugins**  4.75 to 4.78
- ⬆️ **io.jenkins.tools.bom**  2675.v1515e14da_7a_6 to 2815.vf5d6f093b_23e

## [1.2.3] 2023-12-30

### ⭐ Features

- ✨ 更新默认的标题并支持 `自定义标题`
- ✨ 自定义消息支持 `消息卡片搭建工具` 生成的JSON消息体
- 🎨 根据状态调整卡片消息的标题色
- 🎨 详细日志打印完整的请求数据

### 🔨 Dependency

- ⬆️ **io.jenkins.tools.bom**  2661.vb_b_60650f6d97 to 2675.v1515e14da_7a_6

## [1.2.2] 2023-12-16

### ⭐ Features

- ✨ 个人资料页添加OpenId配置项用于@成员
- 🔒 Fix security issues.

## [1.2.1] 2023-12-13

### ⭐ Features

- ✨ 支持海外版Lark的消息通知
- ♻️ 重构 插件 代码

### 🔨 Dependency

- ⬆️ **org.jenkins-ci.plugins**  4.67 to 4.75

## [1.2.0] 2023-11-23

### ⭐ Features

- ✨️ Freestyle卡片消息自定义内容支持图片配置
- ✨ Pipeline卡片消息支持正文顶部底部图片配置

### 🔨 Dependency

- ⬆️ **lombok** 1.18.28 to 1.18.30
- ⬆️ **org.jenkins-ci.plugins**  4.64 to 4.67
- ⬆️ **io.jenkins.tools.bom**  2.387.x to 2.414.x

## [1.1.0] 2023-06-05

### ⭐ Features

- ♻️ 重构 插件 代码
- 📝 补充 Java Doc 类及方法注释

### 🔨 Dependency

- ⬆️ **lombok** 1.18.26 to 1.18.28
- ⬆️ **org.jenkins-ci.plugins**  4.63 to 4.64
- ⬆️ **io.jenkins.tools.bom**  2.375.x to 2.387.x

## [1.0.0] 2023-05-20

### ⭐ Features

- ✨ 支持 `Freestyle` 、 `Pipeline` 项目风格配置
- ✨ 支持 `文本`、`图片`、`群名片`、`富文本`、`卡片` 多种消息配置
- ✨ 支持 `自定义` 消息体

### 🔨 Dependency

- ⬆️ **lombok** 1.18.26
- ⬆️ **org.jenkins-ci.plugins**  4.63
- ⬆️ **io.jenkins.tools.bom**  2081.v85885a_d2e5c5