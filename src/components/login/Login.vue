<template>
  <div class="login-wrap">
    <div class="head-log">
      <!--<img class="company-log" src="" alt="公司logo"/>-->
    </div>
    <div class="login">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form" >
         <el-form-item prop="userName">
           <el-input v-model="loginForm.userName" placeholder="用户名"></el-input>
         </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button :loading="loading"  @click.native.prevent="handleLogin">登录</el-button>
        </div>
      </el-form>
    </div>
    <div class="boom">
      <ul class="bg-bubbles">
        <li v-for="i in 10" :key="i"></li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    data(){
      const validateUsername = (rule,value,callback) =>{
        if(value === ''){
          callback(new Error('请输入用户名'))
        }else {
          callback()
        }
      }
      const validatePassword = (rule,value,callback) => {
        if(value.length<5){
          callback(new Error('密码不能小于5位'))
        }else {
          callback()
        }
      }
      return{
        checked:true,
        loginForm:{
          userName:'admin',
          password:'admin'
        },
        rules:{
          userName:[{
            required:true,
            trigger:'blur',
            validator: validateUsername
          }],
          password:[{
            required:true,
            trigger:'blur',
            validator:validatePassword
          }]
        },
        loading:false
      }
    },
    methods:{
      handleLogin(){
        this.$router.push('/test')
      }
    }
  }
</script>

<style lang="less">
  .login-wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .boom {
    z-index: -111;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom right, #50A3A2, #53E3A6);
    overflow: hidden;
  }

  .login{
    position: absolute;
    width: 300px;
    height: 140px;
    margin: 0 0 0 0;
    padding: 40px;
    border-radius: 5px;
    background: #ffffff;
   }

  .login-btn{
    text-align: center;
  }

  .bg-bubbles {
    position: absolute;
    // 使气泡背景充满整个屏幕；
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    // 如果元素内容超出给定的宽度和高度，overflow 属性可以确定是否显示滚动条等行为；
    li {
      position: absolute;
      bottom: -160px;
      width: 40px;
      height: 40px;
      background-color: rgba(255, 555, 255, 0.15);
      list-style: none;
      // 使用自定义动画使气泡渐现、上升和翻滚；
      animation: square 15s infinite;
      transition-timing-function: linear;
      // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
      &:nth-child(1) {
        left: 10%;
      }
      &:nth-child(2) {
        left: 20%;
        width: 90px;
        height: 91px;
        animation-delay: 2s;
        animation-duration: 7s;
      }
      &:nth-child(3) {
        left: 25%;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-duration: 8s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(5) {
        left: 70%;
      }
      &:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
      }
      &:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        animation-delay: 2s;
      }
      &:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
        animation-duration: 15s;
      }
      &:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        animation-delay: 2s;
        animation-duration: 12s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(10) {
        left: 85%;
        width: 160px;
        height: 160px;
        animation-duration: 5s;
      }
    }
    @keyframes square {
      0% {
        opacity: 0.5;
        transform: translateY(0px) rotate(45deg);
      }
      25% {
        opacity: 0.75;
        transform: translateY(-400px) rotate(90deg);
      }
      50% {
        opacity: 1;
        transform: translateY(-600px) rotate(135deg);
      }
      100% {
        opacity: 0;
        transform: translateY(-1000px) rotate(180deg);
      }
    }}

</style>
