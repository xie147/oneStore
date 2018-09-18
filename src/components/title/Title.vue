<style scoped lang="less">
  .title{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background:#fff;
    z-index:100;
    border-bottom:1px solid #eee;
    div{
      text-align: center;
      line-height: 1rem;
      height:1rem;
    }
    .left,.right{
      color:#e4354f;
      width:1rem;
    }
    .left{
      float:left;
    }
    .right{
      float:right;
    }
  }
</style>
<template>
  <div class="title">
    <div class="left" @click="clickLeft">{{leftTitle}}</div>
    <div class="right" @click="clickRight">{{rightTitle}}</div>
    <div>
      {{title}}
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      title:String,
      leftTitle:String,
      rightTitle:String
    },
    methods:{
      clickLeft:function(){
        this.$emit('clickLeft');
      },
      clickRight:function(){
        this.$emit('clickRight');
      }
    }
  }
</script>
