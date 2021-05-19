<template>
  <div class="page-account-register">
    <van-form>
      <van-field
        v-model="form.username"
        label="手机号码"
        placeholder="手机号码"
        type="tel"
        clearable
        maxlength="11"
        @input="onPhoneChange"
      />
      <van-field
        v-model="form.sms_code"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary" @click.prevent="sendSmsCode" :disabled="isSmsSend">{{ sendBtnText }}</van-button>
        </template>
      </van-field>
    </van-form>
  </div>
</template>

<script>
  export default {
    name: 'Send',
    data () {
      return {
        form: {
          username: '',
          sms_code: ''
        },
        // 是否已经发送了验证码
        isSmsSend: false,
        sendBtnText: '点击发送验证码',
        timer: null,
        counter: 60
      }
    },
    methods: {
      /**
       * 重置倒计时
       */
      reset () {
        this.isSmsSend = false
        this.sendBtnText = '点击发送验证码'
        if (this.timer) {
          clearInterval(this.timer)
          this.counter = 60
          this.timer = null
        }
      },
      /**
       * 倒计时
       */
      countDown () {
        this.timer = setInterval(() => {
          this.sendBtnText = `(${this.counter}秒)后重新发送`
          this.counter--
          if (this.counter < 0) {
            this.reset()
          }
        }, 1000)
      },
      /**
       * 发送验证码
       */
      sendSmsCode () {
        // 判断手机号是否已经输入
        if (!this.form.username) {
          this.$notify('请输入手机号')
          return false
        }
        // 判断手机号是否符合要求
        if (this.form.username.length !== 11) {
          this.$notify('请输入11位手机号')
          return false
        }
        // 调用接口，发送短信验证码
        this.isSmsSend = true
        // 开始倒计时，60s之后才能再次点击
        this.countDown()
      },
      // 当手机号变化时，重置发送按钮
      onPhoneChange () {
        this.reset()
      }
    }
  }
</script>

<style lang="less">
  .page-account-register {
    padding-top: 50px;
  }
</style>
