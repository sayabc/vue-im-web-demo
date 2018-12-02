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
1. [x] 路由重新配置PC src/pages/sayabc  done
2. [x] 模块的重新配置(列表+聊天框)  done
3. [ ] 动态配置页面的模块
4. [ ] 列表相关: 展示来源、排序、获取新消息、消息内容控制、列表样式微调(标题和描述处理、日期、已读未读显示等)
   [ ] 分组关系如何建立(两种角色的分类教师端和管理端，如何处理关系 ==> 两个角色在不同的分组)
5. [ ] 具体聊天内容:
6. [ ] vux是适配移动端主要是微信的，最小代价更改样式库...
7. [ ] 管理端的 iframe 通信以及常见问题的汇总...
8. [ ] 列表暂时增加消息中心(用来测试接收好友邀请入群) 列表艾特功能
9. [ ] 使用webrtc 引入检查和相关sdk(解决音视频方案)，以及应用方案
        1. [x] 暂时使用webrtc


### 项目启动与开发
1. npm run server
2. npm run dev

# 项目中含有的TODO 是必须注意解决的问题

### 注意事项
1. WebRTC 的音视频支持需要开启https, http模式下无法捕捉摄像头和麦克风 [文档](https://dev.yunxin.163.com/docs/product/%E9%9F%B3%E8%A7%86%E9%A2%91%E9%80%9A%E8%AF%9D/SDK%E5%BC%80%E5%8F%91%E9%9B%86%E6%88%90/Web%E5%BC%80%E5%8F%91%E9%9B%86%E6%88%90?#WebRTC_%E5%9F%BA%E4%BA%8EWebRTC%E7%9A%84%E5%AE%9E%E6%97%B6%E9%9F%B3%E8%A7%86%E9%A2%91)
2. 云信支持文档 [faq](http://faq.yunxin.163.com/#KB0234)
3. npm run dev 不支持热更新，调试过程中注意
4. 房间多人不支持呼叫、推送、挂断服务 呼叫方案使用点对点自定义通知发送呼叫(增加状态 方便点对点选人沟通，微信采用的是发起视频 语音界面有视频直接打开)[文档](https://dev.yunxin.163.com/docs/product/%E9%9F%B3%E8%A7%86%E9%A2%91%E9%80%9A%E8%AF%9D/SDK%E5%BC%80%E5%8F%91%E9%9B%86%E6%88%90/Web%E5%BC%80%E5%8F%91%E9%9B%86%E6%88%90/%E9%9F%B3%E8%A7%86%E9%A2%91%E9%80%9A%E8%AF%9D%E6%B5%81%E7%A8%8B%E5%A4%9A%E4%BA%BA?kw=netcall.create%20Channel&pg=1&pid=2&#%E5%BC%80%E5%90%AF%E9%9F%B3%E8%A7%86%E9%A2%91%E8%BF%9E%E6%8E%A5WebRTC)
6. webrtc 需要https环境
        mac: 配置 /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --unsafely-treat-insecure-origin-as-secure="115.159.17.49:443" --user-data-dir=/Users/wangxudong/me/sayabc/vue-im-web-demo

        <!-- https://app.netease.im:port -->

7. 音视频通话步骤: 创建房间 -->
8. 两种通信方式 webrtc和vuex