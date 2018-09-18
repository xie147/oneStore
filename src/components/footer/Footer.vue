<template>
  <div class="footer">
    <ul >
      <li @click="toHome" :class="footerIndex==0?'active':''">
        <div>
          <Icon type="ios-home-outline" />
          <div>
            首页
          </div>
        </div>
      </li>
      <li @click="toSort" :class="footerIndex==1?'active':''">
        <div>
          <Icon type="ios-apps-outline" />
          <div>
            分类
          </div>
        </div>
      </li>
      <li @click="toMain" :class="footerIndex==2?'active':''">
        <div>
          <Icon type="ios-megaphone-outline" />
          <div>
            1品堂
          </div>
        </div>

      </li>
      <li @click="toBuy" :class="footerIndex==3?'active':''">
        <div>
          <Icon type="ios-cart-outline" />
          <div>
            购物车
          </div>
        </div>

      </li>
      <li @click="toSetting" :class="footerIndex==4?'active':''">
        <div>
          <Icon type="ios-person-outline" />
          <div>
            我的1号店
          </div>
        </div>

      </li>
    </ul>
  </div>
</template>
<style scoped lang="less">
  .footer{
    position:fixed;
    width:100%;
    bottom:0;
    left:0;
    z-index: 100;
    background:#fff;
    ul{
      overflow:hidden;
      font-size:.2rem;
      li{
        float:left;
        height:1.2rem;
        width:20%;
        text-align: center;
      &.active{
          color:#e4354f;
       }
        &>div{
          display: inline-block;
            vertical-align: middle;
        }
          &:after{
            content:'';
            display:inline-block;
            height:100%;
            vertical-align: middle;
           }

      }
    }
  }
</style>
<script>
  export default {
    computed:{
      footerIndex:function(){
        return this.$store.state.curIndex
      }
    },
    methods: {

      toHome: function(){
        this.$store.commit('setCurIndex', 0);
        this.$router.push({
          path:'/'
        })
      },
      toSort: function(){
        this.$store.commit('setCurIndex', 1);
        this.$router.push({
          path:'/sort'
        })
      },
      toMain: function(){
        this.$store.commit('setCurIndex', 2);
        this.$router.push({
          path:'/main'
        })
      },
      toBuy: function(){
        this.$store.commit('setCurIndex', 3);
        var path = '/buy';
        if(!this.$store.state.isLogin) {
          path = '/islogin';
        }
        this.$router.push({
          path:path
        })

      },
      toSetting: function(){
        this.$store.commit('setCurIndex', 4);
        this.$router.push({
          path:'/setting'
        })
      }
    }

  }
</script>
