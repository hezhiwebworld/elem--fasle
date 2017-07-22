<template>
  <div id="shop-food">
      <!--头部-->
      <div class="shop-head">
          <div class="wrap">
             <div class="shop-title clear">
                  <div class="img"><img :src="'/imgurl' + headData.image_path "   /></div>
                  <div class="shop-con">
                      <h2>{{headData.name}}</h2>
                      <p>商家配送/分钟送达/配送费5元<i>></i></p>
                      <p>公告：{{headData.promotion_info}}</p>
                  </div>
              </div>
              <p class="cart">
                  {{ headData.activities[0].icon_name }} 
                  {{ headData.activities[0].description }}
                  {{ headData.activities[0].name }}
               <span>4个活动<i>></i></span></p>
          </div>
           <img :src="'/imgurl' + headData.image_path "  class="head-bg"/>
      </div>
      <!--特效选项卡-->
      <div class="shop-body">
          <div class="shop-nav">
              <a>商品</a>
              <a>评价</a>
          </div>
          <div class="wrap">
                <!--商品对应的列表-->
                <div class="shop-food">
                    <div class="item-left">
                        <ul>
                            <li>热销榜</li>
                            <li>优惠</li>
                            <li>优惠</li>
                            <li>热销榜</li>
                            <li>优惠</li>
                            <li>优惠</li>
                            <li>热销榜</li>
                            <li>优惠</li>
                            <li>优惠</li>
                        </ul>
                    </div>
                    <div class="item-right">
                        <h3>窗前明月光</h3>
                        <div class="item clear">
                            <div class="item-left">
                                <img />
                            </div>
                            <div class="item-right">
                                <h4>好吃的动心</h4>
                                <p>好吃的动心</p>
                                <p>月售673份 <span>好评路</span></p>
                                <p>月售673份 <span>好评路</span></p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-left">
                                <img />
                            </div>
                            <div class="item-right">
                                <h4>好吃的动心</h4>
                                <p>好吃的动心</p>
                                <p>月售673份 <span>好评路</span></p>
                                <p>月售673份 <span>好评路</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--评价对应的列表-->
                <div class="shop-comment" v-show="isShow">
                      <div class="row_sys">
                          <div class="col-left">
                              <p >4.6</p> 
                              <p >综合评价</p> 
                              <p>高于周边商家76.9%</p>
                          </div>
                          <div class="col-right">
                              <p>服务态度</p> 
                              <p>菜品评价</p> 
                              <p>送达时间</p>
                          </div>
                      </div>  
                      <!--评价统计-->
                      <div class="shop-comment-count">
                          <span>全部</span>
                           <span>全部</span>
                           <span>全部</span>
                      </div>
                      <!--评论-->
                      <div class="list">
                           <div class="list-left">
                               <img >
                           </div>
                           <div class="list-right">
                               <p>**********<span>2017-02-10</span></p>
                               <div>
                                   <img src=""/>
                                   <img src=""/>
                               </div>
                           </div>
                      </div>
                </div>
          </div>
      </div>
  </div>
</template>
<script>
//引入http请求
import axios from 'axios';

export default {
   data(){
       return{
           isShow : false,
           api : '/dpi/shopping/restaurant/1',
           shopid : 1,
           headData: {},
       }
   },
   created(){
      this.shopid = this.$route.params.id
   },
   mounted(){
       let that = this;
       //console.log( this.shopid )
       //头部数据
        axios.get(this.api,{
                params: {
                    shopid : that.shopid
                }
            })
            .then(function(res){
                console.log(res)
               that.headData = res.data;
            })
   }
}
</script>
<style lang="less" scoped>
#shop-food{
  
    .shop-head{
         background-color: white;
         padding: 10/20rem;
         overflow: hidden;
        .wrap{
           overflow: hidden;
           height: 100/20rem;
           position: relative;
           
           .shop-title{
               
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
                    }
                    p{
                        font-size: 8/20rem;
                    }
                    p:nth-of-type(1){
                        margin-bottom: .2rem;
                    }

                }
            }
            p.cart{
                font-size: 4/20rem;
                margin-top: 5/20rem;
                span{
                   float: right;
                }
            }
        }
         img.head-bg{
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index:-1;
            filter:blur(10px)
        }
    }
    .shop-body{
        position: relative;
        z-index: 2;
        .shop-nav{
            display: flex;
            padding: .3rem 0 .6rem;
            border-bottom: 1px solid #ebebeb;
            a{
                flex: 1;
                text-align: center;
                font-size: 14/20rem;
            }
        }
        .wrap{
            background-color: white;
            .shop-food{
                 display: flex;
                .item-left{
                    flex: 2;
                    ul{
                        li{
                            font-size: 12/20rem;
                            text-align: center;
                            padding: .7rem .3rem;
                            border-bottom: .025rem solid #ededed;
                            box-sizing: border-box;
                            background-color: #ccc;
                        }
                        li.active{
                            background-color: white;
                        }
                    }
                }
                .item-right{
                    flex: 7;
                    h3{
                        font-size: 12 / 20rem ;
                        padding: .5rem .5rem;
                         background-color: #ccc;
                    }
                    .item{
                        padding: 10/20rem;
                        .item-left{
                            width: 2.9rem;
                            height: 2.9rem;
                            background-color: #eee;
                            float: left;
                            img{
                                width: 2.9rem;
                                height: 2.9rem;
                            }
                        }
                        .item-right{
                            overflow: hidden;
                            padding-left: 10/20rem;
                            h4{
                                font-size: 14/20rem;
                            }
                            p{
                                font-size: 8/20rem; 
                                padding-top: .3rem;
                            }
                        }
                    }
                }
            }
            .shop-comment{
                .row_sys{
                    display: flex;
                    text-align: center;
                    font-size: 14/20rem;
                    padding: 20/20rem;
                    border-bottom: 10/20rem solid #eee; 
                    .col-left{
                        flex: 2;
                    }
                    .col-right{
                        flex: 3;
                    }
                }
                .shop-comment-count{
                    padding: 10/20rem;
                    span{
                        background: #3190E8;
                        padding: .2rem;
                        font-size: 14/20rem;
                        border-radius: 5/20rem;
                    }
                }
                .list{

                }
            }
        }
    }
}
</style>



