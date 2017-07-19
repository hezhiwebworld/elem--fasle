<template>
    <div>
        <my-head></my-head>
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
export default {
  name: 'index',
    //组件声明
  components: {
     'my-head'   :  myHead,
     'my-swiper' :  mySwiper,
     'my-foot'   :  myFoot,
     'shop-list' :  myShopList
  },
  
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


