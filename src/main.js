// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

//引入ele组件
import ElemnentUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
//导入rem
import './config/rem.js'

import store from '@/store/store'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElemnentUI)  //全局可用
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //需要在这注入，全局才能使用
  template: '<App/>',
  components: { App }
})
