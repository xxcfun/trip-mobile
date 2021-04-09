<template>
  <!-- 首页轮播图 -->
  <div class="home-banner-box">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="item.img" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    data () {
      return {
        bannerList: []
      }
    },
    methods: {
    },
    created () {
      // TODO 从接口获取数据
      this.bannerList = [
        { id: 1, img: '/static/home/banner/banner1.jpg' },
        { id: 2, img: '/static/home/banner/banner2.jpg' },
        { id: 3, img: '/static/home/banner/banner3.jpg' }
      ]
    }
  }
</script>

<style scoped lang="less">
  .home-banner-box {
    img {
      width: 100%;
      height: auto;
    }
  }
</style>
