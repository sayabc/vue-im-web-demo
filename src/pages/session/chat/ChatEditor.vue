<template>
  <div class="m-chat-editor">
    <div class="u-editor-input">
      <div class='editor-header'>
          <span v-if="!isRobot" class="u-editor-icon" @change="sendFileMsg">
            <i class="u-icon-img select-file-img">
            </i>
            <input type="file" ref="fileToSent">
          </span>
          <span
            v-if="!isRobot"
            class="u-editor-icon"
            id="showNetcallVideoLink"
            @click.stop="startTeamVoice"
          >
            <i class="u-icon-img call-img">
            </i>
          </span>
      </div>
      <div class='input-box'>
        <div @blur="blur" @keydown="keyDown" ref='editTextArea' class='msg-textarea' contenteditable="true" @click='onInputFocus' @input="editMsg">
            
        </div>
        <div class='send'>
          <span class="u-editor-send" @click="sendTextMsg">发 送</span>
        </div>
      </div>
      <div class='ait-list' v-show='isAt' :style="{left:left+'px'}">
        <ul >
          <li id='at'  data-name='at' @click='at(item)' v-for='(item,index) in members' :class='{active:index === activeIndex}'>
            <span id='atAvatar' data-name='at' class='avatar'><img :src="item.avatar" alt=""></span>
            <span id='atAlias' data-name='at' class='alias'>{{item.alias}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import util from "@/utils";
import config from "@/configs";
import pageUtil from "@/utils/page";
import {mapGetters} from 'vuex';
import { setTimeout } from 'timers';

let editTextArea;
export default {
  props: {
    scene: String,
    to: String,
    isRobot: {
      type: Boolean,
      default() {
        return false;
      }
    },
    invalid: {
      type: Boolean,
      default: false
    },
    invalidHint: {
      type: String,
      default: "您无权限发送消息"
    }
  },
  watch: {
    msgToSent(curVal, oldVal) {
      if (this.isRobot || this.scene !== 'team') {
        return;
      }
      if (this.msgToSent[this.msgToSent.length - 1] === '@') {
        //在可编辑div中插入span，span的宽度为0，通过span来定位输入的位置
        let childNodes = editTextArea.childNodes;
        let lastChildNode = childNodes[childNodes.length-1];
        let oSpan;
        //如果最后一个元素是用做标记位置的span，就不需要再插入了
        if(lastChildNode.nodeType === 1 && lastChildNode.id.includes('at-')){
          oSpan = lastChildNode;
        }else {
          this.insertAtLast(`<span id="at-${this.msgToSent.length-1}"></span>`);
          oSpan = document.getElementById(`at-${this.msgToSent.length-1}`);
        }
        this.left = oSpan.offsetLeft;
        this.isAt = true;
      } else {
        this.isAt = false;
      }
    }
  },
  data() {
    return {
      isEmojiShown: false,
      isRobotListShown: false,
      msgToSent: "",
      icon1: `${config.resourceUrl}/im/chat-editor-1.png`,
      icon2: `${config.resourceUrl}/im/chat-editor-2.png`,
      icon3: `${config.resourceUrl}/im/chat-editor-3.png`,
      left: 0, //@列表偏移left
      isAt: false, //是否输入了@
      activeIndex: 0 //@列表中选中的项的index
    };
  },
  // watch:{
  //   'sessionId':function(){
  //     pageUtil.scrollChatListDown();
  //   }
  // },
  computed: {
    ...mapGetters(['sessionId', 'teamInfo']),
    members() {
      if (this.teamInfo) {
        var members = this.$store.state.teamMembers[this.teamInfo.teamId];
        var userInfos = this.$store.state.userInfos;
        //var needSearchAccounts = [];
        if (members) {
          let newMembers = [];
          members.forEach(item => {
            var member = Object.assign({}, item); //重新创建一个对象，用于存储展示数据，避免对vuex数据源的修改
            member.valid = true; //被管理员移除后，标记为false
            if (member.account !== this.$store.state.userUID) {
                if (userInfos[member.account] === undefined) {
                   // needSearchAccounts.push(member.account);
                    member.avatar = member.avatar || this.avatar;
                    member.alias = member.nickInTeam || member.account;
                } else {
                    member.avatar = userInfos[member.account].avatar;
                    member.alias =
                        member.nickInTeam || userInfos[member.account].nick;
                }
                newMembers.push(member);
            }
          });
          //如果群中的成员没有在现有的用户列表中，需要重新拉取用户信息
          // if (needSearchAccounts.length > 0 && !this.hasSearched) {
          //   this.hasSearched = true;
          //   while (needSearchAccounts.length > 0) {
          //     this.searchUsers(needSearchAccounts.splice(0, 150));
          //   }
          // }
          return newMembers;
        }
        return [];
      }
    }
  },
  methods: {
    blur(e) {
      //如果点击的是at列表要定click事件执行完了再隐藏列表
      setTimeout(()=>{
        this.isAt = false;
      },300)
    },
    //向上向下键选中@列表中的某一项，回车输入到列表中，回车可以直接发送信息
    keyDown(e) {
      if(!e.shiftKey) {
        if(this.isAt) {
          if(e.keyCode === 38) {
            this.activeIndex = this.activeIndex >=1 ? this.activeIndex - 1 : this.members.length-1;
          }
          if(e.keyCode === 40) {
            this.activeIndex = this.activeIndex < this.members.length-1 ? this.activeIndex + 1 : 0;
          }
          if(e.keyCode === 13) {
            this.at(this.members[this.activeIndex])
          }
        }else {
          if(e.keyCode === 13) {
            this.sendTextMsg();
          }
        }
        if(e.keyCode === 13){
          //没有按shiftKey的回车阻止输入到div中
          e.preventDefault();
        }
      }
    },
    //获取@的群成员的account
    getAtList() {
       let atList = [];
       this.members.forEach(item => {
           if(this.msgToSent.includes('@' + item.alias)) {
              atList.push(item.account)
           }
       });
       return atList;
    },
    sendTextMsg() {
      if (this.invalid) {
        this.$toast(this.invalidHint);
        return;
      }
      if (/^\s*$/.test(this.msgToSent)) {
        alert("请不要发送空消息");
        return;
      } else if (this.msgToSent.length > 800) {
        alert("请不要超过800个字");
        return;
      }
      // this.msgToSent = this.msgToSent.trim();
      console.log(this.msgToSent,'msgToSent is :')
      let sendData = {
           type: "text",
           scene: this.scene,
           to: this.to,
           text: this.msgToSent
      }
      //如果有@某人，发送扩展字段custom
      if(this.scene === 'team') {
        let atList = this.getAtList();
        sendData.custom = JSON.stringify(atList)
      }
      this.$store.dispatch("sendMsg", sendData);
      this.msgToSent = "";
      this.clearEditDiv();
      pageUtil.scrollChatListDown();
    },
    clearEditDiv() {
      editTextArea.innerHTML = ''
    },
    sendFileMsg() {
      if (this.invalid) {
        this.$toast(this.invalidHint);
        return;
      }
      let ipt = this.$refs.fileToSent;
      if (ipt.value) {
        this.$store.dispatch("sendFileMsg", {
          scene: this.scene,
          to: this.to,
          fileInput: ipt
        });
      }
    },
    startTeamVoice() {
      // 可能需要一些判断 当前群组 TODO
      // 通知 mask 展示群组列表 展现前需要一个开关关闭其他的弹层 在mask子组件里进行控制
      this.$store.commit('updateMaskState', true)
      this.$store.commit("updateSelectMemberDiaState", true);
    },
    chooseRobot(robot) {
      if (robot && robot.account) {
        let len = this.msgToSent.length;
        if (len === 0 || this.msgToSent[len - 1] !== "@") {
          this.msgToSent += "@" + robot.nick + " ";
        }
        {
          this.msgToSent += robot.nick + " ";
        }
      }
    },
    hideRobotList() {
      this.isRobotListShown = false;
    },
    onInputFocus(e) {
      setTimeout(() => {
        // todo fixme 解决iOS输入框被遮挡问题，但会存在空白缝隙
        // e.target.scrollIntoView();
        pageUtil.scrollChatListDown();
      }, 200);
    },
    //在编辑框的光标位置插入内容
    insertAtLast(con) {
      // let childNodes = editTextArea.childNodes;
      // let lastChildNode = childNodes[childNodes.length-1];
      //处理回车后插入文本的情况，可编辑的div回车会生成div或p
      // if(lastChildNode.nodeType === 1 && !lastChildNode.id.includes('at-')){
      //     lastChildNode.innerHTML += con;
      // }else if(lastChildNode.nodeType === 3 || lastChildNode.id.includes('at-')) {
      //     editTextArea.innerHTML += con;
      // }
      editTextArea.innerHTML += con;
      //插入文本后设置光标在文本内容最后面
      this.set_focus(editTextArea);
    },
    at(item) {
      console.log('11111111111111111')
      this.isAt = false;
      //@xxx后面加空格
      this.msgToSent += item.alias;
      this.insertAtLast(item.alias + '&nbsp;');
      this.activeIndex = 0;
    },
    //把光标重置到末尾
    set_focus(el) {
      el.focus();
      if(document.selection){
        var range = document.selection.createRange();
        range.moveToElementText(el);
        range.select();
        document.selection.empty(); //取消选中
      }else {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    },
    searchUsers(Accounts) {
      this.$store.dispatch("searchUsers", {
        accounts: Accounts,
        done: users => {
          this.updateTeamMember(users);
        }
      });
    },
    updateTeamMember(users) {
      users.forEach(user => {
        var member = this.members.find(member => {
          return member.account === user.account;
        });
        if (member) {
          member.avatar = user.avatar;
          member.alias = member.nickInTeam || user.nick;
        }
      });
    },
    // valueMsgToSend(e) {
    //   console.log(e,'keydown e is :')
    //   //如果最后一位是回车，过滤掉
    //   // let innerText = e.target.innerText;
    //   // if(innerText[innerText.length-1] === '\n') {
    //   //   this.msgToSent = innerText.substring(0,innerText.length-1)
    //   // }else {
    //   //   this.msgToSent = innerText
    //   // }
    //   this.msgToSent = e.target.innerText;
    // },
    //给msgToSend赋值
    editMsg(e) {
      this.msgToSent = e.target.innerText;
    }
  },
  mounted() {
    editTextArea = this.$refs['editTextArea']
  }
};
</script>

<style scoped lang='less'>
.m-chat-editor {
  padding: 10px 10px 20px;
  // width:100%;
  height: 100%;
  box-sizing: border-box;
  .u-editor-input {
    width: 100%;
    height: 100%;
    background:#fff;
    border-radius: 10px;
    position: relative;
    .editor-header {
      width:100%;
      height:40px;
      border-bottom:1px solid #EEEEEE;
      position: absolute;
      // z-index: 1;
      .u-editor-icon {
        position: relative;
        display: inline-block;
        vertical-align: bottom;
        .u-icon-img {
          display: inline-block;
          width:40px;
          height:40px;
          &.call-img {
            background:url('../../../assets/images/call.png') 100% no-repeat;
          }
          &.select-file-img {
            background:url('../../../assets/images/select-file.png') 100% no-repeat;
          }
        }
        input {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
    .input-box {
       height:100%;
       width:100%;
       box-sizing: border-box;
       padding-top:40px;
       .msg-textarea {
         float:left;
         width:80%;
         height:100%;
         outline: none;
         overflow:auto;
         padding:5px;
         box-sizing: border-box;
       }
       
      .send {
        float:right;
        width:20%;
        height:100%;
        min-width:70px;
        padding-top:20px;
        box-sizing: border-box;
        .u-editor-send {
          display: inline-block;
          width:70px;
          height:30px;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
          background:rgba(3,169,244,1);
          border-radius:21px;
          color:#fff;
        }
      }
    }
    .ait-list {
      position: absolute;
      bottom:0;
      height: 130px;
      overflow: auto;
      width: 162px;
      background:rgba(255,255,255,1);
      border-radius:4px;
      border:1px solid rgba(185,197,207,1);
      z-index: 100;
      li {
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        .avatar img{
          width:20px;
          height:20px;
          border-radius: 50%;
        }
        .alias {
          vertical-align: bottom;
          font-size:12px;
          color:#444D58;
        }
      }
      li.active{
        background:#03A9F4;
        .alias{
          color:#fff;
        }
      }
    }
  }
  
}
</style>
