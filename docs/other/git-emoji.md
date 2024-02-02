# git commit emoji 使用指南

执行 `git commit` 时使用 emoji 为本次提交打上一个 "标签", 使得此次 commit 的主要工作得以凸现，也能够使得其在整个提交历史中易于区分与查找。

## commit 格式

`git commit` 时，提交信息遵循以下格式：

```sh
:emoji1: :emoji2: 不超过 50 个字的摘要，首字母大写，使用祈使语气，句末不要加句号

提交信息主体

引用相关 issue 或 PR 编号 <#110>
```

初次提交示例：

```sh
git commit -m ":tada: Initialize Repo."
```

## emoji 指南

| Emoji | Emoji 代码                      | commit说明                                                      | commit说明              |
|-------|-------------------------------|---------------------------------------------------------------|:----------------------|
| 🎨    | `:art:`                       | Improve structure / format of the code.                       | 改进代码结构/代码格式           |
| ⚡️    | `:zap:`                       | Improve performance.                                          | 提升性能                  |
| 🐎    | `:racehorse:`                 | Improve performance.                                          | 提升性能                  |
| 🔥    | `:fire:`                      | Remove code or files.                                         | 移除代码或文件               |
| 🐛    | `:bug:`                       | Fix a bug.                                                    | 修复 bug                |
| 🚑    | `:ambulance:`                 | Critical hotfix.                                              | 重要的补丁/修复              |
| ✨     | `:sparkles:`                  | Introduce new features.                                       | 引入新功能                 |
| 👕    | `:shirt:`                     | Fix lint.                                                     | 修复 lint               |
| 📝    | `:memo:`                      | Add or update documentation.                                  | 添加或更新文档               |
| 🚀    | `:rocket:`                    | Deploy stuff.                                                 | 部署功能                  |
| 💄    | `:lipstick:`                  | Add or update the UI and style files.                         | 更新 UI 和样式文件           |
| 🎉    | `:tada:`                      | Begin a project.                                              | 初次提交/开始一个项目           |
| ✅     | `:white_check_mark:`          | Add, update, or pass tests.                                   | 添加、更新或通过测试            |
| 🔒    | `:lock:`                      | Fix security issues.                                          | 修复安全问题                |
| 🔐    | `:closed_lock_with_key:`      | Add or update secrets.                                        | 添加或更新密钥               |
| 🍎    | `:apple:`                     | Fixed an issue in MacOS.                                      | 修复 MacOS 下的问题         |
| 🐧    | `:penguin:`                   | Fixed an issue in Linux.                                      | 修复 Linux 下的问题         |
| 🏁    | `:checked_flag:`              | Fixed an issue in Windows.                                    | 修复 Windows 下的问题       |
| 🔖    | `:bookmark:`                  | Release / Version tags.                                       | 发行/版本标签               |
| 🚨    | `:rotating_light:`            | Fix compiler / linter warnings.                               | 修正编译器/ linter警告       |
| 🚧    | `:construction:`              | Work in progress.                                             | 工作进行中                 |
| 💚    | `:green_heart:`               | Fix CI Build.                                                 | 修复 CI 构建问题            |
| ⬇️    | `:arrow_down:`                | Downgrade dependencies.                                       | 降级依赖                  |
| ⬆️    | `:arrow_up:`                  | Upgrade dependencies.                                         | 升级依赖                  |
| 📌    | `:pushpin:`                   | Pin dependencies to specific versions.                        | 将依赖关系固定到特定版本          |
| 👷    | `:construction_worker:`       | Add or update CI build system.                                | 添加 或更新 CI 构建系统        |
| 📈    | `:chart_with_upwards_trend:`  | Add or update analytics or track code.                        | 添加分析或跟踪代码             |
| ♻️    | `:recycle:`                   | Refactor code.                                                | 重构代码                  |
| ➕     | `:heavy_plus_sign:`           | Add a dependency.                                             | 增加一个依赖                |
| ➖     | `:heavy_minus_sign:`          | Remove a dependency.                                          | 减少一个依赖                |
| 🐳    | `:whale:`                     | Docker related work.                                          | Docker 相关工作           |
| 🔧    | `:wrench:`                    | Add or update configuration files.                            | 添加或修改配置文件             |
| 🔨    | `:hammer:`                    | Add or update development scripts.                            | 添加或更新开发脚本             |
| 🌐    | `:globe_with_meridians:`      | Internationalization and localization.                        | 国际化与本地化               |
| ✏️    | `:pencil2:`                   | Fix typos.                                                    | 修复拼写错误                |
| 💩    | `:poop:`                      | Write bad code that needs to be improved.                     | 编写需要改进的糟糕代码           |
| ⏪️    | `:rewind:`                    | Revert changes.                                               | 还原更改                  |
| 🔀    | `:twisted_rightwards_arrows:` | Merge branches.                                               | 合并分支                  |
| 📦️   | `:package:`                   | Add or update compiled files or packages.                     | 添加或更新已编译的文件或包         |
| 👽️   | `:alien:`                     | Update code due to external API changes.                      | 由于外部 API 的更改而更新了代码    |
| 🚚    | `:truck:`                     | Move or rename resources (e.g.: files, paths, routes).        | 移动或重命名资源（例如：文件，路径，路由） |
| 📄    | `:page_facing_up:`            | Add or update license.                                        | 添加或更新许可证              |
| 💥    | `:boom:`                      | Introduce breaking changes.                                   | 介绍重大更改                |
| 🍱    | `:bento:`                     | Add or update assets.                                         | 添加或更新静态资源             |
| ♿️    | `:wheelchair:`                | Improve accessibility.                                        | 改善可访问性                |
| 💡    | `:bulb:`                      | Add or update comments in source code.                        | 在源代码中添加或更新注释          |
| 🍻    | `:beers:`                     | Write code drunkenly.                                         | 醉酒地编写代码               |
| 💬    | `:speech_balloon:`            | Add or update text and literals.                              | 添加或更新文本和文字            |
| 🗃️   | `:card_file_box:`             | Perform database related changes.                             | 执行与数据库相关的更改           |
| 🔊    | `:loud_sound:`                | Add or update logs.                                           | 添加或更新日志               |
| 🔇    | `:mute:`                      | Remove logs.                                                  | 删除日志                  |
| 👥    | `:busts_in_silhouette:`       | Add or update contributor(s).                                 | 添加或更新贡献者              |
| 🚸    | `:children_crossing:`         | Improve user experience / usability.                          | 改善用户体验/可用性            |
| 🏗️   | `:building_construction:`     | Make architectural changes.                                   | 进行体系结构更改              |
| 📱    | `:iphone:`                    | Work on responsive design.                                    | 进行响应式设计               |
| 🤡    | `:clown_face:`                | Mock things.                                                  | Mock 相关               |
| 🥚    | `:egg:`                       | Add or update an easter egg.                                  | 添加或更新复活节彩蛋            |
| 🙈    | `:see_no_evil:`               | Add or update a .gitignore file.                              | 添加或更新.gitignore文件     |
| 📸    | `:camera_flash:`              | Add or update snapshots.                                      | 添加或更新快照               |
| ⚗️    | `:alembic:`                   | Perform experiments.                                          | 进行实验                  |
| 🔍️   | `:mag:`                       | Improve SEO.                                                  | 改善SEO                 |
| 🏷️   | `:label:`                     | Add or update types.                                          | 添加或更新类型               |
| 🌱    | `:seedling:`                  | Add or update seed files.                                     | 添加或更新种子文件             |
| 🚩    | `:triangular_flag_on_post:`   | Add, update, or remove feature flags.                         | 添加，更新或删除功能标志          |
| 🥅    | `:goal_net:`                  | Catch errors.                                                 | 捕获错误                  |
| 💫    | `:dizzy:`                     | Add or update animations and transitions.                     | 添加或更新动画和过渡            |
| 🗑️   | `:wastebasket:`               | Deprecate code that needs to be cleaned up.                   | 弃用需要清除的代码             |
| 🛂    | `:passport_control:`          | Work on code related to authorization, roles and permissions. | 处理与授权，角色和权限相关的代码      |
| 🩹    | `:adhesive_bandage:`          | Simple fix for a non-critical issue.                          | 对非关键问题的简单修复           |
| 🧐    | `:monocle_face:`              | Data exploration/inspection.                                  | 数据探索/检查               |
| ⚰️    | `:coffin:`                    | Remove dead code.                                             | 删除无效代码                |
| 🧪    | `:test_tube:`                 | Add a failing test.                                           | 添加失败的测试               |
| 👔    | `:necktie:`                   | Add or update business logic.                                 | 添加或更新业务逻辑             |
| 🩺    | `:stethoscope:`               | Add or update healthcheck.                                    | 添加或更新健康检查             |
| 🧱    | `:bricks:`                    | Infrastructure related changes.                               | 基础设施相关的变化             |
| 🧑‍💻 | `:technologist:`              | Improve developer experience                                  | 提升开发者体验               |

## 如何在命令行中显示 emoji

默认情况下，在命令行中并不会显示出 emoji, 仅显示 emoji 代码。
不过可以使用 [emojify](https://github.com/mrowa44/emojify) 使得在命令行也可显示 emoji, 它是一个 shell
脚本，安装与使用都很简单，在 [这里](https://github.com/mrowa44/emojify) 查看如何安装与使用。

## 出处

- [原文地址](https://github.com/liuchengxu/git-commit-emoji-cn)
- [gitmoji](https://github.com/carloscuesta/gitmoji/)