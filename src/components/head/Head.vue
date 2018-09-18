<template>
  <div class="head" :style="ivon">
    <div class="left">
      <Icon type="ios-pin-outline"  /><span>佛山</span>
    </div>
    <div class="right">
      <Icon type="ios-qr-scanner" /><Icon type="ios-chatbubbles-outline" />
    </div>
    <div class="center" :style="back" @click="search">
      <div class="search-icon">
        <Icon class="search" type="ios-search-outline" />
      </div>

      <input type="text" :placeholder="place"/>
      <div class="mm">
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
  .head{
    position:fixed;
    top:.4rem;
    left:0;
    width:100%;
    z-index: 100;
    color:#fff;
    height:.66rem;
    .left,.right{
      position:absolute;
      line-height: .66rem;
      span{
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
      }
    }

    .left{
      left:0;
    }
    .right{
      right:0;
      .ivu-icon:first-child{
        margin-right:5px;
      }
    }
    .center{
      margin:0 1.3rem 0 1.3rem;
      position:relative;
      color:#333;
      background:rgba(255,255,255,.8);
      border-radius:.1rem;

      input{
        width:100%;
        background:none;
      }
      .mm{
        width:.6rem;
        position:absolute;
        top:0;
        right:0;
        height:100%;
        background:url(../../assets/mm.png) no-repeat;
        background-size:.54rem auto;
        background-position: 50%;
      }
    }
  }
</style>
<script>
  export default {
    props:{
      ivon:String,
      back:String,
      place:String
    },
    methods:{
      search:function(){
       this.$router.push({
         path:'/search'
       })
      }
    }
  }
</script>
