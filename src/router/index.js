import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index/index'
import  City from '@/page/city/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
     {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
