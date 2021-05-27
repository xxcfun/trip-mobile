<template>
  <!-- 我的订单列表页面 -->
  <div class="page-order-list">
    <!-- 导航条 -->
    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="goBack"/>
    <!-- 订单状态栏 -->
    <van-tabs @click="tabChange">
      <van-tab
        v-for="(value, key, index) in constants.ORDER_STATUS"
        :title="value"
        :name="key"
        :key="index"></van-tab>
    </van-tabs>
    <!-- 订单记录 -->
    <div class="order-list">
      <div class="order-item" v-for="item in orderList" :key="item.sn" v-show="item.sn">
        <div class="order-head">
          <div class="order-num">订单号：{{ item.sn }}</div>
          <div class="order-status text-warning">{{ constants.ORDER_STATUS[item.status] }}</div>
        </div>
        <div class="order-body">
          <div class="left">
            <van-image width="100" height="100" :src="item.item_first.flash_img"/>
          </div>
          <div class="right">
            <div class="title">{{ item.item_first.flash_name }}</div>
            <div class="remark">{{ item.item_first.remark }}</div>
          </div>
        </div>
        <div class="order-footer">
          <div>总共{{ item.buy_count }}件商品 合计 ￥{{ item.buy_amount }}</div>
          <van-button round size="small" type="warning"
            v-if="item.status == constants.ORDER_STATUS_PAY"
            @click="goPay(item)">去支付</van-button>
          <van-button round size="small" type="warning"
            v-if="item.status == constants.ORDER_STATUS_DONE || item.status == constants.ORDER_STATUS_CANCEL"
            @click="deleteOrder(item)">删除订单</van-button>
          <van-button round size="small" type="info">订单详情</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as constants from '../../utils/constants'
  import { ajax } from '../../utils/ajax'
  import { OrderApis } from '../../utils/apis'
  export default {
    name: 'List',
    data () {
      return {
        status: 0,
        constants,
        // 订单列表
        orderList: []
      }
    },
    watch: {
      $route () {
        this.loadData()
      }
    },
    methods: {
      /**
       * tab切换，重新获取数据
       */
      tabChange (name, value) {
        this.$router.push({ name: 'OrderList', params: { status: name } })
      },
      /**
       * 重新加载页面数据
       */
      loadData () {
        // 订单状态
        this.status = this.$route.params.status
        // 清空数据
        this.orderList = []
        // 加载数据列表
        this.getOrderList()
      },
      // 返回上一页
      goBack () {
        this.$router.go(-1)
      },
      /**
       * 加载订单列表
       */
      getOrderList () {
        ajax.get(OrderApis.orderListUrl, {
          params: {
            status: this.status
          }
        }).then(({ data }) => {
          this.orderList = data.objects
        })
      },
      /**
       * 去支付，跳转到支付页面
       */
      goPay (item) {
        this.$router.push({ name: 'OrderPay', params: { sn: item.sn } })
      },
      /**
       * 订单删除
       */
      deleteOrder (item) {
        // 弹框确认
        this.$dialog.alert({
          title: '温馨提示',
          message: '删除订单将无法恢复，确认删除订单'
        }).then(() => {
          // 调用接口
          const url = OrderApis.orderDetailUrl.replace('#{sn}', item.sn)
          ajax.delete(url).then(res => {
            // 告诉用户已经删除成功
            // 隐藏界面上的显示
            if (res.status === 201) {
              this.$notify({
                type: 'success',
                message: '删除成功'
              })
              item.sn = ''
            }
          })
        })
      }
    },
    mounted () {
      // 第一次加载数据
      this.loadData()
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
