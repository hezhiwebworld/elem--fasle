<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li 
                    class="food-list-hook"
                    v-for="(item,index) in goods" 
                    @click ="selectMenu( index, $event )"
                    v-bind:class="{'active': currentIndex == index}"
                    :key="item.id">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" ref="foodsWrapper">
            <!--右侧内容区-->
             <div class="item-right">
                <!--<h3>窗前明月光</h3>-->
                <div class="item clear">
                    <div class="item-left">
                        <img />
                    </div>
                    <div class="item-right">
                        <h4>好吃的动心</h4>
                        <p>好吃的动心</p>
                        <p>月售673份 <span>好评路</span></p>
                        <p>月售673份 <span>好评路</span></p>
                    </div>
                </div>
                <div class="item">
                    <div class="item-left">
                        <img />
                    </div>
                    <div class="item-right">
                        <h4>好吃的动心</h4>
                        <p>好吃的动心</p>
                        <p>月售673份 <span>好评路</span></p>
                        <p>月售673份 <span>好评路</span></p>
                    </div>
                </div>
                <div class="item">
                    <div class="item-left">
                        <img />
                    </div>
                    <div class="item-right">
                        <h4>好吃的动心</h4>
                        <p>好吃的动心</p>
                        <p>月售673份 <span>好评路</span></p>
                        <p>月售673份 <span>好评路</span></p>
                    </div>
                </div>
                <div class="item">
                    <div class="item-left">
                        <img />
                    </div>
                    <div class="item-right">
                        <h4>好吃的动心</h4>
                        <p>好吃的动心</p>
                        <p>月售673份 <span>好评路</span></p>
                        <p>月售673份 <span>好评路</span></p>
                    </div>
                </div>
                <div class="item">
                    <div class="item-left">
                        <img />
                    </div>
                    <div class="item-right">
                        <h4>好吃的动心</h4>
                        <p>好吃的动心</p>
                        <p>月售673份 <span>好评路</span></p>
                        <p>月售673份 <span>好评路</span></p>
                    </div>
                </div>
                <div class="item">
                    <div class="item-left">
                        <img />
                    </div>
                    <div class="item-right">
                        <h4>好吃的动心</h4>
                        <p>好吃的动心</p>
                        <p>月售673份 <span>好评路</span></p>
                        <p>月售673份 <span>好评路</span></p>
                    </div>
                </div>
                <div class="item">
                    <div class="item-left">
                        <img />
                    </div>
                    <div class="item-right">
                        <h4>好吃的动心</h4>
                        <p>好吃的动心</p>
                        <p>月售673份 <span>好评路</span></p>
                        <p>月售673份 <span>好评路</span></p>
                    </div>
                </div>
            </div>
            <!--右侧内容区-->
        </div>
    </div>
</template>
<script>
//引入http请求
import axios from 'axios';
//使用移动端事件
import BScroll from "better-scroll";

export default {
  data(){
        return {
            goods: [],
            api : '/dpi/shopping/restaurant',
            menuapi: '/dpi/shopping/v2/menu',
            menuIndex: 0,
            restaurant_id:1,
            shopid:1,
            listHeight: [] ,  //计算y轴累加的高度
            scrollY: 0 ,   // y周方向滚动的距离
            
        }
  },
  created(){
    this.shopid = 1
    this.restaurant_id = 1
    let that = this;
      //头部数据
    // axios.get(this.api + '/' +  1 )
    // .then(function(res){
    //     console.log(res)
    //     that.goods = res.data;
    // })
    //左侧区域导航菜单
    axios.get(this.menuapi,{
        params :{
            restaurant_id : that.restaurant_id
        }
    }).then(function(res){
        that.goods = res.data;
        that.$nextTick(()=>{
            console.log(that.goods)
            that._initScroll();
        })
    })
     
  },
  //定义滚动的方法
  methods: {
      
      selectMenu( index, event ){
        
        if( !event._constructed ){
            return;
        }
        //这个主要是右侧跟左侧映射的关系
        let foodList = this.$refs.menuWrapper.getElementsByClassName('food-list-hook')
        let el  = foodList[index]
        this.foodsScroll.scrollToElement( el, 300)
        this.menuScroll.scrollTo(0,this.listHeight[index])
        console.log( el );
      },
      _initScroll(){
         this.menuScroll = new BScroll(this.$refs.menuWrapper,{
             click: true  //当需要点击事件的时候必须要派发点击事件
         })
         this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
             click: true,
             probeType: 3
         })
         this.foodsScroll.on('scroll',(pos) => {
           this.scrollY = Math.abs(Math.round( pos.y ));
         })
      },
      _ini() {
          console.log(this.$refs.menuWrapper)
      },
      _calculateHeight(){
          let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
          let height = 0 ;
          this.listHeight.push( height );
          for( let i = 0; i < foodList.length ; i++ ){
                let item = foodList[i];
                height += item.clientHeight;
                this.listHeight.push( height )
          }
      }
  },
  computed: {
        currentIndex() {
            for(let i=0 ; i < this.listHeight.length ; i++){
                let height1 = this.listHeight[i];
                let height2 = this.listHeight[i+1];
                if( !height2 || ( this.scrollY > height1 && this.scrollY < height2 ) ){
                    return i;
                }
            }
            return 0;
        }
  }
}
</script>
<style lang="less">
.goods{
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    background: white;
    .menu-wrapper{
        width: 80px;
        background: #f3f5f7;
        ul{
            li{
                font-size: 11/20rem;
                text-align: center;
                padding: .7rem 0rem;
                border-bottom: .025rem solid #ccc;
                box-sizing: border-box;
                background-color: #EEE;
            }
            li.active{
                background-color: white;
            }
        }
    } 
    .foods-wrapper{
        flex: 1;
         .item-right{
            flex:4;
            h3{
                font-size: 12 / 20rem ;
                padding: .5rem .5rem;
                background-color: #EEE;
            }
            .item{
                padding: 10/20rem;
                .item-left{
                    width: 2.9rem;
                    height: 2.9rem;
                    background-color: #eee;
                    float: left;
                    img{
                        width: 2.9rem;
                        height: 2.9rem;
                    }
                }
                .item-right{
                    overflow: hidden;
                    padding-left: 10/20rem;
                    h4{
                        font-size: 14/20rem;
                    }
                    p{
                        font-size: 8/20rem; 
                        padding-top: .3rem;
                    }
                }
            }
        }
    }
}

</style>



