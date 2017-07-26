import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index/index'
import  City from '@/page/city/city'
import Shop from '@/page/shop/shop'

// 测试better-scroll

import good2 from '@/page/shop/good2'
import comment from '@/page/shop/commet'
import shopdetail from '@/page/shop/children/shopdetail'
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
      path: '/shop',
      component : Shop,
       children: [
        {
            path: 'shopdetail',  //商铺详情页的字路由
            component: shopdetail
        },
       
      ]
    }
    
  ]
})
