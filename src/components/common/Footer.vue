<template>
  <!-- 底部导航（公共组件） -->
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item name="home" icon="wap-home-o" :to="{name: 'Home'}">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="search" :to="{name: 'Search'}">搜索</van-tabbar-item>
      <van-tabbar-item name="mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        active: 'home'
      }
    }
  }
</script>

<style scoped>

</style>
