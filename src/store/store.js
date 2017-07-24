import Vue from "vue"
import Vuex from "vuex"
import mutations from './mutations.js'

Vue.use(Vuex)

const state = {
    count: 1, //测试vuex
    cartList: '',  //加入购物车的商品列表
    cartId : '',  //购物车的id
    userInfo: ""   //用户信息
}
//这里到出是固定的语法
export default new Vuex.Store({
    state,  //数据仓库
    mutations  //更改数据仓库的方法
})




