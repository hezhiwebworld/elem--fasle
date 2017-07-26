import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index/index'
import  City from '@/page/city/city'
import Shop from '@/page/shop/shop'

// 测试better-scroll

import good2 from '@/page/shop/good2'
import comment from '@/page/shop/commet'
import shopdetail from '@/page/shop/children/shopdetail'
//个人中心
import personal from '@/page/personal/person'

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
      component: Shop,
    },
    {
      path: '/shopdetail',
      component : shopdetail,
    },
    {
      path: '/shop',
      component : Shop,
    },
    // 个人中心
     {
      path: '/personal',
      component : personal,
    },
    
  ]
})
