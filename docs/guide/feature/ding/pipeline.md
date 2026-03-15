# Pipeline 项目

以下示例适用于在 `Pipeline` 中调用 `dingTalk` 步骤发送消息。

`robot` 表示机器人 ID，可在 `钉钉机器人配置` 页面中查看。

## 1. 文本消息

用于发送纯文本通知，并支持通过 `ats` 指定提醒对象。

```shell
pipeline {
    agent any
    stages {
        stage('text'){
            steps {
                echo '发送文本消息...'
            }
            post {
                success {
                    dingTalk (
                        robot: 'f72aa1bb-0f0b-47c7-8387-272d266dc25b',
                        type: 'TEXT',
                        text: [
                            "新更新提醒",
                            '文本消息内容'
                        ],
                        ats: [
                            '186888888888'
                        ]
                    )
                }
            }
        }
    }
}
```

## 2. 链接消息

用于发送带标题、描述和跳转链接的通知消息。

```shell
pipeline {
    agent any
    stages {
        stage('link'){
            steps {
                echo '发送LINK消息...'
            }
            post {
                success {
                    dingTalk (
                        robot: 'f72aa1bb-0f0b-47c7-8387-272d266dc25b',
                        type: 'LINK',
                        title: '构建通知',
                        text: [
                            '新更新提醒',
                            '链接消息内容'
                        ],
                        messageUrl: 'https://www.baidu.com',
                        picUrl: 'https://p4.itc.cn/q_70/images03/20230512/32c7ad09b5904bea8506d74f96483000.png'
                    )
                }
            }
        }
    }
}
```
## 3. MD消息

用于发送 Markdown 格式消息，适合展示结构化文本内容。

```shell
pipeline {
    agent any
    stages {
        stage('markdown'){
            steps {
                echo '发送MARKDOWN消息...'
            }
            post {
                success {
                    dingTalk (
                        robot: 'f72aa1bb-0f0b-47c7-8387-272d266dc25b',
                        type: 'MARKDOWN',
                        title: '构建通知',
                        text: [
                            "## <font color='blue'>📢 Jenkins 构建通知</font>",
                            "---",
                            "📋 **任务名称**：[${JOB_NAME}](${JOB_URL})  ",
                            "🔢 **任务编号**：[${BUILD_DISPLAY_NAME}](${BUILD_URL})  ",
                            "🌟 **构建状态**: ${currentBuild.currentResult}  ",
                            "🕐 **构建用时**: ${currentBuild.duration} ms  ",
                            "👤 **执  行 者**: ${env.BUILD_USER}  ",
                            '![图片](https://p4.itc.cn/q_70/images03/20230512/32c7ad09b5904bea8506d74f96483000.png)  '
                        ],
                        ats: [
                          '186888888888'
                        ]
                    )
                }
            }
        }
    }
}
```

## 4. 卡片消息

适用于需要展示多个操作按钮的场景。

> 1. 如需垂直排列按钮，可设置 `verticalButton: true`。
> 2. 如需仅展示单个按钮，可使用 `singleTitle` 和 `singleUrl`。启用后，`buttons` 配置将失效。

```shell
pipeline {
    agent any
    stages {
        stage('card'){
            steps {
                echo '发送卡片消息...'
            }
            post {
                success {
                    dingTalk (
                        robot: 'f72aa1bb-0f0b-47c7-8387-272d266dc25b',
                        type: 'CARD',
                        title: '📢 Jenkins 构建通知',
                        text: [
                            "## <font color='blue'>📢 Jenkins 构建通知</font>",
                            "---",
                            "📋 **任务名称**：[${JOB_NAME}](${JOB_URL})  ",
                            "🔢 **任务编号**：[${BUILD_DISPLAY_NAME}](${BUILD_URL})  ",
                            "🌟 **构建状态**: ${currentBuild.currentResult}  ",
                            "🕐 **构建用时**: ${currentBuild.duration} ms  ",
                            "👤 **执  行 者**: ${env.BUILD_USER}  ",
                            '![图片](https://p4.itc.cn/q_70/images03/20230512/32c7ad09b5904bea8506d74f96483000.png)  '
                        ],
                        atAll: false,
                        ats: [
                          '186888888888'
                        ],
                        buttons: [
                           [
                              title: "更改记录",
                              url: "${BUILD_URL}changes"
                           ],
                           [
                              title: "控制台",
                              url: "${BUILD_URL}console"
                           ]
                        ]
                    )
                }
            }
        }
    }
}
```
