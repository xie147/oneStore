<template>
  <div class="post">
    <img :src="url" alt=""/>
  </div>
</template>
<style>
  .post img{
    width:100%;
  }
</style>
<script>
  export default {
    props:{
      url:String
    }
  }
</script>
