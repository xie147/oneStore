<template>
  <div class="menu">
    <ul>
      <li v-for="(item, index) in menus" :key="index">
        <img :src="item.src" alt=""/>
        <div>
          {{item.content}}
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="less">
  .menu{
    ul {
      margin:.2rem .26rem;
    overflow:hidden;
      li{
        float:left;
        width:20%;
        text-align: center;
        img{
          height:.96rem;
        }
      }
    }
  }
</style>
<script>
  export default {
    data() {
    return {
      menus:[
        {'src':'/static/images/menu01.jpg',content:'天天签到'},
        {'src':'/static/images/menu02.jpg',content:'领券中心'},
        {'src':'/static/images/menu05.jpg',content:'进口馆'},
        {'src':'/static/images/menu03.jpg',content:'1号生鲜'},
        {'src':'/static/images/menu04.jpg',content:'特产中国'}
      ]
    }
  }
  }

</script>
