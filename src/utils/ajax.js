import axios from 'axios'

export const ajax = axios.create({
  headers: {
    source: 'h5',
    icode: 'abcd',
    'Content-Type': 'application/x-www-form-url encoded'
  },
  withCredentials: true
})

ajax.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  window.app.$toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner'
  })
  return config
}, function (error) {
  // 对请求错误做些什么
  window.app.$toast.clear()
  return Promise.reject(error)
})

ajax.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  window.app.$toast.clear()
  return response
}, function (error) {
  // 对响应错误做些什么
  if (error.response) {
    if (error.response.status === 401) {
      window.alert('未登录，即将跳转到登录页面')
    } else if (error.response.status === 500) {
      window.app.$notify({
        message: '服务器正忙，请稍后再试',
        type: 'danger'
      })
      // window.alert('服务器正忙，请稍后再试')
    }
  }
  window.app.$toast.clear()
  return Promise.reject(error)
})
