<template>
    <div class="shopcart">
        <div class="content"> 
            <!--左侧-->
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo">
                        <i class="icon iconfont icon-gouwuche" @touchstart="addToCart(1,2,30,'苹果')"></i>
                    </div>
                </div>
                <div class="price">元</div>
                <div class="desc">配送费20元</div>
            </div>
            <!--右侧-->
            <div class="content-right">
                <div class="pay">
                    支付
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//从vuex中导入两个方法
import {mapState, mapMutations} from 'vuex'
export default {
  data(){
      return {
          totalPrice: 0,
      }
  },
  computed:{
      //这个是数据
      ...mapState(['cartList'])
  },
  methods:{
        ...mapMutations([
            'add_cart'
        ]),
        // 在这里定义一个方法
        addToCart(shopid,food_id,price,name){
            //更改数据仓库里面的数值
          this.add_cart({ shopid,food_id,price,name})
        },
        toSum(){
            
            if(cartList){
                
            }
        }
        
  }
}
</script>
<style lang="less">
.content{
    display: flex;
    .content-left{
        flex: 3;
        display: flex;
        text-align: center;
        line-height: 46px;
        .logo-wrapper{
            flex: 1;
           .logo{
               i{
                   font-size: 40px;
                   color: red;
               }
               i.icur{
                   color: red; 
               }
           }
        }
        .price{
            font-size: 14px;
            flex: 1;
        }
        .desc{
            font-size: 14px;
            flex: 1;
        }
    }
    .content-right{
        flex: 1;
        line-height: 46px;
        text-align: center;
        font-size: 20px;
    }
}
</style>


