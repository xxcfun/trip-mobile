<template>
  <!-- 搜索页面 -->
  <div class="page-search">
    <!-- 标题 -->
    <van-nav-bar title="搜索景点"/>
    <!-- 搜索框 -->
    <van-search v-model="sightName" show-action label="景点" placeholder="请输入搜索关键词" @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <!-- 景点列表 -->
    <div class="sight-list">
      <list-sight v-for="item in dataList" :key="item.id" :item="item"/>
    </div>
    <!-- 分页 -->
    <van-pagination v-model="currentPage" :total-items="totalItems" :items-per-page="perPage" />
    <!-- 底部导航 -->
    <trip-footer/>
  </div>
</template>

<script>
  // 景点列表的每一项
  import ListSight from '../components/common/ListSight'
  // 底部导航
  import TripFooter from '../components/common/Footer'
  export default {
    name: 'Search',
    components: { ListSight, TripFooter },
    data () {
      return {
        // 景点名称
        sightName: '',
        // 景点列表的数据
        dataList: [
          { id: 1, main_img: '/static/sight/a1.jpg' }
        ],
        // 总记录数
        totalItems: 0,
        // 当前的页码
        currentPage: 1,
        // 每页数据的大小
        perPage: 5
      }
    },
    methods: {
      onSearch () {
        console.log('onSearch')
      }
    }
  }
</script>

<style scoped>

</style>
