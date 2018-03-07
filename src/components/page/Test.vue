<template>
  <div>
    <router-link to="/foo/">go to foo</router-link><br>
    <router-link to="/test">go to test</router-link><br>
    <router-link to="/user/zhy/post/12345">go to user/zhy/post/12345</router-link><br>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left" @click="goBack">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <el-button type="primary" @click="go1">跳转1</el-button>
    <el-button type="primary" @click="go2">跳转2</el-button>
    <div class="out">
      <router-view class="view one"></router-view>
      <router-view class="view two" name="a"></router-view>
      <router-view class="view three" name="b"></router-view>
    </div>

  </div>

</template>

<script>
    export default {
      data(){

        return{

        }
      },
      computed:{

      },
      methods:{
        goBack(){
          window.history.length>1?this.$router.go(-1):this.$router.push('/')
        },
        go1(){
          this.$router.push('readme')
        },
        go2(){
          const id=123;
          // this.$router.push({ name: 'user', params: { id }});  //如果提供了 path，params 会被忽略
          this.$router.push({ path: `/user/${id}`});
          // this.$router.push({ path: 'register', query: { plan: 'private' }})
        }
      }
    }
</script>

<style scoped>
  .out{
    width: 400px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .view{
    /*flex: 1;*/
    width: 100px;
    height: 100px;
    border: 1px solid;
  }
  .one{
    background: yellow;
  }
  .two{
    background: red;
  }
  .three{
    background: green;
  }
</style>
