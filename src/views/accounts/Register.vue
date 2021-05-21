<template>
  <!-- 用户注册 -->
  <div class="page-account-register">
    <!-- 导航条 -->
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="goBack"/>
    <!-- 表单输入 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        label="手机号码"
        placeholder="手机号码"
        type="tel"
        clearable
        maxlength="11"
        :rules="ruleName"
        @input="onPhoneChange"
      />
      <van-field
        v-model="form.sms_code"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        :rules="[{ required: true, message: '请输入短信验证码' }]"
      >
        <template #button>
          <send-sms-code ref="refSms" :phone="form.username"/>
        </template>
      </van-field>
      <van-field
        v-model="form.nickname"
        label="用户昵称"
        placeholder="用户昵称"
        :rules="[{ required: true, message: '用户昵称' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="form.passwordRepeat"
        type="password"
        label="确认密码"
        placeholder="确认密码"
        :rules="rulePassword"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <!-- 文字提示 -->
    <div class="tips">
      注册表示同意 <a href="#">用户使用协议</a>及<a href="#">隐私条款</a>
    </div>
    <div class="tips">
      已有账号？ <router-link :to="{name: 'AccountLogin'}">点击登录&gt;&gt;</router-link>
    </div>
    <!-- 版权信息 -->
    <copyright/>
  </div>
</template>

<script>
  import Copyright from '../../components/common/Copyright'
  import SendSmsCode from '../../components/common/SendSmsCode'
  import { ajax } from '../../utils/ajax'
  import { AccountsApis } from '../../utils/apis'
  import * as types from '../../store/mutation-types'
  export default {
    name: 'Register',
    data () {
      return {
        form: {
          username: '',
          sms_code: '',
          nickname: '',
          password: '',
          passwordRepeat: ''
        },
        // 用户名验证规则
        ruleName: [
          { required: true, message: '请填写用户名' },
          { pattern: /1\d{10}/, message: '请填写正确的手机号' }
        ],
        // 重复密码验证规则
        rulePassword: [
          { required: true, message: '请再填写一次' },
          { validator: () => this.form.password === this.form.passwordRepeat, message: '两次密码输入不一致' }
        ]
      }
    },
    components: { SendSmsCode, Copyright },
    methods: {
      // 返回上一页
      goBack () {
        this.$router.go(-1)
      },
      // 提交表单
      onSubmit () {
        // 调用接口
        ajax.post(AccountsApis.registerUrl, {
          username: this.form.username,
          sms_code: this.form.sms_code,
          nickname: this.form.nickname,
          password: this.form.passwordRepeat
        }).then(({ data }) => {
          // 判断成功返回结果，用户信息写入vuex
          this.$store.commit(types.UPDATE_USER_INFO, data)
          // 提示用户
          this.$notify({
            message: '注册成功',
            type: 'success'
          })
          // 跳转个人中心页面
          this.$router.replace({ name: 'Mine' })
        }).catch(({ response: { data } }) => {
          // 3. 如果出现了异常，需要给用户提示异常信息
          console.log(data)
        })
      },
      // 当手机号变化时，重置发送按钮
      onPhoneChange () {
        this.$refs.refSms.reset()
      }
    }
  }
</script>

<style scoped lang="less">

</style>
