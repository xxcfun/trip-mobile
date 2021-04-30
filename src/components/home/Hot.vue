<template>
  <!-- 热门推荐 -->
  <div class="home-hot-box">
    <!-- 顶上导航 -->
    <van-cell
      title="热门推荐"
      icon="/static/home/hot/fire.png"
      is-link
      value="全部榜单"
      title-style="text-align: left"
      :to="{name: 'SightList', query: {name: '热门推荐'}}"
    />
    <!-- // 顶上导航 -->
    <!-- 景点列表 -->
    <div class="box-main">
      <router-link class="hot-item"
                   v-for="item in dataList"
                   :key="item.id"
                   :to="{name: 'SightDetail', params: {id: item.id}}">
        <div class="img">
          <span></span>
          <img :src="item.main_img" alt="">
        </div>
        <h5 class="van-ellipsis">{{ item.name }}</h5>
        <div class="line-price">
          <span class="price">￥{{ item.min_price }}</span>起
        </div>
      </router-link>
    </div>
    <!-- // 景点列表 -->
  </div>
</template>

<script>
  import { ajax } from '../../utils/ajax'
  import { SightApis } from '../../utils/apis'

  export default {
    name: 'Hot',
    data () {
      return {
        dataList: []
      }
    },
    methods: {
      /**
       * 获取热门景点的接口
       */
      getDataList () {
        ajax.get(SightApis.sightListUrl, {
          params: {
            is_hot: 1
          }
        }).then(({ data }) => {
          console.log('成功获取热门景点数据')
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
  .home-hot-box {
    padding: 0 10px;

    .van-cell {
      padding: 10px 0;
    }

    .box-main {
      width: 100%;
      display: flex;
      padding-top: 10px;
      overflow-x: scroll;
    }

    .hot-item {
      display: flex;
      flex-direction: column;
      width: 100px;
      margin-right: 10px;
      padding-bottom: 10px;

      .img {
        position: relative;

        span {
          position: absolute;
          left: 0;
          top: 0;
          display: inline-block;
          width: 42px;
          height: 20px;
          z-index: 10;
        }

        img {
          width: 100px;
          height: 100px;
        }
      }

      h5 {
        color: #212121;
        padding: 2px 0;
        font-size: 12px;
        margin: 0;
      }

      .line-price {
        color: #212121;
        font-size: 12px;

        .price {
          color: #f50;
          font-size: 13px;
        }
      }

      &:nth-child(1) .img span {
        background: url('/static/home/hot/top1.png') no-repeat;
        background-size: 100% auto;
      }

      &:nth-child(2) .img span {
        background: url('/static/home/hot/top2.png') no-repeat;
        background-size: 100% auto;
      }

      &:nth-child(3) .img span {
        background: url('/static/home/hot/top3.png') no-repeat;
        background-size: 100% auto;
      }
    }
  }
</style>
