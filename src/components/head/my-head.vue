<template>
    <div id="head-top" class="clear">
       <div class="top-left left">
           <slot></slot>
           {{logo}}
       </div>
       <div class="top-center left"></div>
       <div class="top-right right">
           <slot></slot>
           {{weather}}
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
    .top-left{
        color: white;
    }
    .top-right{
        color: white;
    }
}
</style>


