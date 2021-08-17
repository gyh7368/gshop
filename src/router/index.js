import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/home/Home.vue'
import Order from '../pages/order/Order.vue'
import Search from '../pages/search/Search.vue'
import Profile from '../pages/profile/Profile.vue'
import Login from '../pages/login/Login.vue'


const routes = [
  {path: '/', redirect:'/home'},
  {path: '/home', component:Home, name: 'Home', meta: {showF: true}},
  {path: '/order', component:Order, name: 'Order', meta: {showF: true}},
  {path: '/search', component:Search, name: 'Search', meta: {showF: true}},
  {path: '/profile', component:Profile, name: 'Profile', meta: {showF: true}},
  {path: '/login', component:Login, name: 'Login'},
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
