<template>
    <div>
      <tt>111</tt>
     <my-head>
        <router-link to="city" slot="address">{{city}}</router-link>
        <span slot="title"></span>
        <span slot="weather">天气</span>
      </my-head>
      <my-swiper></my-swiper>
      <h2>附近商店</h2>
      <shop-list></shop-list>
      <my-foot></my-foot>
    </div>
</template>
<script>
//导入需要 引入的组件,并且申明
import myHead from '@/components/head/my-head';
import myFoot from '@/components/foot/foot'
import mySwiper from '@/components/swiper/swiper'
import myShopList from '@/components/com/shopList'

import tt from '@/components/test'
export default {
  name: 'index',
    //组件声明
  data(){
      return {
         city: "上海"
      }
  },
  components: {
     'my-head'   :  myHead,
     'my-swiper' :  mySwiper,
     'my-foot'   :  myFoot,
     'shop-list' :  myShopList,
       tt
  },
  created() {
    console.log(this.$route.params)
    this.city = this.$route.params.address
  }
  
}
</script>

<style lang="less" scoped>
    h2{
      height: 25/20rem;
      line-height: 25/20rem;
      font-size: 14/20rem;
      background-color: white;
      margin-top: 10/20rem;
      padding-left: 10/20rem;
    }
</style>


