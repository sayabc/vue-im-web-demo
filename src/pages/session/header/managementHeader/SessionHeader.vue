<template>
  <div class='search'>
    <div class='input-box'>
      <input
        v-model="teacherInfo"
        class='search-input'
        type="text"
        placeholder="搜索老师姓名或ID"
      >
    </div>
    <div class='search-list' v-if='searchList.length'>
      <ul> 
        <li
          v-for="item in searchList"
          @click='enterChat(item)'
        >
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
 import { to } from "@/api/util.js";
 import { searchTeacherName, getGroup, searchTeacherId} from "@/api/index";
 import { setTimeout } from 'timers';

 const teacherIdRex = /^[0-9]*$/;

export default {
  data() {
    return {
      teacherInfo: "",
      searchList: []
    };
  },
  watch:{
    'teacherInfo': function(newVal) {
      //搜索名字
      if(newVal && !teacherIdRex.test(newVal)) {
        searchTeacherName({name:newVal,page_size: 20})
        .then((res) => {
          this.searchList = res.resultSet || []
        }).catch((e) => {
          console.log(e,'搜索老师姓名报错')
        })
      }
      //搜索id
      else if(newVal && newVal.length > 1 && teacherIdRex.test(newVal)) {
        searchTeacherId(newVal)
          .then((res) => {
            this.searchList = [];
            if(res.account_id && res.en_name) {
              this.searchList.push({accountId:res.account_id,name:res.en_name})
            }
          }).catch((e) => {
            console.log(e,'搜索老师id报错')
          })
      }
      //输入框中没有内容时，置空下拉列表
      else if(!newVal) {
        this.searchList = [];
      }
    }
  },
  methods: {
    enterChat(session,sessionTeam) {
      getGroup({teacherId:session.accountId,sessionTeam:sessionTeam || 1})
      .then(async (res) => {
        if (res && res.data) {
          await this.$store.dispatch("setCurrSession", 'team-'+res.data);         
        }
      }).catch((e) => {
          console.log(e,'建群失败')
      })
      this.teacherInfo = '';
      this.searchList = [];
    }
  }
};
</script>
<style scoped lang="less">
.search {
  height: 40px;
  .input-box {
    padding-left: 20px;
    .search-input {
      box-sizing:border-box;
      height: 30px;
      width: 130px;
      padding:5px;
      outline: none;
      outline-style: none;
      border-radius: 5px;
      outline-color: transparent;
      box-shadow: none;
    }
  }
  .search-list {
    position: relative;
    z-index: 100;
    padding: 0 20px;
    ul {
      background: rgb(247, 244, 244);
      border-radius: 0 0 5px 5px;
      width: 130px;
      max-height:400px;
      overflow: auto;
      cursor: pointer;
      border-radius: 5px;
      li{
        padding-left:5px;
        font-size:14px;
        font-weight:500;
      }
    }
  }
}
</style>


