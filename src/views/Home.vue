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
  // import { ajax } from '@/utils/ajax'
  import Banner from '../components/home/Banner'
  import Hot from '../components/home/Hot'
  import Fine from '../components/home/Fine'
  import TripFooter from '../components/common/Footer'

  export default {
    name: 'Home',
    components: {
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
