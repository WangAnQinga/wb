<template>
  <div class="pubHeader">
    <div class="headermain">
      <h1></h1>
      <ul>
        <router-link to="/" tag="li">首页</router-link>
        <router-link to="/treasure" tag="li">所有夺宝</router-link>
        <router-link to="/reward" tag="li">开奖记录</router-link>
        <router-link to="/invite" tag="li">邀请有奖</router-link>
        <router-link to="/news" tag="li">新手指南</router-link>
        <router-link to="/question" tag="li">问题反馈</router-link>
      </ul>
      <div class="login">
        <span>登陆</span> | <span>注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pubHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .pubHeader{
     width: 100%;
     position: fixed;
     top:0;
     left:0;
     height:100px;
     background:gold
   }
   .headermain{
     width: 100%;
     max-width: 1200px;
     height: 100%;
     margin:auto;
   }
   .headermain h1{
     width: 190px;
     height: 100px;
     background:red;
     float: left;
   }

   .headermain ul{
     width: 700px;
     height:100px;
     display: flex;
     flex-flow: row nowrap;
     justify-content: space-between;
     align-items: center;
     float: left;
   }
   .headermain ul li{

   }
   .headermain .login{
     width: 200px;
     height: 100px;
     float: right;
     background:coral;
    display: flex;
     flex-flow: row nowrap;
     justify-content: center;
     align-items: center;
   }
   .headermain .login span{
     width: 80px;
     height: 100px;
     line-height: 100px;
     text-align: center;
     display: inline-block
   }
    
</style>
