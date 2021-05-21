<template>
  <!-- 个人中心 -->
  <div class="page-mine">
    <!-- 标题 -->
    <van-nav-bar title="个人中心" fixed/>
    <!-- 用户基本信息，头像、昵称 -->
    <div class="user-header">
      <div class="avatar" v-if="user.avatar">
        <img :src="user.avatar" alt="">
      </div>
      <div class="avatar" v-else>
        <img src="/static/mine/avatar.png" alt="">
      </div>
      <div>
        <p>欢迎你，{{ user.nickname }}</p>
        <a class="btn-link" href="#" @click="logout">退出登录</a>
      </div>
    </div>
    <!-- 订单的菜单列表 -->
    <van-row class="user-links">
      <van-col span="6">
        <router-link to="#">
          <van-icon name="records"/>
          <span>全部订单</span>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="#">
          <van-icon name="pending-payment"/>
          <span>待支付</span>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="#">
          <van-icon name="logistics"/>
          <span>已完成</span>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="#">
          <van-icon name="failure"/>
          <span>已取消</span>
        </router-link>
      </van-col>
    </van-row>
    <!-- 底部导航 -->
    <trip-footer/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import TripFooter from '../components/common/Footer'
  import { ajax } from '../utils/ajax'
  import { AccountsApis } from '../utils/apis'
  import * as types from '../store/mutation-types'
  export default {
    name: 'Mine',
    components: { TripFooter },
    methods: {
      /**
       * 查询用户信息
       */
      getUserInfo () {
        ajax.get(AccountsApis.userInfoUrl).then(({ data }) => {
          console.log('Mine-getUserInfo', data)
          this.$store.commit(types.UPDATE_USER_INFO, data)
        })
      },
      /**
       * 退出登录
       */
      logout () {
        // 调用接口，退出登录
        ajax.get(AccountsApis.logoutUrl).then(() => {
          // 提示用户
          this.$notify({
            message: '欢迎下次再来',
            type: 'success'
          })
          // 删除用户登录的信息
          this.$store.commit(types.DELETE_USER_INFO)
          // 跳转到首页去
          this.$router.push({ name: 'Home' })
        })
      }
    },
    computed: mapState(['user']),
    mounted () {
      this.getUserInfo()
    }
  }
</script>

<style lang="less">
  .page-mine {
    .van-nav-bar--fixed {
      background-color: transparent;
    }

    .van-nav-bar__title {
      color: #ffffff;
    }

    .user-header {
      background: url("/static/mine/bg.jpg") no-repeat center;
      background-size: 100% auto;
      color: #fff;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 32px;

      .avatar img {
        width: 80px;
        height: 80px;
      }

      .btn-link {
        color: #fff;
      }
    }

    .user-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;

      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
</style>
