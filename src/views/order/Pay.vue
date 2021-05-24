<template>
  <!-- 订单确认及支付 -->
  <div class="page-order-pay">
    <!-- 顶部导航 -->
    <van-nav-bar title="订单支付" left-text="返回" right-text="取消订单" left-arrow @click-left="goBack" @click-right="onCancelOrder"/>
    <!-- 订单号 -->
    <van-cell title="订单号" :title-style="{'text-align': 'left'}" value="订单号内容"/>
    <!-- 描述信息 -->
    <div class="order-info">
      <div class="left">
        <h3>门票信息</h3>
        <div>
          <van-icon name="clock-o"/>2021-05-20
        </div>
        <div class="tips">短信接收</div>
      </div>
      <div class="right">
        <van-icon name="arrow"/>
      </div>
    </div>
    <!-- 提交表单 -->
    <van-submit-bar :price="totalPrice" button-text="立即支付" @submit="onSubmit"/>
  </div>
</template>

<script>
  export default {
    name: 'Pay',
    data () {
      return {
        // 总价格
        totalPrice: 25000
      }
    },
    methods: {
      // 返回上一页
      goBack () {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '你还没有支付，确认放弃支付吗？'
        }).then(() => {
          this.$router.go(-1)
        })
      },
      // 取消订单
      onCancelOrder () {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '确认取消该订单？'
        }).then(() => {
          // TODO 调用接口
          this.$router.go(-1)
        })
      },
      // 提交订单
      onSubmit () {
        this.$dialog.confirm({
          title: '温馨提示',
          message: `确认支付${this.totalPrice / 100}吗？`
        }).then(() => {
          // TODO 调用接口
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .page-order-pay {
    /*订单信息*/
    .order-info {
      display: flex;
      padding: 10px;
      background-color: #fff;
      margin-top: 10px;

      .left {
        flex: 1;
        text-align: left;

        h3 {
          padding: 5px 0;
          margin: 0;
        }

        .tips {
          padding: 5px 0;
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
</style>
