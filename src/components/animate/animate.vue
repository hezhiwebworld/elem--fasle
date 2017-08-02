<template>
  <div>
    <input type="button" value="开始动画" @click="show = !show">
    <transition enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
    >
        <div id="dv" v-show="show" class="animated">这是一个div</div>
    </transition>
  </div>
</template>
<script>
//导入全局的css样式
import 'animate.css/animate.css'
export default {
    data(){
        return {
            show: false
        }
    }
}
</script>
<style>

#dv{
    height: 300px;
    width: 300px;
    background-color: red;
}
</style>


