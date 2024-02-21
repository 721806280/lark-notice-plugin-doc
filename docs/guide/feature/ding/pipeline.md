# Pipeline 项目

**robot 为机器人ID，在 `钉钉机器人配置` 中查看**

## 1. 文本消息

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
                        title: '你有新的消息，请注意查收',
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
                        title: '你有新的消息，请注意查收',
                        text: [
                            "## <font color='blue'>📢 Jenkins 构建通知</font>",
                            "---",
                            "📋 **任务名称**：[${JOB_NAME}](${JOB_URL})  ",
                            "🔢 **任务编号**：[${BUILD_DISPLAY_NAME}](${BUILD_URL})  ",
                            "🌟 **构建状态**: ${currentBuild.currentResult}  ",
                            "🕐 **构建用时**: ${currentBuild.duration} ms  ",
                            "👤 **执  行 者**: Started by user anonymous  ",
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

> 1. 垂直按钮显示：verticalButton: true
> 2. 单个按钮配置(配置后buttons将失效)：singleTitle: '控制台', singleUrl: '${BUILD_URL}console'

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
                            "👤 **执  行 者**: Started by user anonymous  ",
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