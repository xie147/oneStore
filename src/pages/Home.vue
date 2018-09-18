

<template>

  <div class="home">
    <div class="swiper-container container" style="position:absolute;top:0;left:0;width:100%">

      <div class="swiper-wrapper">
        <div class="refresh">释放刷新</div>
        <div class="swiper-slide" >
          <Banners :banners ="banners"></Banners>
          <Post url="/static/images/backBottom.jpg" style="    margin-top: -1px;"></Post>
          <Menu></Menu>
          <Post url="/static/images/banner01.jpg"></Post>
          <BannerMid></BannerMid>
        </div>

      </div>
      <div class="swiper-scrollbar"></div>
    </div>
    <Head back="background:rgba(255,255,255,.8)"></Head>
    <Footer></Footer>
  </div>
</template>

<script>

  import Head from '@/components/head/Head';
  import Banners from '@/components/banner/Banners';
  import Post from '@/components/post/Post';
  import Menu from '@/components/menu/Menu';
  import Footer from '@/components/footer/Footer';
  import BannerMid from '@/components/bannerMid/BannerMid';
  import '../plugin/swiper/swiper-4.3.5.min.css'
  import Swiper from 'swiper'
  import { getBanners, ERR_OK } from '@/api/data'

  export default {
    data: function(){
      return {
        slh:String,
        banners:[]
      }
    },
    components:{
      Head,
      Banners,
      Post,
      Menu,
      Footer,
      BannerMid
    },
    methods:{
      initSwiper:function(){
        var refreshEnd= false;
        var oriSpeed=300
        var swiper = new Swiper('.container',{
          speed: oriSpeed,
          slidesPerView: 'auto',
          freeMode: true,
          direction: 'vertical',
          setWrapperSize: true,
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          on:{
            //下拉释放刷新
            touchEnd: function(){
              swiper=this
              var refreshText=swiper.$el.find('.refresh')
              if(this.translate>100){
                swiper.setTransition(this.params.speed);
                swiper.setTranslate(100);
                swiper.touchEventsData.isTouched=false;//跳过touchEnd事件后面的跳转(4.0.5)
                refreshText.html('刷新中')
                swiper.allowTouchMove=false;
                setTimeout(function(){//模仿AJAX
                  swiper.update();
                  refreshText.html('刷新完成');
                  refreshEnd=true;
                  swiper.allowTouchMove=true;
                },1000)
              }

            },
            touchStart: function(){
              if(refreshEnd==true){
                this.$el.find('.refresh').html('释放刷新');
                refreshEnd=false;
              }
            }
          }
        });
      }
    },
    mounted: function(){
      var myApp = this;
      getBanners().then(res => {
        myApp.banners = res.data;
        setTimeout(function(){
          myApp.initSwiper();
        },200)

      })

    }
  }
</script>
