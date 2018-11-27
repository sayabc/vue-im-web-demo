<template>
    <div class='info'>
       <div class='teacher-info' v-show='!$store.state.isCheckMember'>
          <div class='info-header'>
              老师信息
          </div>
       </div>
       <div class='team-member' v-show='$store.state.isCheckMember'>
          <div class='info-header'>
              组内成员
          </div>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang='less' scoped>
   .info {
      .info-header{
         box-sizing: border-box;
         height:40px;
         border-bottom:1px solid #ccc;
      }
   }
</style>


