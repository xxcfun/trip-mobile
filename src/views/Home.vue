<template>
  <div class="page-home">
    <!-- banner轮播图 -->
    <banner/>

    <!-- 热门推荐 -->
    <hot/>

    <!-- 精选景点 -->
    <fine/>

    <!-- 底部导航 -->
    <trip-footer/>
  </div>
</template>

<script>
  // banner轮播图
  import Banner from '../components/home/Banner'
  // 热门推荐
  import Hot from '../components/home/Hot'
  // 精选景点
  import Fine from '../components/home/Fine'
  // 底部导航
  import TripFooter from '../components/common/Footer'

  export default {
    name: 'Home',
    components: {
      // 底部导航
      TripFooter,
      // 精选景点
      Fine,
      // 热门推荐
      Hot,
      // banner轮播图
      Banner
    },
    created () {
    }
  }
</script>

<style lang="less">
  .page-home {

  }
</style>
