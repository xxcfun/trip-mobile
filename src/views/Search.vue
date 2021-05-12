<template>
  <!-- 搜索页面 -->
  <div class="page-search">
    <!-- 标题 -->
    <van-nav-bar title="搜索景点" left-text="返回" left-arrow @click-left="goBack" v-if="isHome"/>
    <van-nav-bar title="搜索景点" v-else />
    <!-- 搜索框 -->
    <van-search v-model="sightName" show-action label="景点" placeholder="请输入搜索关键词" @search="onSearch" @clear="clear">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <h2 v-if="isHot">热门推荐</h2>
    <h2 v-if="isTop">精选景点</h2>
    <!-- 景点列表 -->
    <div class="sight-list">
      <list-sight v-for="item in dataList" :key="item.id" :item="item"/>
    </div>
    <!-- 分页 -->
    <van-pagination v-model="currentPage" :total-items="totalItems" :items-per-page="perPage" @change="changePage" />
    <!-- 底部导航 -->
    <trip-footer v-if="!isHome"/>
  </div>
</template>

<script>
  // 景点列表的每一项
  import ListSight from '../components/common/ListSight'
  // 底部导航
  import TripFooter from '../components/common/Footer'
  import { ajax } from '../utils/ajax'
  import { SightApis } from '../utils/apis'
  export default {
    name: 'Search',
    components: { ListSight, TripFooter },
    data () {
      return {
        // 景点名称
        sightName: '',
        // 景点列表的数据
        dataList: [],
        // 总记录数
        totalItems: 0,
        // 当前的页码
        currentPage: 1,
        // 每页数据的大小
        perPage: 10,
        // 热门景点和精选景点
        isHot: '',
        isTop: ''
      }
    },
    computed: {
      // 是否从首页进来
      isHome () {
        return this.isHot || this.isTop
      }
    },
    methods: {
      // 返回上一页
      goBack () {
        this.$router.go(-1)
      },
      // 景点列表的接口
      getDataList () {
        ajax.get(SightApis.sightListUrl, {
          params: {
            page: this.currentPage,
            name: this.sightName,
            limit: this.perPage,
            is_top: this.isTop,
            is_hot: this.isHot
          }
        }).then(({ data: { meta, objects } }) => {
          this.dataList = objects
          // 总记录数
          this.totalItems = meta.total_count
        })
      },
      // 搜索清除事件
      clear () {
        // 点击清除时，重置页面数据
        this.dataList = []
        this.currentPage = 1
        // 重置完成后，重新调用接口
        this.getDataList()
      },
      // 搜索事件
      onSearch () {
        // 判断搜索内容是否为空
        if (!this.sightName) {
          this.$toast('请输入搜索词')
          return
        }
        // 重置数据
        this.dataList = []
        this.currentPage = 1
        // 执行查询
        this.getDataList()
      },
      // 分页页码改变事件
      changePage () {
        this.getDataList()
      }
    },
    mounted () {
      // 热门景点和精选景点
      this.isHot = this.$route.query.isHot
      this.isTop = this.$route.query.isTop
      // 查询接口
      this.getDataList()
    }
  }
</script>

<style lang="less">
  .page-search {
    padding-bottom: 60px;

    h2 {
      font-size: 16px;
      text-align: left;
      padding: 5px 10px;
      margin: 0;
    }
    .sight-list {
      padding: 10px;
      background-color: #fff;
      margin-bottom: 10px;
    }
  }
</style>
