# 更新日志

## [2.1.6] 待发布

### ⭐ Features

- ✨ 支持按机器人配置通知失败重试策略，可针对不同 Webhook 单独设置重试参数。
- ✨ 新增 Lark 配置快照导入/导出能力，支持 JSON 备份、导入预览以及按机器人 ID 合并导入。
- ✨ 配置迁移工具迁移到独立页面，集中处理导出、导入预览和恢复操作。
- ✨ 优化配置体验：支持代理启用开关、机器人 ID 紧凑展示与复制，并调整测试发送入口位置。

### 🐛 Fixes

- 🔒 配置导出接口仅允许 `POST` 请求，收紧管理操作的安全边界。
- 🩹 代理配置变更后自动清理发送器缓存，并补充 Webhook 校验，减少旧配置残留带来的发送异常。
- 🎨 精简机器人操作区布局，移除多余分隔线，并修复部分 SpotBugs 模型告警。

### ♻️ Refactor

- ♻️ 重构通知编排、分发、配置解析与日志体系，拆分发送器注册表，提升可维护性和排障效率。
- ♻️ 统一全局/任务配置页结构与国际化键，梳理快照模型和配置复制语义。
- ♻️ 精简 `JsonUtils` 等工具类，清理过时 API 与冗余实现。

### 🧪 Tests

- ✅ 扩展配置页、导入导出流程、快照校验、通知服务层、重试策略和多语言消息的测试覆盖。
- ✅ CI 拆分为快速测试与 `JenkinsRule` 测试套件，并统一到 `JDK 17` 运行。

### 🔨 Dependency

- ⬆️ **Bump io.jenkins.tools.bom:bom-2.528.x** from `6077.v303e2d08985d` to `6128.v8e4ce4620a_2b_`
- ⬆️ **Bump GitHub Actions** `actions/checkout` from `4` to `6`
- ⬆️ **Bump GitHub Actions** `actions/setup-java` from `4` to `5`

## [2.1.5] 2026-03-04

### ⭐ Features

- ✨ 新增 `Freestyle` 的 Post-build Action 配置入口，可直接在任务构建后动作中配置 Lark 通知。
- ✨ 优化配置页国际化与交互行为，支持多通知块独立显示，并补充 Webhook 帮助说明。
- ✨ 机器人“测试发送”接口改为结构化 JSON 返回，前端可更准确展示成功或失败原因。
- ✨ 新增结构化 verbose 日志，补充 `notify.*`、`dispatcher.*`、`pipeline.step.*` 等事件，便于排障。

### 🐛 Fixes

- 🩹 修复 `Freestyle` 同时配置 Job 属性和 Post-build Action 时可能重复发送通知的问题。
- 🩹 加固通知发送链路，补齐空结果与上下文缺失场景处理，失败分支更可控。
- 🩹 修复配置集合回填/保存时的序列化兼容问题。
- 🩹 修复 Jelly 配置页中枚举文案的国际化解析异常。

### 💥 Compatibility

- 💥 Jenkins 基线升级到 `2.528.3`，低于该版本的 Jenkins 需要先升级后再安装 `2.1.5`。

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
