<template>
  <div class="bannerMid">
    <div class="title">
      <div class="content"><b>超级单品</b></div>
      <div class="time">
        <b>{{time.hour}}</b><span>:</span><b>{{time.mute}}</b><span>:</span><b>{{time.sec}}</b>
      </div>
      <div class="more">
        <span>牛奶3件七折>></span>
      </div>
    </div>
    <div class="swiper-container banner02" >
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="pic">
            <img src="/static/images/04.png" alt=""/>
          </div>
          <div class="content">
            <div>水晶玻璃鞋-给你高贵的体验</div>
            <b>$82.6</b>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="pic">
            <img src="/static/images/car.jpg" alt=""/>
          </div>
          <div class="content">
            <div>无需首付，马上开新车</div>
            <b>免费</b>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="pic">
            <img src="/static/images/guqin.jpg" alt=""/>
          </div>
          <div class="content">
            <div>感觉古典魅力</div>
            <b>￥8888</b>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="pic">
            <img src="/static/images/computer.jpg" alt=""/>
          </div>
          <div class="content">
            <div>新款笔记本等你来拿</div>
            <b>$9888</b>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="pic">
            <img src="/static/images/shoes.png" alt=""/>
          </div>
          <div class="content">
            <div>粉色高跟鞋</div>
            <b>$1254</b>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="pic">
            <img src="/static/images/shechi.jpg" alt=""/>
          </div>
          <div class="content">
            <div>无需首付，马上开新车</div>
            <b>免费</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
  .bannerMid{
  .banner02{
    .swiper-slide{
      width:2.2rem;
      text-align:center;
      img{
        width:100%;
        padding:0 .2rem;
      }
      div.pic{
        height:1.6rem;
      text-align:center;
        img{
          height:1.6rem;
        }
      }
      div.content{
        div{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        b{
          color:#FF3F29;
          font-size:.4rem;
        }
      }

    }
  }
    .title{
    padding:0 .3rem;
      div{
          display:inline-block;
          line-height:.8rem;
          vertical-align: middle;
        }
      .content{
        font-size:.4rem;
      }
  .time{
  b{
    background:#6b6b6b;
    color:#fff;
    padding:4px;
    border-radius:4px;
  }
  }
  .more{
    color:#FFC0B9;
    float:right;
  }
    }
  }
</style>
<script>
  import Swiper from 'swiper'
  import '../../plugin/swiper/swiper-4.3.5.min.css'
  export default {
    data:function(){
      return {
          endTime:'2018-09-16 19:15:00',
          dis:0
      }
    },
    computed:{
      time:function(){
        return this.cptTime(this.dis);
      }
    },
    methods:{
    cptTime:function(dis){
      if(dis == 0){
        return {
          hour:'00',
          mute:'00',
          sec:'00'
        }
      }
      var hour = parseInt(dis/60/60);
      var dis2 = dis - 3600*hour;
      var mute = parseInt(dis2/60);
      var sec = dis2 - 60*mute;
      return {
        hour:this.twoTime(hour),
        mute:this.twoTime(mute),
        sec:this.twoTime(sec)
      }
    },
      twoTime:function(num){
        if(!isNaN(num)) {
          if(parseInt(num) < 10) {
            return '0'+num
          }
        }
        return num
      }
  },
    mounted(){
    var mySwiper = new Swiper('.banner02',{
      freeMode : true,
      slidesPerView: 'auto'
    })
    var now = new Date().getTime(), endTime = new Date(this.endTime).getTime();
    if(now < endTime) {
      this.dis = parseInt((endTime - now)/1000);
    } else{
      this.dis = 0;
    }
    var my_app = this;
    var timer = setInterval(function(){

      if(my_app.dis > 0) {
        my_app.dis -= 1;
      } else {
        clearInterval(timer);
        timer = null;
      }
    },1000)
  }
  }
</script>
