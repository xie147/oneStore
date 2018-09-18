<style scoped lang="less">
.login{
  margin-top:1rem;
.content{
  padding-top:.6rem;
}
.login-btn{
  line-height:1rem;
  height:1rem;
  text-align: center;
  width:80%;
  margin:0 auto;
  border-radius:.1rem;
  background:#aaa;
  color:#fff;
  &.active{
  background:#e4354f;
   }
}
.setting{
margin:.6rem .3rem;
overflow:hidden;
  .autoLogin{
    float:left;

    span{
      font-size:.3rem;
      display:inline-block;
      vertical-align: middle;
    }

  }
  .re-password{
    float:right;
  }
}
  .login-input{

    &>div{
        height:1rem;
      }
      i{
        font-size: .6rem;
      }
      i,span{
        display:inline-block;
        height:1rem;
        line-height: 1rem;
      }
      .input-title{
        float:left;
      width:1rem;
      padding:0 .1rem 0 .2rem;

      }
      .input-content{
      margin-left:1rem;
      position:relative;

      &:after{
        content:'';
        position:absolute;
        width:100%;
        left:0;
        border-bottom:1px solid #ccc;
        bottom:0;
       }
      span{
        position:absolute;

      }

        input{
          height:1rem;
          line-height: 1rem;
          width:100%;
          border-radius:0;
          border:none;
          padding-left:.8rem;
        }
      }
  }

}
</style>
<template>
  <div class="login">
   <Title @clickLeft="clickLeft" @clickRight="clickRight" leftTitle="关闭" rightTitle="注册" title="登录"></Title>

    <div class="content">
      <div class="login-input">
        <div class="input-title">
          <Icon type="ios-person-add-outline" />
        </div>
        <div class="input-content">
          <span>账号</span>
          <input @input="vail" v-model="name" type="text" placeholder="请输入手机号/用户名/邮箱"/>
        </div>
      </div>
      <div class="login-input">
        <div class="input-title">
          <Icon type="ios-lock-outline" />
        </div>
        <div class="input-content">
          <span>密码</span>
          <input @input="vail" v-model="password" type="text" placeholder="请输入密码"/>
        </div>
      </div>
      <div class="setting">
        <div class="autoLogin">
          <Checkbox label="twitter">
            <span>自动登录</span>
          </Checkbox>
        </div>
        <div class="re-password">
          <span>忘记密码？</span>
        </div>
      </div>
      <div @click="login" class="login-btn" :class="{active: active}">
        <div>
          <b>登录</b>
        </div>
      </div>
    </div>

  </div>

</template>
<script>

  import Footer from '@/components/footer/Footer';
  import Title from '@/components/title/Title';
  export default {
    data:function(){
      return {
        name:'',
        password:'',
        active:false
      }
    },
    components:{
      Footer,
      Title

    },
    methods:{
      vail:function(){
        if(this.name.trim()!=''&&this.password.trim()!=''&&this.password.length>5) {
          this.active = true;
        } else {
          this.active = false;
        }
      },
      login:function(){
        this.$store.commit('setLoginStatus', true);
        this.$router.push({
          path:'/buy'
        })
      },
      clickLeft:function(){
        this.$router.go(-1)
      },
      clickRight:function(){

      }
    }
  }
</script>
