<template>
  <!-- 精选景点 -->
  <div class="home-fine-box">
    <!-- 顶上导航 -->
    <van-cell
      title="精选景点"
      icon="location-o"
      is-link
      value="更多"
      title-style="text-align: left"
    />
    <!-- // 顶上导航 -->
    <!-- 景点的列表 -->
    <div class="box-main">
      <list-sight v-for="item in dataList" :key="item.id" :item="item"/>
    </div>
    <!-- // 景点的列表 -->
  </div>
</template>

<script>
  import ListSight from '../common/ListSight'
  export default {
    name: 'Fine',
    components: { ListSight },
    data () {
      return {
        dataList: []
      }
    },
    created () {
      this.dataList = [
        { id: 1, img: '/static/home/hot/h1.jpg', name: '景点1', score: 4.5, price: 98 },
        { id: 2, img: '/static/home/hot/h2.jpg', name: '景点2', score: 4, price: 100 },
        { id: 3, img: '/static/home/hot/h3.jpg', name: '景点3', score: 4.5, price: 198 },
        { id: 4, img: '/static/home/hot/h4.jpg', name: '景点4', score: 4, price: 88 },
        { id: 5, img: '/static/home/hot/h5.jpg', name: '景点5', score: 5, price: 30 },
        { id: 6, img: '/static/home/hot/h6.jpg', name: '景点6', score: 3.5, price: 58 }
      ]
    }
  }
</script>

<style scoped lang="less">
  .home-fine-box {
    padding: 0 10px;
    .van-cell {
      padding: 10px 0;
    }
    .box-main {
    }
  }
</style>
