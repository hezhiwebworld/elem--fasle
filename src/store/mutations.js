
import { save,get } from '../config/tools.js'
//es 导出
export default {
    //在这里面定义改变数据仓库数据的方法
    add(state){
        state.count++
    },
    reduce(state,n){
        state.count -=n; 
    },
    //加入购物车
    add_cart(state,{
        shopid,
        food_id,
        name,
        price,
    }){
      let cart = state.cartList;
      if( cart[food_id] ){
           cart[food_id]['num']++ 
      }else{
          cart[food_id] ={
              'num': 1,
              'name':name,
              'price' : price,
          }
      }
      state.cartList = { ...cart }
      save('buycarttest', state.cartList )

    }
}
