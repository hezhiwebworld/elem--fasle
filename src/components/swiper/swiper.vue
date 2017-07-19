<template>
    <div id="silde-swiper">
      <swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide>
                <ul v-if="originData1">
                    <li 
                        v-for="item in originData1"
                        v-bind:key="item.id"
                    ><a>
                        <img v-bind:src=" baseUrl + item.image_url" />
                        <p>{{ item.title }}</p>
                    </a></li>
                </ul>
            </swiper-slide>
            
            <swiper-slide>
                 <ul v-if="originData2">
                    <li 
                        v-for="item in originData2"
                        v-bind:key="item.id"
                    ><a>
                        <img v-bind:src=" baseUrl + item.image_url" />
                        <p>{{ item.title }}</p>
                    </a></li>
                </ul>
            </swiper-slide>
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>  
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
//引入http请求
import axios from 'axios';
//在imgUrl中定义基础路径
import { imgUrl } from '../../config/imgUrl.js'
export default {  
   components: {  
        swiper,  
        swiperSlide  
    },  
    data() {  
        return {  
            swiperOption: {  
            //是一个组件自有属性，如果notNextTick设置为true，
            //组件则不会通过NextTick来实例化swiper，也就意味着
            //你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
            notNextTick: true,  
            pagination: '.swiper-pagination',  
            slidesPerView: 'auto',  
            centeredSlides: true,  
            paginationClickable: true,  
            spaceBetween: 60,  
                onSlideChangeEnd: swiper => {  
                    //这个位置放swiper的回调方法  
                    this.page = swiper.realIndex+1;  
                    this.index = swiper.realIndex;  
                }  
            },
            //异步请求的数据
            originData1 : [] ,
            originData2 : [] ,
            baseUrl :  imgUrl
        }  
    },
   created(){
    let that = this
    axios.get('/api/index_entry')
      .then(function( response ){
          that.originData1 = response.data.slice(0,8)
          that.originData2 = response.data.slice(8)
          //console.log( that.originData1 )
          //console.log( that.originData2 )
      })
    
  }
}     
 
</script>
<style lang="less">
#silde-swiper{
    ul{
        padding-top:20/20rem;
        padding-bottom: .8rem;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        background-color: white;
        li{
            font-size: 12/20rem;
            width: 25%;
            text-align: center;
            padding-top:.5rem;
            a{
                padding: .3rem 0;
                img{
                    width: 1.8rem;
                    height: 1.8rem;
                    margin-bottom: .3rem;
                }
            }
        }
    }
    .swiper-pagination{
       .swiper-pagination-bullet{
           width: 12px;
           height: 12px;
       }
    }
}
</style>



