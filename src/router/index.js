import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search'
import Mine from '../views/Mine'
import SightList from '../views/sight/SightList'
import SightDetail from '../views/sight/SightDetail'
import SightInfo from '../views/sight/SightInfo'
import SightComment from '../views/sight/SightComment'
import SightImage from '../views/sight/SightImage'
import AccountLogin from '../views/accounts/Login'
import AccountRegister from '../views/accounts/Register'
import OrderSubmit from '../views/order/Sumbit'
import OrderPay from '../views/order/Pay'
// import Send from '../views/accounts/Send'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  // 景点列表
  {
    path: 'sight/list',
    name: 'SightList',
    component: SightList
  },
  // 景点详情
  {
    path: '/sight/detail/:id',
    name: 'SightDetail',
    component: SightDetail
  },
  // 景点介绍
  {
    path: '/sight/info/:id',
    name: 'SightInfo',
    component: SightInfo
  },
  // 评论列表
  {
    path: '/sight/comment/:id',
    name: 'SightComment',
    component: SightComment
  },
  // 景点下的图片
  {
    path: '/sight/image/:id',
    name: 'SightImage',
    component: SightImage
  },
  // 用户登录
  {
    path: '/account/login',
    name: 'AccountLogin',
    component: AccountLogin
  },
  // 用户注册
  {
    path: '/account/register',
    name: 'AccountRegister',
    component: AccountRegister
  },
  // 验证码
  // {
  //   path: '/send',
  //   name: 'send',
  //   component: Send
  // }
  // 提交订单
  {
    path: '/order/submit/:id',
    name: 'OrderSubmit',
    component: OrderSubmit
  },
  // 确认订单并支付
  {
    path: '/order/pay/:sn',
    name: 'OrderPay',
    component: OrderPay
  }
]

const router = new VueRouter({
  routes
})

export default router
