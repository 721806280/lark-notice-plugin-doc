# Pipeline 项目

**robot 为机器人ID，在 `飞书机器人配置` 中查看**

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
                    feiShuTalk (
                        robot: 'f72aa1bb-0f0b-47c7-8387-272d266dc25c',
                        type: 'TEXT',
                        text: [
                            "新更新提醒",
                            '<at user_id="all">所有人</at>'
                        ]
                    )
                }
            }
        }
    }
}
```

## 2. 群名片消息

```shell
pipeline {
    agent any
    stages {
        stage('text'){
            steps {
                echo '发送群名片消息...'
            }
            post {
                success {
                    feiShuTalk (
                        robot: 'f72aa1bb-0f0b-47c7-8387-272d266dc25c',
                        type: 'SHARE_CHAT',
                        shareChatId: 'oc_f5b1a7eb27ae2c7b6adc2a74faf339ff'
                    )
                }
            }
        }
    }
}
```


## 3. 图片消息

```shell
pipeline {
    agent any
    stages {
        stage('text'){
            steps {
                echo '发送图片消息...'
            }
            post {
                success {
                    feiShuTalk (
                        robot: 'f72aa1bb-0f0b-47c7-8387-272d266dc25c',
                        type: 'IMAGE',
                        imageKey: 'img_ecffc3b9-8f14-400f-a014-05eca1a4310g'
                    )
                }
            }
        }
    }
}
```

## 4. 富文本消息

```shell
pipeline {
    agent any
    stages {
        stage('text'){
            steps {
                echo '发送富文本消息...'
            }
            post {
                success {
                    feiShuTalk (
                        robot: 'f72aa1bb-0f0b-47c7-8387-272d266dc25c',
                        type: 'POST',
                        title: '项目更新通知',
                        post: [
                            [
                                [
                                    "tag": "text",
                                    "text": "项目有更新: "
                                ],
                                [
                                    "tag": "a",
                                    "text": "请查看",
                                    "href": "https://www.example.com/"  
                                ],
                                [
                                    "tag": "at",
                                    "user_id": "ou_xxxxxx",
                                    "user_name": "tom"
                                ]
                            ],
                            [
                                [
                                    "tag": "text",
                                    "text": "项目有更新:"
                                ],
                                [
                                    "tag": "at",
                                    "user_id": "all",
                                    "user_name": "所有人"
                                ]
                            ]
                        ]
                    )
                }
            }
        }
    }
}
```


## 5. 卡片消息

> 1. 按钮颜色 `type` 的取值范围： primary | danger | default
> 2. 字体颜色 `color` 的取值范围： green：绿色文本 | red：红色文本 | grey：灰色文本 | default：白底黑字样式

```shell
pipeline {
    agent any
    stages {
        stage('text'){
            steps {
                echo "发送卡片消息..."
            }
            post {
                success {
                    feiShuTalk (
                        robot: "f72aa1bb-0f0b-47c7-8387-272d266dc25c",
                        type: "INTERACTIVE",
                        title: "📢 Jenkins 构建通知",
                        text: [
                            "📋 **任务名称**：[${JOB_NAME}](${JOB_URL})",
                            "🔢 **任务编号**：[${BUILD_DISPLAY_NAME}](${BUILD_URL})",
                            "🌟 **构建状态**: <font color='green'>成功</font>",
                            "🕐 **构建用时**: ${currentBuild.duration} ms",
                            "👤 **执  行 者**: Started by user anonymous",
                            "<at id=all></at>"
                        ],
                        buttons: [
                           [
                              title: "更改记录",
                              url: "${BUILD_URL}changes"
                           ],
                           [
                              title: "控制台",
                              type: "danger",
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