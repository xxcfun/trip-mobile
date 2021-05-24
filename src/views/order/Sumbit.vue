<template>
  <!-- 填写订单 -->
  <div class="page-order-submit">
    <!-- 页面导航 -->
    <van-nav-bar title="填写订单" left-text="返回" left-arrow @click-left="goBack"/>
    <!-- 描述信息 -->
    <div class="order-info">
      <div class="left">
        <h3>门票标题</h3>
        <div class="tips">23:00前可定明日</div>
        <div class="tags">
          <span>
            <van-icon name="clock-o">明日可定</van-icon>
            <van-icon name="clock-o">随时可退</van-icon>
          </span>
        </div>
      </div>
      <div class="right">
        <div class="text-warning">￥{{ price }}/张</div>
        <van-button plain hairline type="info" size="mini" @click="showPopup=true">预定须知</van-button>
        <van-popup v-model="showPopup" closeable position="bottom" :style="{ height: '80%' }"/>
      </div>
    </div>
    <!-- 提交表单 -->
    <van-form @submit="onSubmit" class="form-box">
      <van-cell-group class="form-group">
        <van-cell title="选择出行日期" :value="form.play_data" @click="showCalendar=true"/>
        <van-calendar v-model="showCalendar" @confirm="onConfirm"/>
      </van-cell-group>
      <van-cell-group class="form-group">
        <van-cell title="购买数量">
          <van-stepper v-model="form.buy_count" integer min="1"/>
        </van-cell>
      </van-cell-group>
      <van-cell-group class="form-group">
        <van-field v-model="form.to_user" type="text" label="收件人" placeholder="输入收件人"
                   :rules="[{ request: true, message: '请输入收件人' }]"/>
        <van-field v-model="form.to_phone" type="text" label="手机号码" placeholder="输入手机号码"
                   :rules="[{ request: true, message: '请输入手机号码' }]"/>
      </van-cell-group>
      <van-submit-bar :price="totalPrice" button-text="提交订单" @click="onSubmit"/>
    </van-form>
  </div>
 </template>

<script>
  export default {
    name: 'Sumbit',
    data () {
      return {
        // 预定须知弹框显示
        showPopup: false,
        // 日期选择弹框
        showCalendar: false,
        price: 98,
        form: {
          play_data: '',
          buy_count: 1,
          to_user: '',
          to_phone: ''
        }
      }
    },
    computed: {
      /**
       * 计算总价
       */
      totalPrice () {
        return this.price * this.form.buy_count * 100
      }
    },
    methods: {
      // 返回上一页
      goBack () {
        this.$router.go(-1)
      },
      /**
       * 选择日期
       */
      formatDate (data) {
        return `${data.getFullYear()} - ${data.getMonth() + 1} - ${data.getDate()}`
      },
      onConfirm (data) {
        // 隐藏日历弹框
        this.showCalendar = false
        // 保存数据
        this.form.play_data = this.formatDate(data)
      }
    }
  }
</script>

<style scoped lang="less">
  .page-order-submit {
    // 门票信息
    .order-info {
      display: flex;
      padding: 10px;
      background-color: #fff;

      .left {
        flex: 1;
        text-align: left;
      }

      h3 {
        padding: 5px 0;
        margin: 0;
      }

      .tips {
        padding: 10px 0;
        color: #999;
        font-size: 12px;
      }

      .tags {
        font-size: 12px;
      }
    }
    // 表单区域
    .form-box {
      .form-group {
        margin-top: 10px;
        background: #fff;
        .van-cell__title {
          text-align: left;
        }
      }
    }
  }
</style>
