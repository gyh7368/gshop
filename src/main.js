import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import router from './router/index.js'
import store from './store/index.js'

//解决移动端点击响应延时0.3s问题
FastClick.attach(document.body)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
