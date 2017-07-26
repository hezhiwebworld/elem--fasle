<template>
    <div class="comment">
        <!--评价对应的列表-->
        <div class="shop-comment">
                <div class="row_sys">
                    <div class="col-left">
                        <p >4.6</p> 
                        <p >综合评价</p> 
                        <p>高于周边商家76.9%</p>
                    </div>
                    <div class="col-right">
                        <p>服务态度</p> 
                        <p>菜品评价</p> 
                        <p>送达时间</p>
                    </div>
                </div>  
                <!--评价统计-->
                <div class="shop-comment-count">
                    <span>全部</span>
                    <span>全部</span>
                    <span>全部</span>
                </div>
                <!--评论-->
                <div class="list">
                    <div class="list-left">
                        <img >
                    </div>
                    <div class="list-right">
                        <p>**********<span>2017-02-10</span></p>
                        <div>
                            <img src=""/>
                            <img src=""/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.comment{
    position: absolute;
    top: 184px;
    bottom: 0px;
    width: 100%;
    z-index: 99;
    overflow: hidden;
    background: white;
    .shop-comment{
        .row_sys{
            display: flex;
            text-align: center;
            font-size: 14/20rem;
            padding: 20/20rem;
            border-bottom: 10/20rem solid #eee; 
            .col-left{
                flex: 2;
            }
            .col-right{
                flex: 3;
            }
        }
        .shop-comment-count{
            padding: 10/20rem;
            span{
                background: #3190E8;
                padding: .2rem;
                font-size: 14/20rem;
                border-radius: 5/20rem;
            }
        }
        
    }
}
</style>


