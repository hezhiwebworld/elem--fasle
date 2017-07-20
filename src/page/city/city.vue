<template>
 <div>
    <my-head>
        <router-link to="" slot="back">返回</router-link>
        <span slot="title">上海</span>
    </my-head>  
    <div class="city-contet">
        <form action="" method="post">
            <input type="text" name="" id="" placeholder="北京" v-model="inputValue"/><br/>
            <input type="button" value="提交" @click="gohome()"/>
        </form>
        <div class="city-icur">
            <h3>当前城市</h3>
            <span>上海</span>
        </div>
        <div class="city-old">
            <h3>历史选择</h3>
            <div>
                <span>上海</span>
                <span>杭州东</span>
                <span>嘉善</span>
            </div>
        </div>
        <div class="city-hot" v-if="dataObj">
            
            <div v-bind:key="item.id" v-for="(item , key) in dataObj">
                 <h3>{{ key }}</h3>
                <span v-bind:key="list.id" v-for="list in item" class="ellipsis">
                    {{ list.name }}
                </span>
            </div>
        </div>
    </div>
</div>		
</template>
<script>
//导入头部
import myHead from '@/components/head/my-head';
//倒入ajax请求
import axios from 'axios';

export default {
  data(){
    return {
        dataObj: {},
        inputValue:'北京', //搜索地址
        cityid: '', //当前城市名字
        cityname: '' //当前城市名字
    }
  },
  components: {
      'my-head': myHead
  },
  created(){
        let that = this;
        axios.get('/dpi/v1/cities?type=group')
            .then(response =>{
                that.dataObj  = response.data
            })
  },
  methods: {
      
      gohome() {
          this.$router.push({ name: 'index', params : { address: this.inputValue }})
      }
  }
  
}
</script>
<style lang="less" scoped>
.city-contet{
  form{
        height: 60/20rem;
        padding: 10/20rem;
        padding-bottom: 15/20rem;
        text-align: center;
        background-color: white;
       input{
           height: 45%;
       }
       input:nth-child(1){
           width: 80%;
           font-size: 14/20rem;
            padding-left: 10/20rem;
            margin-bottom: .5rem;
            border: 1px solid #ccc;
             border-radius: 10px;
       }
       input[type="button"]{
           width: 80%;
           border-radius: 10px;
           font-size: 14/20rem;
           background-color: #3190E8;
           color: white;
       }
   }
   
   .city-icur{
       background-color: #FFFFFF;
       margin-top: 10/20rem;
      
       h3{
         font-size: 12/20rem;  
         height: 30/20rem;
         line-height:30/20rem;
         background-color: #f5f5f5;
         padding-left: 10/20rem;
        
       }
       span{
           display: inline-block;
           width: 100/20rem;
           height: 30/20rem;
           line-height:30/20rem;
           border: 1px solid #CCCCCC;
           border-radius: 10px;
           margin-top: 10/20rem;
           margin-bottom: 10/20rem;
           text-align: center;
           margin-left: 10/20rem;
           font-size: 10/20rem;
       }
   }
   .city-old{
       background-color: #FFFFFF;
       margin-top: 10/20rem;
      
       h3{
         font-size: 12/20rem;  
         height: 30/20rem;
         line-height:30/20rem;
         background-color: #f5f5f5;
         padding-left: 10/20rem;
        
       }
       span{
           display: inline-block;
           width: 80/20rem;
           height: 30/20rem;
           line-height:30/20rem;
           border: 1px solid #CCCCCC;
           border-radius: 10px;
           margin-top: 10/20rem;
           margin-bottom: 10/20rem;
           text-align: center;
           margin-left: 10/20rem;
           font-size: 10/20rem;
       }
   }
   .city-hot{
       background-color: #FFFFFF;
       margin-top: 10/20rem;
      
       h3{
         font-size: 12/20rem;  
         height: 30/20rem;
         line-height:30/20rem;
         background-color: #f5f5f5;
         padding-left: 10/20rem;
        
       }
       span{
           display: inline-block;
           width: 80/20rem;
           height: 30/20rem;
           line-height:30/20rem;
           border: 1px solid #CCCCCC;
           border-radius: 10px;
           margin-top: 10/20rem;
           margin-bottom: 10/20rem;
           text-align: center;
           margin-left: 10/20rem;
           font-size: 10/20rem;
       }
   }
}
</style>


