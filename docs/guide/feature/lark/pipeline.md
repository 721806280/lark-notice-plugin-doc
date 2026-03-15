# Pipeline 项目

以下示例适用于在 `Pipeline` 中调用 `lark` 步骤发送消息。

`robot` 表示机器人 ID，可在 `飞书机器人配置` 页面中查看。

## 1. 文本消息

用于发送简单文本或 `@` 提醒消息。

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
                    lark (
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

用于分享群聊名片。

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
                    lark (
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

用于发送单张图片消息。图片资源 `Key` 的获取方式可参考常见问题页面。

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
                    lark (
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

用于发送由多个元素组成的富文本消息体。

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
                    lark (
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

适用于需要展示状态信息、按钮跳转和结构化内容的场景。

> 1. 按钮颜色 `type` 的取值范围为 `primary`、`danger`、`default`。
> 2. 字体颜色 `color` 的取值范围为 `green`、`red`、`grey`、`default`。

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
                    lark (
                        robot: "f72aa1bb-0f0b-47c7-8387-272d266dc25c",
                        type: "CARD",
                        title: "📢 Jenkins 构建通知",
                        text: [
                            "📋 **任务名称**：[${JOB_NAME}](${JOB_URL})",
                            "🔢 **任务编号**：[${BUILD_DISPLAY_NAME}](${BUILD_URL})",
                            "🌟 **构建状态**: <font color='green'>成功</font>",
                            "🕐 **构建用时**: ${currentBuild.duration} ms",
                            "👤 **执  行 者**: ${env.BUILD_USER}",
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
## 6. 带图片的卡片消息

可通过 `topImg` 和 `bottomImg` 在卡片正文顶部或底部插入图片。

| 字段            | 类型      | 说明                                                                                                                                                                                                                                                                                         |
|---------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | string  | 图片标题                                                                                                                                                                                                                                                                                       |
| `altContent`  | string  | 悬浮（hover）在图片上时展示的说明文案                                                                                                                                                                                                                                                                      |
| `radius`      | string  | 图片圆角半径，支持以下格式：<br>• `5px`（像素）<br>• `20%`（百分比）                                                                                                                                                                                                                                              |
| `scale_type`  | string  | 图片裁剪模式（当图片比例与 `size` 不一致时生效）：<br>• `center`：居中裁剪<br>• `crop_top`：顶部裁剪<br>• `fit_horizontal`：保持完整显示，不裁剪（自动适配）                                                                                                                                                                               |
| `size`        | string  | 图片尺寸（仅在 `scale_type` 为 `center` 或 `crop_top` 时生效）<br>**预设值**：<br>• `stretch`：超大图（适合高宽比 < 16:9）<br>• `large`：160×160 px（多图混排）<br>• `medium`：80×80 px（图文封面）<br>• `small`：40×40 px（头像）<br>• `tiny`：16×16 px（图标/备注）<br>**自定义**：<br>• 格式：`[width]px [height]px`，如 `"120px 80px"`（宽高范围：1–1000px） |
| `transparent` | boolean | 是否为透明底色<br>• `true`：透明背景<br>• `false`：白色背景（默认）                                                                                                                                                                                                                                             |
| `preview`     | boolean | 点击后是否放大预览：<br>• `true`：点击弹出图片查看器，支持放大查看<br>• `false`：点击触发卡片整体交互，不弹出查看器（默认行为需结合卡片事件）                                                                                                                                                                                                        |

```shell
pipeline {
    agent any
    stages {
        stage('text'){
            steps {
                echo "发送IMG卡片消息..."
            }
            post {
                success {
                    lark (
                        robot: "f72aa1bb-0f0b-47c7-8387-272d266dc25c",
                        type: "CARD",
                        title: "📢 Jenkins 构建通知",
                        text: [
                            "📋 **任务名称**：[${JOB_NAME}](${JOB_URL})",
                            "🔢 **任务编号**：[${BUILD_DISPLAY_NAME}](${BUILD_URL})",
                            "🌟 **构建状态**: <font color='green'>成功</font>",
                            "🕐 **构建用时**: ${currentBuild.duration} ms",
                            "👤 **执  行 者**: ${env.BUILD_USER}",
                            "<at id=all></at>"
                        ],
                        topImg: [
                            mode: "fit_horizontal",
                            imgKey: "img_v2_9b14e850-3757-43ae-96b4-965ed81e7f8g",
                            altContent: "正文顶部图片",
                        ],
                        bottomImg: [
                            mode: "fit_horizontal",
                            imgKey: "img_v2_9b14e850-3757-43ae-96b4-965ed81e7f8g",
                            altContent: "正文底部图片",
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
