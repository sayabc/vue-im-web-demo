import store from '../'
import {onUpdateFriend, onDeleteFriend} from './friends'
import {onRevocateMsg} from './msgs'

export function onSysMsgs (sysMsgs) {
  store.commit('updateSysMsgs', sysMsgs)
}

export function onSysMsg (sysMsg) {
  switch (sysMsg.type) {
    // 在其他端添加或删除好友
    case 'addFriend':
      onUpdateFriend(null, {
        account: sysMsg.from
      })
      store.commit('updateSysMsgs', [sysMsg])
      break
    case 'deleteFriend':
      onDeleteFriend(null, {
        account: sysMsg.from
      })
      break
    // 对方消息撤回
    case 'deleteMsg':
      if(sysMsg.scene === 'p2p') {
        sysMsg.sessionId = `p2p-${sysMsg.from}`
      } else {
        sysMsg.sessionId = `team-${sysMsg.to}`
      }
      onRevocateMsg(null, sysMsg)
      break
    case 'teamInvite': //被邀请入群
    case 'applyTeam':  // 申请入群
    case 'rejectTeamApply':  // 申请入群被拒绝
    case 'rejectTeamInvite': // 拒绝入群邀请
      store.commit('updateSysMsgs', [sysMsg])
      break
  }
  store.commit('updateSysMsgState', sysMsg)
}

export function onSysMsgUnread (obj) {
  store.commit('updateSysMsgUnread', obj)
}

export function onCustomSysMsgs (customSysMsgs) {
    console.log('customSysMsgs: ',customSysMsgs)
  if (!Array.isArray(customSysMsgs)) {
    customSysMsgs = [customSysMsgs]
  }
  customSysMsgs = customSysMsgs.filter(msg => {
    let myInfo = store.state.myInfo
    if (msg.type === 'custom') {
      if (msg.content) {
        try {
          let content = JSON.parse(msg.content)
          // 消息正在输入中
          if ((content.id + '') === '1') {
            return false
          }
          // 捕捉音频 sendCustomSysMsg 群发消息
          if(msg.scene === 'p2p' && msg.content && JSON.parse(msg.content).type === 1){ // 这个type 1 代表语音通话
            // 直接进入那个群界面、吊起通话接受、更新stroe里的curChatTeamId、
            // 这里要去重，比如曾经有过很多个语音通话 而且到这一步要设置该消息为消息已读...p2p-an群组中
            // 而且需要对当前语音进行有效判断
            console.log('表示收到了自定义群组语音消息 content: ',content, content.curChatTeamId)
            console.log('表示当前进入的群组id是', content.curChatTeamId)

            let curChatTeamId = content.curChatTeamId
            let curChannelName = content.curChannelName

            // TODO 临时方案 先将自定义设置为已读，否则会点击左侧非自定义群组列表 程序循环 界面无法跳转别的群组 看产品
            // this.$store.dispatch("setCurrSession", 'team-'+content.teamId);

            // 打开对应的群组
            store.dispatch("setCurrSession", curChatTeamId); // 目前限定是组内群消息 TODO

            console.log('curChatTeamId: ', curChatTeamId)
            // 更新store中的当前通话的teamId  和 channel name 房间名
            // 这个ID存的有点坑 TODO
            store.commit('updateCurCallTeamId', curChatTeamId.replace('team-', '')) // 查看控制台来看当前是否进入某个群组 sessionId
            store.commit('updateCurChannelName', curChannelName)

            // 更新该channel的成员列表
            store.commit('updateCurChannelAllMembers', content.members)

            // 可选择是否接听逻辑放在弹出的界面里面 see ShowBeCallPage.vue 本人也能收到通知消息  被叫页面
            console.log('表示msg', msg, myInfo.account)
            if(msg.to === myInfo.account) { // 当前用户是被叫 通知vuex打开被呼叫页面
              store.commit('updateBeCallState', true)
            }
          }
        } catch (e) {}
      }
    }
    return true
  })
  if (customSysMsgs.length > 0) {
    store.commit('updateCustomSysMsgs', customSysMsgs)
  }
}

// 不传obj则全部重置
export function markSysMsgRead ({state, commit}, obj) {
  const nim = state.nim
  let sysMsgs = []
  if (obj && obj.sysMsgs) {
    sysMsgs = obj.sysMsgs
  } else {
    sysMsgs = state.sysMsgs
  }
  if (Array.isArray(sysMsgs) && sysMsgs.length > 0) {
    nim.markSysMsgRead({
      sysMsgs,
      done: function (error, obj) {
      }
    })
  }
}

export function markCustomSysMsgRead ({state, commit}) {
  commit('updateCustomSysMsgUnread', {
    type: 'reset'
  })
}

export function resetSysMsgs ({state, commit}, obj) {
  commit('resetSysMsgs', obj)
}

export function deleteSysMsgs({commit}, obj) {
  commit('deleteSysMsgs', obj)
}