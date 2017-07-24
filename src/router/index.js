import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index/index'
import  City from '@/page/city/city'
import Shop from '@/page/shop/shop'

// 测试better-scroll
import good from '@/page/shop/good'
import good1 from '@/page/shop/good1'
import good2 from '@/page/shop/good2'
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
    },
    {
      path: '/shop/:id?',
      name: 'shop',
      component: Shop
    },
    {
      path: '/good',
      name: 'good',
      component: good
    },
     {
      path: '/good1',
      name: 'good',
      component: good1
    },
    {
      path: '/good2',
      name: 'good',
      component: good2
    }
  ]
})
