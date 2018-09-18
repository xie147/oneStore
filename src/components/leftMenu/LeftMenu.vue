<style scoped lang="less">
  .leftMenu{
    width:1.6rem;
    height:100%;
  .banner02{
    height:100%;
  }
    .swiper-slide{
      height:1.2rem;
      line-height:1.2rem;
      text-align: center;
      border-bottom:1px solid #ccc;
      border-right:1px solid #ccc;
    div.active{
      color:#e4354f;
    }
      &:last-child{
        border-bottom:none;
       }
    }
  }
</style>
<template>
  <div class="leftMenu">
    <div class="swiper-container banner02">
      <div class="swiper-wrapper">
        <div @click="select(index)" class="swiper-slide"  v-for="(item, index) in sorts" :key="index" >
          <div :class="{active:index==selected}">
            {{item}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import '../../plugin/swiper/swiper-4.3.5.min.css'
  export default {
    data(){
    return {
      mySwiper:null,
      selected:0,
      sorts:[
        '为你推荐','干货食品','生鲜食品','进口食品','乳品饮料','中外名酒','厨卫清洁','母婴童装','玩具乐器','美容护理','宠物生活',
        '家居家纺','服饰内衣','箱包珠宝','鞋靴运动','数码手机','家用电器','电脑办公','营养保健','图书杂志'
      ]
    }
  },
  methods:{
    select:function(index){
      this.selected = index;
      this.mySwiper.slideTo(index);
      this.$emit('select', index, this.sorts[index]);
    }
  },
  mounted(){
    this.mySwiper = new Swiper('.banner02', {
      direction:'vertical',
      freeMode : true,
      slidesPerView: 'auto'
    });
  }
  }
</script>
