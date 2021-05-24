<template>
  <!-- 我的订单列表页面 -->
  <div class="page-order-list">
    <!-- 导航条 -->
    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="goBack"/>
    <!-- 订单状态栏 -->
    <van-tabs v-mode="status">
      <van-tab
        v-for="(value, key, index) in constants.ORDER_STATUS"
        :title="value"
        :name="key"
        :key="index">{{ value }}</van-tab>
    </van-tabs>
    <!-- 订单记录 -->
    <div class="order-list">
      <div class="order-item" v-for="index in 5" :key="index">
        <div class="order-head">
          <div class="order-num">订单号：121211111</div>
          <div class="order-status text-warning">已取消</div>
        </div>
        <div class="order-body">
          <div class="left">
            <van-image width="100" height="100" src="/static/sight/a1.jpg"></van-image>
          </div>
          <div class="right">
            <div class="title">门票的标题</div>
            <div class="remark">相关的描述</div>
          </div>
        </div>
        <div class="order-footer">
          <div>总共2件商品 合计 ￥198</div>
          <van-button round size="small" type="warning">删除订单</van-button>
          <van-button round size="small" type="info">订单详情</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as constants from '../../utils/constants'
  export default {
    name: 'List',
    data () {
      return {
        status: 0,
        constants
      }
    },
    methods: {
      // 返回上一页
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  .page-order-list {
    .order-list {
      padding: 10px;

      .order-item {
        background-color: #fff;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;

        .order-head {
          display: flex;
          justify-content: space-between;

          .order-num {
            font-size: 12px;
          }

          .order-status {
            font-size: 13px;
          }
        }

        .order-body {
          padding: 10px 0;
          display: flex;

          .left {
            width: 100px;
            height: 100px;
          }

          .right {
            flex: 1;
            text-align: left;
            padding-left: 10px;

            .title {
              font-size: 16px;
              padding: 5px 0;
            }

            .remark {
              font-size: 12px;
              color: #999;
            }
          }
        }

        .order-footer {
          text-align: right;
          font-size: 12px;

          .van-button {
            margin-right: 5px;
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>
