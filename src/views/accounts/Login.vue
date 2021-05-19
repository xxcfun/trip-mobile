<template>
  <!-- 用户登录 -->
  <div class="page-account-login">
    <!-- 导航条 -->
    <van-nav-bar title="用户登录" left-text="返回" left-arrow @click-left="goBack"/>
    <!-- 表单输入 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        label="用户名"
        placeholder="用户名"
        clearable
        type="tel"
        maxlength="11"
        :rules="ruleName"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <!-- 文字提示 -->
    <div class="tips">
      登录表示同意 <a href="#">用户使用协议</a>及<a href="#">隐私条款</a>
    </div>
    <div class="tips">
      没有账号？ <router-link :to="{name: 'AccountRegister'}">点击注册&gt;&gt;</router-link>
    </div>
    <!-- 版权信息 -->
    <copyright/>
  </div>
</template>

<script>
  import Copyright from '../../components/common/Copyright'
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: '',
        // 用户名验证规则
        ruleName: [
          { required: true, message: '请填写用户名' },
          { pattern: /1\d{10}/, message: '请填写正确的手机号' }
        ]
      }
    },
    components: { Copyright },
    methods: {
      // 返回上一页
      goBack () {
        this.$router.go(-1)
      },
      // 提交表单
      onSubmit () {
      }
    }
  }
</script>

<style scoped>

</style>
