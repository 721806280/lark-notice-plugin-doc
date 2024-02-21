# Freestyle 项目

## 1. 机器人配置
![](../ding/img/faq-config.png)

## 2. 自定义消息内容
![](../ding/img/faq-custom-md-msg.png)

```text
## <font color='blue'>📢 Jenkins 构建通知</font>  
---  
📋 **任务名称**：[${PROJECT_NAME}](${JENKINS_URL}/job/${PROJECT_NAME}/)  
🔢 **任务编号**：[${JOB_NAME}](${JENKINS_URL}/job/${PROJECT_NAME}/${BUILD_NUMBER}/)  
🌟 **构建状态**:  <font color='blue'>${JOB_STATUS}</font>  
🕐 **构建用时**:  ${JOB_DURATION}  
👤 **执  行 者**:  ${EXECUTOR_NAME}  
![图片](https://p4.itc.cn/q_70/images03/20230512/32c7ad09b5904bea8506d74f96483000.png)
```