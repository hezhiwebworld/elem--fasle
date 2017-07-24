<template>
  <div>
      <h2>
          {{msg}}
      </h2>
      <h3>
          {{$store.state.count}}-{{count}}
      </h3>
      <p>
          <button @click="$store.commit('add')">+</button>
          <button @click="$store.commit('reduce')">-</button>
      </p>
  </div>
</template>
<script>
import {mapState, mapMutations } from "vuex"
export default {
  data(){
      return {
          msg: 'hello vue'
      }
  },
  //在计算属性中
  computed:{
      ...mapState(['count'])
  }
  
}
</script>

