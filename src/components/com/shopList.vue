<template>
    <div v-if="dataList" class="wrap">
        <div class="item" 
            v-for="item in dataList"
            v-bind:key="item.id"
        >
            <div class="item-left">
                <img :src= "'http://images.cangdu.org/' + item.image_path " />
            </div>
            <div class="item-right">
                <p>{{ item.name }}<i>准</i></p>
				<p><span></span>月售<span class="num">333</span>单 <i>准时达 蜂鸟专送</i></p>
				<p>￥<span>50</span>起送  / 配送费￥<span>4</span>  <i>{{ item.distance }}km / 23分钟</i></p>
            </div>
        </div>
    </div>
</template>
<script>
//引入http请求
import axios from 'axios';
export default {
   props: {
       api: {
           default: '/dpi/shopping/restaurants'
       },
       params: {
           latitude: '31.22967',
           longitude: '121.4762'
       }
   },
   data(){
      return {
         dataList: []
      }
   },
   mounted (){
       let that = this
       axios.get(this.api ,{
           params: {
             latitude: '31.22967',
             longitude: '121.4762'
           }
       })
       .then(function( response ){
            that.dataList = response.data
            console.log( that.dataList )
       })
   }
}
</script>
<style lang="less">
.wrap{
    background-color: white;
    h3{
        font-size: 14/20rem;  
        padding-left: 10/20rem;
        height: 35/20rem;
        line-height: 35/20rem;
    }
    .item{
        display: flex;
        border-bottom: 1px solid #CCC;
        .item-left{
            width: 80/20rem;
            height: 60/20rem;
            padding: 10/20rem;
            box-sizing: content-box;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .item-right{
            width: 100%;
            p{
                width: 100%;
                position: relative;
                i{
                    position: absolute;
                    right: 10/20rem;
                    top: 0px;
                    font-size: 10/20rem;
                }
            }
            p:nth-child(1){
                font-size: 14/20rem;
                height: 24/20rem;
                line-height: 24/20rem;
                padding-top: 10/20rem;
                box-sizing: content-box;
                i{
                    top: 10/20rem;
                }
            }
                p:nth-child(2){
                font-size: 12/20rem;
                height: 24/20rem;
                line-height: 24/20rem;
            }
                p:nth-child(3){
                font-size: 10/20rem;
                height: 24/20rem;
                    line-height: 24/20rem;
            }
        }
    }
}
</style>


