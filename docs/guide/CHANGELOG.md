# 更新日志

## [2.1.5] 2026-03-04

2.1.5 版本重点聚焦在三个方向：Freestyle 场景补齐、配置体验优化、通知链路稳定性提升。

## 核心更新
1. 新增 Freestyle 的 Post-build Action 入口
   现在可以在 Freestyle 任务中直接通过 Post-build Action 配置 Lark 通知（`LarkNotifier`）。

2. 重复通知问题修复
   当 Freestyle 同时存在 Job 属性配置和 Post-build Action 配置时，会自动跳过 RunListener 路径，避免重复发送通知。

3. 配置页国际化与交互优化
   完善了主要配置页面的中英文资源；优化“禁用内置消息”切换行为，支持多通知块独立显示；机器人配置页布局更紧凑，并新增 Webhook 帮助说明。

4. 机器人“测试发送”体验改进
   测试接口统一返回结构化 JSON（`ok`/`message`），前端可更准确展示成功或失败原因，错误提示更清晰（Webhook、代理、安全策略等）。

## 稳定性与可维护性
1. 通知发送链路加固
   补齐空结果与上下文缺失场景处理，失败分支更可控。

2. 新增结构化 Verbose 日志
   增加 `notify.*`、`dispatcher.*`、`pipeline.step.*` 等事件日志，排障可读性更高。

3. 配置序列化兼容修复
   对配置集合做可变拷贝处理，降低 Jenkins 配置回填/保存时的序列化风险。

4. 修复枚举在 Jelly 页面的国际化解析
   通知触发条件、构建状态、安全策略等枚举文案改为按当前语言实时解析，避免显示异常。

## 兼容性说明
1. Jenkins 基线升级到 `2.528.3`。
   低于该版本的 Jenkins 需要先升级后再安装 2.1.5。

## 升级建议
1. 若你使用 Freestyle，建议优先改为 Post-build Action 配置通知，配置路径更直观。
2. 若你需要排查通知问题，可在全局配置中开启 verbose 日志后复现并查看事件链路。

## [2.1.4] 2025-11-15

### ⭐ Features

- 🎨 Improve structure / format of the code.
- ✨ map 'default' JSON property in TextSize

## [2.1.3] 2025-09-25

### ⭐ Features

- 🧑‍💻 Improve developer experience.
- 🛂 Work on code related to authorization, roles and permissions.

### 🔨 Dependency

- ⬆️ Bump org.jenkins-ci.plugins:plugin from 5.24 to 5.26
- ⬆️ Bump org.projectlombok:lombok from 1.18.40 to 1.18.42

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