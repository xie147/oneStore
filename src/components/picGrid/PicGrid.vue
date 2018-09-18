<style scoped lang="less">
  .picGrid{
  margin-left:1.6rem;
  height:100%;
  .picGrid-container{
    height:100%;
  }
    ul{
      li{
        float:left;
        width:33.33%;
        text-align: center;
        padding:0.2rem;
        img{
          height:1.2rem;
        }
      }
    }
  }
</style>
<template>
  <div class="picGrid">
    <div class="swiper-container picGrid-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="height: auto" >
          <div v-show="pics.length==0" style="margin:1rem">暂无商品</div>
          <ul v-show="pics.length !==0">
            <li v-for="(item, index) in pics" :key="index">
              <img :src="item.url" alt=""/>
              <div>
                {{item.content}}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import Swiper from 'swiper'
  import '../../plugin/swiper/swiper-4.3.5.min.css'
  export default {
    props:{
      pics:Array
    },
    mounted:function(){
      var mySwiper = new Swiper('.picGrid-container', {
        direction:'vertical',
        freeMode : true,
        slidesPerView: 'auto'
      });
    }
  }


</script>
