### TODO
1. 项目结构和功能模块理清楚
2. 找出移动适配部分 更改为pc端适配
3. 按模块搭建骨架
~~(以上三点11.25未完成)~~
4. 项目的运行方式

### 需求解析
1. target: react  vue 两套 暂定使用同一套项目 基于vue
2. team(群组)和p2p(单点沟通)的模式
3. 老师页面: 两个群组，每个群组包含所有的老师和业务人员，是以问题为维度定义分类，两个固定的群组；
            列表顺序可变化(这个变化是否必须，当老师有n个也要实时刷新?)；
4. 业务页面: 以老师为维度，每个群组包含一个老师和n个业务人员，一个老师一个群组
            列表顺序固定不变；
5. 共同部分: 时间间隔5分钟、本周、日期(这个点需和产品明确)
            会话支持文本、图片(选择图片)、视频(含语音)会话(需尽快demo出页面和window、mac的视频功能)，艾特功能


<!-- 11.26工作进度 -->
1. 路由重新配置PC src/pages/sayabc  done
2. 模块的重新配置(列表+聊天框)  done
3. 动态配置页面的模块
4. 列表相关: 展示来源、排序、获取新消息、消息内容控制、列表样式微调(标题和描述处理、日期、已读未读显示等)
   分组关系如何建立(两种角色的分类教师端和管理端，如何处理关系 ==> 两个角色在不同的分组)
5. 具体聊天内容:
6. vux是适配移动端主要是微信的，最小代价更改样式库...
7. 管理端的 iframe 通信以及常见问题的汇总...
8. 列表暂时增加消息中心(用来接收好友邀请入群) 列表艾特功能