<style scoped lang="less">
  .islogin{
    position:absolute;top:1rem;left:0;width:100%;
    height:100%;

  .pic,.text{
    text-align: center;
    margin:0.2rem 0;
  }

  .pic{
  img{
    width:1.8rem;
  }
  }
  .text{
    font-size:.26rem;
    color:#757575;
  }
  .list{
    overflow:hidden;
  li{
    float:left;
    width:50%;
    text-align: center;
    padding:.2rem;
  img{
    height:1rem;
  }
  }
  }

  }
</style>
<template>
  <div class="islogin" >
    <div class="swiper-container container title" >

      <div class="swiper-wrapper" >
        <div class="refresh">释放刷新</div>
        <div class="swiper-slide">
          <div class="pic" style="margin-top:1.8rem;">
            <img src="/static/images/buy.PNG" alt=""/>
          </div>
          <p class="text">
            购物车是空的~快去买买买
          </p>
          <Login></Login>
          <p class="text"  style="margin-bottom:.4rem;">
            登录后可同步购物车信息
          </p>
          <p class="text" style="text-align: left; font-size:.3rem;background:#F8F8F8;padding:.2rem">
            猜你喜欢
          </p>
          <ul class="list">
            <li>
              <img src="/static/images/shoes.png" alt=""/>
              <div>
                高跟鞋
              </div>
            </li>
            <li>
              <img src="/static/images/shoes.png" alt=""/>
              <div>
                高跟鞋
              </div>
            </li>
            <li>
              <img src="/static/images/shoes.png" alt=""/>
              <div>
                高跟鞋
              </div>
            </li>
            <li>
              <img src="/static/images/shoes.png" alt=""/>
              <div>
                高跟鞋
              </div>
            </li>
            <li>
              <img src="/static/images/shoes.png" alt=""/>
              <div>
                高跟鞋
              </div>
            </li>
            <li>
              <img src="/static/images/shoes.png" alt=""/>
              <div>
                高跟鞋
              </div>
            </li>
          </ul>

        </div>


      </div>
      <div class="swiper-scrollbar" ></div>
    </div>
    <Title  title="购物车"></Title>
    <Footer></Footer>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import '../plugin/swiper/swiper-4.3.5.min.css'
  import Footer from '@/components/footer/Footer';
  import Title from '@/components/title/Title';
  import Login from '@/components/login/Login';
  export default {
    components:{
      Footer,
      Title,
      Login
    },

    mounted: function(){
      var refreshEnd= false;
      var times=0;//加载次数
      var oriSpeed=300
      var swiper = new Swiper('.swiper-container',{
        speed: oriSpeed,
        slidesPerView: 'auto',
        freeMode: true,
        direction: 'vertical',
        setWrapperSize: true,
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
          },


        }
      });
    }
  }
</script>
