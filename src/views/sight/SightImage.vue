<template>
  <!-- 景点图片 -->
  <div class="page-sight-image">
    <!-- 页面头部 -->
    <van-nav-bar left-text="返回" left-arrow title="景点所有图片" @click-left="goBack"/>

    <!-- 景点图片 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <!-- 图片列表 -->
      <van-list
        class="sight-image"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="getImageList">
        <van-row>
          <van-col span="12" v-for="(item, index) in imageList" :key="index">
            <van-image :src="item.images.img" width="100" height="100" @click="show=true"/>
          </van-col>
        </van-row>
      </van-list>
    </van-pull-refresh>

    <!-- 图片预览 -->
    <van-image-preview v-model="show" :images="imageUrls" @change="onChange">
      <template v-slot:index>第{{ index + 1 }}张 / 共{{ imageList.length }}张</template>
    </van-image-preview>
  </div>
</template>

<script>
  import { SightApis } from '../../utils/apis'
  import { ajax } from '../../utils/ajax'

  export default {
    name: 'SightImage',
    data () {
      return {
        show: false,
        index: 0,
        // 图片列表
        imageList: [],
        // 正在加载中
        loading: false,
        // 所有的内容加载完成
        finished: false,
        // 请求失败
        error: false,
        // 当前页码
        currentPage: 1,
        // 是否正在下拉刷新中
        refreshing: false
      }
    },
    computed: {
      /**
       * 图片大图预览需要处理的数据
       */
      imageUrls () {
        return this.imageList.map(i => i.img)
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      /**
       * 预览切换图片
       */
      onChange (index) {
        this.index = index
      },
      /**
       * 执行下拉刷新
       */
      onRefresh () {
        // 清空数据
        this.imageList = []
        this.currentPage = 1
        this.finished = false
        this.error = false
        // 重新加载数据
        this.getCommentList()
      },
      /**
       * 获取景点下的图片列表
       */
      getImageList () {
        const url = SightApis.sightImageListUrl.replace('#{id}', this.id)
        ajax.get(url, {
          params: {
            page: this.currentPage
          }
        }).then(({ data: { meta, objects } }) => {
          this.imageList = this.imageList.concat(objects)
          // 加载状态结束
          this.loading = false
          // 设置下一页的页面
          this.currentPage = meta.current_page + 1
          // 数据全部加载完成：当前页面=总页数
          if (meta.current_page === meta.page_count) {
            this.finished = true
          }
          // 设置下拉刷新状态
          this.refreshing = false
        }).catch(() => {
          this.loading = false
          this.error = true
          this.refreshing = false
        })
      }
    },
    mounted () {
      // 获取路由的id
      this.id = this.$route.params.id
    }
  }
</script>

<style scoped lang="less">
  .page-sight-image {
    background-color: #fff;
  }
</style>
