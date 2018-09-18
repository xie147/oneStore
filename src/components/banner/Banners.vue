<template>
  <div class="banners">
    <div class="swiper-container banner01">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banners">
          <img v-bind:src="item" alt=""/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<style scoped lang="less">
  .banners{
    img{
      width:100%;
      vertical-align: top;
    }
      .swiper-wrapper{
        height:auto !important;
        .swiper-slide{
          width:100%;
        }
      }
  }
</style>
<script>
  import Swiper from 'swiper'
  import '../../plugin/swiper/swiper-4.3.5.min.css'
  export default {
    data(){
    return {
      mySwiper:null
    }
  },
    props:{
      banners:Array
    },
    watch:{
      banners:function(){
        var myApp = this;
        setTimeout(function(){
          if(myApp.mySwiper) {
            myApp.mySwiper.destroy();
            myApp.mySwiper.update();
          } else{
            myApp.mySwiper = new Swiper('.banner01', {
              autoplay: {
                loop:2000
              },
              loop:true,
              pagination: {
                el: '.swiper-pagination',
              }
            });
          }
        },200)
      }
    }
  }
</script>
