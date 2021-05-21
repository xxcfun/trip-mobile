<template>
  <!-- 短信验证码发送相关的逻辑 -->
  <van-button size="small" type="primary" @click.prevent="sendSmsCode" :disabled="isSmsSend">{{ sendBtnText }}</van-button>
</template>

<script>
  import { SystemApis } from '../../utils/apis'
  import { ajax } from '../../utils/ajax'

  export default {
    name: 'SendSmsCode',
    props: ['phone'],
    data () {
      return {
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
        if (!this.phone) {
          this.$notify('请输入手机号')
          return false
        }
        // 判断手机号是否符合要求
        if (this.phone.length !== 11) {
          this.$notify('请输入11位手机号')
          return false
        }
        // 调用接口，发送短信验证码
        ajax.post(SystemApis.sendSmsCodeUrl, {
          phone_num: this.phone
        }).then(({ data }) => {
          // 提示用户验证码已经发送
          this.$notify({
            message: `验证码为：${data.sms_code}, ${data.timeout / 60}分钟内有效`,
            // 展示时长
            duration: 1000 * 10,
            type: 'success'
          })
          this.isSmsSend = true
          // 开始倒计时，60s之后才能再次点击
          this.countDown()
        }).catch(err => {
          // 如果产生了异常，提示用户重新操作
          this.isSmsSend = false
          this.sendBtnText = '点击发送验证码'
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
