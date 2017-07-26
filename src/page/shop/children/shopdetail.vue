<template>
 <div>
     <MyHeader>
         <span slot="back"><i class="icon iconfont icon-fanhui" style="font-size:20px;color:white"></i></span>
         <span slot="title">商家详情</span>
     </MyHeader>
      <div id="shopdetail">
          <div class="discount">
              <h2>活动与属性</h2>
              <ul>
                  <li><span></span><a>满30减5，满60减8(APP专享)</a></li>
                  <li><span></span><a>优惠大酬宾(APP专享)</a></li>
                  <li><span></span><a>新用户立减16元(APP专享)</a></li>
                  <li><span></span><a>进店领券5元(APP专享)</a></li>
                  <li><span></span><a>已加入“外卖保”计划，食品安全有保障(APP专享)</a></li>
                  <li><span></span><a>准时必达，超时秒赔(APP专享)</a></li>
                  <li><span></span><a>该商家支持开发票，请在下单时填写好发票抬头(APP专享)</a></li>
              </ul>
          </div>
          <div class="safe">
            <h2>食品监督安全公式<span></span></h2>
            <div class="item">
                <div class="item-left">
                        <img>
                </div>
                <div class="item-right">
                        <p>监督检查结果：良好</p>
                        <p>检查日期</p>
                </div>
            </div>
          </div>
          <!--商家信息-->
          <div class="shopInfo">
                <ul>
                    <li>商家信息</li>
                    <li>效果演示</li>
                    <li>地址：上海市静安区柳营路709号(近富绎时尚酒店)</li>
                    <li>营业时间：[8:30/20:30]</li>
                    <li>营业执照</li>
                    <li>餐饮服务许可证</li>
                </ul>
          </div>
          <!--商家信息-->
      </div>
      
</div>

</template>
<script>
//导入头部组件
import MyHeader from "@/components/head/my-head"
export default {
    components:{
        MyHeader
    }
}
</script>
<style lang="less">
#shopdetail{
    position: relative;
    z-index: 999;
    background-color: white;
    margin-top: 10/20rem;
    .discount{
        h2{
            font-size: .75rem;
            color: #333;
            line-height: 1.8rem;
            padding-left: .6rem;
            border-bottom: 1px solid #f1f1f1;
            margin-bottom: .3rem;
        }
        ul{
            padding: 0 .6rem;
            li{
                font-size: .55rem;
                color: #666;
                height: 31px;
            }
        }
    }
    .safe{
        h2{
            font-size: .75rem;
            color: #333;
            line-height: 1.8rem;
            padding-left: .6rem;
            border-bottom: 1px solid #f1f1f1;
            margin-bottom: .3rem;
        }
        .item{
             padding: 0 .6rem;
            .item-left{

            }
            .item-right{
                 font-size: 14/20rem;
            }
        }
    }
    .shopInfo{
        ul{
            padding: 0 .6rem;
            li{
                font-size: 12/20rem;
                color: #666;
                height: 31px;
            }
        }
    }
}
</style>


