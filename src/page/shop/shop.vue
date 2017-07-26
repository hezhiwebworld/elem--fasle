<template>
  <div id="shop-food">
      <!--头部-->
      <div class="shop-head">
          <div class="wrap">
             <router-link class="shop-title clear" to="/shop/shopdetail">
                  <div class="img"><img :src="'/imgurl' + headData.image_path "   /></div>
                  <div class="shop-con">
                      <h2>{{headData.name}}</h2>
                      <p>商家配送/分钟送达/配送费5元<i>></i></p>
                      <p>公告：{{headData.promotion_info}}</p>
                  </div>
              </router-link>
              <p  class="cart" v-for="(item,index) in headActiveOne" :key='item.id'>
                  
                   {{ item.name }} {{ item.description }}
                
               <span>4个活动<i>></i></span></p>
          </div>
           <img :src="'/imgurl' + headData.image_path "  class="head-bg"/>
      </div>
      <!--特效选项卡-->
      <div class="shop-body">
          <div class="shop-nav">
              <a 
                :class="{icur_show : changeShowType == 'food' }" 
                @click="changeShowType='food'"
              >商品</a>
              <a 
                :class="{icur_show : changeShowType == 'comment' }"
                @click="changeShowType='comment'"
              >评价</a>
          </div>
          <div class="wrap">
                <!--商品对应的列表-->
          </div>
      </div>
       <goods 
            :shopid="shopid" 
            :restaurantid="restaurant_id" 
            v-show="changeShowType=='food'"
            id="ratingContainer"
       ></goods>
       <comment  v-show="changeShowType=='comment'"></comment>
  </div>
</template>
<script>
//引入http请求
import axios from 'axios';
//引入中间列表组件
import goods from "@/page/shop/good2"
import comment from "@/page/shop/commet"
export default {
   data(){
       return{
           isShow : false,
           api : '/dpi/shopping/restaurant',
           menuapi: '/dpi/shopping/v2/menu',
           shopid : 1,
           restaurant_id :1,  //店铺id
           headData: {},
           headActiveOne: [],
           menuData : {},
           menuIndex : 0,
           changeShowType: 'food', //切换食物和评价的品论
       }
   },
   components:{
        goods,
        comment
   },
   created(){
        this.restaurant_id = this.$route.params.id
   },
   mounted(){
       let that = this
      //头部数据
        axios.get(this.api + '/' +  1 )
        .then(function(res){
            console.log(res)
            that.headData = res.data;
        })
        //获取路由参数
        console.log(this.$route.params)
   },
   computed:{
       
   },
   
  methods:{
    
   
  },
  //定义watch方法监视数据的变化
  watch:{
      
  }
}
</script>
<style lang="less" scoped>
#shop-food{
    overflow: hidden;
    width: 100%;
    height: 100%;
    .shop-head{
         background-color: white;
         padding: 10/20rem;
         overflow: hidden;
         background-color: rgba(0, 0, 0, 0.8);
        .wrap{
           overflow: hidden;
           height: 100/20rem;
           position: relative;
           background-color: rgba(0, 0, 0, 0.8);
          .shop-title{
              position: absolute;
              z-index: 3;
               .img{
                     width: 2.9rem;
                     height: 2.9rem;
                     background-color: #eee;
                     float: left;
                    img{
                        width: 2.9rem;
                        height: 2.9rem;
                    }
                }
                .shop-con{
                   padding-left: 10/20rem;
                    overflow: hidden;
                    font-size: 12/20rem;
                    h2{
                        text-align: left;
                        height: 27/20rem;
                         color: white;
                    }
                    p{
                        font-size: 8/20rem;
                        color: white;
                    }
                    p:nth-of-type(1){
                        margin-bottom: .2rem;
                        i{
                            color: white;
                        }
                    }

                }
            }
            p.cart{
                font-size: 4/20rem;
                margin-top: 5/20rem;
                position: absolute;
                bottom: 10/20rem;
                z-index: 3;
                color: white;
                span{
                  color: white;
                  padding-left: 80/20rem;
                  i{
                     color: white;
                   }
                }
            }
        }
         img.head-bg{
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index:1;
            filter:blur(15px)
        }
    }
    .shop-body{
        position: relative;
        z-index: 2;
        .shop-nav{
            display: flex;
            padding: .3rem 0 .6rem;
            border-bottom: 1px solid #ccc;
            position: relative;
            z-index: 777;
            background-color: white;
            a{
                flex: 1;
                text-align: center;
                font-size: 14/20rem;
            }
            a.icur_show{
                color: #3190e8;
                border-color: #3190e8;
            }
        }
        .wrap{
            background-color: white;
            position: relative;
            z-index: 3;
        }
    }
}
</style>



