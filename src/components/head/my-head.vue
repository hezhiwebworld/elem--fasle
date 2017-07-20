<template>
    <div id="head-top">
       <div class="top-left">
           <slot name="address"></slot>
           <slot name="back"></slot>
       </div>
       <div class="top-center">
            <slot name="title"></slot>
       </div>
       <div class="top-right">
          <slot name="weather"></slot>
       </div>
    </div>
</template>
<script>
export default {
  props: {
      weather: {
          default: '天气'
      },
      logo: {
          default: '搜索'
      }
  }
}
</script>
<style lang="less" scoped>
#head-top{
    height: 2rem;
    background-color: #0096FF;
    display: flex;
    text-align: center;
    line-height: 2rem;
   
    .top-left{
       font-size: 14/20rem;
       flex: 1;
        span{
            color: white;
        }
        a{
            color: white;
            padding-left: 10/20rem;
        }
     }
    .top-center{
        flex: 5;
        font-size: 14/20rem;
       span{
            color: white;
       }
      
    }
    .top-right{
        flex: 1;
        font-size: 14/20rem;
       span{
            color: white;
       }
    }
}
</style>


