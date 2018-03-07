<template>
   <div class="header">
     <div class="logo">权限管理测试</div>
     <div class="user-info">
       <el-dropdown trigger="click">
         <span class="el-dropdown-link">
           <img class="user-logo" src="../../../static/images/logo.jpg">{{userName}}
         </span>
         <el-dropdown-menu slot="dropdown">
           <el-dropdown-item >退出</el-dropdown-item>
         </el-dropdown-menu>
       </el-dropdown>
     </div>
   </div>
</template>

<script>
    export default {
       data(){
         return {
           name:'小晗晗'
         }
       },
      computed:{
         userName(){
           const username=localStorage.getItem('ms_username')
           return username || this.name
         }
      },
      methods: {

      }
    }
</script>

<style lang="less">
  .header{
    position:relative;
    box-sizing:border-box;
    width: 100%;
    height: 70px;
    font-size:22px;
    color:#fff;
    background: #1bbc21;
    line-height:70px;
    .logo{
      float:left;
      width: 240px;
      text-align: center;
    }
    .user-info{
      float: right;
      padding-right: 50px;
      font-size: 20px;
      color: #fff;
      .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
      }
    }
    .user-logo{
      position: absolute;
      left: 0;
      top: 15px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .el-dropdown-menu__item{
      text-align: center;
    }
  }
</style>
