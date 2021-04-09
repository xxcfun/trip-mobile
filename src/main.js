import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// vantUI组件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 把VantUI当做一个插件，在Vue中使用
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
