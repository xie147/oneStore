<style scoped lang="less">
  .search{
    .search-head{
      position:relative;
      margin: .2rem;

    &:after{
    content:'';
    position:absolute;
    bottom:-.2rem;
    width:100%;
    left:0;
       border-bottom:1px solid #eee;
     }
      span{
        color:#FE5946;
        display:inline-block;
        width:1rem;
        float:right;
        height:.66rem;
        line-height: .66rem;
        text-align: center;
      }
      &>div{
          margin-right:1.2rem;
          input{
            width:100%;

          }
        }

    }
    .btn-grid{
      .grid-title{
        font-size: .32rem;
        margin:.2rem 0;
        b{
          margin-left:.2rem;
        }
        i{
          float:right;
        }
        b,i{
          height:.8rem;
          line-height: .8rem;
        }
      }
      .grid-content{
        ul{
          overflow: hidden;
          margin:0 .1rem;
        li{
          float:left;
          width:25%;
          text-align: center;
        padding:0 .1rem;
        margin:.1rem 0;
          span{
            border:1px solid #aaa;
            border-radius:.08rem;
            display:inline-block;
            width:100%;
            padding:.1rem 0;
          }
        }
        }
      }
    }
  }
</style>
<template>
  <div class="search">
    <div class="search-head">
      <div class="search-icon">
        <Icon  type="ios-search-outline" />
      </div>

      <span @click="back">取消</span>
      <div>
        <input class="input-gray" type="text"/>
      </div>


    </div>
    <div class="btn-grid">
      <div class="grid-title">
        <b>热搜商品</b>
      </div>
      <div class="grid-content">
        <ul>
          <li><span>洗洁精</span></li>
          <li><span>牙膏自营</span></li>
          <li><span>平板电脑</span></li>
          <li><span>火锅食材</span></li>
          <li><span>拖把</span></li>
          <li><span>苹果</span></li>
          <li><span>纸巾</span></li>
          <li><span>纸</span></li>
        </ul>
      </div>
    </div>
    <div class="btn-grid">
      <div class="grid-title">
        <b>历史搜索</b>
        <Icon type="ios-trash-outline" />
      </div>
      <div class="grid-content">
        <ul>
          <li><span>饮料饮品</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      back:function(){
        this.$router.go(-1);

      }
    }
  }
</script>
