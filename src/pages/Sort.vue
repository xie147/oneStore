<style>
  .sort-picGrid,.sort-leftMenu{
    padding:1.46rem 0 1.4rem 0;
  }
  .sort-leftMenu{

    float:left;
  }
  .sort{
    position:fixed;
    top:0;left:0;
    width:100%;
    height:100%;
  }
</style>
<template>
  <div class="sort">
    <LeftMenu @select="select" class="sort-leftMenu"></LeftMenu>
    <PicGrid :pics="pics" class="sort-picGrid"></PicGrid>
    <Head back="background:#ececec" ivon="color:#FE5946"></Head>
    <Footer></Footer>
  </div>
</template>
<script>

  import Head from '@/components/head/Head';
  import Footer from '@/components/footer/Footer';
  import LeftMenu from '@/components/leftMenu/LeftMenu';
  import PicGrid from '@/components/picGrid/PicGrid';
  export default {
    data(){
      return {
        pics:[]
      }
    },
    components:{
      Head,
      Footer,
      LeftMenu,
      PicGrid
    },
  created:function(){
    this.pics = this.getPic(0);
  },
    methods:{
      select:function(index, name){
        this.pics = this.getPic(index);
      },
      getPic:function(index){
        var data = [
          [
            {url:'/static/images/computer.jpg', content:'笔记本'},
            {url:'/static/images/computer.jpg', content:'笔记本'},
            {url:'/static/images/computer.jpg', content:'笔记本'},
            {url:'/static/images/computer.jpg', content:'笔记本'},
            {url:'/static/images/computer.jpg', content:'笔记本'},
            {url:'/static/images/computer.jpg', content:'笔记本'}
          ],
          [
            {url:'/static/images/shoes.png', content:'鞋子'},
            {url:'/static/images/shoes.png', content:'鞋子'},
            {url:'/static/images/shoes.png', content:'鞋子'},
            {url:'/static/images/shoes.png', content:'鞋子'},
            {url:'/static/images/shoes.png', content:'鞋子'},
            {url:'/static/images/shoes.png', content:'鞋子'}
          ]

        ]
        if(index < data.length) {
          return data[index]
        } else {
          return [];
        }
      }
    }
  }
</script>
