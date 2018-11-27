<template>
    <div class='chat-header'>
        <div class='chat-name'>
            {{$store.state.chatName}}
        </div>
        <div class='handle'>
            <button class='follow-up-btn'>跟进</button>
            <span @click='checkMember' class='check-member'>{{!this.$store.state.isCheckMember ? '查看成员' : '关闭查看'}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           isCheck: false
        }
    },
    commputed:{
        // isCheckMember() {
        //     console.log(this.$store.state.isCheckMember,'isCheckMember')
        //     return this.$store.state.isCheckMember
        // },
    },
    methods: {
        checkMember() {
            this.$store.commit('isCheckMember')

        }
    }
}
</script>
<style scoped lang='less'>
   .chat-header {
      box-sizing: border-box; 
      height:40px;
      border-bottom:1px solid #ccc;
      .chat-name {
          float: left;
          height:40px;
          line-height:40px;
      }
      .handle {
          float: right;
          margin-right:20px;
          .follow-up-btn {
            width: 60px;
            height: 30px;
            background: #fff;
            border-radius: 5px;
            outline: none;
            margin-top: 5px;
            margin-right:5px;
           }
           .check-member{
               font-size:14px;
               cursor: pointer
           }
      }
   }
</style>


