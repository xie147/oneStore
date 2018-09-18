<style scoped lang="less">
  .login{
  text-align:center;
    button{
      width:1.4rem;
      height:.6rem;
      line-height: .6rem;
      text-align: center;
      border-radius:.1rem;
      outline: none;
      border:none;
      margin:0 .2rem;
    }
    .register{
      background:#fff;
      border:1px solid #aaa;
    }
    .login-btn{
      background:#e4354f;
      color:#fff;
    }
  }
</style>
<template>
  <div class="login">
    <div>
      <button class="register">注册</button>
      <button class="login-btn" @click="login">
        登录
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      login:function(){
        this.$router.push({
          path:'/login'
        })
      }
    }
  }
</script>
