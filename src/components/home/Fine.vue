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
  import { ajax } from '../../utils/ajax'
  import { SightApis } from '../../utils/apis'
  export default {
    name: 'Fine',
    components: { ListSight },
    data () {
      return {
        dataList: []
      }
    },
    methods: {
      /**
       * 获取精选景点的接口
       */
      getDataList () {
        ajax.get(SightApis.sightListUrl, {
          params: {
            is_top: 1
          }
        }).then(({ data }) => {
          console.log('成功获取精选景点数据')
          this.dataList = data.objects
        })
      }
    },
    created () {
      // 查询接口数据
      this.getDataList()
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
      padding-bottom: 50px;
    }
  }
</style>
